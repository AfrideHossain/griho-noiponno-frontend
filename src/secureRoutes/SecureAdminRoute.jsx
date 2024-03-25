/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useContextHook from "../hooks/useContextHook";
import useRole from "../hooks/useRole";
const SecureAdminRoute = ({ children }) => {
  const { user, loading } = useContextHook();
  const [role, loadingInstructor] = useRole();
  const location = useLocation();
  if (loading || loadingInstructor) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }

  if (user && role === "admin") {
    return children;
  }
  return <Navigate to={"/auth/signin"} state={{ from: location }} replace />;
};

export default SecureAdminRoute;
