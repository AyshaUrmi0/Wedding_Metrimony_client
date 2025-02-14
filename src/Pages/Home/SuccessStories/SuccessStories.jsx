import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const couples = [
    {
      img: "/images/couples/1.jpg",
      name: "Rahim & Jannat",
      location: "Dhaka",
      description: "A bond built on trust and love in the heart of the capital. Their story inspires many to believe in the power of patience and understanding."
    },
    {
      img: "/images/couples/4.jpg",
      name: "Arif & Fatema",
      location: "Chittagong",
      description: "A journey that started by the sea and flourished into love. Their shared dreams and determination brought them closer every day."
    },
    {
      img: "/images/couples/2.jpg",
      name: "Hasan & Rumi",
      location: "Sylhet",
      description: "Two hearts united amidst the beauty of the tea gardens. Their journey is a testament to the beauty of mutual respect and affection."
    },
    {
      img: "/images/couples/3.jpg",
      name: "Tareq & Nusrat",
      location: "Khulna",
      description: "A love story from the peaceful banks of the Rupsha River. Their unwavering commitment to each other has inspired everyone around them."
    },
    {
      img: "/images/couples/4.jpg",
      name: "Asif & Maliha",
      location: "Rajshahi",
      description: "A tale of devotion and harmony from the Silk City. Their journey proves that true love transcends challenges and brings joy to life."
    },
    {
      img: "/images/couples/11.jpg",
      name: "Sajid & Afia",
      location: "Barisal",
      description: "Their love blossomed in the serene charm of the riverine city. Together, they’ve created a story of compassion, care, and unbreakable bonds."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable arrows for navigation
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className="w-3 h-3 rounded-full bg-custom-pink"
        style={{
          backgroundColor: "#ff007f",
          width: "18px",
          height: "18px",
        }}
      ></div>
    ),
    prevArrow: (
      <button
        className="font-bold slick-prev text-custom-pink"
        style={{
          fontSize: "30px", 
        
          backgroundColor: "#ff007f",

           
        }}
      >
        &#8592;
      </button>
    ),
    nextArrow: (
      <button
        className="slick-next text-custom-pink"
        style={{
          fontSize: "30px",
          color: "#ff007f", 
        }}
      >
        &#8594;
      </button>
    ),
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto font-cinzel">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-custom-pink">
            <span className="pb-1 border-b-4 border-yellow-500">
              Success Story
            </span>
          </h2>
        </div>

        {/* Slider Section */}
        <Slider {...settings} className="px-4">
          {couples.map((couple, index) => (
            <div key={index} className="p-4">
              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                {/* Image */}
                <img
                  src={couple.img}
                  alt={couple.name}
                  className="object-cover w-full rounded-t-lg h-60"
                  loading="lazy"
                />
                <div className="absolute w-8 h-8 bg-yellow-500 rounded-full top-2 right-2"></div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-custom-pink">
                    {couple.name}
                    <span className="block text-sm text-brown-600">
                      {couple.location}
                    </span>
                  </h4>
                  <p className="mt-2 text-sm text-brown-500">{couple.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;
