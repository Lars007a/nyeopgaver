import styles from "./backoffice.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchActivities } from "../../hooks/useFetchActivitiesV2";
import { useFetchReviews } from "../../hooks/useFetchReviewV2";
import { useFetchStays } from "../../hooks/useFetchStay";
import PostPut from "../../components/backoffice/postPut/postPut";
import GetDelete from "../../components/backoffice/getDelete/getDelete";

const Backoffice = () => {
  const {
    activities,
    createActivity,
    deleteActivity,
    updateActivity,
    activityRefetch,
    activityError,
    activityIsLoading,
  } = useFetchActivities();
  const {
    reviews,
    createReview,
    deleteReview,
    updateReview,
    reviewRefetch,
    reviewError,
    reviewIsLoading,
  } = useFetchReviews();
  const {
    stays,
    createStay,
    updateStay,
    deleteStay,
    stayRefetch,
    stayIsLoading,
    stayError,
  } = useFetchStays();
  const [add, setAdd] = useState();
  const [addInput, setAddInput] = useState([]);
  const [displayOutput, setDisplayOutput] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm();
  const [productID, setProductID] = useState(null);
  const [addEdit, setAddEdit] = useState("Tilføj");
  const [firstLoad, setFirstLoad] = useState(false);

  const onPageChange = (page) => {
    if (page === "Aktiviteter") {
      setAdd("Aktiviteter");
      setDisplayOutput(activities);
      setAddInput([
        {
          title: "Titel",
          type: "text",
          id: "title",
          required: true,
        },
        {
          title: "Beskrivelse",
          type: "text",
          id: "description",
          required: false,
        },
        { title: "Ugedag", type: "text", id: "weekday", required: false },
        { title: "Billede", type: "file", id: "image", required: false },
        { title: "Tid", type: "text", id: "time", required: false },
      ]);
    } else if (page === "Udtaleser") {
      setAdd("Udtaleser");
      setDisplayOutput(reviews);
      setAddInput([
        {
          title: "Udtaleser",
          type: "text",
          id: "review",
          required: true,
        },
        {
          title: "Alder",
          type: "number",
          id: "age",
          required: false,
        },
        { title: "Navn", type: "text", id: "name", required: false },
        { title: "Billede", type: "file", id: "image", required: false },
      ]);
    } else if (page === "Ophold") {
      setAdd("Ophold");
      setDisplayOutput(stays);
      setAddInput([
        {
          title: "Titel",
          type: "text",
          id: "title",
          required: true,
        },
        {
          title: "numberofperon",
          type: "number",
          id: "numberofperon",
          required: false,
        },
        {
          title: "description",
          type: "text",
          id: "description",
          required: false,
        },
        { title: "price", type: "number", id: "price", required: false },
        { title: "Billede", type: "file", id: "image", required: false },
        { title: "category", type: "text", id: "category", required: false },
      ]);
    }
  };

  const handleDelete = async (productId) => {
    if (add === "Aktiviteter") {
      deleteActivity(productId);
      setDisplayOutput(await activityRefetch());
    } else if (add === "Udtaleser") {
      deleteReview(productId);
      setDisplayOutput(await reviewRefetch());
    } else if (add === "Ophold") {
      deleteStay(productId);
      setDisplayOutput(await stayRefetch());
    }
  };

  const resetInput = () => {
    setValue("title", "");
    setValue("description", "");
    setValue("weekday", "");
    setValue("time", "");
    setValue("review", "");
    setValue("age", "");
    setValue("name", "");
    setValue("numberofperon", "");
    setValue("price", "");
    setValue("category", "");
    setValue("imagePreview", "");
  };

  const handleEditClick = (id) => {
    if (id === productID) {
      setAddEdit("Tilføj");
      setIsEditing(false);
      setProductID(null);
      resetInput();
    } else {
      setAddEdit("Rediger");
      setIsEditing(true);
      setProductID(id);
    }
  };
  useEffect(() => {
    if (isEditing && productID) {
      const loadProductData = async (e) => {
        try {
          var response;
          if (add === "Aktiviteter") {
            activities.map((activity) => {
              if (activity._id === productID) {
                response = activity;
              }
            });
          } else if (add === "Udtaleser") {
            reviews.map((review) => {
              if (review._id === productID) {
                response = review;
              }
            });
          } else if (add === "Ophold") {
            stays.map((stay) => {
              if (stay._id === productID) {
                response = stay;
              }
            });
          }
          if (response) {
            setValue("title", response.title);
            setValue("description", response.description);
            setValue("weekday", response.weekday);
            setValue("time", response.time);
            setValue("review", response.review);
            setValue("age", response.age);
            setValue("name", response.name);
            setValue("numberofperon", response.numberofperon);
            setValue("price", response.price);
            setValue("category", response.category);
            setValue("imagePreview", response.image);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      loadProductData(productID);
    } else {
      resetInput();
      if (!firstLoad && activities.length > 0) {
        setFirstLoad(true);
        onPageChange("Aktiviteter");
      }
    }
  }, [productID, isEditing, setValue, activities, reviews, stays, firstLoad]);

  if (activityIsLoading || reviewIsLoading || stayIsLoading)
    return <p>Indlæser produkter...</p>;
  if (activityError || reviewError || stayError) return <p>Fejl: {error}</p>;

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("weekday", data.weekday);
    formData.append("time", data.time);
    formData.append("review", data.review);
    formData.append("age", data.age);
    formData.append("name", data.name);
    formData.append("numberofperon", data.numberofperon);
    formData.append("price", data.price);
    formData.append("category", data.category);

    if (data.selectedFile && data.selectedFile[0]) {
      formData.append("image", data.selectedFile[0]);
    }

    try {
      if (isEditing && productID) {
        formData.append("id", productID);
        if (add === "Aktiviteter") {
          updateActivity(formData);
        } else if (add === "Udtaleser") {
          updateReview(formData);
        } else if (add === "Ophold") {
          updateStay(formData);
        }
        setIsEditing(false);
        setAddEdit("Tilføj");
        resetInput();
      } else {
        if (add === "Aktiviteter") {
          createActivity(formData);
        } else if (add === "Udtaleser") {
          createReview(formData);
        } else if (add === "Ophold") {
          createStay(formData);
        }
      }

      console.log("Form submitted successfully");

      if (add === "Aktiviteter") {
        setDisplayOutput(await activityRefetch());
      } else if (add === "Udtaleser") {
        setDisplayOutput(await reviewRefetch());
      } else if (add === "Ophold") {
        setDisplayOutput(await stayRefetch());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objUrl = window.URL.createObjectURL(file);
      setValue("imagePreview", objUrl);
    }
  };

  return (
    <div className={styles.backoffice}>
      <h1 className={styles.title}>Backoffice</h1>
      <ul className={styles.nav}>
        <li>
          <a href="/">Back to frontend</a>
        </li>
        <li onClick={() => onPageChange("Aktiviteter")}>Aktiviteter</li>
        <li onClick={() => onPageChange("Udtaleser")}>udtaleser</li>
        <li onClick={() => onPageChange("Ophold")}>ophold</li>
      </ul>

      <div className={styles.container}>
        <GetDelete
          page={add}
          displayOutput={displayOutput}
          onDelete={handleDelete}
          handleEditClick={handleEditClick}
        />

        <PostPut
          addEdit={addEdit}
          page={add}
          input={addInput}
          onSubmit={onSubmit}
          handleAddImage={handleAddImage}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          watch={watch}
        />
      </div>
    </div>
  );
};

export default Backoffice;
