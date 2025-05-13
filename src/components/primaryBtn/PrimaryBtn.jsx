import { Link } from "react-router-dom";
import styles from "./primaryBtn.module.css";

const PrimaryBtn = ({ btnTitle, btnLink, className }) => {
  return (
    <Link to={`/${btnLink}`} className={`${styles.primaryBtn} ${className}`}>
      {btnTitle}
    </Link>
  );
};

export default PrimaryBtn;
