import { useState, useEffect } from "react";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.ibb.co/09fqKZC/ban-bg.jpg",
    "https://i.ibb.co/K7t1TDy/banner.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[500px] w-full relative bg-opacity-200 bg-black overflow-hidden">
      {/* Text Overlay */}
      <div className="absolute z-20 text-white top-10 left-10">
        <h1 className="text-6xl font-bold drop-shadow-md font-cinzel">
         <span className="text-custom-pink "> Love</span> Beyond Boundaries
        </h1>
        <h2 className="mt-4 text-3xl font-semibold drop-shadow-md font-cinzel">
          Find Your Perfect Match
        </h2>
        <p className="mt-4 text-5xl font-semibold text-white font-cinzel drop-shadow-md">
          Where hearts unite and forever begins. Join the most trusted matrimony
          platform today.
        </p>
      </div>

      {/* Banner Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-opacity-20 bg-black duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="object-cover w-full h-full opacity-70 animate-zoom"
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
