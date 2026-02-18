import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function BlogToxinaBotulinica() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>
          Toxina botulínica: qué es, cómo funciona, mitos y realidades | México
          | Glow Medical Code
        </title>

        <meta
          name="description"
          content="Aprende qué es la toxina botulínica, cómo funciona a nivel muscular, mitos y realidades, y su papel dentro de protocolos médicos estéticos. Información médica estética educativa en México."
        />

        <meta
          name="keywords"
          content="
          toxina botulinica México que es,
          toxina botulinica como funciona músculo,
          toxina botulinica mitos y realidades,
          toxina botulinica medicina estética Sonora,
          PRP y medicina regenerativa estética México,
          tratamientos medicina estética seguros México,
          educación paciente toxina botulinica México
          "
        />

        {/* SEO Local */}
        <meta name="geo.region" content="MX-SON" />
        <meta name="geo.placename" content="Sonora" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Toxina botulínica: qué es, cómo funciona, mitos y realidades"
        />
        <meta
          property="og:description"
          content="Artículo educativo sobre toxina botulínica, mecanismo muscular, seguridad médica y educación del paciente."
        />
        <meta property="og:type" content="article" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Toxina botulínica: qué es, cómo funciona y mitos",
            about: "Educación del paciente en medicina estética",
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs tracking-[0.35em] text-gray-400 uppercase">
          Educación del Paciente
        </p>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-black">
          Toxina botulínica: qué es, cómo funciona y mitos y realidades
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Conoce cómo actúa la toxina botulínica a nivel muscular, qué se evalúa
          antes de su aplicación, mitos comunes y su diferencia con terapias
          regenerativas como PRP dentro de la medicina estética moderna.
        </p>
      </section>

      {/* IMAGE */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1600&auto=format&fit=crop"
            alt="toxina botulinica aplicacion medicina estetica"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 pb-20 text-gray-700 leading-relaxed space-y-8">
        <p className="text-sm text-gray-400">
          Actualizado 2026 | Glow Medical Code | México
        </p>

        <p>
          La toxina botulínica es una sustancia utilizada en diferentes áreas de
          la medicina. En medicina estética, forma parte de protocolos médicos
          enfocados en modular temporalmente la actividad muscular facial bajo
          valoración médica individual.
        </p>

        {/* MECANISMO */}
        <h2 className="text-2xl font-semibold text-black">
          ¿Cómo funciona la toxina botulínica a nivel muscular?
        </h2>

        <p>
          Actúa bloqueando temporalmente la liberación de acetilcolina, el
          neurotransmisor responsable de enviar señales del nervio al músculo.
          Esto disminuye temporalmente la contracción muscular en zonas
          específicas.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Efecto temporal.</li>
          <li>Acción localizada.</li>
          <li>Dependiente de técnica médica y anatomía del paciente.</li>
        </ul>

        {/* USO MEDICO */}
        <h2 className="text-2xl font-semibold text-black">
          Uso dentro de protocolos médicos estéticos
        </h2>

        <p>
          Puede utilizarse dentro de protocolos médicos orientados a mejorar la
          armonía facial o modular actividad muscular facial según diagnóstico.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Líneas de expresión dinámicas.</li>
          <li>Armonización facial funcional.</li>
          <li>Protocolos médicos preventivos según criterio médico.</li>
        </ul>

        {/* MITOS */}
        <h2 className="text-2xl font-semibold text-black">
          Mitos y realidades sobre la toxina botulínica
        </h2>

        <p>
          Existen muchos mitos alrededor de la toxina botulínica. La educación
          del paciente es clave para entender su uso médico real.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Mito:</strong> Siempre cambia la expresión facial.
            <br />
            <strong>Realidad:</strong> Depende de dosis, técnica y anatomía.
          </li>

          <li>
            <strong>Mito:</strong> Es permanente.
            <br />
            <strong>Realidad:</strong> Su efecto es temporal.
          </li>

          <li>
            <strong>Mito:</strong> Es igual para todos.
            <br />
            <strong>Realidad:</strong> Cada protocolo es personalizado.
          </li>
        </ul>

        {/* PRP RELACION */}
        <h2 className="text-2xl font-semibold text-black">
          Diferencia entre toxina botulínica y medicina regenerativa (PRP)
        </h2>

        <p>
          Aunque ambos pueden formar parte de protocolos médicos estéticos, su
          función es diferente.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Toxina botulínica:</strong> Modula actividad muscular.
          </li>
          <li>
            <strong>PRP:</strong> Busca estimular procesos regenerativos según
            indicación médica.
          </li>
        </ul>

        {/* EDUCACION */}
        <h2 className="text-2xl font-semibold text-black">
          Educación del paciente y seguridad médica
        </h2>

        <p>
          Todo procedimiento médico estético requiere diagnóstico médico,
          consentimiento informado y seguimiento médico.
        </p>

        {/* REFERENCIAS */}
        <h2 className="text-2xl font-semibold text-black">
          Referencias médicas y educativas
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            FDA. Botulinum Toxin Products Safety Information.
            <a
              href="https://www.fda.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline ml-1"
            >
              Ver fuente
            </a>
          </li>

          <li>
            StatPearls / NCBI. Botulinum Toxin.
            <a
              href="https://www.ncbi.nlm.nih.gov/books/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline ml-1"
            >
              Ver fuente
            </a>
          </li>

          <li>
            American Academy of Dermatology. Cosmetic Injectable Treatments
            Overview.
            <a
              href="https://www.aad.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline ml-1"
            >
              Ver fuente
            </a>
          </li>

          <li>
            International Society of Aesthetic Plastic Surgery (ISAPS).
            <a
              href="https://www.isaps.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline ml-1"
            >
              Ver fuente
            </a>
          </li>
        </ul>

        {/* RELATED */}
        <h2 className="text-2xl font-semibold text-black">
          Artículos relacionados
        </h2>

        <ul className="space-y-2">
          <li>
            <Link
              to="/blog/prp-medicina-estetica-que-es"
              className="text-yellow-600 hover:underline"
            >
              ¿Qué es PRP en medicina estética?
            </Link>
          </li>

          <li>
            <Link
              to="/blog/tendencias-medicina-estetica-2026"
              className="text-yellow-600 hover:underline"
            >
              Tendencias actuales en medicina estética moderna 2026
            </Link>
          </li>
        </ul>

        {/* COFEPRIS SAFE */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-sm text-gray-600">
          <p className="font-semibold text-black mb-2">
            Información Importante
          </p>

          <p>
            Este contenido es informativo y educativo. No sustituye valoración
            médica profesional.
          </p>

          <p className="mt-2">
            Los procedimientos médicos estéticos requieren diagnóstico médico,
            historia clínica completa y consentimiento informado.
          </p>
        </div>
      </article>
    </div>
  );
}
