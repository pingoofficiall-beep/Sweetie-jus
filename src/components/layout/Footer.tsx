'use client';

import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SF</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Sweetie Fresh
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Juice & dessert segar untuk hidup sehat Anda. Dibuat dari buah pilihan berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-primary transition-colors duration-200">
                  Menu Kami
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-primary transition-colors duration-200">
                  Lokasi Cabang
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-primary transition-colors duration-200">
                  Lacak Pesanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Jam Operasional</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-primary">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="text-primary">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Hari Libur</span>
                <span className="text-primary">10:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>021-29345678</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>info@sweetiefresh.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Sweetie Fresh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
      
