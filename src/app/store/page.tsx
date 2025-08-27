// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import photo1 from "@/asset/store-photo.jpg";
// import photo4 from "@/asset/store-photo4.jpg";
// import photo5 from "@/asset/store-photo5.jpg";
// import photo6 from "@/asset/store-photo-7.jpg";
// // Type for opening hours
// type OpeningHours = {
//   monday?: string;
//   tuesday?: string;
//   wednesday?: string;
//   thursday?: string;
//   friday?: string;
//   saturday?: string;
//   sunday?: string;
// };

// // Type for store
// type Store = {
//   id: number;
//   documentId: string;
//   address?: string;
//   opening_hours?: OpeningHours;
// };

// export default function StorePage() {
//   const [stores, setStores] = useState<Store[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const res = await fetch(
//           "https://hopeful-crown-f1e9853770.strapiapp.com/api/store-infos"
//         );
//         const data = await res.json();
//         console.log("API response:", data);

//         setStores(data.data || []);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching store infos:", error);
//         setLoading(false);
//       }
//     };
//     fetchStores();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading stores...</p>;

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative w-full h-[60vh] md:h-[80vh]">
//         <Image
//           src="/hero-image.jpg"
//           alt="Hero Image"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
//           <div className="border border-white p-6 md:p-14 max-w-md md:max-w-lg w-full text-center rounded-lg bg-black/30 shadow-lg">
// <div className="text-sm tracking-wide flex justify-between items-center">
//   <span>Since</span>
//   <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-xs md:text-sm">
//     Shack <br /> Collective
//   </div>
//   <span>1992</span>
// </div>

//             <hr className="border-t border-gray-300 my-2" />
//             {stores.length > 0 && stores[0].opening_hours ? (
//               <>
//                 {/* OPEN block */}
//                 <div className="mt-6">
//                   <h2 className="text-3xl md:text-4xl font-extrabold">OPEN</h2>
//                   <p className="mt-2 text-lg">
//                     {Object.entries(stores[0].opening_hours)
//                       .filter(
//                         ([, hours]) => hours && hours.toLowerCase() !== "closed"
//                       )
//                       .map(
//                         ([day]) => day.charAt(0).toUpperCase() + day.slice(1)
//                       )
//                       .join(" - ")}
//                   </p>
//                   <p className="text-xl font-semibold">
//                     {
//                       Object.entries(stores[0].opening_hours).find(
//                         ([, hours]) => hours && hours.toLowerCase() !== "closed"
//                       )?.[1]
//                     }
//                   </p>
//                 </div>

//                 {/* CLOSED block */}
//                 <div className="mt-6">
//                   <h2 className="text-2xl md:text-3xl font-bold">CLOSED</h2>
//                   {Object.entries(stores[0].opening_hours)
//                     .filter(([, hours]) => hours?.toLowerCase() === "closed")
//                     .map(([day]) => (
//                       <p key={day} className="mt-2 text-lg capitalize">
//                         {day}
//                       </p>
//                     ))}
//                 </div>
//               </>
//             ) : (
//               <p className="mt-4 text-gray-200">Opening hours not available</p>
//             )}
//           </div>
//         </div>
//       </section>

// {/* Address */}
// <section className="max-w-4xl mx-auto px-6 py-10 text-center md:text-left">
//   <h2 className="text-xl md:text-2xl font-semibold mb-2">Location</h2>
//   <p>189 Preah Ang Yukanthor Street (19), Phnom Penh, Cambodia</p>
//   <p className="mt-1">📞 099 705 984</p>
//   <p className="mt-1">✉️ shackcollectivephnompenh@gmail.com</p>
// </section>

// {/* Map */}
// <section className="max-w-4xl mx-auto px-6 mb-10">
//   <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
//     Store Location
//   </h2>
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.186186679493!2d104.92764!3d11.5645746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095137f72717b5%3A0xa8c8cbeeb72d2166!2s189%20Preah%20Ang%20Yukanthor%20St%20(19)%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1692624000000!5m2!1sen!2skh"
//     width="100%"
//     height="350"
//     className="rounded-lg shadow-md"
//     allowFullScreen
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//   ></iframe>
//   <p className="mt-4 text-center md:text-left text-gray-700">
//     189 Preah Ang Yukanthor Street (19), Phnom Penh
//   </p>
// </section>

//       {/* Store Photos */}
//       <section className="max-w-5xl mx-auto px-6 pb-10">
//         <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
//           Store Photos
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Photo 1 */}
//           <div className="relative w-full h-64 md:h-80">
//             <Image
//               src={photo1.src}
//               alt="Store Front"
//               fill
//               className="object-cover rounded-lg shadow"
//             />
//           </div>

