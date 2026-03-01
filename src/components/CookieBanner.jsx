import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("cookieConsent");
    }
    return false;
  });

  const aceptar = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rechazar = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-0 w-full bg-black text-white p-6 z-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          Utilizamos cookies para mejorar su experiencia y analizar el tráfico
          del sitio. Puede aceptar o rechazar su uso.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rechazar}
            className="px-4 py-2 bg-gray-600 rounded-md text-sm"
          >
            Rechazar
          </button>

          <button
            onClick={aceptar}
            className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
