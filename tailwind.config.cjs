/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cian-futurista': '#00CFFF',
        'azul-conectado': '#1565FF',
        'gris-urbano': '#2D2D2D',
        'blanco-puro': '#FFFFFF',
        'gris-neblina': '#E5E8EC',
      },
      fontFamily: {
        poppins: ["Poppins", "Space Grotesk", "Arial", "sans-serif"],
        inter: ["Inter", "Manrope", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
