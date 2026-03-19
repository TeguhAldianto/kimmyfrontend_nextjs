import { getTestimonials } from "@/lib/api";
import { Testimonial } from "@/types";
import Reveal from "./Reveal";
import { Quote, Star } from "lucide-react";

export default async function Testimonials() {
    const data: Testimonial[] = await getTestimonials();

    return (
        <section id="testimoni" className="py-24 px-6 bg-white dark:bg-slate-900/50 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white leading-[1.1] mb-4 max-w-lg mx-auto">
                        Kata Mereka yang <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-peach-400 to-peach-600">Sudah Menetap</span>
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-medium text-lg leading-relaxed">
                        Testimoni jujur dari penghuni setia Kimmy Kost Putri. Suasana ramah dan nyaman bikin betah studimu. 💕
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((t) => (
                        <Reveal key={t.id}>
                            <div className="relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-peach-500/5 border border-slate-200/70 dark:border-slate-800 flex flex-col h-full hover:shadow-peach-500/10 transition-shadow duration-300">
                                <Quote className="absolute top-8 right-8 w-14 h-14 text-peach-100 dark:text-slate-800" />
                                
                                <div className="flex gap-1 mb-8 relative z-10">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-peach-500 text-peach-500" />
                                    ))}
                                </div>
                                
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed grow relative z-10 italic">
                                    &quot;{t.review}&quot;
                                    <span className="inline-block text-2xl text-peach-300 dark:text-peach-700 font-serif leading-none ml-1">,,</span>
                                </p>
                                
                                <div className="mt-10 flex items-center gap-4 border-t border-peach-100 dark:border-slate-800 pt-8">
                                    <div className="w-12 h-12 rounded-full bg-peach-100 dark:bg-peach-950 flex items-center justify-center font-extrabold text-peach-600 dark:text-peach-400 text-xl border border-peach-200">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-slate-950 dark:text-white tracking-tight">{t.name}</p>
                                        <p className="text-sm font-semibold text-slate-500">Penghuni Setia</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}