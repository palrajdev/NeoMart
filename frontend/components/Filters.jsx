// components/Filters.jsx
import React from "react";

export default function Filters({ available = {}, active = {}, className = "" }) {
  // available: { categories: [{ id, name }], brands: [{id,name}], min, max }
  // active: { category, brand }
  return (
    <div className={`sticky top-20 ${className}`}>
      <div className="border rounded-lg p-4 bg-white">
        <h4 className="font-semibold mb-3">Filters</h4>

        <div className="mb-4">
          <h5 className="text-sm font-medium mb-2">Category</h5>
          <form method="get">
            {(available.categories || []).map((cat) => (
              <label key={cat.id} className="block text-sm mb-1">
                <input
                  type="radio"
                  name="category"
                  defaultChecked={String(active.category) === String(cat.id)}
                  value={cat.id}
                  className="mr-2"
                />
                {cat.name}
              </label>
            ))}

            <div className="mt-3">
              <button type="submit" className="text-sm rounded px-3 py-1 border">
                Apply
              </button>
            </div>
          </form>
        </div>

        <div className="mb-4">
          <h5 className="text-sm font-medium mb-2">Brand</h5>
          {(available.brands || []).map((b) => (
            <label key={b.id} className="block text-sm mb-1">
              <input
                type="checkbox"
                name="brand"
                value={b.id}
                className="mr-2"
                defaultChecked={String(active.brand) === String(b.id)}
              />
              {b.name}
            </label>
          ))}
        </div>

        <div>
          <h5 className="text-sm font-medium mb-2">Price</h5>
          <div className="text-sm text-gray-600">₹{available.min ?? 0} — ₹{available.max ?? 99999}</div>
        </div>
      </div>
    </div>
  );
}
