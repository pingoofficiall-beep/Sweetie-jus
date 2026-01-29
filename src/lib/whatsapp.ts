import { Product } from '@/types/menu';

export const generateWhatsAppLink = (
  phoneNumber: string,
  product: Product,
  size: 'regular' | 'jumbo',
  quantity: number = 1
): string => {
  const price = size === 'jumbo' && product.priceJumbo 
    ? product.priceJumbo 
    : product.priceRegular;
  
  const totalPrice = price * quantity;
  const sizeText = size === 'jumbo' ? 'Jumbo' : 'Regular';
  
  const message = encodeURIComponent(
    `Halo Sweetie Fresh! 🍹\n\n` +
    `Saya mau pesan:\n` +
    `- ${product.name} (${sizeText}) x${quantity}\n` +
    `  Harga: Rp ${totalPrice.toLocaleString('id-ID')}\n\n` +
    `Mohon konfirmasi ketersediaan. Terima kasih!`
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const generateBranchWhatsAppLink = (
  phoneNumber: string,
  branchName: string
): string => {
  const message = encodeURIComponent(
    `Halo Sweetie Fresh ${branchName}! 🍹\n\n` +
    `Saya ingin bertanya tentang produk dan layanan. Terima kasih!`
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const generateOrderTrackingWhatsAppLink = (
  phoneNumber: string,
  orderId: string
): string => {
  const message = encodeURIComponent(
    `Halo Sweetie Fresh! 🍹\n\n` +
    `Saya ingin melacak pesanan dengan ID: ${orderId}\n\n` +
    `Mohon infonya. Terima kasih!`
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
