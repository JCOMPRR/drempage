import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* INFO DOCTORA */}
        <div>
          <h3 className="text-white text-lg font-medium">
            Dra. Elise Monserrat
          </h3>

          <p className="mt-2 text-sm">Medicina General</p>
          <p className="text-sm">Universidad del Valle de Mexico</p>
          <p className="text-sm">Cedula Profesional 13645060</p>
          <p className="text-sm">
            Medicina Regenerativa, Antienenvejecimiento y Estetica
          </p>
          <p className="text-sm">
            COFEPRIS 2426012002A00113 <br />
            Consulte a su médico de confianza
          </p>

          {/* LEGALES */}
          <div className="mt-6">
            <h4 className="text-white font-medium mb-2">Información Legal</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/terminosycondiciones"
                className="text-[#D4AD45] hover:underline"
              >
                Términos y Condiciones
              </Link>

              <Link
                to="/politicaCookies"
                className="text-[#D4AD45] hover:underline"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* UBICACION + REDES */}
        <div>
          <h4 className="text-white font-medium mb-2">Ubicación</h4>

          <p className="text-sm leading-relaxed">
            Av. Tehuantepec 114, El Centenario, 83260
            <br />
            Hermosillo, Son.
          </p>

          <p className="mt-2 text-sm">
            Tel:{" "}
            <a
              href="https://wa.me/5216621881994?text=Hola%2C%20quisiera%20informaci%C3%B3n%20y%20disponibilidad%20para%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AD45] hover:underline"
            >
              +52 662 188 1994
            </a>
          </p>

          <p className="mt-2 text-sm">Lunes a Viernes · 9:00 am – 6:00 pm</p>

          {/* REDES SOCIALES */}
          <div className="mt-5">
            <h4 className="text-white font-medium mb-2">
              Síguenos en nuestras Redes Sociales
            </h4>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.instagram.com/draelisemonserrat/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AD45] transition"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/people/Dra-Elise-Monserrat-Rodriguez/100041394078302/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AD45] transition"
              >
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/@draelisemonserrat?_r=1&_t=ZS-93vBCbdN0tc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AD45] transition"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div>
          <h4 className="text-white font-medium mb-2">Cómo llegar</h4>

          <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Dra. Elise Monserrat - Medicina Estética en Hermosillo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27893.696750716335!2d-110.98085729861228!3d29.084651487426587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85a5b609e415%3A0x20b1a6b2f14436cf!2sDra%20Elise%20Monserrat%20-%20Medicina%20Est%C3%A9tica!5e0!3m2!1ses-419!2smx!4v1768886686435!5m2!1ses-419!2smx"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
