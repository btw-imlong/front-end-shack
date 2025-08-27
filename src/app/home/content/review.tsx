/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { getReviews } from "@/lib/api";

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
    async function loadReviews() {
      try {
        const data = await getReviews();

        const mapped = data.data.map((item: any) => {
          const img = item.img_url;

          const avatarUrl =
            img?.formats?.thumbnail?.url ||
            img?.formats?.small?.url ||
            img?.url ||
            "/default.jpg";

          return {
            id: item.id,
            name: item.customer_name,
            date: new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            review: item.comment,
            rating: item.rating,
            avatar: avatarUrl,
          };
        });

        setReviews(mapped);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    }

    loadReviews();
  }, []);

  const ReviewCard = ({ rev }: { rev: Review }) => (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 w-full">
      <div className="flex items-center gap-4">
        <Image
          src={rev.avatar}
          alt={rev.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-base">{rev.name}</p>
          <p className="text-xs text-gray-500">{rev.date}</p>
        </div>
      </div>
      <div className="flex gap-1  text-yellow-400 mt-1">
        {[...Array(rev.rating)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" stroke="currentColor" />
        ))}
      </div>
      <p className="font-bold text-lg">Good choice!</p>
      <p className="text-gray-600 text-sm leading-relaxed">{rev.review}</p>
    </div>
  );

  return (
    <div className="flex justify-center z-10">
      {reviews.length >= 2 && (
        <div className="flex flex-col sm:flex-row gap-2 relative ">
          <div className="sm:mt-0">
            <ReviewCard rev={reviews[0]} />
          </div>
          <div className="sm:mt-15 sm:-ml-10 ">
            <ReviewCard rev={reviews[1]} />
          </div>
        </div>
      )}
    </div>
  );
}
