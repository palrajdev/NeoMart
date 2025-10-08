// components/ProductCard.jsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // optionally use next/image

export default function ProductCard({ product }) {
  return (
    <article className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-colors" aria-labelledby={`p-${product.id}`}>
      <Link href={`/products/${product.id}`} className="block">
        <div className="w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
          {/* Replace with next/image for optimized images */}
          <img
            src={product.image || "/placeholder.png"}
            alt={product.title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 id={`p-${product.id}`} className="text-sm font-semibold line-clamp-2">
          <Link href={`/products/${product.id}`} className="hover:underline">{product.title}</Link>
        </h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div>
            <div className="text-lg font-bold">₹{Number(product.price).toFixed(2)}</div>
            {product.compareAt && (
              <div className="text-xs line-through text-gray-400">₹{Number(product.compareAt).toFixed(2)}</div>
            )}
          </div>
          <div className="text-sm text-gray-600">{product.rating ? `${product.rating.toFixed(1)} ★` : "—"}</div>
        </div>

        <div className="mt-4 flex gap-2">
          <Link href={`/products/${product.id}`} className="flex-1 rounded-md border px-3 py-2 text-sm text-center">
            View
          </Link>
          <button className="rounded-md px-3 py-2 text-sm bg-sky-600 text-white">Add</button>
        </div>
      </div>
    </article>
  );
}
