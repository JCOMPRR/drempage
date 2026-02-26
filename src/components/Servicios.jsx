import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import botoxCard from "../assets/botox-card.jpg";
import facialCard from "../assets/facial-card.jpg";
import corporalCard from "../assets/corporal-card.jpg";

export default function Servicios() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20">
      <div
        ref={ref}
        className={`
          max-w-7xl mx-auto px-6
          ${visible ? "animate-fadeUp" : "opacity-0"}
        `}
      >
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-black">
            Servicios de Medicina Estética
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Mira nuestra amplia gama de tratamientos faciales, corporales y
            protocolos médicos diseñados para realzar tu belleza natural y
            bienestar integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/protocolosMedicos"
            className="group relative h-80 overflow-hidden rounded-sm block"
          >
            <img
              src={botoxCard}
              alt="Protocolos Médicos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-heading text-2xl text-white tracking-wide">
                Protocolos Medicos
              </h3>
            </div>
          </Link>

          <Link
            to="/tratamientosFaciales"
            className="group relative h-80 overflow-hidden rounded-sm block"
          >
            <img
              src={facialCard}
              alt="Tratamientos Faciales"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-heading text-2xl text-white tracking-wide">
                Faciales
              </h3>
            </div>
          </Link>
          <Link
            to="/tratamientosCorporales"
            className="group relative h-80 overflow-hidden rounded-sm block"
          >
            <img
              src={corporalCard}
              alt="Tratamientos Corporales"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-heading text-2xl text-white tracking-wide">
                Corporales
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
