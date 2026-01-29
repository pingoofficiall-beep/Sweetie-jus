export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'jus' | 'es';
  priceRegular: number;
  priceJumbo?: number;
  image: string;
  benefits: string[];
  available: boolean;
}

export interface CartItem {
  product: Product;
  size: 'regular' | 'jumbo';
  quantity: number;
}
