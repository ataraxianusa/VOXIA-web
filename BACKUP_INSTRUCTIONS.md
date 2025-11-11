# Instruksi Backup ke Repository GitHub

Ikuti langkah-langkah berikut untuk melakukan backup isi folder ini ke repository GitHub Anda:

## 1. Persiapan Repository Lokal

Pertama, pastikan Anda berada di direktori proyek:
```bash
cd /home/ics/Documents/PROJECT/ATARAXIA/VOXIA-web
```

## 2. Inisialisasi Repository Git (jika belum)

Jika belum dilakukan sebelumnya:
```bash
git init
git add .
git commit -m "Initial commit: Backup VOXIA web project with SSL solution documentation"
```

## 3. Tambahkan Remote Repository

Tambahkan remote repository GitHub Anda (ganti dengan URL repository GitHub Anda yang sebenarnya):
```bash
git remote add origin https://github.com/[username-anda]/VOXIA-web.git
```

## 4. Push ke Repository

Lakukan push ke branch utama:
```bash
git branch -M main
git push -u origin main
```

## 5. Verifikasi

Setelah push selesai, verifikasi bahwa semua file telah terupload:
- Kunjungi repository GitHub Anda
- Pastikan semua file termasuk dokumentasi SSL (*.md dan *.html) telah muncul di repository

## Jika Terjadi Error

Jika Anda mendapatkan error karena remote origin sudah ada:
```bash
git remote set-url origin https://github.com/[username-anda]/VOXIA-web.git
```

Jika Anda mendapatkan error karena konflik dengan repository yang sudah ada:
```bash
git pull origin main --allow-unrelated-histories
```

## File Penting dalam Backup Ini

Backup ini mencakup:
- Semua file proyek VOXIA-web
- File dokumentasi solusi SSL: SOLUTION.md, SSL_CHECKLIST.md, SSL_VALIDATION.md, SSL_GUIDE.html
- File konfigurasi: package.json, vite.config.ts, tsconfig.json
- File utama: index.html, index.tsx
- File dokumentasi lainnya: README.md, LICENSE, metadata.json
- File favicon dan aset publik

Pastikan untuk mengganti [username-anda] dengan username GitHub Anda sebenarnya.