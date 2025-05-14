import { useEffect } from "react";
import styles from "./contactModal.module.css";
import { toast } from "react-toastify";

const ContactModal = ({ children, close }) => {
  useEffect(() => {
    toast.success("Sendt!");
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>
        {children}

        <button onClick={close}>Luk</button>
      </div>
    </div>
  );
};

export default ContactModal;
