'use client';

import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { OrderStatus, OrderStatusType } from '@/types/order';

export const OrderTrackingSection: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock data untuk demo
  const mockOrderData: OrderStatus = {
    orderId: 'SF-20260129-001',
    status: 'delivering',
    timeline: {
      received: '10:30',
      processing: '10:35',
      delivering: '11:00',
    },
    estimatedArrival: '11:30',
    items: [
      {
        productId: 'jus-mangga',
        productName: 'Jus Mangga',
        size: 'jumbo',
        quantity: 2
      },
      {
        productId: 'jus-alpukat',
        productName: 'Jus Alpukat',
        size: 'regular',
        quantity: 1
      }
    ],
    customer: {
      name: 'John Doe',
      phone: '081234567890',
      address: 'Jl. Sudirman No. 123, Jakarta'
    }
  };

  const handleTrack = async () => {
    setIsLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      if (orderId === 'SF-20260129-001' || orderId.startsWith('SF-')) {
        setOrderStatus(mockOrderData);
        setError(null);
      } else {
        setOrderStatus(null);
        setError('Pesanan tidak ditemukan. Periksa kembali nomor pesanan Anda.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const statusSteps = [
    { key: 'received', label: 'Pesanan Diterima', icon: Package },
    { key: 'processing', label: 'Sedang Diproses', icon: Clock },
    { key: 'delivering', label: 'Dalam Perjalanan', icon: Truck },
    { key: 'completed', label: 'Selesai', icon: CheckCircle }
  ];

  const getStepStatus = (step: string): 'completed' | 'active' | 'pending' => {
    if (!orderStatus) return 'pending';
    
    const statusOrder: OrderStatusType[] = ['received', 'processing', 'delivering', 'completed'];
    const currentIndex = statusOrder.indexOf(orderStatus.status);
    const stepIndex = statusOrder.indexOf(step as OrderStatusType);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <section id="tracking" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Lacak Pesanan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Masukkan nomor pesanan untuk melihat status pengiriman Anda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Masukkan nomor pesanan (contoh: SF-20260129-001)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200"
                />
              </div>
              <Button
                onClick={handleTrack}
                loading={isLoading}
                disabled={!orderId.trim()}
                className="sm:w-auto"
              >
                <Search className="w-5 h-5 mr-2" />
                Lacak
              </Button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Order Status Display */}
          {orderStatus && (
            <div className="space-y-6 animate-fade-in">
              {/* Order Info Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                      Pesanan #{orderStatus.orderId}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {orderStatus.customer.name} • {orderStatus.customer.phone}
                    </p>
                  </div>
                  {orderStatus.estimatedArrival && (
                    <div className="text-right">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Estimasi Tiba</div>
                      <div className="text-xl font-bold text-primary">{orderStatus.estimatedArrival}</div>
                    </div>
                  )}
                </div>

                {/* Progress Steps */}
                <div className="relative">
                  <div className="flex justify-between mb-12">
                    {statusSteps.map((step, index) => {
                      const status = getStepStatus(step.key);
                      const Icon = step.icon;
                      const time = orderStatus.timeline[step.key as keyof typeof orderStatus.timeline];

                      return (
                        <div key={step.key} className="flex flex-col items-center flex-1 relative">
                          {/* Connector Line */}
                          {index < statusSteps.length - 1 && (
                            <div className="absolute top-6 left-1/2 w-full h-1">
                              <div
                                className={`h-full transition-all duration-500 ${
                                  status === 'completed'
                                    ? 'bg-primary'
                                    : 'bg-gray-200 dark:bg-gray-700'
                                }`}
                              />
                            </div>
                          )}

                          {/* Icon Circle */}
                          <div className="relative z-10">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                                status === 'completed'
                                  ? 'bg-primary text-white shadow-lg scale-110'
                                  : status === 'active'
                                  ? 'bg-primary text-white shadow-lg scale-125 animate-pulse'
                                  : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                          </div>

                          {/* Label & Time */}
                          <div className="text-center mt-4 space-y-1">
                            <div
                              className={`text-sm font-medium ${
                                status === 'pending'
                                  ? 'text-gray-400 dark:text-gray-500'
                                  : 'text-gray-900 dark:text-white'
                              }`}
                            >
                              {step.label}
                            </div>
                            {time && (
                              <div className="text-xs text-primary font-semibold">{time}</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Items List */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Detail Pesanan:</h4>
                  <div className="space-y-2">
                    {orderStatus.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          {item.productName} ({item.size}) x{item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex items-start gap-2 text-sm">
                      <Package className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Alamat Pengiriman</div>
                        <div className="text-gray-600 dark:text-gray-400">{orderStatus.customer.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ada pertanyaan tentang pesanan Anda?
                </p>
                <Button variant="primary">
                  Hubungi Customer Service
                </Button>
              </div>
            </div>
          )}

          {/* Demo Note */}
          {!orderStatus && !error && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
              <p className="text-blue-800 dark:text-blue-300">
                💡 <strong>Demo:</strong> Coba masukkan <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">SF-20260129-001</code> untuk melihat contoh tracking
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
      
