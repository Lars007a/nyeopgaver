import { useEffect, useState } from "react";
import styles from "./activityCard.module.css";
import kanoImg from "../../assets/activities/kano.jpg";
import baalImg from "../../assets/activities/baal.jpg";
import naturImg from "../../assets/activities/naturvandring.jpg";
import vinImg from "../../assets/activities/vinsmagning.jpg";
import yogaImg from "../../assets/activities/yoga.jpg";
import { IoIosArrowDown, IoIosArrowUp, IoIosHeart } from "react-icons/io";
import { IoHeartDislikeOutline } from "react-icons/io5";

import { useLocalStorage } from "@uidotdev/usehooks";

const ActivityCard = ({ activity }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [myList, setMyList] = useLocalStorage("myList", []);

  const isLiked = myList.includes(activity._id);

  const handleLike = () => {
    setMyList((prevList) =>
      isLiked
        ? prevList.filter((id) => id !== activity._id)
        : [...prevList, activity._id]
    );
  };

  const activityImageMap = {
    Kanotur: kanoImg,
    Fællesbål: baalImg,
    Naturvandring: naturImg,
    Vinsmagning: vinImg,
    "Yoga i det fri": yogaImg,
  };

  const imageSrc = activityImageMap[activity.title];

  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        <div className={styles.title}>
          <h3>{activity.title}</h3>
        </div>
      </div>
      {/* image & overlay */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageOverlayWrapper}>
          <img src={imageSrc} alt={activity.title} className={styles.image} />
          <div className={styles.overlay}></div>
        </div>
      </div>
      {/* image end */}
      <div className={styles.info}>
        <p className={styles.infoP}>{activity.weekday}</p>
        <p className={styles.infoP}>kl. {activity.time}</p>
        <div className={styles.likeBtn}>
          {isLiked ? (
            <IoHeartDislikeOutline size={24} onClick={handleLike} />
          ) : (
            <IoIosHeart size={24} onClick={handleLike} />
          )}
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className={styles.buttonText}>
            {isExpanded ? "Læs mindre" : "Læs mere"}{" "}
            {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
        {isExpanded && (
          <p className={styles.description}>{activity.description}</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
