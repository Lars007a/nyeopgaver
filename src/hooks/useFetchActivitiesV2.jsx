import { useState, useEffect } from "react";

export const useFetchActivities = () => {
  const [activities, setActivities] = useState([]);
  const [activityError, setActivityError] = useState(null);
  const [activityIsLoading, setActivityIsLoading] = useState(false);

  // Get all activities
  const fetchActivities = async () => {
    setActivityIsLoading(true);

    try {
      const response = await fetch("http://localhost:3043/activities");
      const data = await response.json();
      console.log(data);
      setActivities(data.data);
      return data.data;
    } catch (activityError) {
      setActivityError("something went wrong", activityError);
    } finally {
      setActivityIsLoading(false);
    }
  };

  // Create activity
  const createActivity = async (activityData) => {
    setActivityIsLoading(true);

    try {
      const response = await fetch("http://localhost:3043/activity", {
        method: "POST",
        body: activityData,
      });

      if (response.status === "activityError") {
        throw new Error("activityError creating activity");
      }

      const result = await response.json();
      return result;
    } catch (activityError) {
      console.log(activityError);
    } finally {
      setActivityIsLoading(false);
    }
  };

  // Refetch
  const activityRefetch = () => {
    return fetchActivities();
  };

  //Update activity

  const updateActivity = async (activityData) => {
    try {
      const response = await fetch(`http://localhost:3043/activity`, {
        method: "PUT",
        body: activityData,
      });

      if (response.status === "activityError") {
        console.log("activityError");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (activityError) {
      console.log(activityError);
    }
  };

  // Delete activity

  const deleteActivity = async (id) => {
    try {
      const response = await fetch(`http://localhost:3043/activity/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (activityError) {
      console.log(activityError);
    }
  };

  // Get by ID
  const fetchActivityById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3043/activity/${id}`);
      const data = await response.json();
      return data.data;
      console.log(data);
    } catch (activityError) {
      console.log(activityError);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    fetchActivities,
    createActivity,
    deleteActivity,
    updateActivity,
    fetchActivityById,
    activityRefetch,
    activityError,
    activityIsLoading,
  };
};
