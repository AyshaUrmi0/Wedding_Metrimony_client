import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Biodatas from "../Pages/Biodatas/Biodatas";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import BiodataDetails from "../Pages/BiodataDetails/BiodataDetails";
import Register from "../Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CheckoutContact from "../CheckoutContact/CheckoutContact";
import EditBiodata from "../Pages/Dashboard/EditBiodata";
import ViewBiodata from "../Pages/Dashboard/ViewBiodata";
import MyContactRequest from "../Pages/Dashboard/MyContactRequest";
import FavouritesBiodata from "../Pages/Dashboard/FavouritesBiodata";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ManageUsers from "../AdminDashboard/ManageUsers";
import ApprovedPremium from "../AdminDashboard/ApprovedPremium";
import ApprovedContactRequest from "../AdminDashboard/ApprovedContactRequest";
import Revenue from "../AdminDashboard/Revenue";
import AdminRoute from "./PrivateRoute/AdminRoute";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home/ >,
        },
        {
          path: "/about",
          element: <About />,

        },
        {
          path: "/biodatas",
          element: <Biodatas />,
        },
        {
          path:"/details/:id",
          element: <PrivateRoute><BiodataDetails/></PrivateRoute>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path:"/signup",
          element: <SignUp />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard /></PrivateRoute>,
          children: [
            {
              path: "edit-biodata",
              element: <EditBiodata />,
            },
            {
              path: "view-biodata",
              element: <ViewBiodata />,
            },
            {
              path: "my-contact-request",
              element: <MyContactRequest />,
            },
            {
              path: "favourites-biodata",
              element: <FavouritesBiodata />,
            },

            //admin dashboard
            {
              path: "admin-dashboard",
              element: <AdminDashboard />,
            },
            {
              path: "manage",
              element: <AdminRoute><ManageUsers /></AdminRoute>,
            },
            {
              path:"approvedPremium",
              element: <AdminRoute><ApprovedPremium /></AdminRoute>,
            },
            {
              path:"approvedContactRequest",
              element:<AdminRoute><ApprovedContactRequest/></AdminRoute>,
            },
          {
            path:"revenue",
            element:<AdminRoute><Revenue/></AdminRoute>,
          }

          ],
        },
        
        {
          path:"/checkout/:biodataId",
          element: <CheckoutContact />,
        },

        {
            path: "*",
            element: <ErrorPage />,
        }
      ],
    },
  ]);
