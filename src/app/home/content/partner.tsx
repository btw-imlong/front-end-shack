/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Partners() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/partners?populate=*"
        );
        const data = await res.json();
        setPartners(data.data.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch partners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-6 text-center">
        <p>Loading partners...</p>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {partners.map((partner, i) => {
            // logo is an array in your API
            const logoUrl = partner.logo?.[0]?.url || "";
            const website = partner.website_url;

            return (
              <div
                key={partner.id || i}
                className="flex items-center justify-center bg-white rounded-2xl p-6 "
              >
                {logoUrl ? (
                  website ? (
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={logoUrl}
                        alt={partner.name || `Partner ${i + 1}`}
                        width={150}
                        height={80}
                        className="object-contain"
                      />
                    </a>
                  ) : (
                    <Image
                      src={logoUrl}
                      alt={partner.name || `Partner ${i + 1}`}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  )
                ) : (
                  <span className="text-gray-400">No logo</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
