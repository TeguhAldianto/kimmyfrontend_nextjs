import { Smile } from "lucide-react";

export default function Loading() {
    return (
        /* PERBAIKAN: z-[100] diubah menjadi z-100 */
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-peach-50 dark:bg-slate-950">

            {/* Animasi Ikon */}
            <div className="relative flex items-center justify-center">
                {/* Lingkaran berdenyut di belakang */}
                <div className="absolute w-24 h-24 bg-peach-200 dark:bg-peach-900/50 rounded-full animate-ping opacity-75"></div>

                {/* Ikon Smile melompat-lompat */}
                <div className="relative bg-peach-500 text-white p-5 rounded-full shadow-2xl animate-bounce border-4 border-white dark:border-slate-800">
                    <Smile size={40} />
                </div>
            </div>

            {/* Teks Loading */}
            <h2 className="mt-8 text-xl font-bold text-peach-600 dark:text-peach-400 animate-pulse tracking-tight">
                Menyiapkan kamar idamanmu... 💕
            </h2>

        </div>
    );
}