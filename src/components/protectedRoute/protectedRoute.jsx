import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";

const protectedRoute = ({ requiredRole, children }) => {
  const auth = useAuthContext();

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && auth.user.role !== requiredRole) {
    return <h4>Ikke adgang med rollen...</h4>;
  }

  return children;
};

export default protectedRoute;
