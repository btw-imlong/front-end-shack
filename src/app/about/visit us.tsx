// "use client";

// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { FaInstagram } from "react-icons/fa"; // install react-icons if not already

// const VisitUs = () => {
//   return (
//     <div className="mt-20 mx-20 mb-20">
//       <h2 className="font-bold text-2xl p-2">Visit Us In Store</h2>
// <p className="text-gray-700 leading-relaxed mb-4">
//   Come explore our curated space in the heart of Phnom Penh. See the work
//   of local makers up close and shop with purpose.
// </p>

//       <h4 className="font-semibold">Store Info :</h4>
//       <p className="text-gray-700 leading-relaxed mb-4">
//         📍 189 Preah Ang Yukanthor Street (19), Phnom Penh, Cambodia
//         <br />
//         🕘 Tuesday–Sunday: 9 AM – 6 PM
//         <br />
//         📧 shackcollectivephnompenh@gmail.com
//         <br />
//         📞 099 705 984
//         <br />
//         {/* Instagram link */}
//         <a
//           href="https://www.instagram.com/shackcollectivepp/?fbclid=IwY2xjawMaTcZleHRuA2FlbQIxMABicmlkETFqTjNKVEo2ZDhCejd1REZ5AR4MYMIfPqBas1_mz_3klbYl0MLuxmYE48G_JNEeGjd0hTG3OZDydRqpSMhyxw_aem_1VVNiSsJCGUIEXofcWr6Og#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center text-pink-600 hover:text-pink-700 mt-2"
//         >
//           <FaInstagram className="mr-2" />
//           shackcollectivepp · 1.5K followers
//         </a>
//       </p>

//       <h1 className="font-bold text-2xl p-2">
//         “We believe in thoughtful shopping, local creativity, and celebrating
//         every handmade piece.”
//      </h1>

//       <div className="flex mt-6">
//         <Button asChild>
//           <Link
//             href="/"
//             className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
//           >
//             Shop Online
//           </Link>
//         </Button>
//         <Button asChild>
//           <Link
//             href="/store"
//             className="bg-yellow-500 ml-20 max-sm:ml-10 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
//           >
//             Visit Us
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default VisitUs;
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface OpeningHours {
  [day: string]: string;
}

interface VisitUsItem {
  id: number;
  opening_hours: OpeningHours;
}

export default function VisitUs() {
  const [visitUs, setVisitUs] = useState<VisitUsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/visit-us-in-about-pages")
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data.data.length > 0) {
          setVisitUs(res.data.data[0]); // Use first entry
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err.response || err);
        setError("Failed to fetch opening hours.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (error) return <p className="p-10 text-center text-red-500">{error}</p>;

  return (
    <div className="mt-20 mx-20 mb-20">
      <section className="max-w-5xl ">
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
            {visitUs?.opening_hours ? (
              <ul className=" text-gray-700 space-y-2">
                {Object.entries(visitUs.opening_hours).map(([day, hours]) => (
                  <li key={day}>
                    <span className="font-medium">{day}:</span> {hours}
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
                href="https://www.instagram.com/shackcollectivepp/?fbclid=IwY2xjawMaYbVleHRuA2FlbQIxMABicmlkETE0WGNpVG1HMzNQUmRCM1JEAR5E5pymMlyusTT-o9Yjrbah4lEGVr3-0QIDweX5rYq6QCREGAKgkqExvHk0dg_aem_cb0TLK1d10i398EZnH3Bww#"
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
            className="bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600 bg-amber-900"
          >
            Shop Online
          </Link>
          <Link
            href="/visit-us"
            className="bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600 bg-amber-900"
          >
            Visit Us
          </Link>
        </div>
      </section>
    </div>
  );
}
