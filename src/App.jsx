import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Activities from "./pages/activities/Activities";
import Backoffice from "./pages/backoffice/Backoffice";
import Contact from "./pages/contact/Contact";
import MyList from "./pages/myList/MyList";
import StayDetail from "./pages/stayDetail/StayDetail";
import Stay from "./pages/stay/Stay";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/login";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/activities", element: <Activities /> },
    {
      path: "/backoffice",
      element: (
        <ProtectedRoute requiredRole={"admin"}>
          <Backoffice />
        </ProtectedRoute>
      ),
    },
    { path: "/contact", element: <Contact /> },
    { path: "/mylist", element: <MyList /> },
    { path: "/stay", element: <Stay /> },
    { path: "/stay/:id", element: <StayDetail /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
