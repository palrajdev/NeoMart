// components/Toolbar.jsx
import React from "react";
import { useRouter } from "next/router";

export default function Toolbar({ className = "" }) {
  const router = useRouter();
  const q = router.query.q ?? "";
  const sort = router.query.sort ?? "relevance";

  return (
    <form method="get" className={`flex gap-2 items-center w-full ${className}`}>
      <input
        name="q"
        defaultValue={q}
        placeholder="Search products..."
        aria-label="Search products"
        className="flex-1 rounded-md border p-2"
      />

      <select name="sort" defaultValue={sort} className="ml-2 rounded-md border p-2">
        <option value="relevance">Relevance</option>
        <option value="price_asc">Price: low to high</option>
        <option value="price_desc">Price: high to low</option>
        <option value="newest">Newest</option>
      </select>

      <button type="submit" className="ml-2 px-3 py-2 bg-gray-800 text-white rounded-md">
        Apply
      </button>
    </form>
  );
}
