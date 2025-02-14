import React, { useContext } from "react";
import {
  FaUserEdit,
  FaEye,
  FaEnvelope,
  FaStar,
  FaSignOutAlt,
  FaUsers,
  FaClipboardCheck,
  FaDollarSign,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Authcontext from "../../context/Authcontext/Authcontext";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin(); 
  const { signOutUser } = useContext(Authcontext);

  const handleSignOut = async () => {
    try {
      await signOutUser(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row font-cinzel">
      <div className="w-full p-4 bg-orange-100 md:w-1/4">
        <h2 className="mb-4 text-xl font-bold text-center md:text-left">
          {isAdmin ? "Admin Dashboard Menu" : "User Dashboard Menu"}
        </h2>
        <nav>
          <ul className="space-y-2">
            {!isAdmin && (
              <>
                <li>
                  <Link
                    to="edit-biodata"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaUserEdit className="inline-block mr-2" /> Edit Biodata
                  </Link>
                </li>
                <li>
                  <Link
                    to="view-biodata"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaEye className="inline-block mr-2" /> View Biodata
                  </Link>
                </li>
                <li>
                  <Link
                    to="my-contact-request"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaEnvelope className="inline-block mr-2" /> My Contact
                    Request
                  </Link>
                </li>
                <li>
                  <Link
                    to="favourites-biodata"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaStar className="inline-block mr-2" /> Favourites
                    Biodata
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link
                    to="admin-dashboard"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaClipboardCheck className="inline-block mr-2" /> Admin
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaUsers className="inline-block mr-2" /> Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/approvedPremium"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaStar className="inline-block mr-2" /> Approved Premium
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/approvedContactRequest"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaEnvelope className="inline-block mr-2" /> Approved
                    Contact Request
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/revenue"
                    className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
                  >
                    <FaDollarSign className="inline-block mr-2" /> Revenue
                  </Link>
                </li>
              </>
            )}

            {/* Logout Button */}
            <li>
              <button
                onClick={handleSignOut}
                className="block px-4 py-2 text-white rounded bg-custom-orange text-start hover:bg-blue-600"
              >
                <FaSignOutAlt className="inline-block mr-2" /> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full p-6 md:w-3/4">
        <h2 className="mb-4 text-2xl font-bold text-center md:text-left">
          {isAdmin ? "Admin Dashboard Details" : "User Dashboard Details"}
        </h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
