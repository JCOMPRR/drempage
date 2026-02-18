import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Resultados() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Resultados de tratamientos médicos estéticos | México</title>
        <meta
          name="description"
          content="Galería de resultados de tratamientos médicos estéticos realizados en México. Antes y después de procedimientos faciales y corporales. Resultados reales de pacientes satisfechos."
        />
        <meta
          name="keywords"
          content="
          resultados tratamientos medicina estética México,
          resultados antes y después medicina estética,
          resultados reales pacientes medicina estética,
          resultados procedimientos faciales México,    
          resultados tratamientos corporales México,    
          resultados medicina estética Sonora,
          resultados antes y después botox,
          resultados antes y después faciales,
          como se ve botox,
          como se ve ácido hialurónico,
          resultados antes y después ácido hialurónico

          "
        />

        {/* SEO Local */}
        <meta name="geo.region" content="MX-SON" />
        <meta name="geo.placename" content="Sonora" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    </div>
  );
}