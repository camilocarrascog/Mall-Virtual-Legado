import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-legado-crema text-legado-texto">
      
      {/* Contenedor tipo "Móvil" para replicar la maqueta visual del equipo comercial */}
      <div className="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
        
        {/* Logo y Eslogan */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-5xl font-bold text-legado-verde tracking-tight">
            LEGADO
          </h1>
          <p className="font-sans text-[10px] text-legado-dorado tracking-widest font-bold mt-2 uppercase">
            Nuestra Raíz, Tu Próximo Destino
          </p>
        </div>

        {/* Hero Section - Mensaje Principal */}
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-legado-verde mb-4 leading-tight">
            Todo lo que nuestra región tiene para ti, en un solo lugar.
          </h2>
          <p className="font-sans text-sm text-gray-500 mb-8 leading-relaxed">
            Empresas locales, experiencias auténticas y tecnología que conecta.
          </p>
          <button className="bg-legado-terracota text-white font-sans text-sm font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-orange-700 transition-colors w-full">
            EXPLORAR
          </button>
        </div>

        {/* Botonera de Categorías (Rutas operativas para SEO) */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
          <Link href="/hoteles" className="flex flex-col items-center justify-center p-4 bg-legado-crema rounded-2xl hover:shadow-md transition-all border border-transparent hover:border-legado-dorado">
            <span className="text-3xl mb-2 text-legado-verde">🛏️</span>
            <span className="font-sans text-xs font-bold text-legado-verde text-center">Alojamiento</span>
          </Link>
          
          <Link href="/restaurantes" className="flex flex-col items-center justify-center p-4 bg-legado-crema rounded-2xl hover:shadow-md transition-all border border-transparent hover:border-legado-dorado">
            <span className="text-3xl mb-2 text-legado-verde">🍽️</span>
            <span className="font-sans text-xs font-bold text-legado-verde text-center">Gastronomía</span>
          </Link>

          {/* Nueva Categoría: Turismo Regional */}
          <Link href="/turismo" className="col-span-2 flex flex-col items-center justify-center p-4 bg-legado-crema rounded-2xl hover:shadow-md transition-all border border-transparent hover:border-legado-dorado">
            <span className="text-3xl mb-2 text-legado-verde">⛰️</span>
            <span className="font-sans text-xs font-bold text-legado-verde text-center">Turismo Regional</span>
          </Link>
        </div>
        
      </div>
    </main>
  );
}
      