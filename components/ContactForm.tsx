"use client";

import { useState } from "react";
import { Send, MapPin, Smile } from "lucide-react";
import Reveal from "./Reveal"; // Pastikan komponen Reveal kamu sudah ada

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nama: "",
        cabang: "",
        pesan: ""
    });

    // Daftar Cabang untuk Pilihan Tombol (Card-Tabs)
    const daftarCabang = [
        { id: "cabang1", name: "Pusat (Dekat Kampus)" },
        { id: "cabang2", name: "Utara (City View)" },
        { id: "cabang3", name: "Selatan (Tenang)" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fungsi khusus untuk menangani pilihan cabang
    const selectCabang = (cabangName: string) => {
        setFormData({ ...formData, cabang: cabangName });
    };

    const handleKirimWA = (e: React.FormEvent) => {
        e.preventDefault();

        const noWA = process.env.NEXT_PUBLIC_WHATSAPP;

        if (!noWA) {
            alert("Nomor WhatsApp admin belum diatur di sistem!");
            return;
        }

        if (!formData.cabang) {
            alert("Tolong pilih cabang kost terlebih dahulu ya! 💕");
            return;
        }

        const textWA = `Halo Admin Kimmy Kost, Perkenalkan saya ${formData.nama}. Saya tertarik untuk menyewa kamar di *${formData.cabang}*. ${formData.pesan ? `Pesan: ${formData.pesan}` : ""}. Mohon informasi kamarnya ya.`;

        window.open(`https://wa.me/${noWA}?text=${textWA}`, "_blank");
    };

    return (
        <section id="kontak" className="py-24 px-6 bg-peach-50/50 dark:bg-slate-950/20 scroll-mt-20">
            <Reveal>
                <div className="max-w-2xl mx-auto">
                    {/* Header: Title yang Cute & Simple */}
                    <div className="text-center mb-16 flex flex-col items-center gap-2">
                        <Smile className="w-12 h-12 text-peach-500 mb-2" />
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white leading-[1.1]">
                            Halo, <br /> Admin <span className="text-transparent bg-clip-text bg-linear-to-r from-peach-400 to-peach-600">Kimmy Kost</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-lg leading-relaxed text-lg">
                            Tulis pesanmu di bawah dan langsung terhubung dengan tim kami via WhatsApp. Respon cepat, ramah, dan solutif. 💕
                        </p>
                    </div>

                    {/* Form Utama: Floating White Card */}
                    <form onSubmit={handleKirimWA} className="bg-white dark:bg-slate-900 p-10 md:p-12 rounded-[3.5rem] shadow-2xl shadow-peach-500/5 border border-slate-200 dark:border-slate-800 flex flex-col gap-10">

                        {/* Input Nama (Simple, underline style) */}
                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="nama" className="text-sm font-semibold text-peach-600 dark:text-peach-400">Nama Kamu</label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                required
                                value={formData.nama}
                                onChange={handleChange}
                                placeholder="Misal: Kak Adelia..."
                                className="w-full text-lg py-4 border-b-2 bg-transparent border-slate-200 dark:border-slate-800 outline-none focus:border-peach-500 transition-colors text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                            />
                        </div>

                        {/* Input Pilihan Cabang (Kekinian: Card-Tabs) */}
                        <div className="flex flex-col gap-5 relative">
                            <label className="text-sm font-semibold text-peach-600 dark:text-peach-400">Pilih Lokasi Cabang Kost Putri</label>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {daftarCabang.map((cabang) => (
                                    <button
                                        key={cabang.id}
                                        type="button"
                                        onClick={() => selectCabang(cabang.name)}
                                        className={`flex-1 group flex flex-col gap-3 p-6 rounded-3xl border-2 transition-all duration-300 items-start text-left hover:scale-[1.03] ${formData.cabang === cabang.name
                                                ? "bg-peach-500 text-white border-peach-600 shadow-xl shadow-peach-500/20"
                                                : "bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-peach-300 dark:hover:border-peach-700"
                                            }`}
                                    >
                                        <div className={`p-3 rounded-full ${formData.cabang === cabang.name ? 'bg-white/20' : 'bg-white dark:bg-slate-900'} group-hover:scale-110 transition-transform`}>
                                            <MapPin className={`w-5 h-5 ${formData.cabang === cabang.name ? 'text-white' : 'text-peach-500'}`} />
                                        </div>
                                        <span className="font-semibold text-base leading-snug">{cabang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Pesan */}
                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="pesan" className="text-sm font-semibold text-peach-600 dark:text-peach-400">Pesan (Opsional)</label>
                            <textarea
                                id="pesan"
                                name="pesan"
                                rows={2}
                                value={formData.pesan}
                                onChange={handleChange}
                                placeholder="Kapan bisa survei? atau Ada kamar AC kosong bulan depan?"
                                className="w-full text-lg py-4 border-b-2 bg-transparent border-slate-200 dark:border-slate-800 outline-none focus:border-peach-500 transition-colors text-slate-900 dark:text-white font-medium placeholder:text-slate-400 resize-none"
                            ></textarea>
                        </div>

                        {/* Tombol Submit (Rounded full, cute button) */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-peach-500 hover:bg-peach-600 text-white font-bold text-lg py-5 rounded-full transition-all shadow-xl shadow-peach-500/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Kirim ke WhatsApp 💕 <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </Reveal>
        </section>
    );
}