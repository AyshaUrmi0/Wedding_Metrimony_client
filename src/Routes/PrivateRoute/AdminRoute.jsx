import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Authcontext from "../../context/Authcontext/Authcontext";
import LoadingHeart from "../../LoadingHeart/LoadingHeart";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext); 
  const [isAdmin, isAdminLoading] = useAdmin(); 
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <LoadingHeart />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/signup" state={{ from: location }} replace />;
};

export default AdminRoute;
