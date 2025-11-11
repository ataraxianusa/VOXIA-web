# Panduan Validasi SSL untuk GitHub Pages

## Tujuan
Dokumen ini memberikan panduan langkah-demi-langkah untuk memvalidasi SSL certificate setelah menyelesaikan konfigurasi domain kustom di GitHub Pages.

## Prasyarat
- Sudah menyelesaikan semua langkah dalam SOLUTION.md
- Sudah menunggu propagasi DNS (minimal 4-24 jam)
- Domain `voxia.id` sudah dipublikasikan di GitHub Pages

## 1. Pemeriksaan Browser Dasar

### A. Akses Halaman
1. Buka browser Anda (disarankan Chrome, Firefox, atau Safari terbaru)
2. Kunjungi `https://voxia.id` (pastikan menggunakan HTTPS, bukan HTTP)
3. Perhatikan indikator gembok di bilah alamat

### B. Verifikasi Sertifikat
1. Klik ikon gembok di bilah alamat
2. Pilih "Certificate is valid" atau "Connection is secure"
3. Periksa informasi berikut:
   - Issued to: `*.github.io` atau `voxia.id`
   - Issued by: `Let's Encrypt Authority X3` atau `R3`
   - Valid from: tanggal sekarang atau sebelumnya
   - Valid to: tanggal dalam 1-3 bulan ke depan

## 2. Pemeriksaan Online

Gunakan salah satu layanan online berikut untuk memvalidasi SSL certificate:

### A. SSL Labs (ssllabs.com)
1. Kunjungi https://www.ssllabs.com/ssltest/
2. Masukkan `voxia.id`
3. Klik "Submit"
4. Tinjau hasil:
   - Harus mendapatkan peringkat A atau A+
   - Tidak ada error berkaitan dengan certificate
   - Tidak ada chain issues

### B. SSL Checker (geotrust.com)
1. Kunjungi https://sslchecker.geotrust.com/
2. Masukkan `voxia.id`
3. Periksa bahwa certificate valid dan tidak kedaluwarsa

## 3. Pemeriksaan Console Developer Tools

1. Buka browser dan kunjungi `https://voxia.id`
2. Tekan `F12` atau kanan > "Inspect" > "Developer Tools"
3. Klik tab "Console"
4. Periksa ada tidaknya error "Mixed Content" atau "SSL" terkait
5. Jika ada, periksa apakah semua aset (CSS, JS, gambar) termuat via HTTPS

## 4. Pemeriksaan DNS dan Sertifikat dengan Perintah CLI

### A. Periksa Resolusi DNS
```bash
nslookup voxia.id
```
Harus menampilkan alamat IP GitHub (185.199.x.x)

### B. Periksa Detail Sertifikat
```bash
openssl s_client -connect voxia.id:443 -servername voxia.id
```
Periksa bagian "Verify return code" harus 0 (sukses)

## 5. Validasi dengan curl
```bash
curl -I https://voxia.id
```
Harus menampilkan header HTTP 200 OK, bukan error

## 6. Pengujian Pengalihan HTTP ke HTTPS
1. Coba akses `http://voxia.id`
2. Harus otomatis dialihkan ke `https://voxia.id`
3. Tidak ada error atau peringatan keamanan

## 7. Pemeriksaan Aspek Lainnya
1. Semua tautan internal harus bekerja
2. Semua gambar dan aset termuat dengan benar
3. Tidak ada campuran konten (mixed content) yang menyebabkan peringatan
4. Fungsi JavaScript berjalan tanpa error SSL

## Troubleshooting Umum

### A. Mixed Content Warnings
- Pastikan semua resource (CSS, JS, gambar) menggunakan URL HTTPS
- Cek semua tautan absolute di HTML Anda

### B. Certificate Not Valid
- Tunggu lebih lama untuk propagasi DNS
- Periksa kembali konfigurasi DNS di penyedia domain
- Pastikan tidak ada cache CDN yang perlu dihapus

### C. Pengalihan HTTP Tidak Bekerja
- Pastikan opsi "Enforce HTTPS" diaktifkan di GitHub Pages
- Tunggu beberapa menit untuk perubahan diterapkan

## Dokumentasi Tambahan
Pastikan Anda juga telah membaca:
- SOLUTION.md - Solusi lengkap untuk error 526
- SSL_CHECKLIST.md - Checklist untuk memastikan semua langkah selesai

## Rangkuman
Jika semua pemeriksaan di atas berhasil dan tidak menunjukkan error, SSL certificate untuk domain `voxia.id` telah berhasil dikonfigurasi di GitHub Pages. Situs Anda sekarang aman untuk digunakan dengan HTTPS.