"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/api";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  documentId: string;
  name: string;
  description: { type: string; children: { text: string }[] }[];
  image_url: {
    url: string;
    alternativeText?: string | null;
  };
}

export default function CategorySection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-center py-12">Loading categories...</p>;
  }

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

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.slice(0, 4).map((item) => {
          const imageUrl = item.image_url?.url;
          const altText = item.image_url?.alternativeText || item.name;
          const descText = item.description?.[0]?.children?.[0]?.text || "";

          return (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl aspect-[16/9]"
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={altText}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 w-11/12 max-w-md text-center">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{descText}</p>
                    <Link href={`/categories/${item.documentId}`}>
                      <Button className="px-6">Read More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
