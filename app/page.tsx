"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Wifi, Shield, Coffee, ChevronRight, Star, Wind } from "lucide-react";

export default function Home() {
  // 1. State untuk menyimpan pilihan cabang
  const [cabangTerpilih, setCabangTerpilih] = useState("");

  // 2. Fungsi yang dijalankan saat tombol "Cari Kamar" diklik
  const handleCariKamar = () => {
    if (!cabangTerpilih) {
      alert("Tolong pilih lokasi cabang terlebih dahulu ya!");
      return;
    }
    
    // Nanti bisa diganti dengan navigasi halaman (router.push) atau memunculkan daftar kamar
    alert(`Mencari kamar kosong di: ${cabangTerpilih}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-orange-200">
               <Image src="/logo.jpeg" alt="Kimmy Kost Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-orange-600 dark:text-orange-500">
              Kimmy Kost
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
            <a href="#beranda" className="hover:text-orange-500 transition-colors">Beranda</a>
            <a href="#lokasi" className="hover:text-orange-500 transition-colors">Lokasi Cabang</a>
            <a href="#fasilitas" className="hover:text-orange-500 transition-colors">Fasilitas</a>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-orange-500/30">
            Hubungi Kami
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-200 h-200 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-[120px] opacity-60 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 w-fit text-sm font-semibold">
              <Star className="w-4 h-4 fill-orange-500" />
              Kos Putri Premium #1
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Hunian Estetik <br />
              <span className="text-orange-600 dark:text-orange-500">Nyaman & Aman</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Tingkatkan kualitas hidup dan fokus studimu dengan tinggal di lingkungan yang modern, bersih, dan mendukung. Hadir di 3 lokasi strategis untukmu.
            </p>
            
            {/* Search/Filter Box (Glassmorphism) */}
            <div className="mt-4 p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-800 rounded-3xl shadow-xl flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <MapPin className="text-orange-500 w-5 h-5" />
                <select 
                  value={cabangTerpilih}
                  onChange={(e) => setCabangTerpilih(e.target.value)}
                  className="bg-transparent w-full outline-none text-slate-700 dark:text-slate-300 font-medium cursor-pointer appearance-none"
                >
                  <option value="" disabled>Pilih Lokasi Cabang...</option>
                  <option value="Kimmy Kost - Pusat">Kimmy Kost - Cabang Pusat</option>
                  <option value="Kimmy Kost - Utara">Kimmy Kost - Cabang Utara</option>
                  <option value="Kimmy Kost - Selatan">Kimmy Kost - Cabang Selatan</option>
                </select>
              </div>
              <button 
                onClick={handleCariKamar}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Cari Kamar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-125 w-full rounded-4xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-orange-400 to-orange-200 dark:from-orange-900 dark:to-slate-800 flex items-center justify-center">
                <p className="text-white/80 font-medium text-lg border-2 border-white/50 px-6 py-3 rounded-full backdrop-blur-sm">
                  [ Ruang Foto Kamar Hero ]
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FASILITAS SECTION (BENTO GRID STYLE) */}
      <section id="fasilitas" className="py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fasilitas Standar Hotel</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Semua yang kamu butuhkan sudah kami sediakan. Cukup bawa koper dan nikmati kenyamanannya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-800 hover:border-orange-500/30 transition-colors">
              <Wifi className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-2">High-Speed Wi-Fi</h3>
              <p className="text-slate-600 dark:text-slate-400">Koneksi internet tanpa batas yang stabil untuk kebutuhan kuliah, kerja, maupun streaming Netflix di akhir pekan.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-800 hover:border-orange-500/30 transition-colors">
              <Shield className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-2">Aman 24/7</h3>
              <p className="text-slate-600 dark:text-slate-400">CCTV di area publik dan akses gerbang kartu pintar.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-800 hover:border-orange-500/30 transition-colors">
              <Wind className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-2">Full AC</h3>
              <p className="text-slate-600 dark:text-slate-400">Setiap kamar dilengkapi AC yang rutin dicuci agar selalu dingin.</p>
            </div>

            <div className="md:col-span-2 bg-linear-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-950 p-8 rounded-3xl shadow-sm text-white relative overflow-hidden">
              <div className="relative z-10">
                <Coffee className="w-10 h-10 text-orange-400 mb-6" />
                <h3 className="text-xl font-bold mb-2">Dapur Estetik & Ruang Komunal</h3>
                <p className="text-slate-300 max-w-md">Dapur bersama yang bersih, dilengkapi kulkas, dispenser, dan area bersantai untuk bercengkerama dengan sesama penghuni.</p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10">
                 <Coffee className="w-64 h-64 -mb-10 -mr-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Image src="/logo.jpeg" alt="Logo" width={32} height={32} className="rounded-full border border-orange-200" />
              <span className="font-bold text-lg text-slate-900 dark:text-white">Kimmy Kost Putri</span>
            </div>
            <p className="text-slate-500 text-sm">© 2026 Kimmy Kost Management. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-orange-500">Instagram</a>
            <a href="#" className="hover:text-orange-500">WhatsApp</a>
            <a href="#" className="hover:text-orange-500">Google Maps</a>
          </div>
        </div>
      </footer>
    </div>
  );
}