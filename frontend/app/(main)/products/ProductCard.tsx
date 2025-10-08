import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@heroui/button'

export interface Product {
  id: string | number
  title: string
  image: string
  price: number
  badge?: string
  short?: string
  stock?: number
}

export default function ProductCard({
  product,
  onAdd,
  className = '',
}: {
  product: Product
  onAdd?: (id: any) => void
  className?: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-250 ${className}`}
    >
      {/* image area */}
      <div className="relative w-full h-72 md:h-56 lg:h-72">
        <Image
          src={product.image}
          alt={product.title}
          fill
          loading="lazy"
          className="object-cover w-full h-full"
        />

        {/* subtle gradient + View overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <Link
          href={`/products/${product.id}`}
          className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold shadow-md ring-1 ring-black/6 backdrop-blur-sm hover:translate-y-0.5 transition-transform"
          aria-label={`View ${product.title}`}
        >
          View product
        </Link>
      </div>

      {/* body */}
      <div className="p-4">
        {product.badge && (
          <div className="inline-block mb-2 px-2 py-1 text-xs font-semibold rounded bg-amber-100 text-amber-800">
            {product.badge}
          </div>
        )}

        <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>

        {product.short && <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.short}</p>}

        <div className="mt-4 flex items-start justify-between">
          {/* price + stock + standalone view link (outside buttons) */}
          <div>
            <div className="text-lg font-semibold text-emerald-600">₹{product.price}</div>
            <div className="text-xs text-gray-500">{product.stock && product.stock > 0 ? 'In stock' : 'Out of stock'}</div>

            {/* "View" shown here as well (outside the button group) for easy access on non-hover devices */}
            <div className="mt-2">
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline"
              >
                View
              </Link>
            </div>
          </div>

          {/* action column: Add button */}
          <div className="flex flex-col items-end gap-2">
            <Button
              color="success"
              size="md"
              radius="md"
              className="font-semibold px-4"
              onPress={() => onAdd?.(product.id)}
              disabled={product.stock === 0}
              isDisabled={product.stock === 0}
              aria-disabled={product.stock === 0}
            >
              Add
            </Button>

            {/* small secondary action for quick add or wishlist (optional hook) */}
            <Button
              type="button"
              className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50"
              aria-label={`Quick add ${product.title}`}
              onPress={() => onAdd?.(product.id)}
            >
              + Quick add
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
