import styles from "./statements.module.css";

const statements = ({ obj }) => {
  return (
    <>
      <article className={styles.udtl} key={obj._id}>
        <div className={styles.con}>
          <div>
            <h4>
              {obj.name}, {obj.age} år
            </h4>
            {obj.title ? <h4 className={styles.title}>{obj.title}</h4> : ""}
          </div>
          <p>{obj.review}</p>
        </div>
      </article>
    </>
  );
};

export default statements;
