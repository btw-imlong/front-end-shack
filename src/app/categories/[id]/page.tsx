/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCategories } from "@/lib/api";
import ProductCard from "@/components/Productcard";

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const categoryId = params.id;

  // Fetch categories from API
  const data = await getCategories();

  // Find the category by documentId
  const category = data.data.find((c: any) => c.documentId === categoryId);

  if (!category) {
    return <p className="text-center py-12">Category not found.</p>;
  }

  const products = category.products || [];

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
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
