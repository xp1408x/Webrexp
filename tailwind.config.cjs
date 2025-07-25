/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-indigo-digital': '#2956D9',
        'azul-cielo-vibrante': '#00B7F3',
        'gris-carbon-profundo': '#1C1C28',
        'gris-claro-niebla': '#F5F7FA',
        'aqua-brillante': '#00F0B5',
      },
      fontFamily: {
        poppins: ["Poppins", "Space Grotesk", "Arial", "sans-serif"],
        inter: ["Inter", "Manrope", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
