import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Authcontext from "../context/Authcontext/Authcontext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
    const { createUser } = useContext(Authcontext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Registering...");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log("Registering with", { name, email, photoURL, password });

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one number."
            );
            return;
        }

        // Call Firebase createUser and then save user to MongoDB
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                // Prepare data for MongoDB
                const newUser = { name, email };

                // Save user to MongoDB
                axiosPublic
                    .post("/users", newUser)
                    .then((response) => {
                        console.log("User saved to DB:", response.data);
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

    return (
        <div className="flex items-center justify-center min-h-screen font-cinzel">
            <div className="flex flex-col w-full max-w-5xl p-6 bg-white rounded-lg shadow-md md:flex-row">
                <div className="flex-1 p-4">
                    <h2 className="text-2xl font-bold text-center text-custom-pink">
                        Register
                    </h2>
                    <form onSubmit={handleRegister}>
                      
                        <div className="mt-4">
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                      
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
                            <label className="block text-sm font-medium">Photo URL</label>
                            <input
                                type="url"
                                name="photoURL"
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
                            className="w-full py-2 mt-6 text-white rounded-lg bg-custom-pink"
                        >
                            Register
                        </button>
                    </form>

                    
                    <p className="mt-4 text-sm text-center">
                        Already have an account?{" "}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
