'use client';

import React, { useState } from 'react';
import { Product } from '@/types/menu';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product, size: 'regular' | 'jumbo') => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [selectedSize, setSelectedSize] = useState<'regular' | 'jumbo'>('regular');
  const [isHovered, setIsHovered] = useState(false);

  const currentPrice = selectedSize === 'jumbo' && product.priceJumbo
    ? product.priceJumbo
    : product.priceRegular;

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {product.benefits.slice(0, 2).map((benefit, idx) => (
                <span
                  key={idx}
                  className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-gray-800 dark:text-gray-200"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Description */}
        <div>
          <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Size Selection (if jumbo available) */}
        {product.priceJumbo && (
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSize('regular')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedSize === 'regular'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Regular
            </button>
            <button
              onClick={() => setSelectedSize('jumbo')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedSize === 'jumbo'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Jumbo
            </button>
          </div>
        )}

        {/* Price & Order Button */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="text-2xl font-bold text-primary">
              {formatPrice(currentPrice)}
            </div>
            {selectedSize === 'regular' && product.priceJumbo && (
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Jumbo: {formatPrice(product.priceJumbo)}
              </div>
            )}
          </div>

          <button
            onClick={() => onOrder(product, selectedSize)}
            className="bg-secondary hover:bg-secondary-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Pesan sekarang"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
          
