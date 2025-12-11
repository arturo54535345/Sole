"use client"; // Necesario si usas Next.js 13+
import React from "react";
// IMPORTANTE: Asegúrate de que esta ruta sea correcta según dónde guardaste el archivo del carrusel.
// Si ambos están en la carpeta "components", se deja así:
import { ReviewsCarousel } from "./ReviewsCarousel"; 

// Si usas React Router (Vite/CRA), descomenta la siguiente línea:
// import { useNavigate } from "react-router-dom";

// Si usas Next.js, descomenta la siguiente línea:
// import { useRouter } from "next/navigation";

export function AboutSection() {
  
  // --- LÓGICA DE NAVEGACIÓN ---
  // Descomenta la opción que uses en tu proyecto:
  
  // OPCIÓN A: React Router (Vite)
  // const navigate = useNavigate();
  // const handleNavigation = () => navigate('/about');

  // OPCIÓN B: Next.js
  // const router = useRouter();
  // const handleNavigation = () => router.push('/about');

  // OPCIÓN C: Provisoria (solo para que no dé error ahora mismo)
  const handleNavigation = () => {
    console.log("Navegando a /about...");
    window.location.href = "/about"; // Forma clásica que funciona siempre
  };

  return (
    <section className="w-full py-12 px-4 md:px-6 bg-white"> 
      {/* Nota: he puesto bg-white en la sección externa para que contraste con el bloque oscuro */}
      
      {/* 1. EL GRAN CONTENEDOR FUSIONADO
          - Fondo: #333D29 (Tu Verde Oscuro Profundo)
          - Bordes: rounded-[2.5rem] (Muy redondeados)
      */}
      <div className="relative w-full bg-[#333D29] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center min-h-[500px]">

        {/* 2. PARTE IZQUIERDA: EL TEXTO */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 relative z-10">
          
          {/* Etiqueta (Color Arena #B6AD90) */}
          <span className="text-[#B6AD90] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Sobre Nosotros
          </span>

          {/* Título (Color Hueso #F0FDF4) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F0FDF4] leading-tight mb-6">
            Tu compañero fiel en el <span className="text-[#656D4A] italic">Camino</span>.
          </h2>

          {/* Texto (Gris claro) */}
          <div className="text-gray-300 text-lg space-y-6 leading-relaxed">
            <p>
              En <strong>Sole</strong>, no somos solo una tienda; somos peregrinos. Entendemos que cada gramo cuenta y que el Camino no se camina con los pies, sino con el alma.
            </p>
            <p>
              Nuestra misión es equiparte con lo esencial, ligero y resistente, para que tu única preocupación sea disfrutar de los paisajes y la experiencia espiritual.
            </p>
          </div>

          {/* Botón (Fondo Arena, Texto Oscuro) */}
          <button 
            onClick={handleNavigation}
            className="mt-8 px-10 py-4 bg-[#B6AD90] text-[#333D29] font-bold rounded-full hover:bg-[#C2C5AA] transition-all transform hover:scale-105 shadow-lg"
          >
            Nuestra Historia
          </button>
        </div>

        {/* 3. PARTE DERECHA: EL CARRUSEL */}
        <div className="w-full lg:w-1/2 h-full relative min-h-[350px] lg:min-h-full flex items-center justify-center overflow-hidden">
          
          {/* EL CONECTOR MÁGICO (Degradado de fusión) 
              Esto hace que el verde oscuro se funda hacia la derecha
          */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-20 bg-gradient-to-r from-[#333D29] to-transparent pointer-events-none"></div>

          {/* Aquí llamamos al componente del carrusel */}
          <div className="w-full relative z-0">
            <ReviewsCarousel /> 
          </div>

        </div>

      </div>
    </section>
  );
}

// Exportamos por defecto para poder importarlo en la Home
export default AboutSection;