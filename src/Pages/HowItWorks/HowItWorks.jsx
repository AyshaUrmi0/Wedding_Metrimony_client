import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const timelineSteps = [
    {
      title: "Register",
      time: "Step 1",
      description: "Create an account and fill out your profile information.",
      icon: "images/icon/rings.png",
      color: "#60A5FA", // blue-400
    },
    {
      title: "Find your Match",
      time: "Step 2",
      description: "Browse through our database and find your perfect match.",
      icon: "images/icon/wedding-2.png",
      color: "#34D399", // emerald-400
    },
    {
      title: "Send Interest",
      time: "Step 3",
      description: "Send an interest to your desired match.",
      icon: "images/icon/love-birds.png",
      color: "#F87171", // red-400
    },
    {
      title: "Get Profile Information",
      time: "Step 4",
      description: "Get access to your match's profile information.",
      icon: "images/icon/network.png",
      color: "#818CF8", // indigo-400
    },
    {
      title: "Start Meetups",
      time: "Step 5",
      description: "Start meeting your match and get to know them better.",
      icon: "images/icon/chat.png",
      color: "#FBBF24", // amber-400
    },
    {
      title: "Getting Marriage",
      time: "Step 6",
      description: "Get married to your perfect match.",
      icon: "images/icon/wedding-2.png",
      color: "#F472B6", // pink-400
    },
  ];

  return (
    <div className="py-12 how-it-works-section font-cinzel">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-custom-pink md:text-5xl">
            <span className="relative inline-block">
              How It Works
              <div className="absolute bottom-0 left-0 w-full h-1 transform -skew-x-12 bg-yellow-500"></div>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-gray-600">
            Your journey to finding the perfect match begins here
          </p>
        </motion.div>

        {/* Timeline Section */}
        <VerticalTimeline lineColor="#E5E7EB">
          {timelineSteps.map((step, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                borderRadius: '1rem',
                border: '1px solid #f3f4f6',
              }}
              contentArrowStyle={{ borderRight: '7px solid #fff' }}
              date={
                <span className="font-semibold font-cinzel text-custom-pink">
                  {step.time}
                </span>
              }
              iconStyle={{
                background: '#fff',
                boxShadow: '0 0 0 4px #fff, 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              icon={
                <img
                  src={step.icon}
                  alt={step.title}
                  className="object-contain w-full h-full p-2"
                />
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="mb-2 text-xl font-bold text-custom-pink">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {step.description}
                </p>
                
                {/* Step Progress */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex-1 h-1 overflow-hidden bg-gray-100 rounded-full">
                    <div
                      className="h-full transition-all duration-500 rounded-full bg-custom-pink"
                      style={{ width: `${((index + 1) / timelineSteps.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-custom-pink">
                    Step {index + 1}/{timelineSteps.length}
                  </span>
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default HowItWorks;