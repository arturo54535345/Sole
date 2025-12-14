import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative 
        h-screen 
        w-full 
        flex 
        items-center 
        justify-center 
        text-center
      "
    >
      {/* 1. IMAGEN DE FONDO */}
      <div
        className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          bg-cover 
          bg-center 
          z-0
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* CAPA OSCURA */}
      <div
        className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          bg-black/40 
          z-10
        "
      ></div>

      {/* CONTENIDO */}
      <div
        className="
          relative 
          z-20 
          px-4 
          max-w-4xl 
          mx-auto
        "
      >
        <h1
          className="
            text-4xl 
            md:text-6xl 
            font-bold 
            text-white 
            mb-6 
            drop-shadow-lg
          "
        >
          Tu Camino comienza aquí
        </h1>

        <p
          className="
            text-xl 
            md:text-2xl 
            text-gray-100 
            mb-8 
            font-light 
            drop-shadow-md
          "
        >
          Todo lo que necesitas para tu aventura: Kits, rutas y consejos
          expertos.
        </p>

        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            gap-4 
            justify-center
          "
        >
          <button
            onClick={() => navigate("/kits")}
            className="
              text-white
              bg-white/10              
              backdrop-blur-md         
              border 
              border-white/30
              hover:bg-white/20        
              focus:ring-4 
              focus:outline-none 
              focus:ring-white/60
              font-medium
              rounded-full
              text-lg
              px-8
              py-3
              text-center 
              transition-transform 
              hover:scale-105
              shadow-lg
            "
          >
            Ver Kits
          </button>

          <button
            onClick={() => navigate("/about")}
            className="
              text-white
              bg-white/10              
              backdrop-blur-md         
              border 
              border-white/30
              hover:bg-white/20        
              focus:ring-4 
              focus:outline-none 
              focus:ring-white/60
              font-medium
              rounded-full
              text-lg
              px-8
              py-3
              text-center 
              transition-transform 
              hover:scale-105
              shadow-lg
            "
          >
            Saber más
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
