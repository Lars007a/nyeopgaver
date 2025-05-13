import Hero from "../../components/hero/Hero";
import styles from "./stay.module.css";
import heroImg from "../../assets/hero/hero_01.jpg";
import { useFetchStays } from "../../hooks/useFetchStay";
import StayCard from "../../components/stayCard/StayCard";

const Stay = () => {
  const { stays, isLoading, error } = useFetchStays();

  return (
    <>
      <Hero
        title="Vores Ophold"
        heroImg={heroImg}
        overlayColor="rgba(0, 0, 0, 0.56)"
      />

      <section className={styles.stayTeaser}>
        <h2>Vi har ophold til</h2>
        <h2>enhver smag</h2>

        <p>Vores glampingophold er skabt til at tilbyde en</p>
        <p>kombination af eventyr og afslapning. Det er</p>
        <p>den ideelle flugt fra byens støj og stress, og det</p>
        <p>perfekte sted at genoplade batterierne i en</p>
        <p>naturskøn indstilling.</p>
        <p>Book dit ophold i dag og giv dig selv lov til at</p>
        <p>fordybe dig i naturen og nyde luksus i det fri.</p>
        <p>Vi ser frem til at byde dig velkommen til en</p>
        <p>oplevelse fyldt med komfort, eventyr og</p>
        <p>skønhed.</p>
      </section>

      <section className={styles.stayCardContainer}>
        {isLoading && <p>Indlæser ophold...</p>}
        {error && <p>{error}</p>}
        {stays.map((stay) => (
          <StayCard key={stay._id} stay={stay} />
        ))}
      </section>
    </>
  );
};

export default Stay;
