"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Usamos el provider de "credentials" que configuramos en NextAuth
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Credenciales inválidas. Intenta nuevamente.");
    } else {
      // Si el email es del admin, lo mandamos a su panel, si no, al de pymes
      if (email === "admin@ecosistema.cl") {
        router.push("/admin/dashboard");
      } else {
        router.push("/pymes/dashboard");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Acceso al Ecosistema
        </h1>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#e5a93b] focus:border-transparent outline-none"
              placeholder="correo@pyme.cl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#e5a93b] focus:border-transparent outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e5a93b] text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Mock Admin: admin@ecosistema.cl / admin123</p>
          <p>Mock Pyme: pyme@local.cl / pyme123</p>
        </div>
      </div>
    </main>
  );
}