import { toast } from "react-toastify";
import styles from "./getDelete.module.css";
import Swal from "sweetalert2";

const GetDelete = ({ page, displayOutput, onDelete, handleEditClick }) => {
  return (
    <ul className={styles.list}>
      <li>
        <ul className={styles.list_title}>
          <li>
            <p>{page}</p>
          </li>
          <li>
            <p>funktioner</p>
          </li>
        </ul>
      </li>
      {displayOutput.map((output) => (
        <li key={output._id}>
          <ul className={styles.list_content}>
            <li>
              <p>
                {output.title}
                {output.review}
              </p>
            </li>
            <li className={styles.btn_container}>
              <button onClick={() => handleEditClick(output._id)}>
                <p>Edit</p>
              </button>
              <button
                onClick={async () => {
                  try {
                    const result = await Swal.fire({
                      title: "Confirm",
                      text: "Er du sikker på, at du ville slette produktet?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "Ja",
                      cancelButtonText: "Nej",
                    });

                    if (result.isConfirmed) {
                      await onDelete(output._id);
                      await Swal.fire("Slettet!", "Blev slettet.", "success");
                      toast.success("Slettet");
                    }
                  } catch (error) {
                    console.error(
                      "Der opstod en fejl ved sletning:",
                      error.message
                    );
                    Swal.fire("Fejl!", `Fejl: ${error.message}`, "error");
                    toast.error("Noget gik galt");
                  }
                }}
              >
                <p>Delete</p>
              </button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default GetDelete;
