'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-green-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🍹 Fresh & Healthy
              </span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight">
              Kesegaran Alami
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {' '}Setiap Teguk
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Nikmati juice dan dessert segar dari buah pilihan berkualitas tinggi. 
              Sehat, lezat, dan menyegarkan untuk gaya hidup aktif Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('menu')}
              >
                Lihat Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('branches')}
              >
                Temukan Cabang
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">17+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Varian Menu</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cabang</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Buah Segar</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full h-[500px] md:h-[600px]">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6 transform" />
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-3xl shadow-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=1000&fit=crop)'
                }}
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-pulse-slow">
                <div className="text-2xl">🥭</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">🍓</div>
              </div>
              <div className="absolute top-1/4 -left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-pulse-slow" style={{ animationDelay: '2s' }}>
                <div className="text-2xl">🍊</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('menu')}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          >
            <span className="text-sm mb-2">Scroll untuk lihat menu</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
