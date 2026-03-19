# 🏡 Kimmy Kost Putri - Frontend (Next.js)

Selamat datang di repositori Frontend untuk **Kimmy Kost Putri**! Proyek ini adalah *landing page* modern, estetik, dan interaktif yang dibangun khusus untuk menampilkan profil hunian kos mahasiswi. 

Mengusung tema **"Cute-Minimalist & Peach-Soft"** untuk tahun 2026, website ini dirancang untuk memberikan pengalaman pengguna yang sangat halus (*smooth*), ramah, dan memanjakan mata.

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## ✨ Fitur Utama

- 🎨 **Estetika Peach-Soft 2026**: Menggunakan palet warna *peach* yang lembut dipadukan dengan desain *Glassmorphism* dan sudut antarmuka yang sangat membulat (*rounded-full*).
- 🌗 **Light & Dark Mode**: Terintegrasi penuh dengan `next-themes`. Pengguna dapat beralih antara mode terang yang manis atau mode gelap yang elegan tanpa *flicker*.
- 💫 **Animasi Halus**: Didukung oleh `framer-motion` untuk efek *reveal* saat di-*scroll*, *bounce*, dan *ping* yang interaktif.
- 📱 **Desain Responsif**: Tampil sempurna di perangkat *Mobile*, *Tablet*, maupun *Desktop*.
- 💬 **Integrasi WhatsApp Otomatis**: Dilengkapi dengan Floating CTA dan Form Kontak yang langsung menghubungkan calon penyewa ke WhatsApp Admin dengan pesan yang sudah terformat rapi.
- 🧱 **Bento Grid Gallery**: Menampilkan foto-foto fasilitas dengan tata letak asimetris yang kekinian.

---

## 🛠️ Tech Stack

Proyek ini dibangun dengan teknologi *frontend* terkini:
- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Animasi:** [Framer Motion](https://www.framer.com/motion/)
- **Tema:** [Next-Themes](https://github.com/pacocoursey/next-themes)

---

## 🚀 Cara Menjalankan di Komputer Lokal (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputermu:

### 1. Clone Repositori
```bash
git clone [https://github.com/teguhaldianto/kimmyfrontend_nextjs.git](https://github.com/teguhaldianto/kimmyfrontend_nextjs.git)
cd kimmyfrontend_nextjs
````

### 2\. Install Dependencies

Pastikan kamu sudah menginstal Node.js, lalu jalankan:

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3\. Atur Environment Variables

Buat file bernama `.env` atau `.env.local` di *root* folder proyek kamu, lalu tambahkan variabel berikut:

```env
# URL API Backend (Jika ada, biarkan default jika menggunakan mock/dummy)
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Nomor WhatsApp Admin (Gunakan format kode negara, tanpa '+')
NEXT_PUBLIC_WHATSAPP=6281234567890
```

### 4\. Jalankan Development Server

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browsermu untuk melihat hasilnya. Halaman akan otomatis dimuat ulang jika kamu melakukan perubahan kode.

-----

## 📂 Struktur Folder Utama

Pendekatan *Clean Architecture* memisahkan halaman utama dan komponen UI agar mudah di-*maintenance*:

```text
├── app/
│   ├── globals.css      # Konfigurasi Tailwind v4 & Palet Tema Peach
│   ├── layout.tsx       # Root layout, Metadata SEO, & ThemeProvider
│   ├── page.tsx         # Halaman utama (menyusun semua komponen)
│   └── loading.tsx      # Animasi loading "Smile Bounce" yang cute
├── components/
│   ├── Navbar.tsx       # Navigasi atas (Glassmorphism)
│   ├── Hero.tsx         # Bagian sambutan utama
│   ├── Locations.tsx    # Daftar lokasi cabang Kimmy Kost
│   ├── Gallery.tsx      # Galeri fasilitas (Bento Grid)
│   ├── Testimonials.tsx # Ulasan penghuni
│   ├── ContactForm.tsx  # Form terhubung ke WhatsApp
│   ├── ThemeToggle.tsx  # Tombol pengubah Light/Dark mode
│   └── FloatingWA.tsx   # Tombol CTA mengambang di pojok kanan
├── lib/
│   └── api.ts           # Fungsi pemanggilan data (Fetch API)
├── public/              # Gambar statis, logo, dan SVG
└── types/               # Definisi antarmuka (interface) TypeScript
```

-----

## 🎨 Kustomisasi Tema

Jika kamu ingin mengubah tingkat warna palet **Peach**, kamu tidak perlu mengubah file konfigurasi JavaScript yang rumit. Cukup buka file `app/globals.css` dan ubah variabel CSS di dalam blok `@theme` (Standar Tailwind v4):

```css
@theme {
  --color-peach-500: #ff5030; /* Ubah hex color di sini */
  --color-peach-600: #f13c20;
}
```
