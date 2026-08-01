/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        legado: {
          crema: '#F4EFE6',      
          verde: '#2C4C3B',      
          dorado: '#C69C6D',     
          terracota: '#D97742',  
          texto: '#334155',      
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}