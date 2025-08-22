"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import photo1 from "@/asset/store-photo.jpg";
import photo2 from "@/asset/store-photo2.jpg";
import photo3 from "@/asset/store-photo3.jpg";
import photo4 from "@/asset/store-photo4.jpg";
import photo5 from "@/asset/store-photo5.jpg";

// Type for opening hours
type OpeningHours = {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
};

// Type for store
type Store = {
  id: number;
  documentId: string;
  address?: string;
  map_embed_url?: string; // Must be Google Maps embed URL
  opening_hours?: OpeningHours;
};

export default function StorePage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/store-infos");
        const data = await res.json();
        console.log("API response:", data);

        // Optional: Convert normal Google Maps URL to embed URL
        const processedStores = (data.data || []).map((store: Store) => {
          if (store.map_embed_url && !store.map_embed_url.includes("/embed")) {
            const query = encodeURIComponent(store.map_embed_url);
            store.map_embed_url = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${query}`;
          }
          return store;
        });

        setStores(processedStores);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching store infos:", error);
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading stores...</p>;

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <div className="border border-white p-6 md:p-14 max-w-md md:max-w-lg w-full text-center rounded-lg bg-black/30 shadow-lg">
            <p className="text-sm tracking-wide flex justify-between items-center">
              <span>Since</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-xs md:text-sm">
                {" "}
                Shack <br /> Collective{" "}
              </div>{" "}
              <span>1992</span>
            </p>
            <hr className="border-t border-gray-300 my-2" />
            {stores.length > 0 && stores[0].opening_hours ? (
              <>
                {/* OPEN block */}
                <div className="mt-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold">OPEN</h2>
                  <p className="mt-2 text-lg">
                    {/* Show open days (all except closed ones) */}
                    {Object.entries(stores[0].opening_hours)
                      .filter(
                        ([day, hours]) =>
                          hours && hours.toLowerCase() !== "closed"
                      )
                      .map(
                        ([day]) => day.charAt(0).toUpperCase() + day.slice(1)
                      )
                      .join(" - ")}
                  </p>
                  <p className="text-xl font-semibold">
                    {
                      // Show first non-closed day’s hours
                      Object.entries(stores[0].opening_hours).find(
                        ([, hours]) => hours && hours.toLowerCase() !== "closed"
                      )?.[1]
                    }
                  </p>
                </div>

                {/* CLOSED block */}
                <div className="mt-6">
                  <h2 className="text-2xl md:text-3xl font-bold">CLOSED</h2>
                  {Object.entries(stores[0].opening_hours)
                    .filter(([_, hours]) => hours?.toLowerCase() === "closed")
                    .map(([day]) => (
                      <p key={day} className="mt-2 text-lg capitalize">
                        {day}
                      </p>
                    ))}
                </div>
              </>
            ) : (
              <p className="mt-4 text-gray-200">Opening hours not available</p>
            )}
          </div>
        </div>
      </section>

      {/* Stores List */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center md:text-left">
        {stores.length === 0 && <p>No store info available</p>}
        {stores.map((store) => (
          <div key={store.id} className="mb-10 border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">Store #{store.id}</h2>
            {store.address && <p>📍 {store.address}</p>}

            {store.map_embed_url ? (
              <div className="mt-4">
                <iframe
                  src={store.map_embed_url}
                  width="100%"
                  height="300"
                  className="rounded-lg shadow-md"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ) : (
              <p className="text-sm mt-2 text-gray-500">Map not available</p>
            )}
          </div>
        ))}
      </section>

      {/* Store Photos */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Store Photos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={photo1.src}
            alt="Store Front"
            className="rounded-lg shadow w-full"
          />
          <img
            src={photo4.src}
            alt="Display"
            className="rounded-lg shadow w-full"
          />
          <img
            src={photo5.src}
            alt="Shelves"
            className="rounded-lg shadow w-full"
          />
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4 justify-items-center w-full">
            <img
              src={photo2.src}
              alt="Inside Store"
              className="rounded-lg shadow w-full md:w-auto"
            />
            <img
              src={photo3.src}
              alt="Products"
              className="rounded-lg shadow w-full md:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
