import { useState } from "react";
import disminucion1 from "../assets/disminucion-lineas-expresion.webp";
import disminucion4 from "../assets/disminucion-lineas-expresion-mujer.webp";
import disminucion5 from "../assets/disminucion-lineas-expresion-dama.webp";
import facialMujer from "../assets/facial-mujer.webp";
import facialPlatinoMujer from "../assets/facial-platino-mujer.webp";
import facialBronceMujer from "../assets/facial-bronce-mujer.webp";
import corporalMujer from "../assets/corporal-mujer.webp";

const categorias = ["Tratamientos Médicos", "Faciales", "Corporales"];

// Recortar las imagenes para la privacidad del paciente en la foto, ejemplo:
//La primera imagen cortarla del lado derecho hasta que cortemos el labio y Nariz,
//ya que se enfoca mas en los cachetes y tambien intenetar borrar el arete.

//La segunda y tercera imagen solo cortarle un poco mas de los labios para que no salga tanto la cara

const resultadosData = {
  "Tratamientos Médicos": [
    {
      id: 1,
      image: disminucion1,
      label: "Disminución de líneas de expresión",
    },
    {
      id: 4,
      image: disminucion4,
      label: "Disminución de líneas de expresión",
    },
    {
      id: 5,
      image: disminucion5,
      label: "Disminución de líneas de expresión",
    },
  ],

  Faciales: [
    {
      id: 2,
      image: facialMujer,
      label: "Resultado Facial Plata",
    },
    {
      id: 6,
      image: facialPlatinoMujer,
      label: "Resultado facial Platino",
    },
    {
      id: 7,
      image: facialBronceMujer,
      label: "Resultado Facial Cobre",
    },
  ],

  Corporales: [
    {
      id: 3,
      image: corporalMujer,
      label: "Resultado de Radiofrecuencia",
    },
  ],
};

export default function Resultados() {
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);

  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs tracking-[0.35em] text-gray-400 uppercase">
          Casos Clínicos
        </p>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-black">
          Resultados
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Nuestros resultados dentro de protocolos médicos estéticos. Cada caso
          requiere valoración médica individual.
        </p>
      </section>

      {/* TABS */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-6 py-2 rounded-full text-sm transition
              ${
                categoriaActiva === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {resultadosData[categoriaActiva].map(item => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-white/90 tracking-widest uppercase">
                    Antes / Después
                  </span>
                </div>
              </div>

              {/* INFO */}
              <div className="p-5">
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-sm text-gray-600">
          <p className="font-semibold text-black mb-2">
            Información Importante
          </p>

          <p>
            Imágenes con fines ilustrativos. Los resultados pueden variar según
            características individuales, diagnóstico médico y protocolo
            aplicado.
          </p>

          <p className="mt-2">
            Todo procedimiento médico requiere valoración médica previa,
            historia clínica completa y consentimiento informado.
          </p>
        </div>
      </section>
    </div>
  );
}
