import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
              src="./src/assets/botox-card.jpg"
              alt="Aplicación de Botox en Hermosillo"
              className="absolute inset-0 w-full h-full object-cover transition duration-500
               md:group-hover:brightness-100 brightness-75"
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
              src="./src/assets/facial-card.jpg"
              alt="Tratamientos faciales en Hermosillo"
              className="absolute inset-0 w-full h-full object-cover transition duration-500
                         md:group-hover:brightness-100 brightness-75"
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
              src="./src/assets/corporal-card.jpg"
              alt="Tratamientos corporales en Hermosillo"
              className="absolute inset-0 w-full h-full object-cover transition duration-500
                         md:group-hover:brightness-100 brightness-75"
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
