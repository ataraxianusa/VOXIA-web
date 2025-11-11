# Solusi untuk Error SSL Certificate (526) pada GitHub Pages

## Deskripsi Masalah
Anda menerima error "Invalid SSL certificate Error code 526" ketika mengakses domain https://voxia.id/ yang ditujukan ke GitHub Pages. Ini adalah error dari Cloudflare (jika Anda menggunakan layanan mereka) yang menunjukkan bahwa sertifikat SSL tidak dapat divalidasi.

## Penyebab Umum Error 526
1. Sertifikat SSL di GitHub Pages tidak valid atau telah kedaluwarsa
2. Konfigurasi DNS tidak benar
3. Domain tidak terdaftar dengan benar di GitHub Pages
4. Konflik dengan Cloudflare atau CDN lainnya

## Solusi Langkah demi Langkah

### 1. Verifikasi Konfigurasi GitHub Pages
Pastikan domain Anda telah diatur dengan benar di GitHub:

1. Buka repositori GitHub Anda
2. Klik "Settings" di tab atas
3. Gulir ke bawah ke bagian "Pages"
4. Pastikan "Source" diatur ke branch yang benar (misalnya `main`)
5. Pada bagian "Custom domain", pastikan `voxia.id` terdaftar
6. Pastikan kotak "Enforce HTTPS" dicentang

### 2. Periksa File CNAME di Repository
File CNAME di root repository harus berisi hanya domain yang digunakan. Dalam kasus Anda, file ini harus hanya berisi:
```
voxia.id
```

### 3. Verifikasi Konfigurasi DNS
Pastikan record DNS Anda diatur dengan benar di penyedia domain Anda (misalnya Namecheap, Cloudflare, dll.):

Untuk domain root (`voxia.id`), gunakan:
- Type: `A`
- Name/Host: `@`
- Value/Points to: 
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

Untuk subdomain `www` (jika Anda menggunakannya), gunakan:
- Type: `CNAME`
- Name/Host: `www`
- Value/Points to: `nama-user.github.io` (gantilah dengan username GitHub Anda)

### 4. Tunggu Propagasi DNS
Setelah mengubah pengaturan DNS, propagasi bisa memakan waktu hingga 48 jam, meskipun biasanya hanya memakan waktu 4-24 jam. Anda bisa memeriksa status propagasi DNS menggunakan alat seperti:
- https://dnschecker.org/
- `nslookup voxia.id` di terminal Anda

### 5. Bersihkan Cache Browser dan CDN
Setelah perubahan DNS selesai:
1. Bersihkan cache browser Anda
2. Jika menggunakan Cloudflare, lakukan cache purge di panel Cloudflare Anda
3. Coba akses kembali halaman

### 6. Verifikasi SSL Certificate
Setelah konfigurasi selesai, GitHub Pages akan secara otomatis menerbitkan sertifikat SSL Let's Encrypt untuk domain kustom. Anda dapat memverifikasi ini dengan:
1. Mengunjungi https://voxia.id
2. Klik ikon gembok di bilah alamat
3. Periksa bahwa sertifikat valid dan diterbitkan oleh Let's Encrypt

### 7. Solusi Tambahan
Jika masalah masih berlanjut:

1. **Nonaktifkan Cloudflare sementara**:
   - Jika Anda menggunakan Cloudflare sebagai DNS resolver, coba nonaktifkan sementara dan gunakan DNS bawaan dari penyedia domain Anda
   - GitHub Pages sudah menyediakan SSL gratis untuk domain kustom

2. **Periksa domain di GitHub Pages status**:
   - Kunjungi https://github.status.io/ untuk memastikan tidak ada gangguan pada layanan GitHub Pages

3. **Validasi domain Anda**:
   - Pastikan domain `voxia.id` tidak melanggar kebijakan GitHub
   - Pastikan tidak ada karakter spesial yang tidak diizinkan dalam nama domain

### 8. Jika Semua Langkah di Atas Gagal
- Coba gunakan subdomain (seperti `app.voxia.id`) sebagai alternatif sementara
- Hubungi dukungan GitHub jika domain Anda memang sudah diatur dengan benar tapi tetap tidak berfungsi
- Pastikan domain Anda tidak digunakan untuk tujuan yang melanggar kebijakan GitHub

## Pengetesan Setelah Implementasi
Setelah mengikuti semua langkah di atas:
1. Akses https://voxia.id (jangan lupa tambahkan "https://")
2. Periksa bahwa tidak ada peringatan keamanan SSL
3. Pastikan halaman dimuat dengan benar
4. Uji semua fungsi situs untuk memastikan semuanya berfungsi
5. Periksa juga pengalihan dari http ke https bekerja dengan baik

## Catatan Tambahan
- GitHub Pages akan secara otomatis mengalihkan semua permintaan HTTP ke HTTPS saat fitur "Enforce HTTPS" diaktifkan
- Jika Anda sebelumnya menggunakan Cloudflare, pastikan SSL mode diatur ke "Full" atau "Full (strict)" bukan "Flexible" untuk GitHub Pages
- Pastikan seluruh aset situs Anda (CSS, JS, gambar) juga dimuat melalui HTTPS untuk menghindari mixed content warnings

Jika setelah mengikuti semua langkah ini masih mengalami masalah, harap periksa kembali:
- Apakah file CNAME hanya berisi `voxia.id`
- Apakah record DNS Anda mengarah ke alamat IP GitHub yang benar
- Apakah telah berlalu cukup lama sejak perubahan DNS Anda