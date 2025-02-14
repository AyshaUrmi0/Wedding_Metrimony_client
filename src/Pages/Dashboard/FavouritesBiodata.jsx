import React from 'react';
import Swal from 'sweetalert2';
import useFavourite from '../../hooks/useFavourite';
import { FaTrashAlt } from 'react-icons/fa';

const FavouritesBiodata = () => {
  const { favourite, deleteFavourite } = useFavourite();

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this biodata!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        
        await deleteFavourite.mutateAsync(_id);
        Swal.fire('Deleted!', 'The biodata has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error!', 'An error occurred while deleting the biodata.', 'error');
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Favourites Biodata</h1>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left border border-gray-300">Name</th>
              <th className="px-4 py-2 text-left border border-gray-300">Biodata ID</th>
              <th className="px-4 py-2 text-left border border-gray-300">Permanent Address</th>
              <th className="px-4 py-2 text-left border border-gray-300">Occupation</th>
              <th className="px-4 py-2 text-left border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {favourite.length > 0 ? (
              favourite.map((item) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{item._id}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.division}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.occupation}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                >
                  No favourites available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouritesBiodata;
