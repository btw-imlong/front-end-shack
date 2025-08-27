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
        <div className="relative w-full h-64">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {product.name}
        </h3>
        {product.category?.name && (
          <p className="text-xs text-yellow-600 mb-2 uppercase tracking-wide">
            {product.category.name}
          </p>
        )}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{descText}</p>
        <div className="mt-auto">
          <Button asChild className="w-full">
            <Link href={`/products/${product.documentId}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
