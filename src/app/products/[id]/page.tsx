/* eslint-disable @typescript-eslint/no-explicit-any */
// app/products/[id]/page.tsx
import { getProducts, getProductByDocumentId } from "@/lib/api";
import Image from "next/image";

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  // Fetch product by documentId
  const data = await getProductByDocumentId(id);
  const product = data.data[0];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

      {product.photos?.[0]?.url && (
        <div className="relative w-full h-96 mb-4">
          <Image
            src={product.photos[0].url}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      {product.description?.map((block: any, i: number) => (
        <p key={i} className="mb-2 text-gray-700">
          {block.children[0].text}
        </p>
      ))}
    </div>
  );
}

// ✅ Pre-generate all product pages at build time
export async function generateStaticParams() {
  const products = await getProducts();

  return products.data.map((product: any) => ({
    id: product.documentId, // must match folder name [id]
  }));
}
