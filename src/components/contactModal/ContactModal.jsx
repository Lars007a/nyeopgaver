import styles from "./contactModal.module.css";

const ContactModal = ({ children, close }) => {
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
