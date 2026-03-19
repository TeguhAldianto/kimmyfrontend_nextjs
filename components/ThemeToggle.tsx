"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    // Hanya memanggil setTheme dan resolvedTheme yang benar-benar digunakan
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-peach-100 text-peach-600 dark:bg-slate-800 dark:text-peach-400 hover:bg-peach-200 dark:hover:bg-slate-700 transition-colors shadow-sm active:scale-95 flex items-center justify-center w-10 h-10"
            aria-label="Toggle Dark Mode"
        >
            {/* Ikon Matahari hanya muncul saat Dark Mode */}
            <Sun size={20} className="hidden dark:block" />

            {/* Ikon Bulan hanya muncul saat Light Mode */}
            <Moon size={20} className="block dark:hidden" />
        </button>
    );
}