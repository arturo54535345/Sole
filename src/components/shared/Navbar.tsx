import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";
// Asegúrate de que esto no da error. Si da error, ejecuta: npm install @tabler/icons-react
import { IconUser } from "@tabler/icons-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    initFlowbite();
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESTILOS
  // Si bajamos (scrolled), el texto es oscuro. Si estamos arriba, es blanco.
  const textColor = scrolled ? "text-[#333D29]" : "text-white";
  
  // ESTRATEGIA VISIBLE:
  // Si estamos arriba, fondo negro semitransparente (para que veas las letras blancas).
  // Si bajamos, fondo blanco difuminado.
  const navBackground = scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-black/50"; 

  const capsuleClasses = scrolled
    ? "bg-[#333D29] text-white border-transparent"
    : "bg-white/10 text-white border-white/20";

  return (
    <nav className={`fixed w-full z-[999] top-0 start-0 border-b border-transparent transition-all duration-500 ${navBackground}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* 1. LOGO */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${textColor}`}>
            Sole
          </span>
        </a>

        {/* 2. CONTENEDOR DERECHA (Login + Hamburguesa) */}
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse items-center">
          
          {/* BOTÓN LOGIN (CÍRCULO) */}
          <Link to="/login">
            <button
              type="button"
              className={`
                flex items-center justify-center
                w-10 h-10 rounded-full border
                transition-all duration-300
                ${capsuleClasses}
                hover:scale-105
              `}
              aria-label="Login"
            >
              {/* Aquí está el icono. Si ves texto "Login", no estás usando este código */}
              <IconUser size={20} stroke={1.5} />
            </button>
          </Link>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${textColor}`}
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menú</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* 3. MENÚ CENTRAL */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className={`
            flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
            ${scrolled ? "border-gray-100" : "border-transparent"}
          `}>
            {["Home", "Nosotros", "Tienda", "Kits", "Blog"].map((item) => (
              <li key={item}>
                <a href="#" className={`block py-2 px-3 rounded md:p-0 transition-colors ${textColor} hover:text-green-400`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;