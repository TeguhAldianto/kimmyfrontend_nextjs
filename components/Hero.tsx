"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

export default function Hero() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-peach-50/50 dark:bg-slate-950">
            {/* Background Decor - Bulatan Peach lembut */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-peach-100 dark:bg-peach-900/10 rounded-full blur-[100px] opacity-70 z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-peach-100 dark:bg-peach-950/50 text-peach-600 dark:text-peach-400 text-sm font-semibold shadow-sm border border-peach-200 dark:border-peach-800">
                    <Star className="w-4 h-4 fill-peach-500 text-peach-500" />
                    Premium Female Residence
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-950 dark:text-white leading-[1.05] mb-8">
                    Hunian Nyaman <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-peach-400 to-peach-600">
                        Estetik
                    </span> & Aman.
                </h1>

                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-xl mb-12 leading-relaxed font-medium">
                    Kamar idaman dekat area kampus. Cukup bawa koper, nikmati suasana bersih, tenang, dan bikin studimu makin fokus. 💕
                </p>

                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                    <a
                        href="#lokasi"
                        className="flex items-center justify-center gap-2 bg-peach-500 hover:bg-peach-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-peach-500/20 active:scale-95"
                    >
                        <MapPin className="w-5 h-5" /> Lihat Cabang
                    </a>
                    <a
                        href={wa}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 border-2 border-peach-100 dark:border-slate-800 hover:bg-peach-100/50 dark:hover:bg-slate-800 transition-colors active:scale-95"
                    >
                        Tanya Admin
                    </a>
                </div>
            </motion.div>
        </section>
    );
}