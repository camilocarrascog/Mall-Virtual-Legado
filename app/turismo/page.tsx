import Link from 'next/link';

export const metadata = {
  title: 'Turismo Regional | Ecosistema Legado',
  description: 'Descubre las mejores experiencias y destinos en la Región de Coquimbo',
};

export default function TurismoPage() {
  return (
    <main className="min-h-screen bg-legado-crema text-legado-texto p-8 font-sans">
      <div className="mb-8">
        <Link href="/" className="text-legado-terracota hover:underline text-sm font-bold flex items-center gap-2">
          ← Volver al Pasillo Principal
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-legado-verde">Turismo Regional</h1>
        <p className="text-legado-texto mt-2 font-sans">Descubre lo mejor de nuestra tierra.</p>
      </header>

      {/* Aquí inyectaremos los datos de los clientes hardcodeados más adelante */}
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
        <p className="text-legado-dorado font-bold">Nuevas experiencias llegarán muy pronto...</p>
      </div>
    </main>
  );
}