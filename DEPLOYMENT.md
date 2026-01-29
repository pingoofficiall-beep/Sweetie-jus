# 🚀 Panduan Deployment Sweetie Fresh

## Deployment ke Vercel (Recommended)

Vercel adalah platform deployment terbaik untuk Next.js karena dibuat oleh tim yang sama.

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Click "New Project"
   - Import repository `sweetie-fresh`
   - Click "Deploy"
   - Selesai! Website live dalam 2-3 menit

### Custom Domain
1. Di Vercel dashboard → Settings → Domains
2. Add custom domain (misal: sweetiefresh.com)
3. Update DNS records sesuai instruksi
4. Tunggu propagasi DNS (5-30 menit)

### Environment Variables
Jika ada API keys atau secrets:
1. Dashboard → Settings → Environment Variables
2. Add variable (misal: NEXT_PUBLIC_GOOGLE_MAPS_KEY)
3. Redeploy project

---

## Deployment ke Netlify

### Via Netlify CLI:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Via GitHub Integration:

1. Push code ke GitHub
2. Login ke [netlify.com](https://netlify.com)
3. New site from Git
4. Connect to GitHub
5. Select repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Deploy site

---

## Deployment ke VPS (DigitalOcean, AWS, dll)

### Requirements:
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### 1. Setup Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

### 2. Deploy Application

```bash
# Clone repository
git clone <your-repo> /var/www/sweetie-fresh
cd /var/www/sweetie-fresh

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "sweetie-fresh" -- start
pm2 save
pm2 startup
```

### 3. Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/sweetie-fresh
```

Add configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/sweetie-fresh /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Certificate (Optional but Recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Deployment ke Docker

### 1. Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### 2. Create .dockerignore

```
node_modules
.next
.git
.gitignore
README.md
.env*.local
```

### 3. Build & Run

```bash
# Build image
docker build -t sweetie-fresh .

# Run container
docker run -p 3000:3000 sweetie-fresh
```

### 4. Docker Compose (Optional)

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## Post-Deployment Checklist

- [ ] Website accessible via domain
- [ ] SSL certificate installed (HTTPS)
- [ ] Dark mode works correctly
- [ ] All images loading
- [ ] WhatsApp links functional
- [ ] Google Maps displaying correctly
- [ ] Order tracking works
- [ ] Mobile responsive
- [ ] Performance score > 90 (Lighthouse)
- [ ] SEO meta tags present
- [ ] Analytics installed (if needed)
- [ ] Favicon showing
- [ ] 404 page works

---

## Performance Optimization Tips

1. **Enable Image Optimization**
   - Next.js automatically optimizes images
   - Use WebP format when possible

2. **Enable Caching**
   ```javascript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/:all*(svg|jpg|png)',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ]
     },
   }
   ```

3. **Use CDN**
   - Vercel provides automatic CDN
   - Or use Cloudflare

4. **Compress Assets**
   ```bash
   npm install compression
   ```

---

## Monitoring & Analytics

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to layout.tsx:
```tsx
import Script from 'next/script'

// In layout
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
  strategy="afterInteractive"
/>
```

### Vercel Analytics
- Automatically included in Vercel deployments
- View in Vercel dashboard

---

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find process
lsof -ti:3000

# Kill process
kill -9 <PID>
```

### Environment Variables Not Working
- Prefix with `NEXT_PUBLIC_` for client-side
- Restart dev server after adding variables

---

## Support

Butuh bantuan deployment?
- Email: support@sweetiefresh.com
- WhatsApp: +62 812-3456-7890

**Happy Deploying! 🚀**
