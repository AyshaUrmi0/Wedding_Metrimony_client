import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Authcontext from "../context/Authcontext/Authcontext";

 const axiosSecure=axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
    
})
const useAxiosSecure = () => {
    const navigate=useNavigate();
    const {signOutUser}=useContext(Authcontext);

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access token");
        //console.log("request stopped by interceptor", token);
        config.headers.authorization=`Bearer ${token}`;
       return config;
    }, function (error) {
        return Promise.reject(error);
    }),
    axiosSecure.interceptors.response.use(function(response) {
        //console.log("response stopped by interceptor", response);
        return response;
    }, async (error)=> {
        const status = error.response ? error.response.status : null;
        //console.log("error stopped by interceptor", status);
        if(status === 401 || status === 403){
            await signOutUser();
           navigate("/signup");
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;