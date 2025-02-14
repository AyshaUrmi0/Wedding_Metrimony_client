import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl p-6 mx-auto rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-custom-pink">About Us</h1>
        <p className="leading-relaxed text-custom-orange">
          Welcome to our Matrimony platform, where we connect people to find
          their life partners in an intuitive and user-friendly environment. Our
          mission is to create meaningful connections and help build lasting
          relationships. With a focus on authenticity and privacy, we aim to
          provide a safe and seamless matchmaking experience.
        </p>
        <h2 className="mt-6 mb-2 text-2xl font-semibold text-custom-pink">
          Why Choose Us?
        </h2>
        <ul className="ml-6 space-y-2 list-disc text-custom-orange">
          <li>Easy-to-use interface for finding compatible matches.</li>
          <li>Premium membership options for exclusive features.</li>
          <li>Secure and private biodata handling.</li>
          <li>Verified profiles to ensure authenticity.</li>
          
        </ul>
      </div>
    </div>
  );
};

export default About;
