import { getLocations } from "@/lib/api";
import { Location } from "@/types";
import Image from "next/image";
import Reveal from "./Reveal";
import { Layers, DoorClosed } from "lucide-react";

export default async function Locations() {
    const data: Location[] = await getLocations();
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <section id="lokasi" className="py-24 px-6 bg-white dark:bg-slate-950 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white leading-[1.1] mb-5 max-w-lg">
                        Pilih <span className="text-transparent bg-clip-text bg-linear-to-r from-peach-400 to-peach-600">Rumah Kedua</span> Favoritmu
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-medium text-lg leading-relaxed">
                        Strategis dekat area kampus. Cek fasilitas dan suasananya, lalu hubungi kami untuk survei lokasi. 💕
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((loc) => (
                        <Reveal key={loc.id}>
                            <div className="group flex flex-col h-full rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden shadow-peach-500/5 hover:shadow-2xl hover:shadow-peach-500/10 transition-all duration-300">
                                
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={`https://picsum.photos/400/300?random=${loc.id}`}
                                        alt={loc.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                </div>

                                <div className="p-10 flex flex-col grow">
                                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 tracking-tight">{loc.name}</h3>
                                    
                                    <div className="flex gap-4 mb-5 text-sm font-semibold text-peach-600 dark:text-peach-400">
                                        <span className="flex items-center gap-1.5">
                                            <Layers className="w-4 h-4 text-peach-500" /> {loc.floors} Lantai
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <DoorClosed className="w-4 h-4 text-peach-500" /> {loc.rooms} Kamar
                                        </span>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 mb-9 grow leading-relaxed text-base">
                                        {loc.description}
                                    </p>

                                    <a
                                        href={wa}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full bg-peach-100 dark:bg-peach-900/30 text-peach-600 dark:text-peach-400 font-bold text-center py-4 rounded-full group-hover:bg-peach-500 group-hover:text-white transition-colors active:scale-95 shadow-md shadow-peach-500/5"
                                    >
                                        Tanya Admin via WA 💕
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}