'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { scrollToSection } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: 'hero' },
    { label: 'Menu', href: 'menu' },
    { label: 'Cabang', href: 'branches' },
    { label: 'Lacak Pesanan', href: 'tracking' }
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                Sweetie Fresh
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Juice & Dessert
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
              
