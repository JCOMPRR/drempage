import { useState } from "react";

export default function PromocionBanner() {
  // Fecha final de la promocion
  const fechaFinPromo = new Date("2026-03-28");
  const hoy = new Date();
  const promoActiva = hoy <= fechaFinPromo;

  const [mostrarBarra, setMostrarBarra] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);

  if (!promoActiva) return null;
  if (!mostrarBarra) return null;

  return (
    <>
      {/* BARRA INFERIOR */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 z-50 shadow-lg">
        <p className="text-sm text-center sm:text-left">
          Promoción activa por tiempo limitado.
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setMostrarModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* CONTENIDO */}
            <div className="p-8 text-center space-y-6">
              <h2 className="text-2xl font-semibold">Promoción Especial</h2>

              <p className="text-gray-600">
                Disfruta de un beneficio exclusivo por tiempo limitado.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-lg font-medium text-black">
                  15% de descuento en tu primera consulta
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Válido hasta el 31 de marzo de 2026.
                </p>
              </div>

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
