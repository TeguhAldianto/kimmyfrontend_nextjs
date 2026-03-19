import { Smile } from "lucide-react";

export default function CTA() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <section className="py-16 px-6 bg-peach-50/50 dark:bg-slate-950">
            <div className="max-w-5xl mx-auto bg-linear-to-br from-peach-500 to-peach-600 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl shadow-peach-500/20 relative overflow-hidden">
                {/* Dekorasi Latar Belakang Lembut */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                        Siap Pindah ke <br /> Kamar Idamanmu? 💕
                    </h2>
                    <p className="text-peach-100 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                        Jangan sampai kehabisan. Chat admin ramah kami sekarang untuk menanyakan sisa kamar yang tersedia bulan ini!
                    </p>
                    <a
                        href={wa}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-peach-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-peach-600/10"
                    >
                        Halo Admin, Ada Kamar Kosong? <Smile className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
}