"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md flex flex-col gap-3">
      {/* Top Row */}
      <div className="flex items-center gap-4">
        <Image
          src="/3.jpg" // You can replace with your avatar image in /public
          alt="Reviewer"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-lg">Srey pheak</p>
          <p className="text-sm text-gray-500">January 12, 2025</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" stroke="currentColor" />
        ))}
      </div>

      {/* Review Title */}
      <p className="font-bold text-lg">Good choice!</p>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        The headphones are of good quality, fit perfectly and are very easy to
        pair with any device.
      </p>
    </div>
  );
}
