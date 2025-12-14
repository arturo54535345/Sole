"use client";
import React from "react";

const kitsData = [
  {
    title: "El Iniciado",
    price: "149€",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop",
    tag: "Essential",
  },
  {
    title: "Veterano Pro",
    price: "289€",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f107f5d8?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    title: "Alta Montaña",
    price: "345€",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    tag: "Thermal",
  },
];

export function KitsSection() {
  return (
    <section
      className="
    w-full 
    px-4 
    md:px-6 
    py-20 
    bg-[#EBECE2]
    "
    >
      {" "}
      {/* Mismo gris de fondo para continuidad */}
      {/* HEADER SECCIÓN */}
      <div
        className="
      flex 
      flex-col 
      md:flex-row 
      justify-between 
      items-end 
      mb-12
      px-4
      "
      >
        <h2
          className="
        text-4xl 
        md:text-5xl 
        font-bold 
        text-[#333D29] 
        tracking-tight
        "
        >
          Kits{" "}
          <span
            className="
          italic 
          font-serif 
          text-[#582F0E]
          "
          >
            Curados
          </span>
        </h2>
        <button
          className="
        hidden
        md:block 
        text-[#582F0E] 
        font-bold 
        border-b 
        border-[#582F0E] 
        pb-1 
        hover:opacity-70 
        transition-opacity
        "
        >
          Ver Tienda Completa
        </button>
      </div>
      {/* GRID DE TARJETAS */}
      <div
        className="
      grid 
      grid-cols-1
      md:grid-cols-3 
      gap-6
      "
      >
        {kitsData.map((kit, index) => (
          <div
            key={index}
            className="
            group 
            relative 
            h-[500px] 
            rounded-[2rem] 
            overflow-hidden 
            cursor-pointer
            "
          >
            {/* IMAGEN */}
            <img
              src={kit.image}
              alt={kit.title}
              className="
              absolute 
              inset-0 
              w-full 
              h-full 
              object-cover 
              transition-transform 
              duration-700 
              group-hover:scale-110
              "
            />

            {/* OVERLAY OSCURO (Solo al hover para mantener limpieza) */}
            <div
              className="
            absolute 
            inset-0 
            bg-black/20 
            group-hover:bg-black/40
            transition-colors 
            duration-500
            "
            />

            {/* TAG FLOTANTE */}
            <div
              className="
            absolute
            top-6
            left-6
            bg-white/90
            backdrop-blur
            px-3 
            py-1.5 
            rounded-full 
            text-[10px] 
            font-bold 
            uppercase 
            tracking-widest 
            text-[#333D29]
            "
            >
              {kit.tag}
            </div>

            {/* INFO ABAJO */}
            <div
              className="
            absolute 
            bottom-0 
            left-0 
            w-full 
            p-8 
            flex 
            justify-between
            items-end 
            translate-y-4 
            group-hover:translate-y-0 
            transition-transform 
            duration-500
            "
            >
              <div>
                <h3
                  className="
                text-white 
                text-2xl 
                font-bold 
                mb-1
                "
                >
                  {kit.title}
                </h3>
                <p
                  className="
                text-[#B6AD90] 
                font-serif 
                italic 
                text-lg
                "
                >
                  {kit.price}
                </p>
              </div>

              {/* FLECHA CIRCULAR */}
              <div
                className="
              w-12 
              h-12 
              rounded-full 
              bg-white 
              text-[#333D29] 
              flex 
              items-center 
              justify-center 
              opacity-0
              group-hover:opacity-100 
              transition-all duration-500 hover:scale-110
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default KitsSection;