//           {/* Photo 4 */}
//           <div className="relative w-full h-64 md:h-80">
//             <Image
//               src={photo4.src}
//               alt="Display"
//               fill
//               className="object-cover rounded-lg shadow"
//             />
//           </div>

//           {/* Photo 5 */}
//           <div className="relative w-full h-64 md:h-80">
//             <Image
//               src={photo5.src}
//               alt="Shelves"
//               fill
//               className="object-cover rounded-lg shadow"
//             />
//           </div>

//           {/* Photo 2 + 3 side by side */}
//           {/* <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
//             <div className="relative w-full h-64">
//               <Image
//                 src={photo2.src}
//                 alt="Inside Store"
//                 fill
//                 className="object-cover rounded-lg shadow"
//               />
//             </div>
//             <div className="relative w-full h-64">
//               <Image
//                 src={photo3.src}
//                 alt="Products"
//                 fill
//                 className="object-cover rounded-lg shadow"
//               />
//             </div>
//           </div> */}

//           {/* Photo 6 */}
//           <div className="relative w-full h-64 md:h-80 col-span-1 md:col-span-3">
//             <Image
//               src={photo6.src}
//               alt="Product"
//               fill
//               className="object-cover rounded-lg shadow"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface OpeningHours {
  [day: string]: string;
}

interface StoreInfo {
  id: number;
  opening_hours: OpeningHours;
  main_photo_url?: {
    url: string;
    alternativeText?: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
    };
  };
  photos: {
    id: number;
    url: string;
    alternativeText?: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
    };
  }[];
}

export default function StorePage() {
  const [store, setStore] = useState<StoreInfo | null>(null);

  useEffect(() => {
    fetch(
      "https://hopeful-crown-f1e9853770.strapiapp.com/api/store-infos?populate=*"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length > 0) {
          const storeData = data.data[0];
          setStore({
            id: storeData.id,
            opening_hours: storeData.opening_hours,
            main_photo_url: storeData.main_photo_url,
            photos: storeData.photos,
          });
        }
      })
      .catch((err) => console.error("Error fetching store data:", err));
  }, []);

  if (!store)
    return <p className="text-center mt-10 text-gray-500">Loading store...</p>;

  // Get open/closed days
  const openDays = Object.entries(store.opening_hours).filter(
    ([, hours]) => hours && hours.toLowerCase() !== "closed"
  );
  const closedDays = Object.entries(store.opening_hours).filter(
    ([, hours]) => hours?.toLowerCase() === "closed"
  );

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        {store.main_photo_url?.url && (
          <Image
            src={store.main_photo_url.url}
            alt={store.main_photo_url.alternativeText || "Store Hero"}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <div className="border border-white p-6 md:p-14 max-w-md md:max-w-lg w-full text-center rounded-lg bg-black/30 shadow-lg">
            <div className="text-sm tracking-wide flex justify-between items-center">
              <span>Since</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-xs md:text-sm">
                Shack <br /> Collective
              </div>
              <span>1992</span>
            </div>
            <hr className="border-0 h-0.5 bg-white rounded-full my-6 animate-gradient-x" />

            {openDays.length > 0 && (
              <div className="mb-4">
                <h2 className="text-4xl font-extrabold text-white">OPEN</h2>
                <p className="text-lg mt-2 text-gray-200">
                  {openDays
                    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
                    .join(" - ")}
                </p>
                <p className="text-xl font-semibold text-gray-200">
                  {openDays[0][1]}
                </p>
              </div>
            )}

            {closedDays.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-white">CLOSED</h2>
                <p className="text-base mt-1 text-gray-200">
                  {closedDays
                    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
                    .join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Address */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Location</h2>
        <p>189 Preah Ang Yukanthor Street (19), Phnom Penh, Cambodia</p>
        <p className="mt-1">📞 099 705 984</p>
        <p className="mt-1">✉️ shackcollectivephnompenh@gmail.com</p>
      </section>

      {/* Map */}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          Store Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.186186679493!2d104.92764!3d11.5645746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095137f72717b5%3A0xa8c8cbeeb72d2166!2s189%20Preah%20Ang%20Yukanthor%20St%20(19)%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1692624000000!5m2!1sen!2skh"
          width="100%"
          height="350"
          className="rounded-lg shadow-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="mt-4 text-center md:text-left text-gray-700">
          189 Preah Ang Yukanthor Street (19), Phnom Penh
        </p>
      </section>
      {/* Gallery Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Store Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {store.photos.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={photo.formats?.medium?.url || photo.url}
                alt={photo.alternativeText || "Store Photo"}
                width={400}
                height={300}
                className="object-cover w-full h-64 md:h-72"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
