/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#C65D2E",     // warna logo (coklat orange)
                secondary: "#4F7C6E",   // hijau logo
                base: "#F5F5F5",
                dark: "#1F2937",
            },
            fontFamily: {
                heading: ["var(--font-playfair)"],
                body: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};