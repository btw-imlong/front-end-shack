// src/app/categories/[id]/page.tsx

import { getCategories } from "@/lib/api";
import ProductCard from "@/components/Productcard";
import { CategoryData, Product, DescriptionBlock } from "@/types";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getCategories();
  const categories: CategoryData[] = data.data;

  const category = categories.find((c: CategoryData) => c.documentId === id);

  if (!category) {
    return <p className="text-center py-12">Category not found.</p>;
  }

  const products: Product[] = (category.products || []).map((p: Product) => ({
    ...p,
    id: Number(p.id),
    documentId: p.documentId ?? "",
    description: p.description ?? ([] as DescriptionBlock[]),
    photos: p.photos ?? [],
    category: p.category ?? undefined,
    name: p.name ?? "Unnamed Product",
  }));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <p className="text-gray-700 mb-8">
        {category.description?.[0]?.children?.[0]?.text || ""}
      </p>

      {products.length === 0 ? (
        <p className="text-center py-12">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
