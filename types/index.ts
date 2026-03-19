export type Location = {
    id: number;
    name: string;
    floors: number;
    rooms: number;
    description: string;
};

export type Gallery = {
    id: number;
    image: string;
    altText?: string; // Tambahan opsional untuk SEO 2026
};

export type Testimonial = {
    id: number;
    name: string;
    review: string;
    rating: number; // 1 - 5 stars
};