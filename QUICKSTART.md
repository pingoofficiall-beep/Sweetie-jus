# ⚡ Quick Start Guide - Sweetie Fresh

Panduan super cepat untuk menjalankan project dalam 5 menit!

---

## 🚀 3 Langkah Mulai

### 1️⃣ Install Dependencies (2 menit)

```bash
cd sweetie-fresh
npm install
```

### 2️⃣ Run Development Server (30 detik)

```bash
npm run dev
```

### 3️⃣ Buka Browser

```
http://localhost:3000
```

**Done! Website sudah running! 🎉**

---

## ✅ Checklist Pertama Kali

Setelah website jalan, lakukan ini:

### A. Test Fitur Utama

- [ ] Scroll semua sections (Hero, Menu, Branches, Tracking)
- [ ] Toggle dark mode (klik icon moon/sun di header)
- [ ] Search menu (coba ketik "mangga")
- [ ] Filter menu (klik "Jus" atau "Es")
- [ ] Klik product card (pilih size, lalu order)
- [ ] Test WhatsApp button (floating button kanan bawah)
- [ ] Klik branch card (liat Google Maps)
- [ ] Test order tracking (input: SF-20260129-001)

### B. Test Responsive

- [ ] Desktop view (> 1024px)
- [ ] Tablet view (768-1024px)  
- [ ] Mobile view (< 768px)

**Cara test:** Buka DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)

---

## 🎨 Kustomisasi Cepat

### Ubah Brand Name (2 menit)

**File:** `src/components/layout/Header.tsx` & `Footer.tsx`

```tsx
// Cari dan ganti:
"Sweetie Fresh" → "Nama Brand Anda"
```

### Ubah Warna (3 menit)

**File:** `tailwind.config.ts`

```tsx
colors: {
  primary: {
    DEFAULT: "#FF8C42",  // ← Ganti dengan warna brand Anda
  }
}
```

### Ubah Nomor WhatsApp (5 menit)

**3 Files:**

1. `src/app/page.tsx` (line 13)
2. `src/components/sections/MenuSection.tsx` (line 17)  
3. `src/data/branches.ts` (per cabang)

```tsx
phoneNumber="6281234567890"  // ← Ganti dengan nomor Anda
```

Format: **62** + nomor tanpa 0 di depan
- Contoh: 081234567890 → 6281234567890

### Tambah/Edit Menu (10 menit)

**File:** `src/data/menu.ts`

```tsx
{
  id: 'jus-mangga',
  name: 'Jus Mangga',           // ← Edit
  priceRegular: 12000,          // ← Edit harga
  priceJumbo: 16000,
  image: 'https://...',         // ← Upload image Anda
  available: true
}
```

---

## 🚀 Deploy ke Vercel (10 menit)

### Cara Tercepat:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo>
   git push -u origin main
   ```

2. **Connect ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login with GitHub
   - Import repository
   - Click "Deploy"

3. **Done!** Website live di `yourproject.vercel.app`

### Custom Domain (Optional):
- Vercel Dashboard → Settings → Domains
- Add domain → Update DNS

---

## 📝 Common Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Build project
npm run start        # Start production server

# Utility
npm run lint         # Check code quality
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Error

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

Check `next.config.js`:
```javascript
images: {
  domains: ['your-image-domain.com'],
}
```

---

## 📚 Next Steps

Setelah basic setup:

1. **Read Docs:**
   - `README.md` - Overview lengkap
   - `CUSTOMIZATION.md` - Panduan customize (50+ tips)
   - `DEPLOYMENT.md` - Deploy ke production

2. **Customize:**
   - Update brand name & logo
   - Change colors
   - Edit menu items
   - Update branch info
   - Upload own images

3. **Deploy:**
   - Vercel (recommended)
   - Netlify
   - VPS

4. **Enhance:**
   - Add shopping cart
   - Integrate payment
   - Add reviews
   - Setup analytics

---

## 💡 Pro Tips

1. **Use Chrome DevTools** untuk debug
2. **Test di real mobile device** sebelum launch
3. **Enable HTTPS** untuk production
4. **Setup Google Analytics** untuk track visitors
5. **Test WhatsApp links** dengan nomor asli
6. **Optimize images** sebelum upload (WebP, compress)
7. **Backup code** ke GitHub
8. **Check Lighthouse score** (target 90+)

---

## 🎯 Must-Do Before Launch

Checklist final sebelum launch production:

- [ ] Update semua nomor WhatsApp
- [ ] Update branch data (alamat, koordinat, jam)
- [ ] Upload images sendiri
- [ ] Test semua WhatsApp links
- [ ] Check Google Maps display
- [ ] Test order tracking
- [ ] Test dark mode
- [ ] Test responsive di mobile/tablet
- [ ] Setup SSL (HTTPS)
- [ ] Add Google Analytics (optional)
- [ ] Update SEO metadata
- [ ] Test di multiple browsers
- [ ] Check Lighthouse performance

---

## 📞 Butuh Bantuan?

**Quick Answers:**
- Lihat error di Console (F12)
- Read error message carefully
- Google error message
- Check dokumentasi

**Still Stuck?**
- 📧 Email: support@sweetiefresh.com
- 💬 WhatsApp: +62 812-3456-7890
- 📖 Docs: README.md

---

## 🎉 You're Ready!

Website sudah siap digunakan dan di-customize!

**Selamat berkarya! 🚀🍹**

---

### Quick Reference

```bash
# Start
npm run dev

# Build  
npm run build

# Deploy
vercel

# That's it! 🎯
```
