import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function PymeDashboard() {
  const session = await getServerSession(authOptions);

  // Permite el acceso a pymes, o a admins que estén revisando la cuenta
  if (!session || (session.user.role !== "pyme" && session.user.role !== "admin")) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenido, {session.user.name}
          </h1>
          <p className="text-gray-500 mt-2">Gestiona tu Vitrina Virtual en el Ecosistema</p>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Tu Espacio Disponible</h2>
          <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded bg-gray-50">
            <p className="text-gray-500">
              Pronto podrás subir imágenes y editar el texto de tu local desde aquí.
            </p>
            <button className="mt-4 bg-[#e5a93b] text-white px-4 py-2 rounded font-medium hover:bg-yellow-600 transition-colors">
              Editar Vitrina (En desarrollo)
            </button>
          </div>
        </div>

        <div>
          <Link href="/" className="text-[#e5a93b] hover:underline text-sm font-semibold">
            ← Ver cómo luce en el Mall
          </Link>
        </div>
      </div>
    </main>
  );
}