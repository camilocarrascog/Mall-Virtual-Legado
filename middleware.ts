import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { token } = req.nextauth;
    const { pathname } = req.nextUrl;

    // 1. Protección Portal Administradores (Tú, Hernán, Moisés)
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // 2. Protección Portal Clientes / Vitrinas (Pymes)
    if (pathname.startsWith("/pymes") && token?.role !== "pyme" && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      // Solo permite el paso si hay un token válido
      authorized: ({ token }) => !!token,
    },
  }
);

// Protegemos todas las rutas anidadas dentro de admin y pymes
export const config = { 
  matcher: ["/admin/:path*", "/pymes/:path*"] 
};