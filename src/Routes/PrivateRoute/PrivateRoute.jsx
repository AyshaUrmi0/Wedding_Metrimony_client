import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";


import LoadingHeart from "../../LoadingHeart/LoadingHeart";
import Authcontext from "../../context/Authcontext/Authcontext";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(Authcontext);
    const location=useLocation()
   

    if(loading){
        return <LoadingHeart/>
    }
    if (!user) {
        return (
          <Navigate to="/signup" state={{ from: location }} replace />
        );
      }
    
      return children;
};

export default PrivateRoute;