import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import styles from "./stayDetail.module.css";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn";
import heroImg from "../../assets/hero/hero_03.jpg";

const StayDetail = () => {
  const { id } = useParams();
  console.log("Stay ID:", id);
  const [stay, setStay] = useState(null);

  useEffect(() => {
    const fetchStay = async () => {
      try {
        const response = await fetch(`http://localhost:3043/product/${id}`);
        const data = await response.json();
        console.log("Fetched stay:", data);

        setStay(data.data);
      } catch (error) {
        console.error("Fejl:", error);
      }
    };

    fetchStay();
  }, [id]);

  if (!stay) {
    return <p>Indlæser ophold...</p>;
  }

  return (
    <>
      <Hero
        title={stay.title}
        heroImg={heroImg}
        overlayColor="rgba(0, 0, 0, 0.56)"
      />

      <section className={styles.stayDetail}>
        <h2>{stay.title}</h2>
        <p>{stay.description}</p>
        <p>{stay.includes}</p>
        <p>Pris {stay.price},-</p>

        <PrimaryBtn
          className={styles.stayDetailBtn}
          btnTitle="Book nu"
          btnLink={`stay/${stay._id}`}
        />
      </section>
    </>
  );
};

export default StayDetail;
