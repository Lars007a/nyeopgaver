import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.icon}>
        <RiFacebookBoxFill />
        <RiInstagramFill />
      </div>
      <div className={styles.footerInfo}>
        <img src="/logo.png" alt="logo" />
        <p>Gittes Glamping</p>
      </div>
    </footer>
  );
};
export default Footer;
