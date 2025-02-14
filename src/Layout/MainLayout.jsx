
import { Outlet } from "react-router-dom";

import Footer from "../Pages/Home/Shared/Footer/Footer";
import MyNavbar from "../Pages/Home/Shared/Navbar/MyNavbar";
import { useContext } from "react";
import Authcontext from "../context/Authcontext/Authcontext";
import LoadingHeart from "../LoadingHeart/LoadingHeart";





const MainLayout = () => {
    const {loading}=useContext(Authcontext)

if(loading){
    return <LoadingHeart/>;
}


    return (
        <div className="items-center justify-center mx-auto max-w-7xl">
            <MyNavbar />
            <Outlet />
            <Footer />
        </div>
    );

}
   

export default MainLayout;