import React, { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleButton } from "react-google-button";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
import Authcontext from "../../context/Authcontext/Authcontext";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, user, loading } = useContext(Authcontext);
  const location = useLocation();
  const from = location.state || { from: { pathname: "/" } };
  const axiosPublic = useAxiosPublic();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = { email: email };
        axios.post('https://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          });

        console.log(user);
        navigate(from.from.pathname);
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/invalid-credential') {
          toast.error("User not found. Please register first.");
        } else {
          toast.error(error.code === 'auth/invalid-email' ? 'Please enter a valid email address' : error.message);
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google sign-in successful:", user);
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
        }
        axiosPublic.post("/users", userInfo)
          .then(res => {
            console.log(res.data);
          })

        navigate(from.from.pathname);
        toast.success("Google login successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google login failed: " + error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        <div>
         
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-3xl font-extrabold text-center text-gray-900"
          >
            Welcome Back
          </motion.h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  className="block w-full py-3 pl-12 pr-6 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 appearance-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="password"
                  name="password"
                  required
                  className="block w-full py-3 pl-12 pr-6 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 appearance-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 border border-transparent group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </motion.button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">Or continue with</span>
          </div>
        </div>

        <div className="mt-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center w-full"
          >
            <GoogleButton
              onClick={handleGoogleSignIn}
              className="!w-full !rounded-xl !h-12"
            />
          </motion.div>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-500"
          >
            Register now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;