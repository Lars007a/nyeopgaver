import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import ActivityCard from "../activityCard/ActivityCard";

const MyLikesList = () => {
  const [myList] = useLocalStorage("myList", []); 
  const [activities, setActivites] = useState([]);
  const [error, setError] = useState(null);

  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:3043/activities");
      if (!response.ok) {
        throw new Error("Error fetching activities");
      }
      const data = await response.json();
      setActivites(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const listActivities = activities.filter((activity) =>
    myList.includes(activity._id)
  ); // here i filter the activities, and check if the id of the activity is in the mylist array, if it is, then i show the activity

  return (
    <section>
      {/* i check if there are any favourite activities, if it isn't then the map funtion shows the productcard, if it is empty, then show the p tag */}
      {listActivities.length > 0 ? (
        listActivities.map((activity) => (
          <ActivityCard key={activity._id} activity={activity} /> // here i use the activitycard component to show the productcard, and i pass the activity as a prop to the component
        ))
      ) : (
        <h3 style={{ backgroundColor: "#c5b496", fontSize: "50px" }}>
          Hmm, no favourites were found. . .
        </h3>
      )}
    </section>
  );
};

export default MyLikesList;
