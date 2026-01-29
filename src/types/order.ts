export type OrderStatusType = 'received' | 'processing' | 'delivering' | 'completed';

export interface OrderStatus {
  orderId: string;
  status: OrderStatusType;
  timeline: {
    received: string;
    processing?: string;
    delivering?: string;
    completed?: string;
  };
  estimatedArrival?: string;
  items: {
    productId: string;
    productName: string;
    size: 'regular' | 'jumbo';
    quantity: number;
  }[];
  customer: {
    name: string;
    phone: string;
    address: string;
  };
}
