import React from 'react';
import Link from 'next/link';

// ESTO ES EL SEO: Lo que leerá Google cuando rastree la página
export const metadata = {
  title: 'Hotelería y Alojamientos en Coquimbo | Mall Virtual Legado',
  description: 'Encuentra los mejores hoteles, cabañas y hostales en la Región de Coquimbo. Reserva directo con el comercio local.',
};

const hotelesData = [
  { id: "serena-dreams", nombre: "Serena Dreams Hotel", ciudad: "La Serena", imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", premium: true },
  { id: "campanario", nombre: "Hotel Campanario", ciudad: "La Serena", imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80", premium: false },
];

export default function HotelesPage() {
  return (
    <main className="main min-h-screen">
      <div className="mb-8">
        <Link href="/" className="text-[#e5a93b] hover:underline text-sm flex items-center gap-2">
          ← Volver al Mall Principal
        </Link>
      </div>
      
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-100">Hotelería y Alojamientos</h1>
        <p className="text-gray-400 mt-2">Descansa en los mejores rincones de nuestra región.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotelesData.map((hotel) => (
          <div key={hotel.id} className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-[#e5a93b] transition-all p-4">
            <img src={hotel.imagen} alt={hotel.nombre} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold text-gray-100">{hotel.nombre}</h3>
            <p className="text-sm text-gray-400 mb-4">{hotel.ciudad}</p>
            <button className="w-full bg-transparent border border-[#e5a93b] text-[#e5a93b] hover:bg-[#e5a93b] hover:text-black font-medium py-2 rounded transition-all text-sm">
              Visitar Sitio
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}