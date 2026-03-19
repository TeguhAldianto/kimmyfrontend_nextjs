import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimmy Kost Putri | Hunian Estetik, Aman & Nyaman 💕",
  description: "Pilihan kos putri terbaik dengan desain minimalis, fasilitas lengkap, dan lingkungan yang mendukung fokus studimu.",
  keywords: ["Kost Putri", "Kos Mahasiswi", "Kos Estetik", "Sewa Kamar", "Kost Premium"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-peach-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}