// Proyecto: Página web de presentación de la agencia - Next.js + Tailwind CSS

// Estructura del proyecto (Todo en una sola página con scroll y formulario emergente)

// 1. INSTRUCCIONES PARA CREAR EL PROYECTO:
// -----------------------------------------
// Requisitos previos: tener instalado Node.js y VS Code

// Paso 1: Crear el proyecto en la terminal
// ----------------------------------------
// Ejecutá en la terminal:
// npx create-next-app@latest necotion-web --app --typescript --tailwind
// cd necotion-web

// Paso 2: Levantar el servidor
// ----------------------------
// npm run dev
// Accedé en el navegador a: http://localhost:3000

// 2. EXTENSIONES ÚTILES PARA VS CODE:
// ------------------------------------
// - Tailwind CSS IntelliSense (resalta y sugiere clases Tailwind)
// - Prettier (formateo automático del código)
// - ES7+ React/Redux snippets (atajos de código)

// 3. ARCHIVO: app/page.tsx (contenido principal de la página)
// ------------------------------------------------------------

"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="bg-gray-100 text-gray-900 font-sans">
      <Navbar />
      {/* Sección: Hero / Presentación */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
        <h1 className="text-4xl font-bold mb-4">Necotion Agency</h1>
        <p className="text-lg max-w-xl mb-6">
          Impulsamos canales digitales con identidad, estrategia y contenido de valor.
        </p>
        <button
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          onClick={() => setShowForm(true)}
        >
          Contactanos
        </button>
      </section>

      {/* Sección: Sobre nosotros */}
      <section className="py-16 px-6 bg-gray-50" id="nosotros">
        <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
        <p className="max-w-3xl mx-auto text-center">
          Somos un equipo especializado en desarrollo de contenido, guionismo, edición y diseño gráfico para canales de YouTube y redes. Nuestro enfoque es trabajar en conjunto con los creadores para llevar sus ideas al siguiente nivel.
        </p>
      </section>

      {/* Modal de formulario */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Contanos sobre tu proyecto</h3>
            <form
              action="https://formsubmit.co/gigarecruiter@gmail.com"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="canal"
                placeholder="Link a tu canal (opcional)"
                className="border p-2 rounded"
              />
              <textarea
                name="mensaje"
                placeholder="Contanos sobre tu proyecto"
                required
                className="border p-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

// 4. EXPLICACIÓN:
// ---------------
// - Usamos un estado React (useState) para abrir/cerrar el formulario.
// - El formulario usa FormSubmit.co para enviarse a un correo personalizado.
// - Todo el contenido está en una sola página, con diseño responsivo.
// - Secciones claras: presentación, info de la agencia, y formulario.
// - Tailwind simplifica el diseño y lo hace flexible.

// 5. ¿QUÉ CAMBIAR?
// ----------------
// - Reemplazá "TUCORREO@ejemplo.com" por el correo real donde querés recibir los mensajes.
// - Podés mejorar el diseño, colores o agregar nuevas secciones fácilmente.

// ¿Querés que también prepare el archivo de estilos globales y configuración del formulario en FormSubmit o te gustaría subir esto a Vercel juntos?
