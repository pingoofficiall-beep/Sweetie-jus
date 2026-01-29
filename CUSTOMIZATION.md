# 🎨 Panduan Kustomisasi Sweetie Fresh

Panduan lengkap untuk mengubah dan menyesuaikan website sesuai kebutuhan bisnis Anda.

---

## 📝 Mengubah Konten

### 1. Mengubah Informasi Brand

**File:** `src/components/layout/Header.tsx` dan `Footer.tsx`

```tsx
// Header.tsx - Logo & Brand Name
<span className="font-heading font-bold text-xl">
  Sweetie Fresh  // ← Ganti dengan nama brand Anda
</span>
```

### 2. Mengubah Hero Section

**File:** `src/components/sections/HeroSection.tsx`

```tsx
// Headline
<h1>
  Kesegaran Alami  // ← Ganti headline
  <span>Setiap Teguk</span>  // ← Ganti tagline
</h1>

// Deskripsi
<p>
  Nikmati juice dan dessert segar...  // ← Ganti deskripsi
</p>

// Stats
<div className="text-3xl">17+</div>  // ← Update angka
<div className="text-sm">Varian Menu</div>
```

### 3. Menambah/Mengedit Menu Produk

**File:** `src/data/menu.ts`

```tsx
export const menuItems: Product[] = [
  {
    id: 'jus-mangga',           // Unique ID
    name: 'Jus Mangga',         // Nama produk
    description: 'Segar...',    // Deskripsi
    category: 'jus',            // 'jus' atau 'es'
    priceRegular: 12000,        // Harga regular
    priceJumbo: 16000,          // Harga jumbo (optional)
    image: 'https://...',       // URL gambar
    benefits: ['Vitamin C'],    // Manfaat
    available: true             // Ketersediaan
  },
  // Tambah produk baru di sini
];
```

### 4. Menambah/Mengedit Cabang

**File:** `src/data/branches.ts`

```tsx
export const branches: Branch[] = [
  {
    id: 'branch-1',
    name: 'Sweetie Fresh Central Park',
    address: 'Jl. Letjen S. Parman...',
    city: 'Jakarta Barat',
    phone: '021-29345678',
    whatsapp: '6281234567890',    // Format: 62xxx
    hours: {
      open: '08:00',
      close: '22:00'
    },
    coordinates: {
      lat: -6.1754,                // Google Maps latitude
      lng: 106.7906                // Google Maps longitude
    },
    image: 'https://...'
  },
  // Tambah cabang baru di sini
];
```

**Cara mendapat koordinat Google Maps:**
1. Buka Google Maps
2. Klik kanan di lokasi
3. Pilih koordinat untuk copy

---

## 🎨 Mengubah Design

### 1. Warna (Color Scheme)

**File:** `tailwind.config.ts`

```tsx
colors: {
  primary: {
    DEFAULT: "#FF8C42",  // ← Ganti warna utama
    light: "#FFA366",
    dark: "#E67A2E",
  },
  secondary: {
    DEFAULT: "#4CAF50",  // ← Ganti warna sekunder
    light: "#66BB6A",
    dark: "#388E3C",
  },
  accent: {
    DEFAULT: "#FFC107",  // ← Ganti warna aksen
    light: "#FFD54F",
    dark: "#FFA000",
  },
}
```

