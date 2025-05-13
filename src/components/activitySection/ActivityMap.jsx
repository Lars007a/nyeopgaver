import { useFetchActivities } from "../../hooks/useFetchActivitiesV2";
import ActivityCard from "../activityCard/ActivityCard";
import Loading from "../loading/Loading";

const ActivityMap = () => {
  const { activities, isLoading } = useFetchActivities();

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : activities.length > 0 ? (
        activities.map((activity, index) => (
          <ActivityCard key={activity._id} activity={activity} />
        ))
      ) : (
        <p>No activities available.</p>
      )}
    </section>
  );
};

export default ActivityMap;