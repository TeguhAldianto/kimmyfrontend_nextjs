"use client";

import { Phone } from "lucide-react";

export default function FloatingWA() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <a
            href={wa}
            target="_blank"
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
                <Phone size={22} />
            </div>
        </a>
    );
}