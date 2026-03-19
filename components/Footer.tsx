export default function Footer() {
    const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

    return (
        <footer className="bg-base border-t">

            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

                <div>
                    <h2 className="font-heading text-dark">Kimmy Kost</h2>
                    <p className="text-sm text-gray-500 mt-3">
                        Hunian nyaman untuk mahasiswi
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-dark mb-4">Menu</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#lokasi">Lokasi</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#testimoni">Testimoni</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-dark mb-4">Kontak</h3>
                    <a href={wa} className="bg-primary text-white px-5 py-2 rounded-lg">
                        WhatsApp
                    </a>
                </div>

            </div>

            <div className="text-center text-sm text-gray-500 py-6">
                © {new Date().getFullYear()} Kimmy Kost
            </div>

        </footer>
    );
}