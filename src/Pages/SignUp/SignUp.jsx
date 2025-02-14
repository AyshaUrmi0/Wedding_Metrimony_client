import React, { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { toast } from "react-toastify";
import { GoogleButton } from "react-google-button";

import Authcontext from "../../context/Authcontext/Authcontext";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, user, loading } = useContext(Authcontext);
  const location=useLocation()
  const  from  = location.state || { from: { pathname: "/" } };


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log("Logging in with", { email, password });

    signInUser(email, password)
      .then((result) => {

      //console.log('signing  ',  result.user.email);
        //const user = result.user;
        const user={email:email};
        axios.post('https://localhost:5000/jwt', user, { withCredentials: true })
        .then(res => {
            console.log(res.data);
        })


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
  const axiosPublic= useAxiosPublic();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google sign-in successful:", user);
        const userInfo={
          email:user?.email,
          name:user?.displayName,
        }
        axiosPublic.post("/users",userInfo)
        .then(res=>{
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
    <div className="flex items-center justify-center min-h-screen font-cinzel">
      <div className="w-full max-w-md p-4 mx-4 bg-white rounded-lg shadow-md sm:p-6 md:w-96">
        <h2 className="text-2xl font-bold text-center text-custom-pink">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

         
          <button
            type="submit"
            className="w-full py-2 mt-6 text-white rounded-lg bg-custom-pink "
          >
           SignUp
          </button>
        </form>

       
        <div className="items-center justify-center w-full py-2 mt-4">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>

     
    </div>
  );
};

export default SignUp;