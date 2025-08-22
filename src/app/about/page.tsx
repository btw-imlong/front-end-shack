<<<<<<< HEAD
"use client";

import {
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaHourglassHalf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={40} />,
    title: "Sustainable",
    description:
      "We choose eco-friendly, low-waste, and natural materials where possible.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Local & Ethical",
    description:
      "We work with Cambodian makers who are paid fairly and treated with respect.",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Creative",
    description:
      "Each product is handpicked for its story, quality, and design.",
  },
  {
    icon: <FaHourglassHalf size={40} />,
    title: "Slow Retail",
    description:
      "We believe in mindful shopping over mass production and fast trends.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#8B4513] py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center"
          >
            <div className="bg-[#FBBF77] rounded-full p-6 mb-6 flex items-center justify-center">
              <span className="text-black">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
=======
import React from 'react'
import HeroAbout from './hero-about'
import Story from './story'
import Features from './value'
import VisitUs from './visit us'
const page = () => {
  return (
    <>
      <HeroAbout />
      <Story />
      <Features />
      <VisitUs />
    
    </>
  )
}

export default page
>>>>>>> origin/main
