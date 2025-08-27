"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getBrands } from "@/lib/api";

interface StoryItem {
  id: number;
  name: string;
  story: string;
  type?: "mission" | "story";
  logo_url?: {
    url: string;
    alternativeText?: string;
    formats?: {
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
      thumbnail?: { url: string };
    };
  };
}

const Story = () => {
  const [stories, setStories] = useState<StoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await getBrands();
        setStories(res.data || []);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!stories.length)
    return <p className="text-center mt-10 text-gray-500">No stories found.</p>;

  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4">
      {stories.map((item, index) => {
        const imgUrl =
          item.logo_url?.formats?.medium?.url ||
          item.logo_url?.url ||
          "/placeholder.jpg";

        return (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-8  mt-10"
          >
            {/* IMAGE */}
            <div
              className={`md:w-1/2 flex justify-center ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={imgUrl}
                alt={item.logo_url?.alternativeText || item.name}
                width={700}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>

            {/* TEXT */}
            <div
              className={`md:w-1/2 flex flex-col justify-center space-y-3 text-center md:text-left ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center ">
                {item.name}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.story}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
