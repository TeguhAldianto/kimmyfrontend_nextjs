"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Smile } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // <-- 1. Import komponennya

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handle);
        return () => window.removeEventListener("scroll", handle);
    }, []);

    return (
        <nav
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-48px)] max-w-7xl ${
                scrolled
                    ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-full shadow-2xl shadow-peach-500/5 py-4 px-8"
                    : "bg-transparent py-5 px-6"
            }`}
        >
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-peach-200">
                        <Image src="/logo.png" alt="Kimmy Kost Logo" fill className="object-cover" />
                    </div>
                    <span className="font-extrabold text-xl tracking-tighter text-peach-600 dark:text-peach-400">
                        Kimmy Kost
                    </span>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <a href="#lokasi" className="hover:text-peach-500 transition-colors">Lokasi</a>
                    <a href="#gallery" className="hover:text-peach-500 transition-colors">Gallery</a>
                    <a href="#testimoni" className="hover:text-peach-500 transition-colors">Testimoni</a>
                    
                    {/* <-- 2. Pasang tombol Theme Toggle di sini */}
                    <ThemeToggle /> 

                    <a 
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`} 
                        className="flex items-center gap-2 bg-peach-500 hover:bg-peach-600 text-white px-6 py-3 rounded-full transition-all shadow-lg shadow-peach-500/20 active:scale-95"
                    >
                        Halo Admin! <Smile className="w-4 h-4" />
                    </a>
                </div>

                {/* MOBILE MENU BUTTON & THEME TOGGLE (Mobile) */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle /> {/* <-- Tambahkan juga untuk mode mobile */}
                    <button 
                        className="text-slate-800 dark:text-slate-200"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/20 dark:border-slate-800 shadow-2xl rounded-3xl mt-4 flex flex-col px-8 py-6 space-y-5 md:hidden">
                    <a href="#lokasi" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 font-semibold hover:text-peach-500">Lokasi</a>
                    <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 font-semibold hover:text-peach-500">Gallery</a>
                    <a href="#testimoni" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 font-semibold hover:text-peach-500">Testimoni</a>
                </div>
            )}
        </nav>
    );
}