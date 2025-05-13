import styles from "./getDelete.module.css";

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
              <button onClick={() => onDelete(output._id)}>
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
