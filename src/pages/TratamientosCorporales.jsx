export default function TratamientosCorporales() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-black font-bold tracking-wide">
            Tratamientos Corporales
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            El tratamiento puede variar según la recomendación médica,
            valoración clínica y necesidades individuales del paciente.
          </p>
        </div>

        {/* APARATOLOGÍA */}
        <Category title="Aparatología">
          <Service
            title="Radiofrecuencia"
            description="Tratamiento para la reducción de la grasa acumulada que ayuda a reducir la flacidez, mejorar el aspecto de la piel, disminuir celulitis, mejorar la circulación y estimular la producción de colágeno y elastina."
          />

          <Service
            title="Ultrasonido"
            description="Ondas que ayudan a reafirmar la piel, reducir inflamación, mejorar textura y elasticidad."
          />

          <Service
            title="Ultrasonido Focalizado"
            description="Ayuda a tratar flacidez, mejorar textura y tensión de la piel, tratar grasa localizada y lograr efecto lifting."
          />
        </Category>

        {/* TRATAMIENTOS CORPORALES */}
        <Category title="Tratamientos Corporales">
          <Service
            title="Limpieza de Espalda"
            description="Limpieza profunda corporal para aliviar el poro congestionado por acné o comedones, mejorando textura, hidratación y tonalidad. Finaliza con masaje para estimular circulación y relajación muscular."
          />

          <Service
            title="Maderoterapia"
            description="Tratamiento corporal con instrumentos de madera diseñados para moldear, tonificar y estimular la circulación. Ideal para combatir la celulitis y mejorar la textura de la piel."
          />

          <Service
            title="Masaje Reductivo Manual"
            description="Masaje intenso con maniobras localizadas que ayudan a movilizar grasa acumulada, activar el metabolismo y esculpir la figura de forma natural."
          />

          <Service
            title="Tratamiento Reductivo Combinado"
            description="Combinación de técnicas manuales y maderoterapia para potenciar reducción de medidas, mejorar drenaje linfático y reafirmar la piel."
          />

          <Service
            title="Masaje Relajante"
            description="Masaje que ayuda a reducir dolores musculares, relajar el cuerpo, disminuir ansiedad y estrés, y mejorar la circulación sanguínea."
          />

          <Service
            title="Drenaje Linfático"
            description="Terapia suave diseñada para estimular el sistema linfático, eliminar toxinas y líquidos retenidos, mejorar circulación y reducir hinchazón."
          />
        </Category>

        {/* EXPERIENCIAS */}
        <Category title="Experiencias DREM">
          <Service
            title="Paquete Bride"
            description="Ritual exclusivo para novias que combina técnicas relajantes y revitalizantes en rostro y cuerpo, drenaje linfático, yoga facial, cuidados para manos y pies y mascarilla hidratante para una experiencia sensorial completa."
          />

          <Service
            title="Stress Off"
            description="Experiencia restauradora que combina masajes terapéuticos, drenaje linfático, yoga facial, spa de manos y pies y mascarilla facial hidratante para reconectar con el bienestar físico y emocional."
          />

          <Service
            title="Drem Hot Stone"
            description="Técnica terapéutica con piedras volcánicas calientes que relajan profundamente músculos, mejoran circulación, reducen inflamación y promueven bienestar emocional."
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