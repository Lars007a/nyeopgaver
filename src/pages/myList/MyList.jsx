import styles from "./myList.module.css";
import heroImg from "../../assets/hero/hero_06.jpg";
import MyLikesList from "../../components/myLikesList/MyLikesList";
import { useLocalStorage } from "@uidotdev/usehooks";

const MyList = () => {
  const [myList] = useLocalStorage("myList", []);
  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1>Min liste</h1>
      </header>
      <section className={styles.box}>
        <h2>Antal aktiviteter på listen:</h2>
        <p>{myList.length}</p>
      </section>
      <MyLikesList />
    </>
  );
};

export default MyList;
