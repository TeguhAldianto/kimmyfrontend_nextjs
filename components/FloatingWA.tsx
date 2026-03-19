"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center active:scale-95"
        >
            {/* Animasi Ping Peach lembut */}
            <div className="absolute inset-0 bg-peach-500 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
            
            {/* Tombol Utama - Rounded full chat icon */}
            <div className="relative bg-peach-500 text-white p-4.5 rounded-full shadow-2xl group-hover:scale-110 transition-transform flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-peach-500/30">
                <MessageCircle size={28} />
            </div>
        </a>
    );
}