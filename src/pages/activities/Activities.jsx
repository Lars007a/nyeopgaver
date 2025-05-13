import styles from "./activites.module.css";
import heroImg from "../../assets/hero/hero_05.jpg";
import ActivityMap from "../../components/activitySection/ActivityMap";

const Activites = () => {
  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1>Aktiviteter</h1>
      </header>
      <section className={styles.box}>
        <h2>Ingen skal kede sig hos Gitte</h2>
        <p>
          Glamping er mere end blot en indkvartering - det er en mulighed for at
          fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om
          du foretrækker en eventyrlig kanotur, en oplysende naturvandring,
          hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning
          eller morgenyoga, der giver dig indre ro og balance i naturens skød -
          vil vi hos Gittes Glamping imødekomme dine ønsker.
        </p>
      </section>
      <ActivityMap/>
    </>
  );
};

export default Activites;
