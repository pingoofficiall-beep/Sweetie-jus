'use client';

import React, { useState } from 'react';
import { branches } from '@/data/branches';
import { Branch } from '@/types/branch';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { generateBranchWhatsAppLink } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

export const BranchesSection: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  const handleGetDirections = (branch: Branch) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${branch.coordinates.lat},${branch.coordinates.lng}`;
    window.open(mapsUrl, '_blank');
  };

  const handleWhatsApp = (branch: Branch) => {
    const whatsappUrl = generateBranchWhatsAppLink(branch.whatsapp, branch.name);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="branches" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Lokasi Cabang
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan Sweetie Fresh terdekat dari lokasi Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d${selectedBranch.coordinates.lng}!3d${selectedBranch.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTAnMzAuNiJTIDEwNsKwNDcnMjcuNCJF!5e0!3m2!1sen!2sid!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Branch Cards */}
          <div className="order-1 lg:order-2 space-y-4">
            {branches.map((branch) => (
              <div
                key={branch.id}
                onClick={() => setSelectedBranch(branch)}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedBranch.id === branch.id
                    ? 'ring-2 ring-primary shadow-xl scale-[1.02]'
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="flex gap-4">
                  {/* Branch Image */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-24 h-24 rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${branch.image})` }}
                    />
                  </div>

                  {/* Branch Info */}
                  <div className="flex-1 space-y-3">
                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                      {branch.name}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span>{branch.address}, {branch.city}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{branch.hours.open} - {branch.hours.close} WIB</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGetDirections(branch);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        <Navigation className="w-4 h-4" />
                        Petunjuk Arah
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsApp(branch);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-heading font-bold text-3xl mb-4">
            Ingin Membuka Franchise?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Bergabunglah dengan keluarga Sweetie Fresh dan jadilah bagian dari bisnis juice terbaik!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 border-white"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};
                      
