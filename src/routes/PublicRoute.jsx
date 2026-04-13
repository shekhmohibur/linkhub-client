import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
const PublicRoute = ({ children }) => {
  const { user, userLoading } = useAuth();

  if (userLoading) {
    return null;
  }

  if (user) {
    return <Navigate to="/dashboard/links" replace />;
  }

  return children;
};

export default PublicRoute;
