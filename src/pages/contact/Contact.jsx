import { useState } from "react";
import styles from "./contact.module.css";
import heroImg from "../../assets/hero/hero_04.jpg";
import ContactModal from "../../components/contactModal/ContactModal.jsx";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inquirySubject, setInquirySubject] = useState("");
  const [inputText, setInputText] = useState("");

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setInquirySubject(event.target.value);
  };
  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    openContactModal();

    setInputValue("");
  };

  return (
    <>
      <div className={styles.content}>
        {" "}
        {isContactModalOpen ? (
          <ContactModal close={closeContactModal}>
            <h2>Tak {inputName}!</h2>
            <p>Tak for din besked!</p>
            <p>Du hører fra os snarest.</p>
          </ContactModal>
        ) : (
          <>
            {" "}
            <header
              className={styles.header}
              style={{ backgroundImage: `url(${heroImg})` }}
            >
              <h1>Kontakt Gitte</h1>
            </header>
            <section className={styles.contactInfo}>
              <h2>Vil du booke et ophold? Eller har du blot et spørgsmål?</h2>
              <p>
                Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os
                på at svare på henvendelser indenfor 24 timer, men op til ferier
                kan der være travlt, og svartiden kan derfor være op til 48
                timer.
              </p>
            </section>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>Navn</label>
              <input
                type="name"
                value={inputName}
                onChange={handleNameChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                value={inputValue}
                onChange={handleInputChange}
                required
              />

              <label>Hvad drejer henvendelsen sig om?</label>
              <input
                type="text"
                value={inquirySubject}
                onChange={handleSubjectChange}
                required
              />

              <label>
                Besked (Skriv dato'er, hvis det drejer sig om en booking)
              </label>
              <textarea
                cols="30"
                rows="10"
                onChange={handleTextChange}
              ></textarea>
              <button type="submit">Indsend</button>
            </form>{" "}
          </>
        )}
      </div>
    </>
  );
};
export default Contact;
