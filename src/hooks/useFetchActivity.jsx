import { useEffect, useState } from "react";

const useFetchActivity = () => {
  /* store all fetched products */
  const [activities, setActivities] = useState([]);
  /* store any errors that could happn while fetching */
  const [error, setError] = useState(null);
  /* a state to check if its still loading */
  const [isLoading, setIsLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:3043/activities");

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      /* udates the state with information */
      setActivities(data.data);
      console.log(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      /* makes sure the loading animationg oes away */
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []); /* this means this runs only once */

  /* return the data for use in other components */
  return { activities, isLoading, error };
};
export { useFetchActivity };
