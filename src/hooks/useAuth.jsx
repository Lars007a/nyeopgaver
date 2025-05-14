import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

export function useAuth() {
  const [auth, setAuth] = useLocalStorage(
    "auth",
    {}
  ); /* får brugeren hvis der er en, og hvis ikke, så bare et tomt objekt. */

  /* sætter basis værdierne for brugerinformationerne. */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(
    auth.token || null
  ); /* enten brugerens token, hvis der er gemt en bruger, eller null. */
  const [signedIn, setSignedIn] = useState(
    !!auth.token
  ); /* baseret på om hvorvidt der er en auth token eller ej. */
  const [user, setUser] = useState(
    auth.token ? jwtDecode(auth.token) : null
  ); /* brugeren er det der er gemt i jwt-token. */

  const [error, setError] = useState(null); /* ingen fejl umildtbart. */

  /* SignIn funktion der sender email og password til serveren for at få et token. */
  const signIn = async () => {
    setError(null);

    try {
      const response = await axios.post("http://localhost:3043/auth/signin", {
        email,
        password,
      });

      console.log(response);

      const receivedToken = response.data.data.token;
      const decodedUser = jwtDecode(receivedToken);

      setToken(receivedToken);
      setUser(decodedUser);
      setSignedIn(true);
      setAuth({ token: receivedToken });
    } catch (err) {
      setError("Login mislykkedes. Tjek dine oplysninger.");
      setSignedIn(false);
      setToken(null);
      setUser(null);
      setAuth({});
    }
  };

  /* SignOut funktion der logger brugeren ud ved at rydde state og localStorage */
  const signOut = () => {
    setSignedIn(false);
    setToken(null);
    setUser(null);
    setAuth({}); /* Rydder auth i localStorage */
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    token,
    signedIn,
    user,
    error,
    signIn,
    signOut,
  };
}
