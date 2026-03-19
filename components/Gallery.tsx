import Image from "next/image";
import { getGallery } from "@/lib/api";
import type { Gallery as GalleryType } from "@/types";

export default async function GallerySection() {
  const data: GalleryType[] = await getGallery();

  return (
    <section id="gallery" className="py-24 px-6 bg-peach-50/30 dark:bg-slate-950/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-4 leading-[1.1]">
                Intip Suasana <span className="text-transparent bg-clip-text bg-linear-to-r from-peach-400 to-peach-600">Estetik</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-medium text-lg">
                Karena lingkungan yang nyaman bikin studimu makin fokus. Cek foto-foto kamarnya ya! 💕
            </p>
        </div>

        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[220px]">
          {data.map((img, i) => (
            <div 
              key={img.id} 
              className={`relative rounded-3xl overflow-hidden group border border-peach-100 dark:border-slate-800 ${
                i === 0 || i === 3 || i === 6 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <Image
                src={img.image}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}