import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        legado: {
          crema: '#F4EFE6',      // Fondo cálido principal
          verde: '#2C4C3B',      // Titulares y secciones oscuras
          dorado: '#C69C6D',     // Acentos y textos destacados ("MUY PRONTO")
          terracota: '#D97742',  // Botones de acción ("EXPLORAR")
          texto: '#334155',      // Gris oscuro con tinte cálido para máxima legibilidad
        }
      },
      fontFamily: {
        // Configuraremos las variables CSS de las fuentes en el siguiente paso
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;