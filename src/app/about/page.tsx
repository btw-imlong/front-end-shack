import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaHourglassHalf,
} from "react-icons/fa";

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

const page = () => {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/hero-about.jpg"
          alt="Hero-about Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4  ">
            A Creative Home for Cambodian Brands
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center">
            Discover ethical, handmade treasures in the heart of Phnom Penh.
          </p>
          <Button asChild>
            <Link
              href="/store"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
            >
              Visit Our Store{" "}
            </Link>
          </Button>
        </div>
      </section>
      <div className="space-y-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10">
          <div className="flex flex-col justify-center text-center p-6">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Shack Collective is more than a store — it’s a space that
              celebrates the creativity of Cambodia’s independent makers. We
              curate a unique mix of handmade fashion, home décor, art, and
              gifts from local brands who care about quality, culture, and
              community. Whether you're a traveler or a local shopper, our shop
              is here to inspire conscious living and support meaningful
              craftsmanship.
            </p>
          </div>
          <div>
            <img
              src="/story-about.jpg"
              alt="Our Story"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <img
              src="/people.jpeg"
              alt="Our Story"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center text-center p-6">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At Shack Collective, our mission is to celebrate and share the
              beauty of Cambodia through meaningful souvenirs. We are dedicated
              to supporting local artisans and showcasing handcrafted products
              that reflect the country’s rich culture, creativity, and
              traditions.
            </p>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default page;
