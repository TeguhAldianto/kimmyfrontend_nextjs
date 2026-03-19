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
};

export type Testimonial = {
    id: number;
    name: string;
    review: string;
    rating: number;
};