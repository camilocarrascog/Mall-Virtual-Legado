import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import clientPromise from "@/lib/mongodb"; // Nuestra conexión en caché

export default async function AdminDashboard() {
  // 1. Verificación de Seguridad (Middleware a nivel de componente)
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  // 2. Consulta real a MongoDB Atlas (Fase Lean)
  const client = await clientPromise;
  const db = client.db("ecosistema_db"); // El nombre lógico que le dimos

  // Contamos cuántas vitrinas existen (por ahora será 0 hasta que agreguemos datos)
  const totalStores = await db.collection("Stores").countDocuments();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 flex justify-between items-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel Central de Operaciones</h1>
            <p className="text-gray-500 mt-1">Conectado a Clouster-Legado (MongoDB Atlas)</p>
          </div>
          <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Admin Activo
          </span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Tarjeta de Métricas: Locales */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-[#e5a93b]">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Vitrinas Activas</h2>
            <p className="text-4xl font-bold text-gray-900">{totalStores}</p>
            <p className="text-xs text-gray-400 mt-2">Modelo de Arriendo Base</p>
          </div>
          
          {/* Tarjeta de Métricas: PPC */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-blue-500">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Clics Totales (PPC)</h2>
            <p className="text-4xl font-bold text-gray-900">0</p>
            <p className="text-xs text-gray-400 mt-2">Modelo de Descuento por Clic</p>
          </div>

          {/* Tarjeta de Métricas: CPA */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-purple-500">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Ventas Express (CPA)</h2>
            <p className="text-4xl font-bold text-gray-900">$0</p>
            <p className="text-xs text-gray-400 mt-2">Comisión Directa</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Gestión de Clientes (Pymes)</h2>
            <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition">
              + Nueva Vitrina
            </button>
          </div>
          <div className="p-8 text-center text-gray-500 bg-gray-50">
            {totalStores === 0 ? (
              <p>No hay locales registrados en la base de datos. ¡Es hora de que Moisés empiece a vender!</p>
            ) : (
              <p>Mostrando {totalStores} locales...</p>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#e5a93b] hover:underline text-sm font-semibold">
            ← Volver al Mall Principal
          </Link>
        </div>
      </div>
    </main>
  );
}