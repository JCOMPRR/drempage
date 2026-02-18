import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Blog() {
  const posts = [
    {
      title: "¿Qué es la toxina botulínica y cómo funciona realmente?",
      category: "Medicina Estética",
      keyword: "toxina botulinica que es",
      intent: "Informacional",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "Conoce cómo actúa la toxina botulínica a nivel muscular, para qué se utiliza dentro de protocolos médicos estéticos y qué aspectos suelen evaluarse antes de su aplicación.",
      date: "Marzo 2026",
      slug: "toxina-botulinica-que-es-y-como-funciona",
    },
    {
      title: "Ácido hialurónico: beneficios para hidratación y calidad de piel",
      category: "Cuidado de la Piel",
      keyword: "acido hialuronico beneficios piel",
      intent: "Informacional",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "Descubre cómo el ácido hialurónico participa en la hidratación cutánea, soporte estructural y protocolos médicos enfocados en calidad de piel.",
      date: "Marzo 2026",
      slug: "acido-hialuronico-beneficios-piel",
    },
    {
      title: "Bioestimuladores: qué son y por qué son tendencia",
      category: "Rejuvenecimiento",
      keyword: "bioestimuladores que son",
      intent: "Informacional",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "Conoce el enfoque moderno de los bioestimuladores dentro de protocolos médicos que buscan estimular procesos naturales de la piel.",
      date: "Marzo 2026",
      slug: "bioestimuladores-que-son",
    },
    {
      title: "¿Cómo elegir una clínica de medicina estética segura?",
      category: "Seguridad del Paciente",
      keyword: "como elegir clinica medicina estetica",
      intent: "Transaccional suave",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "Guía para conocer qué factores suelen evaluarse al elegir un centro médico estético profesional.",
      date: "Marzo 2026",
      slug: "como-elegir-clinica-segura",
    },
    {
      title: "Cuidado de la piel después de procedimientos médicos estéticos",
      category: "Post Tratamiento",
      keyword: "cuidados despues medicina estetica",
      intent: "Informacional",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "Recomendaciones generales que suelen indicarse tras procedimientos médicos estéticos para apoyar la recuperación cutánea.",
      date: "Marzo 2026",
      slug: "cuidados-despues-procedimientos",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Glow Medical Code | Blog de Medicina Estética</title>
      </Helmet>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs tracking-[0.35em] text-gray-400 uppercase">
          Blog Médico Estético
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-heading font-bold text-black tracking-wide">
          Glow Medical Code
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Espacio informativo enfocado en educación del paciente, cuidado de la
          piel y bienestar integral basado en información científica y práctica
          médica profesional.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-[2px] w-32 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 rounded-full" />
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1600&auto=format&fit=crop"
              alt="medicina estetica tendencias"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs tracking-widest uppercase text-white/80">
                Artículo Destacado
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Tendencias actuales en medicina estética moderna 2026
              </h2>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-yellow-600 mb-4">
              Educación del Paciente
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
              Enfoque moderno basado en naturalidad, personalización y calidad
              de piel
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              La medicina estética actual se orienta a protocolos médicos
              personalizados que buscan mantener la armonía natural.
            </p>

            <Link
              to="/BlogTendenciasActuales"
              className="inline-block mt-6 px-6 py-3 rounded-full border border-yellow-500/40 text-sm font-medium hover:bg-yellow-50 transition"
            >
              Leer artículo completo
            </Link>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.keyword}
                  className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-xs tracking-widest uppercase text-yellow-600">
                  {post.category}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-black leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs text-gray-400">{post.date}</span>

                  <Link
                    to={`/pages/${post.slug}`}
                    className="text-sm font-medium text-black border-b border-yellow-500/40 hover:border-yellow-600 transition"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16 px-6">
        <p className="text-center text-xs text-gray-400 max-w-3xl mx-auto">
          Contenido informativo con fines educativos. No sustituye valoración
          médica profesional.
        </p>
      </section>
    </div>
  );
}
