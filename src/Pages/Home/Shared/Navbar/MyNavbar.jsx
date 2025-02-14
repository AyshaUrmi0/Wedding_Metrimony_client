import { Navbar, Drawer, IconButton } from "@material-tailwind/react";
import { Menu, X } from "lucide-react";
import logo from "/logo/logo.jpg";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import Authcontext from "../../../../context/Authcontext/Authcontext";
import auth from "../../../../Firebase/firebase.init";

const MyNavbar = () => {
  const { user, signOutUser } = useContext(Authcontext);
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutUser(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar className="sticky top-0 z-50 px-4 py-2 bg-white shadow-md">
        <div className="flex items-center justify-between w-full">
          {/* Left Side: Logo */}
          <div className="flex items-center text-3xl font-playfair">
            <img src={logo} alt="logo" className="w-12 h-12 mr-2" />
            <span className="text-custom-pink">My Website</span>
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="block lg:hidden">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={toggleDrawer}
            >
              <Menu className="w-6 h-6" />
            </IconButton>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden space-x-6 lg:flex font-cinzel">
            <Link to="/" className="text-lg text-gray-800 hover:text-custom-pink">
              Home
            </Link>
            <Link
              to="/biodatas"
              className="text-lg text-gray-800 hover:text-custom-pink"
            >
              Biodatas
            </Link>
            <Link
              to="/about"
              className="text-lg text-gray-800 hover:text-custom-pink"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-lg text-gray-800 hover:text-custom-pink"
            >
              Contact Us
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-lg text-gray-800 hover:text-custom-pink"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-lg text-white rounded-md shadow-md bg-custom-pink hover:bg-custom-pink-light"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                className="px-4 py-2 text-lg text-white rounded-md shadow-md bg-custom-pink hover:bg-custom-pink-light"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Navbar>

      {/* Drawer for Small Devices */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        className="p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-2xl font-playfair">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <span className="text-custom-pink">My Website</span>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={toggleDrawer}
          >
            <X className="w-6 h-6" />
          </IconButton>
        </div>
        <div className="flex flex-col space-y-4 font-cinzel">
          <Link
            to="/"
            onClick={toggleDrawer}
            className="text-lg text-gray-800 hover:text-custom-pink"
          >
            Home
          </Link>
          <Link
            to="/biodatas"
            onClick={toggleDrawer}
            className="text-lg text-gray-800 hover:text-custom-pink"
          >
            Biodatas
          </Link>
          <Link
            to="/about"
            onClick={toggleDrawer}
            className="text-lg text-gray-800 hover:text-custom-pink"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={toggleDrawer}
            className="text-lg text-gray-800 hover:text-custom-pink"
          >
            Contact Us
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={toggleDrawer}
                className="text-lg text-gray-800 hover:text-custom-pink"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleSignOut();
                  toggleDrawer();
                }}
                className="px-4 py-2 text-lg text-white rounded-md shadow-md bg-custom-pink hover:bg-custom-pink-light"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signup"
              onClick={toggleDrawer}
              className="px-4 py-2 text-lg text-white rounded-md shadow-md bg-custom-pink hover:bg-custom-pink-light"
            >
              Login
            </Link>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default MyNavbar;
