# 📚 Panduan Admin Panel Kyyvora

Dokumentasi lengkap untuk menggunakan Admin Panel website Kyyvora.

## 🔐 Login ke Admin Panel

### Akses Admin Panel
1. Buka browser dan navigasi ke: `http://localhost:3000/admin`
2. Masukkan kredensial login:
   - **Username:** `admin`
   - **Password:** `admin123`
3. Klik tombol **MASUK**

### Keamanan
⚠️ **Penting:** Untuk production, ganti kredensial default dan implementasikan sistem autentikasi yang lebih aman.

---

## 🎨 Mengedit Konten Website

### 1. Hero Section (Bagian Utama)

Hero Section adalah bagian pertama yang dilihat pengunjung.

**Cara Edit:**
1. Klik menu **Hero Section** di sidebar
2. Edit field yang tersedia:
   - **Judul:** Teks utama di bagian atas
   - **Highlight:** Teks yang di-highlight dengan warna
   - **Subtitle:** Deskripsi di bawah judul
   - **Teks Tombol CTA:** Teks pada tombol call-to-action
3. Klik tombol **SIMPAN** di kanan atas

**Contoh:**
```
Judul: SOLUSI TERBAIK UNTUK
Highlight: KEBUTUHAN DIGITAL
Subtitle: Kami menyediakan jasa pembuatan laporan...
CTA: MULAI SEKARANG
```

---

### 2. Layanan (Services)

Menampilkan 4 layanan utama yang ditawarkan.

**Cara Edit:**
1. Klik menu **Layanan** di sidebar
2. Setiap card layanan memiliki:
   - **Icon:** Emoji atau simbol (contoh: 📄, 📚, 💻, 🏢)
   - **Judul:** Nama layanan
   - **Deskripsi:** Penjelasan singkat layanan
   - **Warna:** Background color (gunakan color picker)
3. Edit sesuai kebutuhan
4. Klik **SIMPAN**

**Tips:**
- Gunakan emoji yang relevan untuk icon
- Pilih warna yang kontras dan eye-catching
- Deskripsi maksimal 2-3 baris

**Contoh Warna:**
- Yellow: `#FFE500`
- Cyan: `#00F0FF`
- Red: `#FF6B6B`
- Green: `#A8E6CF`

---

### 3. Tentang (About)

Informasi tentang perusahaan Kyyvora.

**Cara Edit:**
1. Klik menu **Tentang** di sidebar
2. Edit field:
   - **Judul:** Judul section (default: TENTANG KYYVORA)
   - **Deskripsi:** Penjelasan lengkap tentang perusahaan
3. Klik **SIMPAN**

**Tips:**
- Tulis deskripsi yang menarik dan profesional
- Jelaskan keunggulan dan komitmen perusahaan
- Maksimal 3-4 paragraf

---

### 4. Kontak (Contact)

Informasi kontak perusahaan.

**Cara Edit:**
1. Klik menu **Kontak** di sidebar
2. Edit field:
   - **Email:** Alamat email perusahaan
   - **WhatsApp:** Nomor WhatsApp (format: +62 xxx-xxxx-xxxx)
   - **Lokasi:** Alamat atau kota
3. Klik **SIMPAN**

**Format yang Benar:**
```
Email: info@kyyvora.com
WhatsApp: +62 812-3456-7890
Lokasi: Jakarta, Indonesia
```

---

## 💾 Menyimpan Perubahan

### Langkah-langkah:
1. Setelah mengedit konten, klik tombol **SIMPAN** di kanan atas
2. Akan muncul notifikasi "Perubahan berhasil disimpan!"
3. Buka halaman utama website untuk melihat perubahan

### Catatan:
- Perubahan akan langsung terlihat tanpa perlu reload
- Perubahan tersimpan di browser (localStorage)
- Untuk production, integrasikan dengan database

---

## 🎯 Best Practices

### Konten
- ✅ Gunakan bahasa yang jelas dan mudah dipahami
- ✅ Hindari typo dan kesalahan grammar
- ✅ Pastikan informasi kontak selalu update
- ✅ Gunakan emoji yang relevan dan profesional

### Desain
- ✅ Pilih warna yang kontras untuk readability
- ✅ Jaga konsistensi warna di semua section
- ✅ Gunakan judul yang singkat dan impactful
- ✅ Deskripsi tidak terlalu panjang

### SEO
- ✅ Gunakan keyword yang relevan
- ✅ Tulis deskripsi yang menarik
- ✅ Pastikan CTA jelas dan actionable

---

## 🔄 Mengembalikan ke Default

Jika ingin mengembalikan konten ke default:
1. Buka browser console (F12)
2. Ketik: `localStorage.clear()`
3. Refresh halaman
4. Login kembali ke admin panel

---

## 🚪 Logout

Untuk keluar dari Admin Panel:
1. Klik tombol **Logout** di sidebar bawah
2. Anda akan diarahkan kembali ke halaman login

---

## ❓ Troubleshooting

### Perubahan tidak tersimpan
- Pastikan sudah klik tombol **SIMPAN**
- Cek koneksi internet (untuk production)
- Clear browser cache dan coba lagi

### Tidak bisa login
- Pastikan username dan password benar
- Cek caps lock tidak aktif
- Refresh halaman dan coba lagi

### Tampilan berantakan
- Clear browser cache
- Pastikan menggunakan browser modern (Chrome, Firefox, Edge)
- Coba akses dari incognito/private mode

---

## 📞 Bantuan

Jika mengalami masalah atau butuh bantuan:
- Email: support@kyyvora.com
- WhatsApp: +62 812-3456-7890
- Dokumentasi: README.md

---

## 🔒 Keamanan untuk Production

Sebelum deploy ke production:

1. **Ganti Kredensial Default**
   ```javascript
   // Jangan gunakan hardcoded credentials
   username: 'admin'
   password: 'admin123'
   ```

2. **Implementasi Backend Authentication**
   - Gunakan JWT atau session-based auth
   - Hash password dengan bcrypt
   - Implementasi rate limiting

3. **Database Integration**
   - Simpan konten di database (MongoDB, PostgreSQL, dll)
   - Buat API endpoints untuk CRUD operations
   - Validasi input di backend

4. **HTTPS**
   - Gunakan SSL certificate
   - Redirect HTTP ke HTTPS
   - Secure cookies

5. **Backup**
   - Backup database secara berkala
   - Implementasi version control untuk konten
   - Logging untuk audit trail

---

© 2024 KYYVORA. All Rights Reserved.
