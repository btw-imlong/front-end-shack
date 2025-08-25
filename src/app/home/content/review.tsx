/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  date: string;
  review: string;
  rating: number;
  avatar: string;
}

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("http://localhost:1337/api/reviews");
        const data = await res.json();

        const mapped = data.data.map((item: any) => ({
          id: item.id,
          name: item.customer_name,
          date: new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          review: item.comment,
          rating: item.rating,
          avatar: "/default.jpg",
        }));

        setReviews(mapped);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {reviews.map((rev, index) => (
        <div
          key={rev.id}
          className={`bg-white rounded-2xl shadow-md p-6 w-full max-w-md flex flex-col gap-3 transition-transform duration-300 ${
            index !== 0 ? "-mt-12" : "" // overlap effect
          }`}
        >
          {/* Top Row */}
          <div className="flex items-center gap-4">
            <Image
              src={rev.avatar}
              alt={rev.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">{rev.name}</p>
              <p className="text-sm text-gray-500">{rev.date}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 text-yellow-400">
            {[...Array(rev.rating)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill="currentColor"
                stroke="currentColor"
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-sm leading-relaxed">{rev.review}</p>
        </div>
      ))}
    </div>
  );
}
