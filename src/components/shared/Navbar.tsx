import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconUser, IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detectar scroll para cambiar el estilo de la cápsula
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clases dinámicas para la CÁPSULA FLOTANTE
  const navClasses = `
    fixed left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 ease-in-out
    flex items-center justify-between
    border border-white/10 backdrop-blur-md
    ${
      scrolled
        ? "top-4 w-[90%] max-w-5xl rounded-full bg-[#333D29]/90 py-3 px-6 shadow-2xl" // Al bajar: Verde oscuro, compacto
        : "top-6 w-[95%] max-w-6xl rounded-full bg-black/20 py-4 px-8" // Arriba: Más transparente y ancho
    }
  `;

  // Links de navegación
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Nosotros", path: "/about" }, // Asumo que es una sección o página
    { name: "Tienda", path: "/tienda" }, // Ajusta si la ruta es diferente
    { name: "Kits", path: "/kits" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav className={navClasses}>
        
        {/* 1. LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo visual opcional */}
          {/* <img src="..." alt="Logo" className="h-8 w-8" /> */}
          <span className="text-xl font-bold text-white tracking-wide group-hover:text-[#B6AD90] transition-colors">
            Sole
          </span>
        </Link>

        {/* 2. MENÚ DESKTOP (Centrado) */}
        <div className="hidden md:flex items-center gap-1 bg-black/10 rounded-full p-1 border border-white/5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-[#333D29] shadow-sm" // Activo: Blanco
                      : "text-gray-200 hover:text-white hover:bg-white/10" // Inactivo: Hover suave
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 3. BOTONES DERECHA (Login + Menú Móvil) */}
        <div className="flex items-center gap-3">
          
          {/* Botón Login */}
          <Link to="/login">
            <button
              className={`
                flex items-center justify-center w-10 h-10 rounded-full
                bg-[#582F0E] text-white border border-[#7F4F24]
                hover:bg-[#7F4F24] hover:scale-105 transition-all shadow-lg
              `}
              aria-label="Iniciar Sesión"
            >
              <IconUser size={20} stroke={1.5} />
            </button>
          </Link>

          {/* Botón Hamburguesa (Solo Móvil) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            {isMobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </nav>

      {/* 4. MENÚ MÓVIL DESPLEGABLE */}
      {/* Se muestra fuera de la nav flotante para no deformarla */}
      <div
        className={`
          fixed inset-0 z-[990] bg-[#333D29]/95 backdrop-blur-xl transition-all duration-300
          flex flex-col items-center justify-center space-y-8
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bold text-[#F0FDF4] hover:text-[#B6AD90] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        
        {/* Botón cerrar extra por usabilidad */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white"
        >
          <IconX size={32} />
        </button>
      </div>
    </>
  );
};

export default Navbar;