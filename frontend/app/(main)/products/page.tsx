// app/products/page.tsx
'use client';

import React from 'react';
import ProductGrid from './ProductGrid';

// Hardcoded 3 products
const PRODUCTS = [
  {
    id: 'neo-001',
    title: 'Premium Charcoal - 5kg',
    price: 799.0,
    image: '/images/5-kg-pack.png',
    badge: 'Best Seller',
    short: 'High-heat, long burning — perfect for grilling.',
    stock: 100
  },
  {
    id: 'neo-002',
    title: 'Eco Briquettes - 10kg',
    price: 1299.0,
    image: '/images/10-kg-pack.png',
    badge: 'Eco Friendly',
    short: 'Sustainably produced briquettes for steady heat.',
    stock: 50
  },
  {
    id: 'neo-003',
    title: 'Starter Firelighter Pack',
    price: 199.0,
    image: '/images/Starter_pack.png',
    badge: 'New',
    short: 'Quick-light starters to get your charcoal burning fast.',
    stock: 250
  }
];

export default function ProductsPage() {
  const handleAdd = (id: string | number) => {
    // For now, just a quick feedback to console — replace with real cart logic later
    console.log('Add to cart:', id);
    alert(`Added ${id} to cart (hardcoded demo)`);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">Handpicked items — quick demo of NeoMart product grid.</p>
        </div>

        <ProductGrid products={PRODUCTS} onAdd={handleAdd} />
      </div>
    </main>
  );
}
