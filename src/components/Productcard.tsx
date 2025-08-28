// src/components/ProductCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const descText =
    product.description?.[0]?.children?.[0]?.text || "No description available";

  const imageUrl =
    product.photos?.[0]?.formats?.medium?.url ||
    product.photos?.[0]?.formats?.small?.url ||
    product.photos?.[0]?.formats?.thumbnail?.url ||
    product.photos?.[0]?.url ||
    "";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {imageUrl && (
        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9]">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 
                   (max-width: 1024px) 50vw, 
                   33vw"
          />
        </div>
      )}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-1">
          {product.name}
        </h3>

        {product.category?.name && (
          <p className="text-[10px] sm:text-xs text-yellow-600 mb-1 sm:mb-2 uppercase tracking-wide">
            {product.category.name}
          </p>
        )}

        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
          {descText}
        </p>

        <div className="mt-auto">
          <Button
            asChild
            className="w-full text-xs sm:text-sm py-2 sm:py-3 rounded-xl"
          >
            <Link href={`/products/${product.documentId}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
