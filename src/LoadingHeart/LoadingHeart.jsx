import React from "react";

const LoadingHeart = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        {/* Heart Animation */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/loder/3.png"
            alt="loading"
            className="w-16 h-16 animate-bounce"
          />
        </div>
         
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingHeart;
