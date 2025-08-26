/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getProducts, getCategories } from "@/lib/api";
import ProductCard from "@/components/Productcard";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // ✅ 10 products per page

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        const items = productsData.data || [];
        setProducts(items);
        setFilteredProducts(items);
        setCategories(categoriesData.data || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, search]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category?.documentId === selectedCategory
      );
    }

    // Filter by search
    if (search.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination slice
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredProducts(filtered.slice(startIndex, endIndex));
  }, [selectedCategory, search, products, currentPage]);

  // Total pages calculation
  const totalPages = Math.ceil(
    products.filter(
      (p) =>
        (selectedCategory === "all" ||
          p.category?.documentId === selectedCategory) &&
        (!search.trim() || p.name.toLowerCase().includes(search.toLowerCase()))
    ).length / itemsPerPage
  );

  if (loading) {
    return <p className="text-center py-12">Loading products...</p>;
  }

  return (
    <main className="px-6 md:px-16 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-yellow-500">Our </span> Products
        </h1>
        <p className="text-lg text-gray-600">
          A handpicked selection of our featured items.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8 justify-between">
        <select
          className="border rounded-lg px-3 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.documentId}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-lg px-3 py-2 flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded ${
                page === currentPage
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
