import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { User, Mail, Lock, Image, ArrowRight, Sparkles } from "lucide-react";
import Authcontext from "../context/Authcontext/Authcontext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const { createUser } = useContext(Authcontext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const newUser = { name, email };

        axiosPublic
          .post("/users", newUser)
          .then(() => {
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((err) => {
            console.error("Error saving user to DB:", err);
            toast.error("Could not save user data. Please try again.");
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div className="font-cinzel min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        <div>
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto h-12 w-12 relative"
          >
            <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6" />
            <div className="absolute inset-0 bg-blue-200 rounded-xl rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center text-3xl font-extrabold text-custom-pink "
          >
            Create your account
          </motion.h2>
          <p className="mt-2 text-center text-sm ">
            Join us and start your journey
          </p>
        </div>

        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium ">
                Full Name
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2  w-5 h-5" />
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="text"
                  name="name"
                  required
                  className="appearance-none block w-full pl-12 pr-6 py-3 border border-gray-300 rounded-xl  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium ">
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="email"
                  name="email"
                  required
                  className="appearance-none block w-full pl-12 pr-6 py-3 border border-gray-300 rounded-xl  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium ">
                Profile Picture URL
              </label>
              <div className="mt-1 relative">
                <Image className="absolute left-3 top-1/2 transform -translate-y-1/2  w-5 h-5" />
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="url"
                  name="photoURL"
                  required
                  className="appearance-none block w-full pl-12 pr-6 py-3 border border-gray-300 rounded-xl  placeholder-gray-500 focus:outline-none focus:ring-2  focus:border-transparent transition-all duration-200"
                  placeholder="Enter photo URL"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium ">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="password"
                  name="password"
                  required
                  className="appearance-none block w-full pl-12 pr-6 py-3 border border-gray-300 rounded-xl  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Create a password"
                />
              </div>
              <p className="mt-2 text-xs ">
                Password must be at least 6 characters with uppercase, lowercase, and numbers
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className=" text-white group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl bg-custom-pink transition-all duration-200"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <ArrowRight className="h-5 w-5  group-hover:text-blue-100 transition-colors" />
            </span>
            Create Account
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm ">
            Already have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-custom-pink  transition-colors duration-200"
            >
              Sign in instead
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;