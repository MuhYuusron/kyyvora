# 🖼️ Panduan Menambahkan Gambar

Panduan untuk menambahkan logo dan gambar ke website Kyyvora.

## 📁 Lokasi File Gambar

Semua gambar harus ditempatkan di folder `public/foto/` agar dapat diakses langsung.

```
kyyvora-website/
├── public/
│   ├── foto/
│   │   ├── kyyvora.png      ← Logo untuk navbar
│   │   ├── tentang.png      ← Gambar untuk section About
│   │   └── README.txt
│   ├── favicon.ico
│   └── index.html
```

## 🎨 Gambar yang Dibutuhkan

### 1. Logo Navbar (kyyvora.png)
- **Lokasi:** `public/foto/kyyvora.png`
- **Ukuran Rekomendasi:** 200x200px atau 500x500px
- **Format:** PNG dengan background transparan (WAJIB)
- **Rasio:** Square (1:1) atau landscape
- **Ukuran File:** Maksimal 100KB
- **Background Navbar:** Putih (#FFFFFF)
- **Catatan:** Logo akan ditampilkan dengan tinggi 60px, lebar auto

**PENTING:**
- Gunakan background transparan untuk hasil terbaik
- Pastikan logo memiliki kontras baik dengan background putih
- Jika logo berwarna terang, tambahkan outline/stroke gelap
- Hanya logo saja, tanpa teks "KYYVORA"

**Cara Menambahkan:**
1. Siapkan file logo dengan nama `kyyvora.png`
2. Copy file ke folder `public/foto/`
3. Logo akan otomatis muncul di navbar

### 2. Gambar About Section (tentang.png)
- **Lokasi:** `public/foto/tentang.png`
- **Ukuran Rekomendasi:** 800x600px atau 1200x900px
- **Format:** PNG atau JPG
- **Rasio:** 4:3 atau 16:9
- **Ukuran File:** Maksimal 500KB

**Cara Menambahkan:**
1. Siapkan gambar dengan nama `tentang.png`
2. Copy file ke folder `public/foto/`
3. Gambar akan muncul di section "Tentang Kyyvora"

## 🛠️ Cara Menambahkan Gambar

### Metode 1: Manual Copy
```bash
# Dari folder project
cd kyyvora-website/public/foto

# Copy file gambar ke sini
# Windows: copy C:\path\to\kyyvora.png .
# Mac/Linux: cp /path/to/kyyvora.png .
```

### Metode 2: Drag & Drop
1. Buka folder `kyyvora-website/public/foto` di File Explorer
2. Drag & drop file `kyyvora.png` dan `tentang.png` ke folder tersebut

## 📐 Spesifikasi Gambar

### Logo Navbar
```
Nama File: kyyvora.png
Dimensi: 200x200px (minimum) - 500x500px (optimal)
Format: PNG
Background: Transparan (WAJIB untuk hasil terbaik)
DPI: 72-150
Color Mode: RGB
Display Height: 60px (width auto)
Navbar Background: Putih (#FFFFFF)
```

### Gambar About
```
Nama File: tentang.png
Dimensi: 800x600px (minimum) - 1200x900px (optimal)
Format: PNG atau JPG
Background: Apa saja
DPI: 72-150
Color Mode: RGB
```

## 🎨 Tips Desain

### Logo Navbar
- ✅ Gunakan background transparan (PNG)
- ✅ Pastikan logo terlihat jelas di background putih
- ✅ Jika logo berwarna terang, tambahkan outline gelap
- ✅ Pastikan logo terlihat jelas di ukuran kecil (60px tinggi)
- ✅ Hindari detail yang terlalu rumit
- ✅ Test di berbagai ukuran layar
- ✅ Logo saja, tanpa teks tambahan

### Gambar About
- ✅ Gunakan gambar yang relevan dengan bisnis
- ✅ Pilih gambar berkualitas tinggi
- ✅ Pastikan warna cocok dengan tema website
- ✅ Compress gambar untuk loading cepat
- ✅ Gunakan gambar yang profesional

## 🔧 Optimasi Gambar

### Compress Gambar Online
- [TinyPNG](https://tinypng.com/) - PNG compression
- [Squoosh](https://squoosh.app/) - Universal image compressor
- [Compressor.io](https://compressor.io/) - Online image optimizer

### Resize Gambar
- [Canva](https://canva.com) - Design tool dengan resize
- [Photopea](https://photopea.com) - Online Photoshop alternative
- [GIMP](https://gimp.org) - Free desktop image editor

## 📱 Responsive Images

Gambar sudah dioptimasi untuk responsive:
- Desktop: Full size
- Tablet: Scaled proportionally
- Mobile: Scaled proportionally

## 🔄 Mengganti Gambar

Untuk mengganti gambar yang sudah ada:

1. **Hapus gambar lama** (optional)
2. **Copy gambar baru** dengan nama yang sama
3. **Refresh browser** (Ctrl+F5 atau Cmd+Shift+R)

Jika gambar tidak berubah, clear browser cache:
```
Chrome: Ctrl+Shift+Delete
Firefox: Ctrl+Shift+Delete
Safari: Cmd+Option+E
```

## 🎯 Contoh Struktur File

```
public/
├── foto/
│   ├── kyyvora.png          ← Logo navbar (200x200px, PNG transparan)
│   ├── tentang.png          ← About image (800x600px, PNG/JPG)
│   └── README.txt
├── favicon.ico              ← Browser tab icon
├── logo192.png              ← PWA icon small
├── logo512.png              ← PWA icon large
├── manifest.json
└── index.html
```

## 🖼️ Format Gambar yang Didukung

- ✅ PNG (Recommended untuk logo)
- ✅ JPG/JPEG (Recommended untuk foto)
- ✅ WebP (Modern format, smaller size)
- ✅ SVG (Vector, scalable)
- ❌ GIF (Tidak recommended untuk static images)
- ❌ BMP (File size terlalu besar)

## 🚀 Setelah Menambahkan Gambar

1. **Restart development server** (jika running)
   ```bash
   # Stop server (Ctrl+C)
   # Start again
   npm start
   ```

2. **Clear browser cache** (Ctrl+F5)

3. **Test di berbagai device:**
   - Desktop
   - Tablet
   - Mobile

4. **Check loading speed:**
   - Buka DevTools (F12)
   - Tab Network
   - Reload page
   - Check image load time

## ❓ Troubleshooting

### Gambar tidak muncul
- ✅ Pastikan nama file benar: `kyyvora.png` dan `tentang.png`
- ✅ Pastikan file ada di folder `public/foto/`
- ✅ Restart development server
- ✅ Clear browser cache (Ctrl+F5)
- ✅ Check console untuk error (F12)

### Gambar terlalu besar/kecil
- Edit CSS di `App.css` untuk logo:
  ```css
  .logo-image {
    height: 50px; /* Ubah nilai ini */
  }
  ```
- Edit CSS di `About.css` untuk gambar about:
  ```css
  .image-placeholder {
    height: 400px; /* Ubah nilai ini */
  }
  ```

### Gambar blur/pixelated
- Gunakan gambar dengan resolusi lebih tinggi
- Minimum 2x ukuran display (retina ready)
- Compress tanpa mengurangi kualitas terlalu banyak

### Loading lambat
- Compress gambar lebih agresif
- Gunakan format WebP
- Lazy load images (sudah otomatis di React)

## 📝 Checklist

Sebelum deploy, pastikan:
- [ ] Logo navbar sudah ditambahkan (`kyyvora.png`)
- [ ] Gambar about sudah ditambahkan (`tentang.png`)
- [ ] Gambar sudah di-compress
- [ ] Gambar terlihat bagus di semua device
- [ ] Loading time acceptable (<3 detik)
- [ ] Tidak ada broken images
- [ ] Alt text sudah sesuai (untuk SEO)

## 🎨 Rekomendasi Tools

### Design
- **Canva** - Buat logo dan design
- **Figma** - Professional design tool
- **Adobe Express** - Quick design tool

### Optimization
- **TinyPNG** - PNG compression
- **ImageOptim** (Mac) - Batch optimization
- **Squoosh** - Advanced compression

### Stock Images (jika butuh)
- **Unsplash** - Free high-quality photos
- **Pexels** - Free stock photos
- **Pixabay** - Free images and vectors

## 📞 Butuh Bantuan?

Jika mengalami masalah dengan gambar:
- Email: support@kyyvora.com
- WhatsApp: +62 812-3456-7890

---

© 2024 KYYVORA. All Rights Reserved.
