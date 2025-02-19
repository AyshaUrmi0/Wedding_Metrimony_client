import React, { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import LoadingHeart from "../../LoadingHeart/LoadingHeart";
import "animate.css";
import Authcontext from "../../context/Authcontext/Authcontext";
import Swal from "sweetalert2";

import useAxiosSecure from "../../hooks/useAxiosSecure";

const BiodataDetails = () => {
  const navigate=useNavigate();
  const { id } = useParams(); 
  const [profile, setProfile] = useState(null);
  const [similarProfiles, setSimilarProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user}=useContext(Authcontext)

  const axiosSecure=useAxiosSecure();
 
  const addToFavourite= card=>{
   if(user && user.email){
     console.log('added to favourite',user.email,card);
     const favouriteItem={
      cardId:id,
      email:user.email,
      name:profile.name,
      age:profile.age,
      type:profile.type,
      division:profile.division,
      occupation:profile.occupation,
      image:profile.image,
      isPremium:profile.isPremium,
      contact:profile.contact

     }
    axiosSecure.post('/favourites',favouriteItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId)
        {
          Swal.fire({
            icon: 'success',
            title: 'Added to Favourite',
            text: 'This biodata has been added to your favourite list',
          }).then(()=>{
            navigate('/dashboard/favourites-biodata');
          })
        }
      })
  }
 
}
useEffect(() => {
  const fetchProfile = async () => {
    try {
      console.log("Fetching profile with ID:", id);
      const response = await fetch(`http://localhost:5000/biodatas/${id}`);
      if (!response.ok) throw new Error("Failed to fetch profile");
      const data = await response.json();
      setProfile(data);
      console.log("Profile Data:", data);

      // Fetch similar profiles
      const similarResponse = await fetch(`http://localhost:5000/biodatas?type=${data.type}`);
      if (!similarResponse.ok) throw new Error("Failed to fetch similar profiles");
      const similarData = await similarResponse.json();
      console.log("Similar Biodatas:", similarData);
      setSimilarProfiles(similarData.slice(0, 3));
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, [id]);


  if (loading) return <div><LoadingHeart /></div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="flex flex-col items-center p-6 font-cinzel">
      <div className="h-auto w-80 animate__animated animate__bounceInUp">
        <div className="relative flex flex-col items-center w-full h-full p-6 bg-white shadow-lg rounded-xl">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-48 h-48 mx-auto mb-4 rounded-full"
          />
          <p>{profile.id}</p>
          <h1 className="mt-4 text-2xl font-bold text-center">{profile.name}</h1>
          <p className="text-center text-gray-600"><strong>Age:</strong> {profile.age}</p>
          <p className="text-center text-gray-600"><strong>Type:</strong> {profile.type}</p>
          <p className="text-center text-gray-600"><strong>Division:</strong> {profile.division}</p>
          <p className="text-center text-gray-600"><strong>Occupation:</strong> {profile.occupation}</p>

          {profile.isPremium ? (
            <div className="mt-4 text-center">
              <p className="text-gray-600"><strong>Email:</strong> {profile.contact.email}</p>
              <p className="text-gray-600"><strong>Phone:</strong> {profile.contact.phone}</p>
            </div>
          ) : (
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
              onClick={() => window.location.href = `/checkout/${profile._id}`}
            >
              Request Contact Information
            </button>
          )}

          <button
            className="px-4 py-2 mt-4 text-white bg-green-600 rounded hover:bg-green-700"
           onClick={()=>addToFavourite(profile)}
          >
            Add to Favourites
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Similar Biodata</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {similarProfiles.map((similar) => (
            <div key={similar._id} className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src={similar.image}
                alt={similar.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="mt-2 text-lg font-bold text-center">{similar.name}</h3>
              <p className="text-center text-gray-600"><strong>Age:</strong> {similar.age}</p>
              <p className="text-center text-gray-600"><strong>Type:</strong> {similar.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
