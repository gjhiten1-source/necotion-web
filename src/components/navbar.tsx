"use client"; // porque usaremos interactividad si luego expandimos el menú

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo o nombre */}
          <div className="text-xl font-bold">
            <Link href="/">Necotion</Link>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/servicios" className="hover:text-gray-300">
              Servicios
            </Link>
            <Link href="/asociados" className="hover:text-gray-300">
              Asociados
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}