// components/Pagination.jsx
import React from "react";
import Link from "next/link";

export default function Pagination({ page = 1, totalPages = 1, baseUrl = "/products?perPage=12" }) {
  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, start + 4);
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-6">
      {page > 1 ? (
        <Link href={`${baseUrl}&page=${page - 1}`} className="px-3 py-1 border rounded">
          Prev
        </Link>
      ) : (
        <span className="px-3 py-1 border rounded opacity-40">Prev</span>
      )}

      {pages.map((p) => (
        <Link key={p} href={`${baseUrl}&page=${p}`} className={`px-3 py-1 border rounded ${p === page ? "bg-gray-200" : ""}`}>
          {p}
        </Link>
      ))}

      {page < totalPages ? (
        <Link href={`${baseUrl}&page=${page + 1}`} className="px-3 py-1 border rounded">
          Next
        </Link>
      ) : (
        <span className="px-3 py-1 border rounded opacity-40">Next</span>
      )}
    </nav>
  );
}
