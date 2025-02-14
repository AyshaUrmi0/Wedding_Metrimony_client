import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingHeart from "../LoadingHeart/LoadingHeart";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`, {

        params: { search }
    
      });
      return response.data;
    },
    enabled: true,
  });

  const makeAdminMutation = useMutation({
    mutationFn: (user) =>
      axiosSecure.patch(`/users/make-admin/${user._id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["users", search]); 
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User has been made an admin",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong.",
      });
    },
  });

  const makePremiumMutation = useMutation({
    mutationFn: (user) =>
      axiosSecure.patch(`/users/make-premium/${user._id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["users", search]); 
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User has been made a Premium user",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong.",
      });
    },
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    queryClient.invalidateQueries(["users", search]); // Trigger query on button click
  };

  if (isLoading) return <p><LoadingHeart /></p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold">Manage Users</h1>

      {/* Search Input */}
      <div className="flex items-center mb-4 space-x-2">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by username"
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleSearchSubmit}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Search
        </button>
      </div>

      {/* Users Table */}
      <table className="w-full bg-white rounded-md shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Username</th>
            <th className="p-2">Email</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 space-x-2">
                {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => makeAdminMutation.mutate(user)}
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                  >
                    Make Admin
                  </button>
                )}
                {user.role === "premium" ? (
                  "Premium"
                ) : (
                  <button
                    onClick={() => makePremiumMutation.mutate(user)}
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                  >
                    Make Premium
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import LoadingHeart from "../LoadingHeart/LoadingHeart";
// import Swal from "sweetalert2";

// const ManageUsers = () => {
//   const [search, setSearch] = useState("");
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   const { data: users = [], isLoading, isError } = useQuery({
//     queryKey: ["users", search],
//     queryFn: async () => {
//       const response = await axiosSecure.get("/users",);
//       return response.data;
//     },
//    enabled: true, 
//   });
  
//   const makeAdmin = (user) => {
//     axiosSecure
//       .patch(`/users/make-admin/${user._id}`)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.modifiedCount > 0) {
//           Swal.fire({
//             icon: "success",
//             title: "Success",
//             text: "User has been made an admin",
//           });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to make user an admin",
//         });
//       });
//   };
  
//   const makePremium = (user) => {
//     axiosSecure
//       .patch(`/users/make-premium/${user._id}`)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.modifiedCount > 0) {
//           Swal.fire({
//             icon: "success",
//             title: "Success",
//             text: "User has been made Premium",
//           });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to make user Premium",
//         });
//       });
//   };
  

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   if (isLoading) return <p><LoadingHeart/></p>;
//   if (isError) return <p>Error loading users.</p>;

//   return (
//     <div className="p-6 bg-gray-100">
//       <h1 className="mb-6 text-2xl font-bold">Manage Users</h1>

//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Search by username"
//           className="w-full p-2 border rounded-md"
//         />
//       </div>

//       {/* Users Table */}
//       <table className="w-full bg-white rounded-md shadow">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2">Username</th>
//             <th className="p-2">Email</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id} className="text-center border-t">
//               <td className="p-2">{user.name}</td>
//               <td className="p-2">{user.email}</td>
//               <td className="p-2 space-x-2">
//              {
//                 user.role==='admin'?'Admin': <button
//                 onClick={() => makeAdmin(user)}
//                 className="px-4 py-2 text-white bg-blue-500 rounded"
//               >
//                 Make Admin
//               </button>
//              }
//              {
//                 user.role==='premium'?'Make Premium': <button
//                 onClick={() => makePremium(user)}
//                 className="px-4 py-2 text-white bg-blue-500 rounded"
//               >
//                 Make Premium
//               </button>
//              }

               
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageUsers;

