import React from "react";
import { useQuery } from "@tanstack/react-query";

import LoadingHeart from "../LoadingHeart/LoadingHeart";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: biodatas = [], isLoading, isError } = useQuery({
   queryKey: ["biodatas"],
    queryFn:async () => {
      const response = await axiosSecure.get("/biodatas");
      return response.data;
    }
});

  const biodataCount = biodatas.length;
  const maleCount = biodatas.filter((biodata) => biodata.type === "Male").length;
  const femaleCount = biodatas.filter((biodata) => biodata.type === "Female").length;
  const premiumCount = biodatas.filter((biodata) => biodata.isPremium === true).length;

  if (isLoading) {
    return <p><LoadingHeart/></p>;
  }

  if (isError) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-blue-500 rounded shadow">
          <h2 className="text-lg font-bold text-white">Total Biodata</h2>
          <p className="text-2xl text-white">{biodataCount}</p>
        </div>
        <div className="p-4 bg-green-500 rounded shadow">
          <h2 className="text-lg font-bold text-white">Male Biodata</h2>
          <p className="text-2xl text-white">{maleCount}</p>
        </div>
        <div className="p-4 bg-pink-500 rounded shadow">
          <h2 className="text-lg font-bold text-white">Female Biodata</h2>
          <p className="text-2xl text-white">{femaleCount}</p>
        </div>
        <div className="p-4 bg-yellow-500 rounded shadow">
          <h2 className="text-lg font-bold text-white">Premium Biodata</h2>
          <p className="text-2xl text-white">{premiumCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
