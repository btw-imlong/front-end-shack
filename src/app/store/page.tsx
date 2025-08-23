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

        setStores(data.data || []);
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
            <div className="text-sm tracking-wide flex justify-between items-center">
              <span>Since</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-xs md:text-sm">
                Shack <br /> Collective
              </div>
              <span>1992</span>
            </div>

            <hr className="border-t border-gray-300 my-2" />
            {stores.length > 0 && stores[0].opening_hours ? (
              <>
                {/* OPEN block */}
                <div className="mt-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold">OPEN</h2>
                  <p className="mt-2 text-lg">
                    {Object.entries(stores[0].opening_hours)
                      .filter(
                        ([, hours]) => hours && hours.toLowerCase() !== "closed"
                      )
                      .map(
                        ([day]) => day.charAt(0).toUpperCase() + day.slice(1)
                      )
                      .join(" - ")}
                  </p>
                  <p className="text-xl font-semibold">
                    {
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
      {/* <section className="max-w-4xl mx-auto px-6 py-10 text-center md:text-left">
        {stores.length === 0 && <p>No store info available</p>}
        {stores.map((store) => (
          <div key={store.id} className="mb-10 border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">Store #{store.id}</h2>
            {store.address && <p>📍 {store.address}</p>}
          </div>
        ))}
      </section> */}
      {/* address */}
      <div className="bg-white text-gray-800 py-10 px-6">
        {/* Store Info */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Store Location</h2>
          <p className="text-lg">
            📍 179-193 Preah Ang Yukanthor Street (Street 19), Daun Penh, Phnom
            Penh
          </p>
          <p className="text-gray-600">
            ⏰ Open Tuesday – Sunday: 9:00 AM – 6:00 PM <br />
            Closed on Mondays
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="max-w-4xl mx-auto mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9548618795133!2d104.9166602!3d11.5658706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d1c436d77%3A0x6cfb8c09d6dbe947!2s179-193%20Preah%20Ang%20Yukanthor%20St%20(St%2019)%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1724392047469!5m2!1sen!2skh"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-md"
          ></iframe>
        </div>
      </div>
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
