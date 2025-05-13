import styles from "./Hero.module.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";

const Hero = ({
  title,
  subTitle,
  heroImg,
  showLogo = false,
  showButton = false,
  btnTitle,
  btnLink,
  overlayColor = "rgba(36, 36, 36, 0.56)",
  frontpage = false,
}) => {
  return (
    <header
      className={`${styles.hero} ${frontpage ? styles.frontpage : ""}`}
      style={{
        backgroundImage: `${
          frontpage
            ? `linear-gradient(rgba(129, 129, 129, 0.78), rgba(129, 129, 129, 0.78)),
    url(${heroImg})`
            : `url(${heroImg})`
        }`,
        backgroundColor: overlayColor,
      }}
    >
      {showLogo && (
        <img
          src="/logo.png"
          className={styles.heroLogo}
          alt="Picture of logo"
        />
      )}
      <h1>{title}</h1>
      {subTitle && <h1>{subTitle}</h1>}
      {showButton && <PrimaryBtn btnTitle={btnTitle} btnLink={btnLink} />}
    </header>
  );
};

export default Hero;
