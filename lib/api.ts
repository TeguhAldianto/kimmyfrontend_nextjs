const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'; // Fallback URL

export async function getLocations() {
  try {
    const res = await fetch(`${API}/locations`, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Gagal mengambil data lokasi:", error);
    return []; // Mengembalikan array kosong jika error agar web tidak crash
  }
}

export async function getGallery() {
  try {
    const res = await fetch(`${API}/gallery`, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Gagal mengambil data galeri:", error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    const res = await fetch(`${API}/testimonials`, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Gagal mengambil data testimoni:", error);
    return [];
  }
}