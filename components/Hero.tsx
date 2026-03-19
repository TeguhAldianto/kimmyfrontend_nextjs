"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <section className="min-h-screen flex items-center justify-center bg-base px-6 pt-24">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl"
            >

                <Image
                    src="/logo.png"
                    alt="logo"
                    width={90}
                    height={90}
                    className="mx-auto mb-6"
                />

                <p className="text-secondary">
                    Female Student Residence
                </p>

                <h1 className="font-heading text-4xl md:text-5xl mt-4 text-dark">
                    Hunian Nyaman untuk Mahasiswi
                </h1>

                <p className="mt-6 text-gray-500">
                    Aman, bersih, dan strategis untuk kehidupan kampus.
                </p>

                <a
                    href={wa}
                    className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
                >
                    Cek Ketersediaan
                </a>

            </motion.div>
        </section>
    );
}