"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handle);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                    <span className="font-heading text-gray-800">
                        Kimmy Kost
                    </span>
                </div>

                {/* MENU */}
                <div className="space-x-6 text-sm text-gray-600 hidden md:block">
                    <a href="#lokasi" className="hover:text-secondary">Lokasi</a>
                    <a href="#gallery" className="hover:text-secondary">Gallery</a>
                    <a href="#testimoni" className="hover:text-secondary">Testimoni</a>
                </div>

            </div>
        </nav>
    );
}