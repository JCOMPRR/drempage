export default function PoliticaCookies() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-20">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Política de Cookies
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo cuando visita un sitio web. Permiten mejorar la
              experiencia de navegación, analizar el uso del sitio y ofrecer
              contenido relevante.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. ¿Qué tipos de cookies utilizamos?
            </h2>
            <p>
              En este sitio pueden utilizarse los siguientes tipos de cookies:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Cookies técnicas:</strong> necesarias para el correcto
                funcionamiento del sitio.
              </li>
              <li>
                <strong>Cookies analíticas:</strong> permiten medir el tráfico y
                comportamiento de los usuarios (por ejemplo, Google Analytics).
              </li>
              <li>
                <strong>Cookies de marketing:</strong> utilizadas para mostrar
                anuncios relevantes o medir campañas publicitarias.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Cookies de terceros
            </h2>
            <p>
              Este sitio puede utilizar servicios de terceros como Google Tag
              Manager, Google Analytics u otras herramientas que pueden instalar
              cookies conforme a sus propias políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Gestión de cookies
            </h2>
            <p>
              Usted puede aceptar o rechazar el uso de cookies a través del
              banner de consentimiento mostrado al ingresar al sitio. También
              puede configurar su navegador para bloquear o eliminar cookies en
              cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Cambios en la política
            </h2>
            <p>
              La clínica se reserva el derecho de modificar esta Política de
              Cookies en cualquier momento. Los cambios serán publicados en esta
              misma página.
            </p>
          </section>

          <section>
            <p className="text-gray-500 text-sm">
              Última actualización: {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
