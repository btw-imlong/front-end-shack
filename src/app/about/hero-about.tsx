import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const HeroAbout = () => {
  return (
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
  );
};

export default HeroAbout;
