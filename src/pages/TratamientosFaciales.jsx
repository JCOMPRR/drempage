export default function TratamientosFaciales() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-black font-bold tracking-wide">
            Tratamientos Faciales
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            El tratamiento puede variar según la recomendación médica,
            valoración clínica y necesidades individuales del paciente.
          </p>
        </div>

        <Category title="Tratamientos Faciales">
          <Service
            title="Ultrasonido Dual Macro y Micro Focalizado"
            description={
              <>
                Ultrasonido micro y macrofocalizado de alta intensidad a nivel
                muscular que logra revertir la flacidez, tratar grasa
                localizada, crear efecto lifting, atenuar líneas de expresión y
                estimular colágeno y elastina para definir el contorno facial de
                forma natural.
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                    Zonas tratadas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Tag>Frente</Tag>
                    <Tag>Mejilla</Tag>
                    <Tag>Papada</Tag>
                    <Tag>Lifting de cejas</Tag>
                    <Tag>Cuello</Tag>
                    <Tag>Escote</Tag>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 mt-5 mb-3">
                    Combinaciones
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Tag>Mejilla + Papada</Tag>
                    <Tag>Frente + Mejilla</Tag>
                    <Tag>Full Face</Tag>
                  </div>
                </div>
              </>
            }
          />

          <Service
            title="Yoga Facial"
            description="Técnica natural que combina ejercicios musculares, masajes tonificantes y respiración consciente para estimular, fortalecer y relajar los músculos del rostro. Ayuda a suavizar líneas de expresión, mejorar la circulación, elevar los contornos faciales y devolver luminosidad a la piel."
          />

          <Service
            title="Facial Bronce"
            description="Limpieza profunda personalizada para eliminar células muertas, tener una piel libre de puntos negros y puntos blancos, mejorar la textura de la piel logrando así una piel más suave limpia y luminosa."
          />

          <Service
            title="Facial Plata"
            description="Limpieza profunda que ayudará a la estimulación de la producción de colágeno y elastina, repara la barrera cutánea para mejorar la absorción de productos, mejora la hidratación y brillo de la piel. Con ayuda del DermaPen podremos controlar la pigmentación a largo plazo."
          />

          <Service
            title="Facial Cobre"
            description="Limpieza profunda acompañada de aparatología (radiofrecuencia) para crear un efecto lifting de la piel, ayudando a disminuir la flacidez, reducción de la grasa localizada y sebo regulación, ayudando además a la nueva formación de colágeno."
          />

          <Service
            title="Facial Zafiro"
            description="Limpieza profunda de la piel del rostro para la regeneración celular con ayuda de factores de crecimiento exógenos (exosomas y vitaminas) aplicados con DermaPen, unificando el tono de la piel, disminuyendo rojez, manchas por daño solar o post acné, aportando hidratación y luminosidad."
          />

          <Service
            title="Facial Timeless Glow"
            description="Limpieza profunda acompañada de tratamiento diseñado para suavizar líneas de expresión, reafirmar la piel y devolver un aspecto descansado, terso y luminoso. Incluye microdermoabrasión y mascarilla plástica."
          />
        </Category>
      </div>
    </section>
  );
}

// CATEGORY
function Category({ title, children }) {
  return (
    <div className="mb-16">
      <h2 className="font-heading text-2xl md:text-3xl text-black mb-10 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
}

// SERVICE CARD
function Service({ title, description }) {
  return (
    <div
      className="
      group
      bg-white
      border border-gray-200
      rounded-2xl
      p-7
      shadow-sm
      hover:shadow-xl
      hover:border-yellow-500/40
      transition-all duration-300
    "
    >
      <h3 className="text-lg md:text-xl font-semibold text-black relative pb-3">
        {title}
        <span
          className="
          absolute bottom-0 left-0
          w-10 h-[2px]
          bg-gradient-to-r from-yellow-600 to-yellow-400
          group-hover:w-16
          transition-all duration-300
        "
        ></span>
      </h3>

      <div className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
        {description}
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span
      className="
      px-3 py-1
      text-xs
      rounded-full
      border border-yellow-500/30
      text-gray-700
      bg-yellow-50/40
      backdrop-blur-sm
    "
    >
      {children}
    </span>
  );
}
