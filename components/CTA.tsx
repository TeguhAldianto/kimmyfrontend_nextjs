export default function CTA() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <section className="py-20 text-center bg-primary text-white">

            <h2 className="font-heading text-3xl">
                Cari Kost Nyaman?
            </h2>

            <p className="mt-3 opacity-90">
                Hubungi admin sekarang
            </p>

            <a
                href={wa}
                className="mt-6 inline-block bg-white text-dark px-6 py-3 rounded-xl"
            >
                WhatsApp
            </a>

        </section>
    );
}