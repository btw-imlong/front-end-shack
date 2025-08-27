"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as api from "@/lib/api";

interface OpeningHours {
  [day: string]: string;
}

interface StoreInfo {
  id: number;
  opening_hours: OpeningHours;
}

export default function VisitUs() {
  const [store, setStore] = useState<StoreInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getStores()
      .then((res: { data: StoreInfo[] }) => {
        console.log("API Response:", res.data);
        if (res.data.length > 0) {
          setStore(res.data[0]); // Use the first store
        }
        setLoading(false);
      })
      .catch((err: any) => {
        console.error("API Error:", err);
        setError("Failed to fetch store info.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (error) return <p className="p-10 text-center text-red-500">{error}</p>;

  return (
    <div className="mt-20 mx-20 mb-20">
      <section className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Visit Us In Store</h2>
        <p className="text-gray-700 mb-6">
          Come explore our curated space in the heart of Phnom Penh. See the
          work of local makers up close and shop with purpose.
        </p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Store Info:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              📍{" "}
              <span>
                #189 Preah Ang Yukanthor Street (19), Phnom Penh, Cambodia
              </span>
            </li>

            {store?.opening_hours ? (
              <ul className="text-gray-700 space-y-2">
                {Object.entries(store.opening_hours).map(([day, hours]) => (
                  <li key={day}>
                    <span className="font-medium capitalize">{day}:</span>{" "}
                    {hours}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">
                No opening hours found.
              </p>
            )}

            <li>
              📧 <span>shackcollectivephnompenh@gmail.com</span>
            </li>
            <li>
              📞 <span>099 705 984</span>
            </li>
            <li>
              📸 Instagram:{" "}
              <a
                href="https://www.instagram.com/shackcollectivepp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                shackcollectivepp · 1.5K followers
              </a>
            </li>
          </ul>
        </div>

        <blockquote className="italic text-gray-600 mb-6">
          “We believe in thoughtful shopping, local creativity, and celebrating
          every handmade piece.”
        </blockquote>

        <div className="flex gap-4">
          <Link
            href="/shop-online"
            className="bg-amber-900 text-white px-4 py-2 rounded hover:bg-brown-600"
          >
            Shop Online
          </Link>
          <Link
            href="/store"
            className="bg-amber-900 text-white px-4 py-2 rounded hover:bg-brown-600"
          >
            Visit Us
          </Link>
        </div>
      </section>
    </div>
  );
}
