import Image from "next/image";
import { getGallery } from "@/lib/api";
import type { Gallery as GalleryType } from "@/types";

export default async function GallerySection() {
  const data: GalleryType[] = await getGallery();

  return (
    <section id="gallery" className="py-24 px-6 bg-white">

      <h2 className="font-heading text-3xl text-center mb-10 text-dark">
        Gallery
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {data.map((img) => (
          <div key={img.id} className="relative h-40 rounded-xl overflow-hidden">
            <Image
              src={img.image}
              alt="gallery"
              fill
              className="object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

    </section>
  );
}