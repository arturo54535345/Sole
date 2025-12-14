"use client";

import React from "react";
import { ReviewsCarousel } from "../../../components/ui/ReviewsCarousel";

//he separado el contenido para poder editar el texto sin necesidad de tocar el diseño asi es mas limpio y rapido

const CONTENT = {
  tag: "Sobre Nosotros",
  title: {
    start: "Tu compañero fiel en el",
    highlight: "Camino",
    end: ".",
  },
  paragraphs: [
    "En Sole, no somos solo una tienda; somos peregrinos. Entendemos que cada gramo cuenta y que el Camino no se camina con los pies, sino con el alma.",
    "Nuestra misión es equiparte con lo esencial, ligero y resistente, para que tu única preocupación sea disfrutar de los paisajes y la experiencia espiritual.",
  ],
  buttonText: "Nuestra Historia",
  routes: {
    about: "/about",
  },
};

//  COMPONENTE PRINCIPAL

export function AboutSection() {
  // LÓGICA DE este componente
  const handleNavigation = () => {
    window.location.href = CONTENT.routes.about;
  };

  return (
    <section
      className="
        w-full 
        py-12 
        px-4 
        md:px-6 
        bg-white
      "
    >
      {/* CONTENEDOR PRINCIPAL esta es la tarjeta verde, se usa flex-row y flex-col este es para moviles*/}
      <div
        className="
          relative 
          w-full 
          bg-[#333D29] 
          rounded-[2.5rem] 
          overflow-hidden 
          shadow-2xl 
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          min-h-[500px]
        "
      >
        {/* 
            COLUMNA IZQUIERDA: aqui esta el contenido y texto  */}
        <div
          className="
            w-full 
            lg:w-1/2 
            p-10 
            md:p-16 
            relative 
            z-10
          "
        >
          {/* ETIQUETA SUPERIOR sobre nostros en pequeño */}
          <span
            className="
              text-[#B6AD90] 
              font-bold 
              tracking-[0.2em] 
              text-sm 
              uppercase 
              mb-4 
              block
            "
          >
            {CONTENT.tag}
          </span>

          {/* TÍTULO PRINCIPAL */}
          <h2
            className="
              text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-extrabold 
              text-[#F0FDF4] 
              leading-tight 
              mb-6
            "
          >
            {CONTENT.title.start}{" "}
            <span
              className="
                text-[#656D4A] 
                italic
              "
            >
              {CONTENT.title.highlight}
            </span>
            {CONTENT.title.end}
          </h2>

          {/* TEXTO DEBAJO DEL TITULO */}
          <div
            className="
              text-gray-300 
              text-lg 
              space-y-6 
              leading-relaxed
            "
          >
            {CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {/* Renderizo cada parrafo directamente  */}
                {index === 0 ? (
                  <>
                    En <strong>Sole</strong>, {paragraph.substring(9)}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          {/* BOTÓN  */}
          <button
            onClick={handleNavigation}
            className="
              mt-8 
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
            {CONTENT.buttonText}
          </button>
        </div>

        {/*
            COLUMNA DERECHA: CARRUSEL*/}
        <div
          className="
            w-full 
            lg:w-1/2 
            h-full 
            relative 
            min-h-[350px] 
            lg:min-h-full 
            flex 
            items-center 
            justify-center 
            overflow-hidden
          "
        >
          {/* EL CONECTOR MÁGICO (GRADIENTE) creo una fusion para que no se vea brusco la separacion entre el color verde y el contendor del carrusel */}
          <div
            className="
              absolute 
              inset-y-0 
              left-0 
              w-24 
              md:w-40 
              z-20 
              bg-gradient-to-r 
              from-[#333D29] 
              to-transparent 
              pointer-events-none
            "
          />

          {/* COMPONENTE CARRUSEL */}
          <div
            className="
              w-full 
              relative 
              z-0
            "
          >
            <ReviewsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
