import React from "react";
import {
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaHourglassHalf,
} from "react-icons/fa";

const Features = () => {
  const values = [
    {
      title: "Sustainable",
      description:
        "We choose eco-friendly, low-waste, and natural materials where possible.",
      icon: <FaLeaf className="text-white " />,
    },
    {
      title: "Local & Ethical",
      description:
        "We work with Cambodian makers who are paid fairly and treated with respect.",
      icon: <FaHandshake className="text-white" />,
    },
    {
      title: "Creative",
      description:
        "Each product is handpicked for its story, quality, and design.",
      icon: <FaLightbulb className="text-white" />,
    },
    {
      title: "Slow Retail",
      description:
        "We believe in mindful shopping over mass production and fast trends.",
      icon: <FaHourglassHalf className="text-white" />,
    },
  ];

  return (
    <section className="relative bg-[#8C4B2F] py-16 overflow-hidden">
      {/* Top block to simulate brown step background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {values.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white p-6 rounded-lg shadow-md text-center shadow-xl/30 transform transition duration-700 ease-in-out animate-bounce-slow`}
            style={{
              animationDelay: `${idx * 0.2}s`,
              animationIterationCount: "infinite",
              animationDuration: "3s",
            }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-[#F7B58E] p-4 rounded-full text-2xl">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
