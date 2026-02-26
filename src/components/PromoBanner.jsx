import { useState } from "react";

export default function PromocionBanner() {
  const calcularEstadoInicial = () => {
    const ultimaVez = localStorage.getItem("promoCerrada");
    const ahora = new Date().getTime();

    if (ultimaVez && ahora - ultimaVez < 86400000) {
      return false;
    }

    return true;
  };

  const [mostrarBarra, setMostrarBarra] = useState(calcularEstadoInicial);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cerrarBarra = () => {
    localStorage.setItem("promoCerrada", new Date().getTime());
    setMostrarBarra(false);
  };

  if (!mostrarBarra) return null;

  return (
    <>
      {/* BARRA */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 z-50 shadow-lg">
        <p className="text-sm text-center sm:text-left">
          Promocion activa por tiempo limitado.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setMostrarModal(true)}
            className="bg-[#D4AD45] text-black px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            Ver información
          </button>

          <button
            onClick={cerrarBarra}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* MODAL */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl relative">
            <button
              onClick={() => setMostrarModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <div className="p-8 text-center">
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                Promoción Vigente del 26 al 28 de Febrero
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-black font-birthstone">
                ¡SHINE UP!
              </h2>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Cupo limitado a 15 lugares.
              </p>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                SkinBooster Full Face de $6,000 MXN a $5,400 MXN.
                <br />
                Diseño de Labios de $5,000 MXN a $4,700 MXN.
                <br />
                Enzimas + Ultracell de $11,000 MXN a $9,900 MXN.
                <br />
                <br />
                Consulta Medica: <br />
                Incluye: Esquema de tratamientos personalizados, analizador
                facial digital, rutina de skincare y sillon de masaje. <br />
                De $1,500 MXN a $1,000 MXN
                <br />
                <br />
                Aparta tu cita con $500 MXN. <br />
                Pago restante solo en efectivo
              </p>

              <a
                href="https://wa.me/5216621881994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Solicitar información
              </a>

              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500">
                Información de carácter informativo. Requiere valoración médica
                previa. Aplican restricciones. No sustituye consulta
                profesional.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
