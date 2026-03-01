import { useEffect, useState } from "react";

export default function GlowGuide() {
  useEffect(() => {
    document.title = "Skincare Routine & Post Treatment Care | DREM Clinic";

    const metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional skincare routines, post-botox care, facial aftercare tips and medical aesthetic guidance by DREM Clinic.",
      );
    }
  }, []);

  const categorias = {
    skincare: [
      {
        titulo: "Rutina de Skincare por la mañana",
        descripcion:
          "Cómo cuidar tu piel al despertar para un día radiante y saludable.",
        video: "https://www.youtube.com/embed/ZDKg62vvmIc",
      },
      {
        titulo: "Rutina de Skincare por la noche",
        descripcion: "Cómo cuidar adecuadamente tu piel antes de dormir.",
        video: "https://www.youtube.com/embed/s1mSFpfXpmo",
      },
    ],
    postTratamiento: [
      {
        titulo: "Instrucciones de Cuidado Post Botox",
        descripcion:
          "Recomendaciones médicas después de un tratamiento con botox.",
        video: "https://www.youtube.com/embed/Dn-Ugf-oL8Y",
      },
    ],
  };

  const [categoriaActiva, setCategoriaActiva] = useState("skincare");

  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-black">
          Rutina de Skincare y Cuidado Post Tratamiento
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Consejos profesionales para el cuidado de tu piel antes y después de
          tus tratamientos estéticos.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setCategoriaActiva("skincare")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              categoriaActiva === "skincare"
                ? "bg-black text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            Rutina de Skincare
          </button>

          <button
            onClick={() => setCategoriaActiva("postTratamiento")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              categoriaActiva === "postTratamiento"
                ? "bg-black text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            Cuidado Post Tratamiento
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          {categorias[categoriaActiva].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={item.video}
                  title={item.titulo}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-black">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER LEGAL */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-sm text-gray-600 leading-relaxed">
          <h2 className="text-lg font-semibold text-black mb-4">
            Información Importante
          </h2>

          <p className="mb-3">
            El contenido presentado en esta sección tiene fines exclusivamente
            informativos y educativos. No sustituye la valoración médica
            personalizada, diagnóstico clínico ni indicación profesional
            individual.
          </p>

          <p className="mb-3">
            Todo procedimiento médico-estético requiere valoración previa,
            historia clínica completa y consentimiento informado firmado por el
            paciente.
          </p>

          <p className="mb-3">
            Los resultados pueden variar de acuerdo con las características
            individuales de cada paciente, condiciones médicas preexistentes y
            el protocolo aplicado.
          </p>

          <p>
            En caso de presentar alguna reacción adversa o duda posterior a un
            tratamiento, se recomienda acudir inmediatamente a consulta médica.
          </p>
        </div>
      </section>
    </div>
  );
}
