import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    initFlowbite();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aqui esta toda la logica de estilos 

  // EL LOGO
  const logoColor = scrolled ? "text-[#333D29]" : "text-white";

  //LAS CÁPSULAS (Menú Central y Botón)
  //Aqui esta la capsula y el boton, a la capsula le damos un tono verde oscuro y un deliniado blanco, cuando esta arriba estara transparente, 
  //pero si bajamos se pondra de color verde oscuro para que se pueda diferenciar de forma correcta
  const capsuleClasses = scrolled 
    ? "bg-[#333D29]/95 text-[#F0FDF4] border-white/40 shadow-xl" 
    : "bg-white/10 text-white border-white/20 shadow-none";

  // 3. HOVER
  const hoverClasses = scrolled
    ? "hover:bg-[#252c1e] hover:border-white/40" // cuando se pase el boton por encima se iluminara o se resaltara este es el hover del menun principal y del boton
    : "hover:bg-white/20";

  return (
    <nav className="
      bg-transparent 
      fixed 
      w-full 
      top-0 
      start-0
      z-[999] 
      py-4
      transition-all duration-500
    ">
      
      <div className="
        max-w-screen-xl 
        flex 
        flex-wrap 
        items-center 
        justify-between 
        mx-auto 
        p-4">
        

        
        {/* LOGO */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            <span className={`
              self-center 
              text-xl 
              font-semibold 
              whitespace-nowrap 
              transition-colors duration-500
              ${logoColor} 
              drop-shadow-sm
            `}>
              Sole
            </span>
        </a>

        {/* BOTON DE LA DERECHA */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
            {/* Botón con el borde fino */}
            <button type="button" className={`
              ${capsuleClasses}
              ${hoverClasses}
              backdrop-blur-md 
              border 
              font-medium rounded-full text-lg px-6 py-2 text-center 
              transition-all duration-500
            `}>
              Comencemos
            </button>
            
            {/* Botón Hamburguesa (Móvil) */}
            <button 
              data-collapse-toggle="navbar-sticky" 
              type="button" 
              className={`
                inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 
                transition-colors duration-500
                ${logoColor}
                hover:bg-gray-100/10
              `} 
              aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>

        {/*  MENU CENTRAL  */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className={`
            flex flex-col p-4 md:p-1 mt-4 font-medium md:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 
            
            ${capsuleClasses} 
            
            backdrop-blur-md
            border 
            rounded-full
            transition-all duration-500
          `}>
            {["Home", "Sobre nosotros", "Tienda", "Kits", "Blog", "Contactanos"].map((item) => (
              <li key={item}>
                <a href="#" className={`
                  block py-2 px-5 rounded-full transition-all duration-500
                  ${hoverClasses}
                `}>
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