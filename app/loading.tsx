export default function Loading() {
    return (
        <main className="animate-pulse">

            {/* HERO */}
            <section className="h-screen flex items-center justify-center bg-base">
                <div className="text-center space-y-4">
                    <div className="h-6 w-40 bg-gray-200 mx-auto rounded"></div>
                    <div className="h-10 w-80 bg-gray-300 mx-auto rounded"></div>
                    <div className="h-4 w-64 bg-gray-200 mx-auto rounded"></div>
                    <div className="h-10 w-40 bg-gray-300 mx-auto rounded"></div>
                </div>
            </section>

            {/* LOCATIONS */}
            <section className="py-20 px-6">
                <div className="h-8 w-48 bg-gray-300 mx-auto mb-10 rounded"></div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow space-y-4">
                            <div className="h-5 w-32 bg-gray-300 rounded"></div>
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-8 w-full bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="py-20 px-6">
                <div className="h-8 w-40 bg-gray-300 mx-auto mb-10 rounded"></div>

                <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-40 bg-gray-200 rounded-lg"></div>
                    ))}
                </div>
            </section>

        </main>
    );
}