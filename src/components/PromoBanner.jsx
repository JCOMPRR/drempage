import { useState } from "react";

export default function PromocionBanner() {
  const [mostrarBarra, setMostrarBarra] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cerrarBarra = () => {
    setMostrarBarra(false);
  };

  if (!mostrarBarra) return null;

  return (
    <>
      {/* BARRA */}
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

            <div className="p-8 text-center">{/* contenido igual */}</div>
          </div>
        </div>
      )}
    </>
  );
}
