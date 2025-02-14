import React from "react";
import CountUp from "react-countup";
import { FaHeart, FaUsers, FaMale, FaFemale } from "react-icons/fa";

const SuccessCounter = () => {
  const counters = [
    { icon: <FaHeart />, label: "Couples Paired", value: 2000 },
    { icon: <FaUsers />, label: "Registrents", value: 4000 },
    { icon: <FaMale />, label: "Mens", value: 1600 },
    { icon: <FaFemale />, label: "Womens", value: 2000 },
  ];

  return (
    <div className="py-12 success-counter-section font-cinzel">
    
    <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-custom-pink">
            <span className="pb-1 border-b-4 border-yellow-500">
              Our Success
            </span>
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 px-4 text-center sm:grid-cols-2 lg:grid-cols-4 md:px-12">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
          >
            <div className="mb-4 text-4xl text-brown-600">
              {counter.icon}
            </div>
            <h2 className="text-4xl font-bold text-brown-600">
              <CountUp end={counter.value} duration={2.5} />
              {index === 1 || index > 1 ? "+" : ""} {/* Adding + for specific items */}
            </h2>
            <p className="mt-2 text-lg font-medium uppercase text-brown-600">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessCounter;

