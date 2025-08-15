import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CategorySection() {
  const items = [
    {
      src: "/image1.jpg",
      alt: "Aromatics",
      title: "Supreme Aromatics",
      desc: "Each candle in this collection is a masterpiece, carefully curated to deliver an extraordinary olfactory experience.",
      href: "/products/aromatics",
    },
    {
      src: "/image2.jpg",
      alt: "Traditional Tools",
      title: "Traditional Tools",
      desc: "Handcrafted tools preserving traditional techniques and cultural heritage.",
      href: "/categories/tools",
    },
    {
      src: "/image3.jpg",
      alt: "Unique Crafts",
      title: "Unique Crafts",
      desc: "One-of-a-kind pieces that celebrate Cambodian artisanship.",
      href: "/categories/crafts",
    },
    {
      src: "/image4.jpg",
      alt: "Cultural Art",
      title: "Cultural Art",
      desc: "Artwork inspired by Cambodia’s rich history and traditions.",
      href: "/categories/art",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-yellow-500">Top </span> Trending
        </h2>
        <p className="text-lg mb-10">
          Discover a curated selection of handmade accessories, traditional
          tools, and unique crafts that celebrate Cambodian culture.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl aspect-[16/9]"
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={idx === 0}
            />

            {/* Dim layer */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Centered hover card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 w-11/12 max-w-md text-center">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                  <Link href={item.href}>
                    <Button className="px-6">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
