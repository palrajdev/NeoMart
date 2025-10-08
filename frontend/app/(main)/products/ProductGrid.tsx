// components/products/ProductGrid.tsx
'use client';

import React from 'react';
import ProductCard from './ProductCard';

type ProductType = {
  id: string | number;
  title: string;
  price: number;
  image: string;
  badge?: string;
  short?: string;
  stock?: number;
};

export default function ProductGrid({ products, onAdd }: { products: ProductType[]; onAdd?: (id:any)=>void; }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
