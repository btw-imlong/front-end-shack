"use client";

import Image from "next/image";

export default function Partners() {
  const partners = [
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
    "/public/image 36.png",
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {partners.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white rounded-2xl  p-6 hover:shadow-lg transition"
            >
              <Image
                src="/public/image 36.png"
                alt={`Partner ${i + 1}`}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
