# 🍹 Sweetie Fresh - Landing Page

Landing page modern dan responsif untuk bisnis juice & dessert **Sweetie Fresh**.

## ✨ Fitur Utama

- 🎨 **Dark Mode & Light Mode** - Toggle tema dengan smooth transition
- 📱 **Fully Responsive** - Optimal di semua ukuran layar
- 🍹 **Menu Interaktif** - Grid produk dengan filter & search
- 📍 **Lokasi Cabang** - Integrasi Google Maps dengan 4 cabang
- 📦 **Order Tracking** - Lacak status pesanan real-time
- 💬 **WhatsApp Integration** - Quick order via WhatsApp
- ⚡ **Performance Optimized** - Fast loading dengan Next.js 14

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Animations:** Framer Motion

## 📦 Instalasi

1. Clone repository
```bash
git clone <repository-url>
cd sweetie-fresh
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Buka browser di `http://localhost:3000`

## 🏗️ Struktur Project

```
sweetie-fresh/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   ├── ui/                # UI components
│   │   └── features/          # Feature components
│   ├── data/                  # Static data
│   ├── lib/                   # Utilities
│   ├── types/                 # TypeScript types
│   └── hooks/                 # Custom hooks
├── public/                    # Static assets
└── package.json
```

## 🎯 Fitur Detail

### 1. Hero Section
- Headline menarik dengan CTA buttons
- Animasi smooth entrance
- Stats display (17+ menu, 4 cabang, 100% fresh)

### 2. Menu Section
- Grid responsif (1-4 kolom)
- Filter by category (Jus/Es)
- Search functionality
- Product cards dengan hover effects
- Size selection (Regular/Jumbo)
- Quick order to WhatsApp

### 3. Branches Section
- Google Maps integration
- 4 cabang di Jakarta
- Informasi lengkap (alamat, jam, telpon)
- Get directions button
- WhatsApp per cabang

### 4. Order Tracking
- Input order ID
- Progress timeline visual
- Real-time status updates
- Estimated delivery time
- Order details display

### 5. Dark Mode
- LocalStorage persistence
- System preference detection
- Smooth color transitions
- All components support dark mode

## 🔧 Konfigurasi

### WhatsApp Number
Edit nomor WhatsApp di:
- `src/app/page.tsx` (floating button)
- `src/components/sections/MenuSection.tsx` (product orders)
- `src/data/branches.ts` (per cabang)

### Branch Data
Edit data cabang di `src/data/branches.ts`

### Menu Items
Edit produk di `src/data/menu.ts`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build untuk production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Deploy ke Vercel
```bash
vercel
```

## 🎨 Design System

### Colors
- Primary: Orange (#FF8C42)
- Secondary: Green (#4CAF50)
- Accent: Yellow (#FFC107)

### Typography
- Heading: Poppins
- Body: Inter

### Spacing
Menggunakan Tailwind spacing scale (4px base)

## 📝 To-Do / Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Payment gateway integration
- [ ] Customer reviews section
- [ ] Blog/artikel kesehatan
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Admin dashboard
- [ ] Real-time inventory
- [ ] Loyalty program

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use for your projects!

## 👨‍💻 Developer

Developed with ❤️ by Claude AI

## 📞 Support

Untuk pertanyaan atau masalah, hubungi:
- Email: info@sweetiefresh.com
- WhatsApp: +62 812-3456-7890

---

**Sweetie Fresh** - Kesegaran Alami Setiap Teguk 🍹
