const API = process.env.NEXT_PUBLIC_API_URL;

export async function getLocations() {
  const res = await fetch(`${API}/locations`, { cache: "no-store" });
  return res.json();
}

export async function getGallery() {
  const res = await fetch(`${API}/gallery`, { cache: "no-store" });
  return res.json();
}

export async function getTestimonials() {
  const res = await fetch(`${API}/testimonials`, { cache: "no-store" });
  return res.json();
}