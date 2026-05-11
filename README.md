# Kyyvora Website - Neo Brutalism Design

Website modern dengan tema Neo Brutalism untuk Kyyvora - platform penyedia jasa digital lengkap dengan Admin Panel.

## ✨ Fitur Utama

### Frontend
- 🎨 **Desain Neo Brutalism** yang modern dan eye-catching
- 🎭 **Animasi 3D** menggunakan Framer Motion
- 📱 **Responsive Design** untuk semua perangkat
- 🎯 **Modern Icons** dari React Icons
- ⚡ **Smooth Scroll** dan animasi interaktif
- 🔝 **Scroll to Top** button dengan animasi
- 🎪 **Parallax Effects** pada elemen dekoratif

### Admin Panel
- 🔐 **Login System** dengan autentikasi
- 📝 **Edit Hero Section** (judul, subtitle, CTA)
- 🛠️ **Edit Services** (4 layanan dengan icon, warna, deskripsi)
- 📄 **Edit About Section** (deskripsi perusahaan)
- 📞 **Edit Contact Info** (email, WhatsApp, lokasi)
- 💾 **Real-time Updates** tanpa reload halaman
- 🎨 **Color Picker** untuk customisasi warna layanan

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
cd kyyvora-website
npm install
```

### 2. Jalankan Development Server
```bash
npm start
```

Website akan terbuka di `http://localhost:3000`

### 3. Build untuk Production
```bash
npm run build
```

## 🔑 Login Admin

Untuk mengakses Admin Panel:
1. Buka `http://localhost:3000/admin`
2. Login dengan kredensial:
   - **Username:** admin
   - **Password:** admin123

## 📁 Struktur Project

```
kyyvora-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Services.js & Services.css
│   │   ├── About.js & About.css
│   │   ├── Contact.js & Contact.css
│   │   ├── Footer.js & Footer.css
│   │   ├── ScrollToTop.js & ScrollToTop.css
│   │   └── ProtectedRoute.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── AdminLogin.js & AdminLogin.css
│   │   └── AdminDashboard.js & AdminDashboard.css
│   ├── context/
│   │   └── ContentContext.js
│   ├── App.js
│   └── App.css
└── package.json
```

## 🎨 Teknologi yang Digunakan

- **React** - Library JavaScript untuk UI
- **React Router DOM** - Routing dan navigasi
- **Framer Motion** - Animasi 3D dan interaktif
- **React Icons** - Icon library modern
- **Context API** - State management global

## 🎯 Fitur Neo Brutalism

Website ini menggunakan karakteristik Neo Brutalism:
- ✅ Border hitam tebal (4px)
- ✅ Box shadow yang bold (8px 8px)
- ✅ Warna-warna cerah dan kontras tinggi
- ✅ Typography yang tegas dan bold
- ✅ Layout yang berani dan tidak konvensional
- ✅ Animasi yang playful dan engaging

## 🎨 Palet Warna

```css
Primary Yellow: #FFE500
Cyan: #00F0FF
Red: #FF6B6B
Green: #A8E6CF
Black: #000000
White: #FFFFFF
```

## 📝 Cara Menggunakan Admin Panel

1. **Login** ke `/admin` dengan kredensial yang tersedia
2. **Pilih Section** yang ingin diedit dari sidebar
3. **Edit Content** sesuai kebutuhan
4. **Klik SIMPAN** untuk menyimpan perubahan
5. **Lihat Hasil** langsung di halaman utama

### Edit Hero Section
- Ubah judul utama
- Edit highlight text
- Ganti subtitle
- Customisasi teks tombol CTA

### Edit Services
- Ganti icon (emoji atau pilih dari icon library)
- Edit judul layanan
- Ubah deskripsi
- Pilih warna background dengan color picker

### Edit About
- Update judul section
- Ganti deskripsi perusahaan

### Edit Contact
- Update email
- Ganti nomor WhatsApp
- Ubah lokasi

## 🔒 Keamanan

⚠️ **Catatan Penting:** 
- Sistem autentikasi saat ini menggunakan localStorage (untuk demo)
- Untuk production, gunakan backend authentication yang proper
- Implementasikan JWT atau session-based authentication
- Gunakan HTTPS untuk keamanan data

## 🌐 Deployment

Website ini siap untuk di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Heroku
- AWS S3 + CloudFront

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 768px
- Mobile: < 768px

## 🎭 Animasi yang Tersedia

- **Fade In/Out** - Elemen muncul dengan smooth
- **Scale** - Zoom in/out pada hover
- **Rotate** - Rotasi 3D pada icon dan card
- **Slide** - Geser dari samping
- **Float** - Efek melayang pada dekorasi
- **Parallax** - Gerakan berbeda pada scroll

## 🛠️ Customisasi

### Mengubah Warna Tema
Edit file CSS di masing-masing komponen atau ubah di Admin Panel untuk warna layanan.

### Menambah Layanan Baru
Edit `ContentContext.js` dan tambahkan object baru di array `services`.

### Mengubah Font
Edit `public/index.html` dan ganti Google Fonts link, kemudian update `font-family` di CSS.

## 📞 Support

Jika ada pertanyaan atau masalah, hubungi:
- Email: info@kyyvora.com
- WhatsApp: +62 812-3456-7890

## 📄 License

© 2024 KYYVORA. All Rights Reserved.

