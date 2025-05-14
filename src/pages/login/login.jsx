import styles from "./login.module.css";
import bcImg from "../../assets/activities/naturvandring.jpg";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";
import { toast } from "react-toastify";

export default function login() {
  const auth = useAuthContext();

  console.log(auth);

  const [redirect, setRedirect] = useState(false);

  console.log(auth);

  useEffect(() => {
    if (auth.user) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
  });

  return (
    <>
      {redirect == true && <Navigate to={"/backoffice"} replace />}
      <section
        className={styles.sec}
        style={{ backgroundImage: `url(${bcImg})` }}
      >
        <article className={styles.box}>
          <h3>Login</h3>
          <form
            className={styles.form}
            onSubmit={async (event) => {
              event.preventDefault();
              await auth.signIn();
            }}
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={(event) => {
                  auth.setEmail(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={(event) => {
                  auth.setPassword(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <input type="submit" name="submit" id="submit" value={"Login"} />
            </div>
          </form>

          <div className={styles.msg}>{auth.error && <p>{auth.error}</p>}</div>
          <div className={styles.msg}>{auth.user && <p>Success!</p>}</div>
        </article>
      </section>
    </>
  );
}
