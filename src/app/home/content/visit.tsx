"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VisitUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<"cover" | "contain" | "fill">("cover");

  const images = ["/shack picture.jpeg", "/shack1.jpeg", "/shack3.jpeg"];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8">
        {/* Title + Location */}
        <div className="space-y-6 text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
          <div className="flex items-center gap-3 justify-center">
            <MapPin className="w-6 h-6 text-gray-700" />
            <span className="text-gray-800">
              Shack Collective, Phnom Penh, Cambodia
            </span>
          </div>
        </div>

        {/* Fullscreen Image Slider */}
        <div className="relative w-full h-screen ">
          <Image
            src={images[currentIndex]}
            alt="Shack Collective"
            fill
            className={`object-${mode} object-center`}
            priority
          />

          {/* Prev/Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 px-3 py-1 rounded-full font-normal transition transform active:scale-90 bg-white/70"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 px-3 py-1 rounded-full font-normal transition transform active:scale-90 bg-white/70"
          >
            ▶
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 w-full flex justify-center space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mode Switch Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setMode("contain")}
            className={`px-4 py-2 rounded ${
              mode === "contain" ? " text-white" : "bg-gray-200"
            }`}
          ></button>
        </div>

        {/* Map */}
        <div className="w-full h-120 overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.535124674524!2d104.92545101533484!3d11.56457455826133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517ee3112b5d%3A0x37fb903f08a9b8f3!2sShack%20Collective!5e0!3m2!1sen!2skh!4v1692559999999!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
