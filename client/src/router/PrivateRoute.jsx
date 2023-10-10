import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CustomLoadder from "../components/loader/CustomLoader";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <CustomLoadder />;
  }
  if (!isLoading && user && user?.role === "admin") {
    return children;
  }
  if (!isLoading && user?.admin !== "admin") {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
