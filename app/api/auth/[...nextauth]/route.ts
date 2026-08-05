import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "correo@pyme.cl" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        // MOCK DATA: Aquí luego conectaremos MongoDB Atlas
        
        // Mock Admin (Tú, Hernán o Moisés)
        if (credentials?.email === "admin@ecosistema.cl" && credentials?.password === "admin123") {
          return { id: "1", name: "Camilo CTO", email: "admin@ecosistema.cl", role: "admin" };
        }
        
        // Mock Pyme (Cliente Vitrina)
        if (credentials?.email === "pyme@local.cl" && credentials?.password === "pyme123") {
          return { id: "2", name: "Local Turismo", email: "pyme@local.cl", role: "pyme" };
        }

        return null; // Falla la autenticación
      }
    })
  ],
  callbacks: {
    // Pasamos el rol del usuario al token y a la sesión
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login', // Ruta personalizada para que uses Tailwind V4
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };