import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuth();

  if (userLoading) {
    return (
      <div
        className="

h-screen

flex items-center justify-center

"
      >
        <div
          className="

w-10 h-10

border-2

border-indigo-600

border-t-transparent

rounded-full

animate-spin

"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
