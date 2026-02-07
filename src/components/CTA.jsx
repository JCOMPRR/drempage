import { useEffect, useRef, useState } from "react";

export default function CTAWhatsapp() {
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
    <section className="bg-gray-50 py-20">
      <div
        ref={ref}
        className={`
          max-w-4xl mx-auto px-6 text-center
          ${visible ? "animate-fadeUp" : "opacity-0"}
        `}
      >
        <h2 className="font-heading text-3xl md:text-4xl text-black">
          Agenda tu valoración médica personalizada
        </h2>

        <p className="mt-4 text-gray-600">
          Atención directa por WhatsApp para resolver tus dudas y agendar tu
          cita.
        </p>

        <a
          href="https://wa.me/5216621881994?text=Hola%2C%20quisiera%20informaci%C3%B3n%20y%20disponibilidad%20para%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-3
                     bg-[#D4AD45] text-white font-medium rounded-md
                     hover:bg-[#B8932F] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.55 2 2.06 6.48 2.06 11.97c0 1.98.58 3.91 1.67 5.56L2 22l4.64-1.67a9.9 9.9 0 005.4 1.55h.01c5.49 0 9.98-4.48 9.98-9.97C22.03 6.48 17.54 2 12.04 2zm5.77 14.39c-.24.67-1.41 1.3-1.98 1.38-.52.08-1.2.12-1.93-.12-.45-.14-1.02-.33-1.76-.65-3.09-1.33-5.1-4.43-5.25-4.64-.15-.21-1.26-1.68-1.26-3.21 0-1.53.8-2.28 1.09-2.6.28-.32.61-.4.82-.4h.59c.19 0 .44-.07.69.53.24.6.82 2.08.89 2.23.07.15.12.33.02.53-.1.21-.15.33-.3.51-.15.18-.31.4-.44.54-.15.15-.31.32-.13.63.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.18-.21.76-.89.97-1.19.21-.3.42-.25.7-.15.28.1 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.77-.16 1.44z" />
          </svg>
          Agendar por WhatsApp
        </a>
      </div>
    </section>
  );
}
