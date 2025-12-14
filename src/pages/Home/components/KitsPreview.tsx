"use client";
import React from "react";

{
  /*CONTENIDO DE LOS 3 KITS*/
}
const kitsData = [
  {
    title: "KITS",
    price: "149€",
    description:
      "Todo lo fundamental para tus primeros 100km. Ligero, resistente y sin complicaciones.",
    features: [
      "Mochila 40L Ergonómica",
      "Botas Trekking Impermeables",
      "Poncho de Lluvia Ligero",
      "Kit de Ampollas Básico",
    ],
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop", // Foto Caminante
    tag: "Ideal Principiantes",
  },

  {
    title: "El Veterano del Camino",
    price: "289€",
    description:
      "Para quien sabe que cada gramo cuenta. Material técnico de alta gama para largas distancias.",
    features: [
      "Mochila Ultra-Light 50L",
      "Bastones Carbono Plegables",
      "Saco de Dormir Compacto",
      "Calzado Gore-Tex Pro",
    ],
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f107f5d8?q=80&w=800&auto=format&fit=crop", // Foto Equipo
    tag: "Más Vendido",
  },

  {
    title: "Kit Invernal / Norte",
    price: "345€",
    description:
      "El frío y la lluvia no te detendrán. Equipamiento térmico diseñado para el clima gallego.",
    features: [
      "Chaqueta Plumas Técnica",
      "Pantalón Térmico",
      "Guantes y Gorro Merino",
      "Funda Mochila Storm-Proof",
    ],
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", // Foto Paisaje Frío
    tag: "Edición Especial",
  },
];

export function KitsSection() {
  return (
    <section
      className="
        w-full 
        py-20 
        px-4 
        md:px-6 
        bg-[#F0FDF4]
      "
    >
      {" "}
      {/* Fondo */}
      <div
        className="
          max-w-7xl 
          mx-auto
        "
      >
        {/* TITULO PEQUEÑO (equipate en un clic) */}
        <div
          className="
            text-center 
            mb-16 
            space-y-4
          "
        >
          <span
            className="
              text-[#656D4A] 
              font-bold 
              tracking-[0.2em] 
              text-sm 
              uppercase
            "
          >
            Equípate en un clic
          </span>
          <h2
            className="
              text-4xl 
              md:text-5xl 
              font-extrabold 
              text-[#333D29]
            "
          >
            Nuestros Kits{" "}
            <span
              className="
                italic 
                text-[#7F4F24]
              "
            >
              Listos para Andar
            </span>
          </h2>
          <p
            className="
              text-gray-600 
              max-w-2xl 
              mx-auto 
              text-lg
            "
          >
            Hemos seleccionado y probado cada combinación para que no tengas que
            pensar en qué llevar. Elige tu nivel y empieza a caminar.
          </p>
        </div>

        {/* ORGANIZACION DE LOS CONTENEDORES (grid de los kits) */}
        <div
          className="
            grid 
            grid-cols-1 
            lg:grid-cols-3 
            gap-8
          "
        >
          {kitsData.map((kit, index) => (
            <div
              key={index}
              className="
                group 
                relative 
                bg-[#333D29] 
                rounded-[2.5rem] 
                overflow-hidden 
                shadow-xl 
                hover:shadow-2xl 
                transition-all 
                duration-300 
                hover:-translate-y-2 
                flex 
                flex-col
              "
            >
              {/* IMAGEN DEL KIT esta en la parte superior */}
              <div
                className="
                  h-64 
                  w-full 
                  relative 
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute 
                    inset-0 
                    bg-black/20 
                    group-hover:bg-black/10 
                    transition-colors 
                    z-10
                  "
                ></div>
                <img
                  src={kit.image}
                  alt={kit.title}
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    transform 
                    group-hover:scale-110 
                    transition-transform 
                    duration-700
                  "
                />

                {/* Etiqueta Flotante (ideal principiantes...) */}
                <div
                  className="
                    absolute 
                    top-6 
                    right-6 
                    z-20 
                    bg-[#B6AD90] 
                    text-[#333D29] 
                    text-xs 
                    font-bold 
                    px-4 
                    py-2 
                    rounded-full 
                    uppercase 
                    tracking-wider 
                    shadow-lg
                  "
                >
                  {kit.tag}
                </div>
              </div>

              {/* CONTENIDO de la parte inferior  */}
              <div
                className="
                  p-8 
                  flex-1 
                  flex 
                  flex-col 
                  relative
                "
              >
                {/* Degradado para unir la imagen y contenido */}
                <div
                  className="
                    absolute 
                    -top-12 
                    left-0 
                    w-full 
                    h-12 
                    bg-gradient-to-t 
                    from-[#333D29] 
                    to-transparent
                  "
                ></div>

                <div
                  className="
                    flex 
                    justify-between 
                    items-start 
                    mb-4
                  "
                >
                  <h3
                    className="
                      text-2xl 
                      font-bold 
                      text-[#F0FDF4] 
                      group-hover:text-[#B6AD90] 
                      transition-colors
                    "
                  >
                    {kit.title}
                  </h3>
                  <span
                    className="
                      text-[#B6AD90] 
                      font-bold 
                      text-xl
                    "
                  >
                    {kit.price}
                  </span>
                </div>

                <p
                  className="
                    text-gray-400 
                    mb-6 
                    text-sm 
                    leading-relaxed
                  "
                >
                  {kit.description}
                </p>

                {/* LISTA DE CARACTERISTICAS*/}
                <ul
                  className="
                    space-y-3 
                    mb-8 
                    flex-1
                  "
                >
                  {kit.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="
                        flex 
                        items-center 
                        text-gray-300 
                        text-sm
                      "
                    >
                      {/* Icono Check  */}
                      <svg
                        className="
                          w-5 
                          h-5 
                          text-[#656D4A] 
                          mr-3 
                          flex-shrink-0
                        "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Botón  */}
                <button
                  className="
                    w-full 
                    py-4 
                    bg-[#656D4A] 
                    hover:bg-[#B6AD90] 
                    hover:text-[#333D29] 
                    text-white 
                    font-bold 
                    rounded-2xl 
                    transition-all 
                    duration-300 
                    shadow-lg
                  "
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        {/*BOTONO (ver kits)*/}
        <div
          className="
            mt-12 
            flex 
            justify-center 
            w-full
          "
        >
          <button
            className="
              px-10 
              py-4 
              bg-[#B6AD90] 
              text-[#333D29] 
              font-bold 
              rounded-full 
              hover:bg-[#C2C5AA] 
              transition-all 
              transform 
              hover:scale-105 
              shadow-lg
            "
          >
            Ver Kits
          </button>
        </div>
      </div>
    </section>
  );
}
export default KitsSection;
