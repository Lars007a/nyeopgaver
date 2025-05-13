import Statements from "../../components/statements/statements.jsx";
import styles from "./statementsSection.module.css";
import { useFetchReviews } from "../../hooks/useFetchReviewV2.jsx";

const statementsSection = () => {
  const revs = useFetchReviews(); //Får ikke alle ting til reviews, mangler titlen til reviewet.
  console.log(revs.reviews);

  return (
    <section className={styles.udtlContainer}>
      <h2 className={styles.udtlTitle}>Vores gæster udtaler</h2>

      <div className={styles.output}>
        {revs.loading && (
          <div className={styles.msg}>
            <h3>Indlæser udtalelser...</h3>
          </div>
        )}

        {revs.error && (
          <div className={styles.msg}>
            <h3>Skete en fejl: {revs.error}</h3>
          </div>
        )}

        {revs.reviews.map((element) => {
          return <Statements obj={element} key={element._id} />;
        })}
      </div>
    </section>
  );
};

export default statementsSection;
