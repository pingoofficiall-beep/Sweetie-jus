import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { BranchesSection } from '@/components/sections/BranchesSection';
import { OrderTrackingSection } from '@/components/sections/OrderTrackingSection';
import { WhatsAppButton } from '@/components/features/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      <MenuSection />
      <BranchesSection />
      <OrderTrackingSection />
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="6281234567890"
        message="Halo Sweetie Fresh! 🍹 Saya ingin bertanya tentang produk dan layanan. Terima kasih!"
      />
    </main>
  );
}
