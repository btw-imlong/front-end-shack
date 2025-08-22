"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SlideType = {
  title: string;
  button: string;
  src: string;
};

type CarouselProps = {
  slides: SlideType[];
};

export function Carousel({ slides }: CarouselProps) {
  const [active, setActive] = React.useState(0);

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setActive((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[80vh]">
      {/* Slides */}
      <div className="relative w-[70vmin] h-[70vmin]">
        {slides.map((slide, i) => {
          const offset = (i - active + slides.length) % slides.length;
          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              className={cn(
                "absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-700",
                isActive
                  ? "z-20 scale-100 opacity-100"
                  : "z-10 scale-75 opacity-40"
              )}
              animate={{ rotate: offset * 15 }}
              style={{ transformOrigin: "50% 80%" }}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <button className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm">
                  {slide.button}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-8 flex justify-between px-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
