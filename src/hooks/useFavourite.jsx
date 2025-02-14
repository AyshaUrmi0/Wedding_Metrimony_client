import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import Authcontext from '../context/Authcontext/Authcontext';


const useFavourite = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient(); 
  const {user}=useContext(Authcontext);

  // Fetch favourite data
  const { data: favourite = [] } = useQuery({
    queryKey: ['favourites',user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/favourites?email=${user?.email}`);
      return response.data;
    },
  });

  // Delete favourite mutation
  const deleteFavourite = useMutation({
    mutationFn: async (id) => {
      const response = await axiosSecure.delete(`/favourites/${id}`);
      return response.data;
    },
    onSuccess: () => {
      // Refetch the favourites data after deletion
      queryClient.invalidateQueries(['favourites']);
    },
    onError: (error) => {
      console.error('Error deleting favourite:', error);
    },
  });

  return {
    favourite,
    deleteFavourite, // Expose the delete function to the component
  };
};

export default useFavourite;
