import { useState, useEffect, useRef, useCallback } from "react";

export default function PromocionBanner() {
  const fechaFinPromo = new Date("2026-03-31");
  const hoy = new Date();
  const promoActiva = hoy <= fechaFinPromo;

  const [mostrarBarra, setMostrarBarra] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);

  const promociones = [
    {
      titulo: "Neuromodulacion Facial",
      descripcion: "(Botox) + Facial Bronce Premium de Cortesia.",
      precio: "De $5,300 a $4,500.",
    },
    {
      titulo: "Eye Refresh",
      descripcion:
        "Revitalizacion de Ojeras + Drenaje Linfatico y Facial de Cortesia (1ra sesion).",
      precio: "De $3,500 a $3,000.",
    },
    {
      titulo: "Eye Lifting",
      descripcion:
        "Ultracel en antifaz + Revitalizacion de Ojeras (1ra sesion).",
      precio: "De $5,400 a $4,800.",
    },

    {
      titulo: "Sculpted Jawline",
      descripcion:
        "Ultracel en marcaje mandibular + Enzimas Lipoliticas (1ra sesion).",
      precio: "De $13,400 a $11,800.",
    },
    {
      titulo: "Facial Zafiro + Nano Glow en ojeras de cortesia",
      descripcion: "",
      precio: "De $4,500 a $3,000.",
    },
    {
      titulo: "Hydraglow Facial",
      descripcion: "(Con Dermapen)",
      precio: "De $1,500 a $1,000.",
    },

    {
      titulo: "Bioestimulacion Labial Hidratante",
      descripcion: "(Estimulacion dermica con nanopen).",
      precio: "De $1,300 a $1,000.",
    },
    {
      titulo: "2 Faciales",
      descripcion: "Premium Bronce.",
      precio: "De $1,600 a $1,000.",
    },
    {
      titulo: "Masaje Stress Off + Cortesia Spa Relajante Luxury Hands",
      descripcion: "",
      precio: "De $3,300 a $2,000.",
    },
  ];

  const promocionesPorGrupo = 3;
  const totalGrupos = Math.ceil(promociones.length / promocionesPorGrupo);

  const [grupoActual, setGrupoActual] = useState(0);

  const intervaloRef = useRef(null);

  const iniciarAutoRotacion = useCallback(() => {
    intervaloRef.current = setInterval(() => {
      setGrupoActual(prev => (prev + 1) % totalGrupos);
    }, 4000);
  }, [totalGrupos]);

  const detenerAutoRotacion = useCallback(() => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
  }, []);

  useEffect(() => {
    iniciarAutoRotacion();
    return () => detenerAutoRotacion();
  }, [iniciarAutoRotacion, detenerAutoRotacion]);

  const siguienteGrupo = () => {
    detenerAutoRotacion();
    setGrupoActual(prev => (prev + 1) % totalGrupos);
    iniciarAutoRotacion();
  };

  const anteriorGrupo = () => {
    detenerAutoRotacion();
    setGrupoActual(prev => (prev === 0 ? totalGrupos - 1 : prev - 1));
    iniciarAutoRotacion();
  };

  const promocionesVisibles = promociones.slice(
    grupoActual * promocionesPorGrupo,
    grupoActual * promocionesPorGrupo + promocionesPorGrupo,
  );

  const touchStartX = useRef(null);

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = e => {
    if (!touchStartX.current) return;

    const diferencia = touchStartX.current - e.changedTouches[0].clientX;

    if (diferencia > 50) siguienteGrupo();
    if (diferencia < -50) anteriorGrupo();

    touchStartX.current = null;
  };

  if (!promoActiva) return null;
  if (!mostrarBarra) return null;

  return (
    <>
      {/* BARRA INFERIOR */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 z-50 shadow-lg">
        <p className="text-sm text-center sm:text-left">
          ¡Aprovecha nuestra promoción de Marzo! DREM GLOW TIME
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setMostrarModal(true)}
            className="bg-[#D4AD45] text-black px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            Ver información
          </button>

          <button
            onClick={() => setMostrarBarra(false)}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* MODAL */}
      {mostrarModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* CERRAR */}
            <button
              onClick={() => setMostrarModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <div className="p-8 text-center space-y-6">
              <h2 className="text-2xl font-semibold">DREM GLOW TIME</h2>

              <p className="text-gray-600">Del 07 al 31 de Marzo</p>
              <p className="text-gray-600">
                Aparta tu cita con $500, pago restante solo en efectivo.
              </p>

              {/* CARRUSEL */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {promocionesVisibles.map((promo, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-2xl border border-gray-100"
                  >
                    <p className="font-medium text-black">{promo.titulo}</p>

                    <p className="text-sm text-gray-500 mt-2">
                      {promo.descripcion}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">{promo.precio}</p>
                  </div>
                ))}
              </div>

              {/* CONTROLES */}
              <div className="flex justify-center items-center gap-6">
                <button
                  onClick={anteriorGrupo}
                  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  ←
                </button>

                <div className="flex gap-2">
                  {[...Array(totalGrupos)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setGrupoActual(i)}
                      className={`w-3 h-3 rounded-full ${
                        grupoActual === i ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={siguienteGrupo}
                  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  →
                </button>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/5216621881994?text=Hola%2C%20quisiera%20informaci%C3%B3n%20y%20disponibilidad%20para%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition"
              >
                Agendar cita ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
