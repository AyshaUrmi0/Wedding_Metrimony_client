import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HowItWorks = () => {
  const timelineSteps = [
    {
      title: "Register",
      time: "Step 1",
      description: "Create an account and fill out your profile information.",
      icon: "images/icon/rings.png",
    },
    {
      title: "Find your Match",
      time: "Step 2",
      description: "Browse through our database and find your perfect match.",
      icon: "images/icon/wedding-2.png",
    },
    {
      title: "Send Interest",
      time: "Step 3",
      description: "Send an interest to your desired match.",
      icon: "images/icon/love-birds.png",
    },
    {
      title: "Get Profile Information",
      time: "Step 4",
      description: "Get access to your match's profile information.",
      icon: "images/icon/network.png",
    },
    {
      title: "Start Meetups",
      time: "Step 5",
      description: "Start meeting your match and get to know them better.",
      icon: "images/icon/chat.png",
    },
    {
      title: "Getting Marriage",
      time: "Step 6",
      description: "Get married to your perfect match.",
      icon: "images/icon/wedding-2.png",
    },
  ];

  return (
    <div className="py-12 how-it-works-section font-cinzel">
    
    <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-custom-pink">
            <span className="pb-1 border-b-4 border-yellow-500">
              How It Works
            </span>
          </h2>
        </div>
      </div>

      <VerticalTimeline>
        {timelineSteps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            date={step.time}
            icon={
              <img
                src={step.icon}
                alt={step.title}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            }
       
            position={index % 2 === 0 ? "left" : "right"} // Alternating positions
          >
            <h3 className="text-lg font-bold text-custom-pink">{step.title}</h3>
            <p className="text-brown-600">{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HowItWorks;

