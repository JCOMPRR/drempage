import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import draElise from "../assets/dra-elise.webp";

export default function SobreMi() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

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
            {t("sobreMi.titulo")}
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {t("sobreMi.descripcion")}
          </p>

          <div className="mt-6 text-sm text-gray-600">
            <span className="font-medium text-black">
              {t("sobreMi.cedulaLabel")}
            </span>{" "}
            13645060
          </div>

          <a
            href="https://cedulaprofesional.sep.gob.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-black underline hover:text-[#D4AD45] transition"
          >
            {t("sobreMi.cedulaLink")}
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
