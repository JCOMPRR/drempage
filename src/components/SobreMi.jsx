import { useEffect, useRef, useState } from "react";

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
            La Dra. Elise Monserrat Rodriguez Rodriguez es médica general con
            enfoque en medicina estética. Inició su práctica profesional en
            tratamientos estéticos tras concluir la Licenciatura en Medicina
            General, priorizando siempre la seguridad, la ética médica y
            resultados naturales. <br /> En octubre de 2020, abrió su
            consultorio de medicina estética en Hermosillo, Sonora, donde brinda
            atención personalizada y tratamientos diseñados de acuerdo con las
            necesidades de cada paciente.
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
            src="public/dra-elise.png"
            alt="Dra. Elise Monserrat - Medicina Estética"
            className="w-full max-w-md object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
