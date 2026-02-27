import { useEffect, useRef, useState } from "react";
import draElise from "../assets/dra-elise.png";

export default function SobreMi() {
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
          max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center
          ${visible ? "animate-fadeUp" : "opacity-0"}
        `}
      >
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-black">
            Conoce a la Dra. Elise Monserrat{" "}
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            La Dra. Elise Monserrat Rodríguez Rodríguez es médica general con
            formación en medicina estética y regenerativa, especializada en el
            abordaje integral del envejecimiento y la armonización facial y
            corporal.
            <br /> <br />
            Su práctica se fundamenta en diagnóstico médico, criterios
            anatómicos precisos y protocolos basados en evidencia científica.
            Cada tratamiento es diseñado de manera personalizada, priorizando
            seguridad, naturalidad y resultados progresivos que respetan la
            identidad del paciente. Integra evaluación médica integral, planeación anatómica detallada y
            tecnología avanzada en cada intervención, garantizando resultados
            armónicos y sostenibles en el tiempo.
            <br />
            Su enfoque combina ciencia, innovación tecnológica y sensibilidad
            estética para potenciar la belleza individual sin alterar la
            esencia. Desarrolla planes estratégicos que integran salud cutánea,
            regeneración tisular y bienestar global, con una filosofía centrada
            en naturalidad, prevención y regeneración progresiva.
            <br /> <br />
            Ejerce en Hermosillo, Sonora, donde dirige su consulta bajo
            estándares estrictos de ética médica, excelencia clínica y atención
            personalizada.
          </p>

          <div className="mt-6 text-sm text-gray-600">
            <span className="font-medium text-black">Cédula Profesional:</span>{" "}
            13645060
          </div>

          <a
            href="https://cedulaprofesional.sep.gob.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-black underline hover:text-[#D4AD45] transition"
          >
            Ver cédula profesional en portal oficial SEP
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={draElise}
            loading="lazy"
            alt="Dra. Elise Monserrat Rodriguez Rodriguez"
            className="w-full max-w-md object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
