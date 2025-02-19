import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';



const PremiumCards = ({item}) => {
  const navigate=useNavigate()
    return (
        <div className="w-full max-w-sm mx-auto font-cinzel">
      <Card className="transition-shadow duration-300 shadow-lg hover:shadow-xl font-cinzel">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-48 rounded-t-lg"
        />
        <CardBody className="p-4 font-cinzel">
            <Typography variant="h5" className="mb-2 font-bold font-cinzel">
                {item.id}
            </Typography>
          <Typography variant="h5" className="mb-2 font-bold font-cinzel">
            {item.name}
          </Typography>
          <Typography className="mb-1 text-gray-600 font-cinzel">
            <strong>Age:</strong> {item.age}
          </Typography>
          <Typography className="mb-1 text-gray-600 font-cinzel">
            <strong>Type:</strong> {item.type}
          </Typography>
          <Typography className="mb-1 text-gray-600 font-cinzel">
            <strong>Division:</strong> {item.division}
          </Typography>
          <Typography className="mb-4 text-gray-600 font-cinzel">
            <strong>Occupation:</strong> {item.occupation}
          </Typography>
          <button
                      onClick={() =>navigate(`/details/${item._id}`)}
                      className="px-4 py-2 text-white rounded bg-custom-pink"
                    >
                     View Profile
                    </button>
        </CardBody>
      </Card>
    </div>
    );
};

export default PremiumCards;


