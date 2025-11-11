# VOXIA-web

VOXIA-web adalah platform AI Customer Service & (Manajemen Pelanggan) untuk UKM. Platform ini menyediakan otomasi customer service dan manajemen pelanggan berbasis AI yang dirancang khusus untuk membantu UKM meningkatkan efisiensi operasional dan pelayanan pelanggan melalui WhatsApp.

## Solusi untuk Error SSL Certificate (Error Code 526)

Jika Anda mengalami error "Invalid SSL certificate Error code 526" saat mengakses domain https://voxia.id/, silakan ikuti panduan berikut:

### Dokumentasi Tersedia:
- `SOLUTION.md` - Solusi lengkap untuk error SSL certificate (error code 526)
- `SSL_CHECKLIST.md` - Checklist langkah-langkah untuk memperbaiki masalah
- `SSL_VALIDATION.md` - Panduan untuk memvalidasi bahwa SSL berfungsi dengan benar

### Ringkasan Solusi:
1. **Verifikasi Konfigurasi GitHub Pages**: Pastikan domain `voxia.id` terdaftar dengan benar dan opsi "Enforce HTTPS" diaktifkan
2. **Periksa File CNAME**: Pastikan hanya berisi `voxia.id`
3. **Verifikasi Konfigurasi DNS**: Pastikan record A mengarah ke alamat IP GitHub yang benar
4. **Tunggu Propagasi DNS**: Proses bisa memakan waktu hingga 24-48 jam
5. **Bersihkan Cache**: Bersihkan cache browser dan CDN jika menggunakan layanan seperti Cloudflare

Untuk langkah-langkah detail, silakan baca file `SOLUTION.md`.

## Fitur Utama

- **AI Chatbot 24/7**: AI yang merespon pertanyaan umum pelanggan secara instan
- **Integrasi WhatsApp**: Konektivitas langsung dengan WhatsApp Business API
- **Manajemen Pelanggan Terpadu**: Manajemen pelanggan terintegrasi dalam satu dashboard
- **Otomasi Follow-up**: Pengingat dan komunikasi otomatis untuk pelanggan
- **Multi-channel Support**: Dukungan berbagai saluran komunikasi dalam satu platform
- **Booking Otomatis**: Sistem reservasi dan pengingat jadwal otomatis
- **AI Kustom**: AI yang dilatih khusus untuk kebutuhan unik bisnis Anda

## Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/username/VOXIA-web.git
```

2. Masuk ke direktori proyek:
```bash
cd VOXIA-web
```

3. Instal dependensi:
```bash
npm install
```

4. Jalankan aplikasi:
```bash
npm run dev
```

## Struktur Proyek

- `index.html`: File halaman utan
- `index.tsx`: Komponen chatbot React
- `vite.config.ts`: Konfigurasi Vite
- `tsconfig.json`: Konfigurasi TypeScript

## Lisensi

Proyek ini dilindungi oleh lisensi proprietari eksklusif. Hanya pemilik yang memiliki hak untuk mengubah, mendistribusikan, atau menggunakan proyek ini. Untuk informasi lebih lanjut, silakan lihat file LICENSE.