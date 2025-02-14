
import { Outlet } from "react-router-dom";

import Footer from "../Pages/Home/Shared/Footer/Footer";
import MyNavbar from "../Pages/Home/Shared/Navbar/MyNavbar";


const MainLayout = () => {
    return (
        <div className="items-center justify-center mx-auto max-w-7xl">
            <MyNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;