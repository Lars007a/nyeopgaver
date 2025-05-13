import Hero from "../../components/hero/Hero.jsx";
import Heroimg from "../../assets/hero/hero_01.jpg";
import profilePic from "../../assets/homepage/gitte.jpg";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn.jsx";
import styles from "./Home.module.css";
import StatementsSection from "../../components/statementsSection/statementsSection.jsx";

const Home = () => {
  return (
    <>
      <Hero
        title={"Gittes"}
        subTitle={"Glamping"}
        btnTitle={"BOOK NU"}
        btnLink={"stay/"}
        showButton={true}
        showLogo={true}
        heroImg={Heroimg}
        overlayColor="rgba(0, 0, 0, 0.56)"
        frontpage={true}
      />

      <section className={styles.infobox}>
        <div className={styles.infoContainer}>
          <h2>Kom og prøv glamping hos Gitte!</h2>
          <p>
            Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor
            hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
            dedikerede team, anført af Gitte selv, er her for at skabe den
            perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter
            at skabe minder og fordybelse, uanset om du besøger os som par,
            familie eller soloeventyrer. Vi tilbyder en bred vifte af
            aktiviteter og arrangementer, der passer til alle aldre og
            interesser. Udforsk naturen, slap af ved bålet, del historier med
            nye venner, eller find indre ro med vores wellnessaktiviteter.
          </p>
          <img src={profilePic} alt="Gitte" />
          <PrimaryBtn
            btnLink={"#"}
            btnTitle={"SE VORES OPHOLD"}
            className={styles.btn}
          />
        </div>
      </section>

      <StatementsSection />
    </>
  );
};

export default Home;
