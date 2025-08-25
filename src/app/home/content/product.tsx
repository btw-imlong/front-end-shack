/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/Productcard";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts((data.data || []).slice(0, 4)); // only 4
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center py-12">Loading products...</p>;
  }

  return (
    <main className="px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-yellow-500">Our </span> Products
        </h1>
        <p className="text-lg text-gray-600">
          A handpicked selection of our featured items.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
