# Checklist Pemecahan Masalah SSL GitHub Pages (Error 526)

Gunakan checklist ini untuk memastikan Anda telah menyelesaikan semua langkah yang diperlukan untuk memperbaiki error SSL certificate pada domain voxia.id Anda.

## 1. Verifikasi Pengaturan GitHub Pages ✓

- [ ] Repository Settings > Pages: "Source" diatur ke branch yang benar (biasanya `main`)
- [ ] Repository Settings > Pages: Domain kustom terdaftar sebagai `voxia.id`
- [ ] Repository Settings > Pages: "Enforce HTTPS" dicentang
- [ ] Tidak ada pesan error di bagian GitHub Pages di setting repository

## 2. Periksa File CNAME ✓

- [ ] File `CNAME` di root repository hanya berisi: `voxia.id`
- [ ] Tidak ada spasi tambahan atau karakter lain di file tersebut
- [ ] File `CNAME` dipush ke branch yang digunakan sebagai source di GitHub Pages

## 3. Verifikasi Konfigurasi DNS ✓

- [ ] Di pengelola DNS penyedia domain (seperti Namecheap, Cloudflare, dll.):
  - [ ] Record A untuk `@` mengarah ke: `185.199.108.153`
  - [ ] Record A untuk `@` mengarah ke: `185.199.109.153`
  - [ ] Record A untuk `@` mengarah ke: `185.199.110.153`
  - [ ] Record A untuk `@` mengarah ke: `185.199.111.153`
  - [ ] Jika menggunakan subdomain `www`, record CNAME mengarah ke: `nama-user.github.io`

## 4. Tunggu Propagasi DNS ✓

- [ ] Sudah menunggu minimal 4-24 jam sejak perubahan DNS
- [ ] Menggunakan alat seperti https://dnschecker.org/ untuk memverifikasi propagasi DNS
- [ ] Perintah `nslookup voxia.id` atau `dig voxia.id` menunjukkan alamat IP yang benar

## 5. Bersihkan Cache ✓

- [ ] Membersihkan cache browser Anda
- [ ] Jika menggunakan Cloudflare, melakukan cache purge di panel Cloudflare
- [ ] Mencoba mengakses situs dari browser pribadi/incognito

## 6. Verifikasi SSL Certificate ✓

- [ ] Mengunjungi https://voxia.id (bukan http://)
- [ ] Tidak ada peringatan keamanan SSL
- [ ] Klik ikon gembok dan verifikasi sertifikat diterbitkan oleh Let's Encrypt
- [ ] Semua resource (CSS, JS, gambar) dimuat melalui HTTPS tanpa mixed content warnings

## Solusi Tambahan (Jika Diperlukan) ✓

- [ ] Jika menggunakan Cloudflare, SSL mode diatur ke "Full" atau "Full (strict)" (bukan "Flexible")
- [ ] Jika masalah persisten, Cloudflare disetting sementara dinonaktifkan sebagai DNS resolver
- [ ] Memastikan tidak ada pengalihan atau rewrite rule yang menyebabkan sertifikat tidak valid
- [ ] Jika menggunakan custom domain, tidak menggunakan domain yang diblokir oleh GitHub

## Pengetesan Akhir ✓

- [ ] https://voxia.id dapat diakses tanpa error
- [ ] Semua fungsi situs berfungsi dengan baik
- [ ] Pengalihan dari http ke https bekerja dengan baik
- [ ] Tidak ada console errors di browser developer tools
- [ ] Semua tautan internal dan eksternal berfungsi dengan benar

## Informasi Tambahan

- Nama Repository: voxia-web
- Versi: 0.0.0
- Domain: voxia.id
- Tipe Proyek: Vite + React

Catatan: Jika setelah menyelesaikan semua item dalam checklist ini masih mengalami masalah, harap menghubungi dukungan GitHub atau memeriksa https://github.status.io/ untuk informasi gangguan layanan.