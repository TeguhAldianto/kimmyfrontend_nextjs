import { getTestimonials } from "@/lib/api";
import { Testimonial } from "@/types";
import Reveal from "./Reveal";

export default async function Testimonials() {
    const data: Testimonial[] = await getTestimonials();

    return (
        <section id="testimoni" className="py-24 px-6 bg-base">

            <h2 className="font-heading text-3xl text-center text-dark mb-10">
                Testimoni Penghuni
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {data.map((t) => (
                    <Reveal key={t.id}>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-primary">★★★★★</p>
                            <p className="mt-3 text-gray-600">{t.review}</p>
                            <p className="mt-4 font-semibold text-gray-800">
                                — {t.name}
                            </p>
                        </div>
                    </Reveal>
                ))}

            </div>
        </section>
    );
}