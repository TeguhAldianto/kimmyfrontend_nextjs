import { getLocations } from "@/lib/api";
import { Location } from "@/types";
import Image from "next/image";
import Reveal from "./Reveal";

export default async function Locations() {
    const data: Location[] = await getLocations();
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <section id="lokasi" className="py-24 px-6 bg-white scroll-mt-24">

            <div className="text-center mb-14">
                <h2 className="font-heading text-3xl text-dark">
                    Lokasi Kost
                </h2>
                <p className="text-gray-500 mt-2">
                    Pilihan lokasi terbaik untuk kamu
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {data.map((loc) => (
                    <Reveal key={loc.id}>
                        <div className="group rounded-2xl border bg-white hover:shadow-xl transition">

                            <div className="relative h-48">
                                <Image
                                    src={`https://picsum.photos/400/300?random=${loc.id}`}
                                    alt={loc.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-heading text-gray-800">{loc.name}</h3>

                                <div className="flex gap-2 mt-2 text-xs">
                                    <span className="bg-gray-100 px-2 py-1 rounded">
                                        {loc.floors} lantai
                                    </span>
                                    <span className="bg-gray-100 px-2 py-1 rounded">
                                        {loc.rooms} kamar
                                    </span>
                                </div>

                                <p className="mt-4 text-gray-600 text-sm">
                                    {loc.description}
                                </p>

                                <a
                                    href={wa}
                                    className="mt-6 block bg-primary text-white text-center py-2 rounded-lg"
                                >
                                    WhatsApp
                                </a>
                            </div>

                        </div>
                    </Reveal>
                ))}

            </div>
        </section>
    );
}