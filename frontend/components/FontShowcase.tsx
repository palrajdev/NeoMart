import React from 'react';

const FontShowcase = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">
          Multiple Font Implementation Guide
        </h1>
        <p className="font-body text-lg text-gray-600">
          Your ecommerce portal now supports multiple fonts for different use cases
        </p>
      </div>

      {/* Font Examples */}
      <div className="grid gap-8">
        
        {/* Heading Font - Montserrat */}
        <div className="border rounded-lg p-6">
          <h2 className="font-heading text-2xl font-bold mb-3 text-blue-600">
            Heading Font (Montserrat)
          </h2>
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-black">Main Product Title</h1>
            <h2 className="font-heading text-3xl font-bold">Category Headers</h2>
            <h3 className="font-heading text-2xl font-semibold">Section Titles</h3>
            <h4 className="font-heading text-xl font-medium">Subsection Headers</h4>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Usage: <code className="font-mono bg-gray-100 px-2 py-1 rounded">font-heading</code>
          </p>
        </div>

        {/* Display Font - Poppins */}
        <div className="border rounded-lg p-6">
          <h2 className="font-heading text-2xl font-bold mb-3 text-green-600">
            Display Font (Poppins)
          </h2>
          <div className="space-y-2">
            <div className="font-display text-5xl font-light">$299.99</div>
            <div className="font-display text-3xl font-medium">Special Offer!</div>
            <div className="font-display text-2xl font-semibold">Featured Products</div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Usage: <code className="font-mono bg-gray-100 px-2 py-1 rounded">font-display</code>
          </p>
        </div>

        {/* Body Font - Roboto */}
        <div className="border rounded-lg p-6">
          <h2 className="font-heading text-2xl font-bold mb-3 text-purple-600">
            Body Font (Roboto)
          </h2>
          <div className="font-body space-y-3">
            <p className="text-base">
              This is the main body text font used for product descriptions, 
              user reviews, and general content throughout your ecommerce portal.
            </p>
            <p className="text-sm">
              Smaller text for additional details, specifications, and fine print.
            </p>
            <p className="text-lg font-medium">
              Emphasized body text for important information.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Usage: <code className="font-mono bg-gray-100 px-2 py-1 rounded">font-body</code>
          </p>
        </div>

        {/* Serif Font - Playfair Display */}
        <div className="border rounded-lg p-6">
          <h2 className="font-heading text-2xl font-bold mb-3 text-red-600">
            Serif Font (Playfair Display)
          </h2>
          <div className="font-serif space-y-3">
            <h3 className="text-3xl font-bold">Luxury Collection</h3>
            <p className="text-lg">
              Perfect for premium product lines, testimonials, and elegant branding elements.
            </p>
            <blockquote className="text-xl italic border-l-4 border-gray-300 pl-4">
              "An exceptional shopping experience with unmatched quality."
            </blockquote>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Usage: <code className="font-mono bg-gray-100 px-2 py-1 rounded">font-serif</code>
          </p>
        </div>

        {/* Sans Font - Inter */}
        <div className="border rounded-lg p-6">
          <h2 className="font-heading text-2xl font-bold mb-3 text-indigo-600">
            Sans Font (Inter) - Default
          </h2>
          <div className="font-sans space-y-3">
            <p className="text-base">
              This is your default sans-serif font, great for navigation, buttons, 
              forms, and general UI elements.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium">
                Add to Cart
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded">
                View Details
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Usage: <code className="font-mono bg-gray-100 px-2 py-1 rounded">font-sans</code> (default)
          </p>
        </div>

        {/* Mono Font - Fira Code */}
        <div className="border rounded-lg p-6">
          <h2 className="font-heading text-2xl font-bold mb-3 text-gray-600">
            Mono Font (Fira Code)
          </h2>
          <div className="font-mono space-y-3">
            <div className="bg-gray-100 p-3 rounded">
              <div>Product ID: #PRD-2024-001</div>
              <div>SKU: LAPTOP-DELL-XPS13</div>
              <div>Tracking: 1Z999AA1234567890</div>
            </div>
            <code className="block bg-black text-green-400 p-3 rounded">
              npm install @heroui/react
            </code>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Usage: <code className="font-mono bg-gray-100 px-2 py-1 rounded">font-mono</code>
          </p>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-heading text-xl font-bold mb-4 text-blue-800">
          Font Usage Guidelines for Ecommerce
        </h3>
        <div className="font-body space-y-3 text-blue-700">
          <div><strong>Headings (font-heading):</strong> Product titles, category names, section headers</div>
          <div><strong>Display (font-display):</strong> Prices, promotional text, call-to-action elements</div>
          <div><strong>Body (font-body):</strong> Product descriptions, reviews, general content</div>
          <div><strong>Serif (font-serif):</strong> Premium branding, testimonials, luxury products</div>
          <div><strong>Sans (font-sans):</strong> Navigation, buttons, forms, UI elements (default)</div>
          <div><strong>Mono (font-mono):</strong> Product codes, tracking numbers, technical specs</div>
        </div>
      </div>
    </div>
  );
};

export default FontShowcase;
