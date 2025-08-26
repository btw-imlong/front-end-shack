// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// interface BrandImage {
//   url: string;
//   alternativeText?: string;
// }

// interface Brand {
//   id: number;
//   name: string;
//   tagline?: string;
//   short_intro?: string;
//   story?: string;
//   mission?: string;
//   image?: BrandImage;
// }

// export default function Story() {
//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:1337/api/brand-infos?populate=*"
//         );
//         const data = await response.json();
//         console.log("API response:", data);

//         const brandData: Brand[] = data.data.map((item: any) => ({
//           id: item.id,
//           name: item.name || "No Name",
//           tagline: item.tagline || "",
//           short_intro: item.short_intro || "",
//           story: item.story || "",
//           mission: item.mission || "",
//           image: item.logo_url
//             ? {
//                 url: item.logo_url.url,
//                 alternativeText: item.logo_url.alternativeText || item.name,
//               }
//             : undefined,
//         }));

//         setBrands(brandData);
//       } catch (err) {
//         console.error("Error fetching brands:", err);
//         setError("Failed to fetch brands. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBrands();
//   }, []);

//   if (loading) return <p className="p-6">Loading brands...</p>;
//   if (error) return <p className="p-6 text-red-500">{error}</p>;
//   if (brands.length === 0) return <p className="p-6">No brands found.</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Our Brands</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {brands.map((brand) => (
//           <div
//             key={brand.id}
//             className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//           >
//             {brand.image && (
//               <Image
//                 src={
//                   brand.image.url.startsWith("http")
//                     ? brand.image.url
//                     : `http://localhost:1337${brand.image.url}`
//                 }
//                 alt={brand.image.alternativeText || brand.name}
//                 width={300}
//                 height={200}
//                 className="rounded mb-4 object-cover w-full h-48"
//               />
//             )}
//             <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
//             {brand.tagline && <p className="italic mb-2">{brand.tagline}</p>}
//             {brand.short_intro && <p className="mb-2">{brand.short_intro}</p>}
//             {brand.story && <p className="mb-2">{brand.story}</p>}
//             {brand.mission && (
//               <p className="text-sm text-gray-600">{brand.mission}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface BrandImage {
  url: string;
  alternativeText?: string;
}

interface Brand {
  id: number;
  name: string;
  tagline?: string;
  short_intro?: string;
  story?: string;
  mission?: string;
  image?: BrandImage;
}

export default function Story() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/brand-infos?populate=*"
        );
        const data = await response.json();
        console.log("API response:", data);

        const brandData: Brand[] = data.data.map((item: any) => ({
          id: item.id,
          name: item.name || "No Name",
          tagline: item.tagline || "",
          short_intro: item.short_intro || "",
          story: item.story || "",
          mission: item.mission || "",
          image: item.logo_url
            ? {
                url: item.logo_url.url.startsWith("http")
                  ? item.logo_url.url
                  : `http://localhost:1337${item.logo_url.url}`,
                alternativeText: item.logo_url.alternativeText || item.name,
              }
            : undefined,
        }));

        setBrands(brandData);
      } catch (err) {
        console.error("Error fetching brands:", err);
        setError("Failed to fetch brands. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) return <p className="p-6">Loading brands...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (brands.length === 0) return <p className="p-6">No brands found.</p>;

  return (
    <div className="p-6 space-y-16">
      {brands.map((brand, index) => (
        <div
          key={brand.id}
          className={`flex flex-col md:flex-row items-center gap-6 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          {brand.image && (
            <div className="md:w-1/2 w-full rounded overflow-hidden shadow">
              <Image
                src={brand.image.url}
                alt={brand.image.alternativeText || brand.name}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* Text */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {brand.name}
            </h2>
            {brand.tagline && <p className="italic mb-2">{brand.tagline}</p>}
            {brand.short_intro && <p className="mb-2">{brand.short_intro}</p>}
            {brand.story && <p className="mb-2">{brand.story}</p>}
            {brand.mission && <p className="text-gray-600">{brand.mission}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
