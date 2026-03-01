import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-drem.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo Drem" className="h-10 w-auto" />
          </Link>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
            <Link to="/" className="hover:text-[#D4AD45] transition">
              Inicio
            </Link>
            <Link to="/servicios" className="hover:text-[#D4AD45] transition">
              Servicios
            </Link>
            <Link to="/resultados" className="hover:text-[#D4AD45] transition">
              Resultados
            </Link>
            <Link to="/theGlowGuide" className="hover:text-[#D4AD45] transition">
              The Glow Guide
            </Link>
            {/* <Link to="/blog" className="hover:text-[#D4AD45] transition">
              Blog
            </Link> */}
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
          <div className="md:hidden pb-6 pt-4">
            <ul className="flex flex-col items-center gap-6 text-sm font-medium text-white">
              <li className="w-full text-center">
                <Link to="/" className="block hover:text-[#D4AD45] transition">
                  Inicio
                </Link>
              </li>

              <li className="w-full text-center">
                <Link
                  to="/servicios"
                  className="block hover:text-[#D4AD45] transition"
                >
                  Servicios
                </Link>
              </li>

              <li className="w-full text-center">
                <Link
                  to="/resultados"
                  className="block hover:text-[#D4AD45] transition"
                >
                  Resultados
                </Link>
              </li>

              <li className="w-full px-6">
                <a
                  href="https://wa.me/5216621881994?text=Hola%2C%20quisiera%20informaci%C3%B3n%20y%20disponibilidad%20para%20agendar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#D4AD45] text-black py-3 rounded-full font-semibold hover:bg-[#B8932F] transition"
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
