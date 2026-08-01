import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Restaurantes y Gastronomía local | Mall Virtual Legado',
  description: 'Descubre la mejor gastronomía de Coquimbo. Mariscos, carnes y picadas tradicionales.',
};

const restaurantesData = [
  { id: "mar-adentro", nombre: "Mar Adentro Restobar", ciudad: "Coquimbo (Herradura)", imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", premium: true },
  { id: "el-chileno", nombre: "Picada El Chileno", ciudad: "Guanaqueros", imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80", premium: false },
];

export default function RestaurantesPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white p-8 font-sans">
      <div className="mb-8">
        <Link href="/" className="text-[#e5a93b] hover:underline text-sm flex items-center gap-2">
          ← Volver al Mall Principal
        </Link>
      </div>
      
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-100">Gastronomía y Sabores</h1>
        <p className="text-gray-400 mt-2">Nuestra raíz en cada plato.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {restaurantesData.map((resto) => (
          <div key={resto.id} className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-[#e5a93b] transition-all p-4">
            <img src={resto.imagen} alt={resto.nombre} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold text-gray-100">{resto.nombre}</h3>
            <p className="text-sm text-gray-400 mb-4">{resto.ciudad}</p>
            <button className="w-full bg-transparent border border-[#e5a93b] text-[#e5a93b] hover:bg-[#e5a93b] hover:text-black font-medium py-2 rounded transition-all text-sm">
              Ver Menú Digital
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}