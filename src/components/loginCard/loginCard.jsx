import styles from "./loginCard.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";

const loginCard = () => {
  const auth = useAuthContext();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!auth.user) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
  });

  return (
    <>
      <article className={styles.box}>
        {redirect == true && <Navigate to={"/login"} replace />}
        <p className={styles.introtext}>Logget ind som</p>
        <div>
          <strong>Navn: </strong> <p>{auth.user?.name}</p>
        </div>
        <div>
          <strong>Email: </strong> <p>{auth.user?.email}</p>
        </div>
        <div>
          <strong>Role: </strong> <p>{auth.user?.role}</p>
        </div>
        <img src={auth.user?.image} alt="profil biled" />
        <button
          className={styles.signoutBtn}
          onClick={() => {
            auth.signOut();
          }}
        >
          Log ud
        </button>
      </article>
    </>
  );
};

export default loginCard;
