import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Fuente para textos legibles (Sans-serif)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Fuente para titulares elegantes (Serif)
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Ecosistema Legado',
  description: 'Nuestra Raíz, Tu Próximo Destino',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/* Inyectamos las fuentes y el color de fondo base a todo el proyecto */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-legado-crema text-legado-texto`}>
        {children}
      </body>
    </html>
  );
}