import Image from "next/image";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <footer className="bg-peach-50 dark:bg-slate-950 border-t border-peach-100 dark:border-slate-800 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                
                {/* Kolom 1: Branding */}
                <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-peach-200 shadow-sm">
                             <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                        </div>
                        <h2 className="font-extrabold text-2xl text-peach-600 dark:text-peach-400">Kimmy Kost</h2>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-sm leading-relaxed text-base">
                        Pilihan tepat hunian mahasiswi yang modern, estetik, dan aman. Mewujudkan kenyamanan standar tinggi untuk mendukung studimu. 💕
                    </p>
                </div>

                {/* Kolom 2: Tautan Cepat */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-lg text-slate-950 dark:text-white mb-6">Navigasi</h3>
                    <ul className="space-y-4 text-slate-700 dark:text-slate-300 font-medium">
                        <li><a href="#beranda" className="hover:text-peach-500 transition-colors">Beranda</a></li>
                        <li><a href="#lokasi" className="hover:text-peach-500 transition-colors">Daftar Lokasi</a></li>
                        <li><a href="#gallery" className="hover:text-peach-500 transition-colors">Galeri Foto</a></li>
                        <li><a href="#testimoni" className="hover:text-peach-500 transition-colors">Ulasan</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Kontak */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-lg text-slate-950 dark:text-white mb-6">Hubungi Kami</h3>
                    <ul className="space-y-4 text-slate-700 dark:text-slate-300 font-medium">
                        <li>
                            <a href={wa} target="_blank" className="flex items-center gap-3 hover:text-peach-500 transition-colors">
                                <Phone className="w-5 h-5 text-peach-500" /> WhatsApp Admin
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 hover:text-peach-500 transition-colors">
                                <Instagram className="w-5 h-5 text-peach-500" /> @kimmy.kost
                            </a>
                        </li>
                        <li>
                            <span className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-peach-500 shrink-0 mt-1" /> Pusat: Jl. Mahasiswi No 12, Kota Impian.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-peach-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>© {new Date().getFullYear()} Kimmy Kost Putri. All rights reserved.</p>
                <p className="italic">Teguh Aldianto</p>
            </div>
        </footer>
    );
}