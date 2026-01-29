'use client';

import React, { useState } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { menuItems } from '@/data/menu';
import { Product } from '@/types/menu';
import { generateWhatsAppLink } from '@/lib/whatsapp';

type FilterType = 'all' | 'jus' | 'es';

export const MenuSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = menuItems.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleOrder = (product: Product, size: 'regular' | 'jumbo') => {
    const whatsappUrl = generateWhatsAppLink('6281234567890', product, size, 1);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Menu Kami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pilihan juice dan dessert segar yang dibuat dari buah-buahan berkualitas tinggi
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200"
            />
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Semua ({menuItems.length})
            </button>
            <button
              onClick={() => setFilter('jus')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === 'jus'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              🍹 Jus ({menuItems.filter(p => p.category === 'jus').length})
            </button>
            <button
              onClick={() => setFilter('es')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === 'es'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              🧊 Es ({menuItems.filter(p => p.category === 'es').length})
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={handleOrder}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Produk tidak ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coba kata kunci lain atau lihat semua menu kami
            </p>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-3">
            🎉 Promo Spesial!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Beli 3 Jus Regular, Gratis 1 Jus Regular pilihan!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            *Syarat dan ketentuan berlaku
          </p>
        </div>
      </div>
    </section>
  );
};
          
