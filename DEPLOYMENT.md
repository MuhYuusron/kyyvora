# 🚀 Panduan Deployment Kyyvora Website

Panduan lengkap untuk deploy website Kyyvora ke berbagai platform hosting.

---

## 📋 Persiapan Sebelum Deploy

### 1. Build Production
```bash
cd kyyvora-website
npm run build
```

Ini akan membuat folder `build/` yang berisi file production-ready.

### 2. Test Build Locally
```bash
npm install -g serve
serve -s build
```

Buka `http://localhost:3000` untuk test build production.

### 3. Environment Variables
Copy `.env.example` ke `.env` dan isi dengan nilai yang sesuai:
```bash
cp .env.example .env
```

---

## 🌐 Deploy ke Vercel (Recommended)

Vercel adalah platform hosting yang sangat cocok untuk React apps.

### Cara Deploy:

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

#### Via Vercel Dashboard
1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Klik "Import Project"
4. Pilih repository GitHub Anda
5. Klik "Deploy"

### Konfigurasi:
- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

---

## 🔷 Deploy ke Netlify

### Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Via Netlify Dashboard
1. Push code ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. Klik "New site from Git"
4. Pilih repository
5. Konfigurasi:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
6. Klik "Deploy site"

### Redirect Rules
Buat file `public/_redirects`:
```
/*    /index.html   200
```

---

## 📦 Deploy ke GitHub Pages

### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Update package.json
Tambahkan di `package.json`:
```json
{
  "homepage": "https://username.github.io/kyyvora-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 3. Deploy
```bash
npm run deploy
```

Website akan tersedia di `https://username.github.io/kyyvora-website`

---

## ☁️ Deploy ke AWS S3 + CloudFront

### 1. Build Project
```bash
npm run build
```

### 2. Upload ke S3
```bash
# Install AWS CLI
# https://aws.amazon.com/cli/

# Configure AWS CLI
aws configure

# Create S3 bucket
aws s3 mb s3://kyyvora-website

# Upload files
aws s3 sync build/ s3://kyyvora-website --acl public-read
```

### 3. Enable Static Website Hosting
```bash
aws s3 website s3://kyyvora-website --index-document index.html --error-document index.html
```

### 4. Setup CloudFront (Optional)
- Buat CloudFront distribution
- Set origin ke S3 bucket
- Configure SSL certificate
- Set custom domain

---

## 🐳 Deploy dengan Docker

### 1. Buat Dockerfile
```dockerfile
# Build stage
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Buat nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 3. Build dan Run
```bash
# Build image
docker build -t kyyvora-website .

# Run container
docker run -p 80:80 kyyvora-website
```

---

## 🔧 Deploy ke VPS (Ubuntu)

### 1. Setup Server
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2
sudo npm install -g pm2
```

### 2. Upload Project
```bash
# Via Git
git clone https://github.com/username/kyyvora-website.git
cd kyyvora-website

# Install dependencies
npm install

# Build
npm run build
```

### 3. Setup Nginx
```bash
sudo nano /etc/nginx/sites-available/kyyvora
```

Isi dengan:
```nginx
server {
    listen 80;
    server_name kyyvora.com www.kyyvora.com;
    root /path/to/kyyvora-website/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/kyyvora /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Setup SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d kyyvora.com -d www.kyyvora.com
```

---

## 🔐 Keamanan untuk Production

### 1. Environment Variables
Jangan commit file `.env` ke Git. Gunakan environment variables di hosting platform.

### 2. HTTPS
Selalu gunakan HTTPS di production:
- Vercel/Netlify: Otomatis
- Custom domain: Gunakan Let's Encrypt

### 3. Admin Authentication
Ganti hardcoded credentials dengan:
```javascript
// Gunakan environment variables
const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;
```

### 4. Content Security Policy
Tambahkan CSP headers di Nginx atau hosting config.

### 5. Rate Limiting
Implementasi rate limiting untuk login endpoint.

---

## 📊 Monitoring & Analytics

### Google Analytics
1. Buat GA4 property
2. Tambahkan tracking ID ke `.env`:
```
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
```
3. Install react-ga4:
```bash
npm install react-ga4
```

### Error Tracking
Gunakan Sentry untuk error tracking:
```bash
npm install @sentry/react
```

---

## 🔄 CI/CD Setup

### GitHub Actions
Buat `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install -g vercel
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## 📝 Checklist Sebelum Deploy

- [ ] Test semua fitur di local
- [ ] Build production berhasil
- [ ] Tidak ada error di console
- [ ] Responsive di semua device
- [ ] SEO meta tags sudah diset
- [ ] Favicon dan logo sudah ada
- [ ] Environment variables sudah diset
- [ ] Admin credentials sudah diganti
- [ ] HTTPS sudah aktif
- [ ] Analytics sudah terpasang
- [ ] Error tracking sudah setup
- [ ] Backup database (jika ada)

---

## 🆘 Troubleshooting

### Build Error
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404)
Pastikan server config redirect semua route ke `index.html`.

### Environment Variables Not Working
Pastikan prefix `REACT_APP_` dan restart dev server.

---

## 📞 Support

Butuh bantuan deployment?
- Email: support@kyyvora.com
- WhatsApp: +62 812-3456-7890

---

© 2024 KYYVORA. All Rights Reserved.
