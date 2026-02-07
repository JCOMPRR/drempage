import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/logo-drem.svg"
              alt="DREM Medicina Estética"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
            <Link to="/" className="hover:text-[#D4AD45] transition">
              Inicio
            </Link>
            <a className="hover:text-[#D4AD45] transition" href="">
              Servicios
            </a>
            <a className="hover:text-[#D4AD45] transition" href="">
              Resultados
            </a>
            <a className="hover:text-[#D4AD45] transition" href="">
              Nuestro Equipo
            </a>
          </ul>

          <div className="hidden md:flex">
            <a
              href="https://wa.me/5216621881994?text=Hola%2C%20quisiera%20informaci%C3%B3n%20y%20disponibilidad%20para%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AD45] text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#B8932F] transition"
            >
              Agenda Cita
            </a>
          </div>

          <button
            className="md:hidden text-white"
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

        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4 text-sm font-medium text-white">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AD45]"
                  onClick={() => setOpen(false)}
                >
                  Inicio
                </Link>
              </li>

              <li className="hover:text-[#D4AD45]">Servicios</li>
              <li className="hover:text-[#D4AD45]">Resultados</li>
              <li className="hover:text-[#D4AD45]">Nuestro Equipo</li>
              <li>
                <a
                  href="https://wa.me/5216621881994?text=Hola%2C%20quisiera%20informaci%C3%B3n%20y%20disponibilidad%20para%20agendar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#D4AD45] text-black py-2 rounded-md font-semibold hover:bg-[#B8932F] transition"
                >
                  Agenda Cita
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
