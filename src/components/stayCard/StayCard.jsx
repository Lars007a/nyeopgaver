import styles from "./stayCard.module.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";

const StayCard = ({ stay }) => {
  return (
    <div className={styles.stayCard}>
      <figure className={styles.cardDescription}>
        <h3>{stay.title}</h3>
        <p>{stay.numberofperon} personer</p>
        <p>Fra {stay.price},-</p>
      </figure>

      <div className={styles.imageWrapper}>
        {stay.image && (
          <img alt={stay.title} src={stay.image} className={styles.stayImage} />
        )}
        <div className={styles.imageOverlay}></div>
      </div>

      <PrimaryBtn
        className={styles.stayBtn}
        btnTitle="Læs mere"
        btnLink={`stay/${stay._id}`}
      />
    </div>
  );
};

export default StayCard;
