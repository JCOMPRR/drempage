import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-semibold text-black">
            <span className="text-[#D4AD45]">Dra.</span> Elise
          </div>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-black">
            <li className="hover:text-[#D4AD45] transition">Inicio</li>
            <li className="hover:text-[#D4AD45] transition">Servicios</li>
            <li className="hover:text-[#D4AD45] transition">Resultados</li>
            <li className="hover:text-[#D4AD45] transition">Nuestro Equipo</li>
          </ul>

          <div className="hidden md:flex">
            <button className="bg-[#D4AD45] text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#B8932F] transition">
              Agenda Cita
            </button>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4 text-sm font-medium text-black">
              <li className="hover:text-[#D4AD45]">Inicio</li>
              <li className="hover:text-[#D4AD45]">Servicios</li>
              <li className="hover:text-[#D4AD45]">Resultados</li>
              <li className="hover:text-[#D4AD45]">Nuestro Equipo</li>
              <li>
                <button className="w-full bg-[#D4AD45] text-black py-2 rounded-md font-semibold hover:bg-[#B8932F] transition">
                  Agenda Cita
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