**Tools untuk memilih warna:**
- [Coolors.co](https://coolors.co)
- [Adobe Color](https://color.adobe.com)
- [Paletton](https://paletton.com)

### 2. Font (Typography)

**File:** `tailwind.config.ts`

```tsx
fontFamily: {
  sans: ["Inter", "sans-serif"],      // ← Body font
  heading: ["Poppins", "sans-serif"],  // ← Heading font
}
```

**Import font di:** `src/app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
```

**Font recommendations:**
- Heading: Poppins, Montserrat, Raleway, Playfair Display
- Body: Inter, Open Sans, Lato, Roboto

### 3. Spacing & Layout

**File:** `tailwind.config.ts`

```tsx
extend: {
  spacing: {
    '128': '32rem',  // Custom spacing
    '144': '36rem',
  },
  maxWidth: {
    '8xl': '88rem',  // Custom max-width
  }
}
```

### 4. Border Radius

```tsx
borderRadius: {
  'xl': '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',   // ← Tambah custom radius
}
```

---

## 📱 WhatsApp Integration

### 1. Mengubah Nomor WhatsApp

**Floating Button** - `src/app/page.tsx`:
```tsx
<WhatsAppButton 
  phoneNumber="6281234567890"  // ← Ganti dengan nomor Anda
  message="Halo..."
/>
```

**Product Orders** - `src/components/sections/MenuSection.tsx`:
```tsx
const handleOrder = (product, size) => {
  const whatsappUrl = generateWhatsAppLink(
    '6281234567890',  // ← Ganti nomor
    product, 
    size, 
    1
  );
  window.open(whatsappUrl, '_blank');
};
```

**Per Branch** - `src/data/branches.ts`:
```tsx
whatsapp: '6281234567891',  // ← Nomor per cabang
```

### 2. Mengubah Template Message

**File:** `src/lib/whatsapp.ts`

```tsx
const message = encodeURIComponent(
  `Halo Sweetie Fresh! 🍹\n\n` +  // ← Customize greeting
  `Saya mau pesan:\n` +
  `- ${product.name}...\n\n` +
  `Mohon konfirmasi. Terima kasih!`  // ← Customize closing
);
```

---

## 🗺️ Google Maps

### 1. API Key (Production)

**File:** `next.config.js`

```javascript
module.exports = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_KEY: 'YOUR_API_KEY_HERE'
  }
}
```

**Cara mendapat API key:**
1. Buka [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable Maps JavaScript API
4. Create credentials → API Key
5. Add key ke `.env.local`

### 2. Mengubah Style Map

**File:** `src/components/sections/BranchesSection.tsx`

Ganti iframe URL dengan embeded map dari Google Maps:
1. Buka Google Maps
2. Pilih lokasi
3. Click "Share" → "Embed a map"
4. Copy HTML code
5. Paste ke component

---

## 🎭 Dark Mode

### Customize Dark Mode Colors

**File:** `tailwind.config.ts`

```tsx
// Default dark colors
dark: {
  bg: '#121212',      // ← Background
  surface: '#1E1E1E', // ← Surface/Cards
  text: '#FFFFFF',    // ← Text
}
```

**File:** `src/app/globals.css`

```css
/* Custom dark mode styles */
.dark {
  --background: #0a0a0a;
  --surface: #1a1a1a;
}
```

### Disable Dark Mode (Optional)

**File:** `src/components/layout/Header.tsx`

Comment out ThemeToggle:
```tsx
{/* <ThemeToggle /> */}
```

---

## 🖼️ Images

### 1. Upload Images Sendiri

**Struktur folder:**
```
public/
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── products/
│   │   ├── jus-mangga.jpg
│   │   └── jus-alpukat.jpg
│   └── branches/
│       ├── branch-1.jpg
│       └── branch-2.jpg
```

**Update path:**
```tsx
image: '/images/products/jus-mangga.jpg'
```

### 2. Image Optimization

**Gunakan Next.js Image component:**

```tsx
import Image from 'next/image';

<Image
  src="/images/product.jpg"
  alt="Product"
  width={500}
  height={500}
  quality={85}
  priority // untuk images di atas fold
/>
```

### 3. External Images

**File:** `next.config.js`

```javascript
images: {
  domains: [
    'images.unsplash.com',
    'your-cdn.com',  // ← Tambah domain Anda
  ],
}
```

---

## 🔍 SEO Optimization

### 1. Meta Tags

**File:** `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Business Name",
  description: "Your description here...",
  keywords: ["keyword1", "keyword2"],
  
  openGraph: {
    title: "Your Business",
    description: "Description",
    images: ['/og-image.jpg'],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Your Business",
  }
};
```

### 2. Structured Data (JSON-LD)

Add to `layout.tsx`:
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Sweetie Fresh",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "...",
      "addressLocality": "Jakarta"
    }
  })}
</script>
```

---

## 📊 Analytics

### Google Analytics

**File:** `src/app/layout.tsx`

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🎯 Advanced Customizations

### 1. Menambah Section Baru

Create new component:
```tsx
// src/components/sections/TestimonialsSection.tsx
export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      {/* Your content */}
    </section>
  );
};
```

Import ke `page.tsx`:
```tsx
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

// Add to page
<TestimonialsSection />
```

### 2. Menambah Animasi Custom

**File:** `tailwind.config.ts`

```tsx
animation: {
  'bounce-slow': 'bounce 3s infinite',
  'wiggle': 'wiggle 1s ease-in-out infinite',
},
keyframes: {
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  }
}
```

### 3. Loading States

```tsx
const [loading, setLoading] = useState(false);

<Button loading={loading}>
  Click Me
</Button>
```

---

## 🐛 Debugging Tips

### 1. Check Console Errors
Open browser DevTools (F12) → Console

### 2. TypeScript Errors
```bash
npm run type-check
```

### 3. Build Errors
```bash
npm run build
```

### 4. Clear Cache
```bash
rm -rf .next
npm run dev
```

---

## 📞 Need Help?

- 📧 Email: support@sweetiefresh.com
- 💬 WhatsApp: +62 812-3456-7890
- 📖 Documentation: [Link]

---

**Happy Customizing! 🎨**
