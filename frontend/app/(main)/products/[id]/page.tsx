// "use client"
import { Button } from "@heroui/button";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  short?: string;
  description?: string;
  stock?: number;
  badge?: string;
}

async function getProduct(id: string): Promise<Product | null> {
    console.log("Entered to view product", );
    
  // Mock example — replace with API call or database query
  const products: Product[] = [
    {
      id: "neo-001",
      title: "Premium Charcoal - 5kg",
      image: "/images/5-kg-pack.png",
      price: 299,
      short: "Pure & eco-friendly charcoal",
      description:
        "This charcoal is made from sustainable sources and burns cleanly for longer use.",
      stock: 10,
      badge: "Best Seller",
    },
  ];
  return products.find((p) => p.id === "neo-001") || null;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-2xl shadow-md"
          />
        </div>

        <div>
          {product.badge && (
            <span className="inline-block mb-3 px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded">
              {product.badge}
            </span>
          )}

          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-emerald-600 font-semibold text-lg mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description || product.short}
          </p>

          <div className="flex gap-4">
            <Button className="bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-emerald-700 transition">
              Add to Cart
            </Button>
            <Button className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-50 transition">
              Buy Now
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            {product.stock && product.stock > 0
              ? `In stock: ${product.stock}`
              : "Out of stock"}
          </p>
        </div>
      </div>
    </main>
  );
}
