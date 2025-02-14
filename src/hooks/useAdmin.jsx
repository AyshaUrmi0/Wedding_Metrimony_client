import { useContext } from "react";
import Authcontext from "../context/Authcontext/Authcontext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const axiosSecure=useAxiosSecure();
   
    const {user}=useContext(Authcontext);
       const {data: isAdmin,isPending:isAdminLoading}=useQuery({
              queryKey:[user?.email,'isAdmin'],
              queryFn:async()=>{
                const response=await axiosSecure.get(`/users/admin/${user?.email}`);
                console.log(response.data);
                return response.data?.admin;
              }
         })
         return [isAdmin,isAdminLoading];

};

export default useAdmin;