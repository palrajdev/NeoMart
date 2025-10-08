// components/Hero.jsx
import React from "react";

export default function Hero({ title = "Products", subtitle }) {
  return (
    <div className="bg-gradient-to-r from-sky-50 to-white rounded-lg p-6 mb-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
}
