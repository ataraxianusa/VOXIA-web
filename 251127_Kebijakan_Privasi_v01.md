# Dokumentasi Penambahan Kebijakan Privasi

**Tanggal:** 27 November 2025
**Versi:** v01
**Author:** Antigravity (AI Assistant)

## Ringkasan Perubahan
Telah ditambahkan halaman Kebijakan Privasi baru dan diperbarui tautan pada footer halaman utama (`index.html`) untuk mengarah ke halaman tersebut.

## Detail File

### 1. `privacy-policy.html` (Baru)
File ini berisi teks lengkap Kebijakan Privasi untuk VOXIA (PT. Ekuitas Media Investama).
- **Lokasi:** Root folder (`/`)
- **Fitur:**
    - Desain responsif menggunakan Tailwind CSS (konsisten dengan `index.html`).
    - Mendukung Dark Mode.
    - Header navigasi yang kembali ke halaman utama.
    - Footer standar.
- **Konten:**
    - Informasi yang dikumpulkan (Identitas, Penggunaan, Integrasi).
    - Penggunaan informasi.
    - Perlindungan data.
    - Berbagi informasi (Pihak ketiga).
    - Hak pengguna.
    - Kontak (WhatsApp).

### 2. `index.html` (Diperbarui)
- **Lokasi:** Root folder (`/`)
- **Perubahan:**
    - Mengupdate link pada footer bagian "Tautan".
    - **Sebelum:** `<a href="#">Kebijakan Privasi</a>`
    - **Sesudah:** `<a href="/privacy-policy.html">Kebijakan Privasi</a>`

## Cara Verifikasi
1. Buka `index.html` di browser atau melalui Live Server.
2. Scroll ke bagian paling bawah (Footer).
3. Klik link "Kebijakan Privasi".
4. Pastikan halaman baru terbuka dan menampilkan teks kebijakan privasi dengan benar.
