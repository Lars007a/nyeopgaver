import { useEffect, useState } from "react";
import styles from "./contact.module.css";
import heroImg from "../../assets/hero/hero_04.jpg";
import ContactModal from "../../components/contactModal/ContactModal.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const schema = yup.object({
    email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
    name: yup.string().required("Navn er påkrævet"),
    subject: yup.string().required("Emne er påkrævet"),
    msg: yup.string().required("Besked er påkrævet").min(10),
  });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    openContactModal();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <div className={styles.content}>
        {isContactModalOpen ? (
          <ContactModal close={closeContactModal}>
            <h2>Tak {getValues("name")}!</h2>
            <p>Tak for din besked!</p>
            <p>Du hører fra os snarest.</p>
          </ContactModal>
        ) : (
          <>
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
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <label>Navn</label>
              <input {...register("name")} type="text" />

              <label>Email</label>
              <input {...register("email")} type="email" />

              <label>Hvad drejer henvendelsen sig om?</label>
              <input {...register("subject")} type="text" />

              <label>
                Besked (Skriv dato'er, hvis det drejer sig om en booking)
              </label>
              <textarea cols="30" rows="10" {...register("msg")}></textarea>
              <button type="submit">Indsend</button>
              <div className={styles.errorsplace}>
                {errors.name && <p>{errors.name.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.subject && <p>{errors.subject.message}</p>}
                {errors.msg && <p>{errors.msg.message}</p>}
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};
export default Contact;
