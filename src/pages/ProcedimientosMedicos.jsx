export default function ProcedimientosMedicos() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-black font-bold tracking-wide">
            Procedimientos Médicos
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            El tratamiento puede variar según la recomendación médica,
            valoración clínica y necesidades individuales del paciente.
          </p>
        </div>

        {/* Categorías */}
        <Category title="Toxina Botulínica (Botox)">
          <Service
            title="Aplicación de toxina botulínica"
            description="Aplicación en frente, entrecejo y peri-orbiculares para relajar el músculo de manera controlada, atenuar líneas de expresión y lograr una apariencia más fresca y natural."
          />
          <Service
            title="Brotox"
            description="Aplicación de toxina botulínica diseñada para hombres, enfocada en mantener rasgos masculinos mientras se suavizan líneas de expresión."
          />
          <Service
            title="Bunny Lines"
            description="Aplicación en músculo nasal para disminuir las líneas laterales de la nariz y lograr una expresión más relajada."
          />
          <Service
            title="Trap Botox (Barbie Botox)"
            description="Aplicación en músculo trapecio para aliviar tensión cervical y mejorar estéticamente el contorno de hombros."
          />
          <Service
            title="Lip Lift"
            description="Microaplicaciones en el músculo orbicular para lograr una ligera eversión del labio superior."
          />
          <Service
            title="Hiperhidrosis"
            description="Aplicación de toxina botulínica para reducir la sudoración excesiva mediante microinyecciones en el área tratada."
          />
          <Service
            title="Nefertiti"
            description="Técnica para mejorar el ángulo mandibular y cuello, generando un efecto visual de lifting."
          />
          <Service
            title="Músculo masetero hipertrófico"
            description="Aplicación en músculo masetero, reduce hipertrofia muscular y estiliza el rostro."
          />
          <Service
            title="Sonrisa gingival"
            description="Corrección de la exposición excesiva de encía mediante aplicaciones estratégicas de toxina botulínica."
          />
        </Category>

        <Category title="Fillers">
          <Service
            title="Diseño de labios"
            description="Tratamiento con ácido hialurónico para proyección, humectación, perfilado o aumento de volumen según cada paciente."
          />
          <Service
            title="Proyeccion de mentón"
            description="Aplicación de ácido hialurónico para mejorar proyección y armonía facial."
          />
          <Service
            title="Marcaje mandibular"
            description="Definición del ángulo mandibular con ácido hialurónico de alta densidad."
          />
          <Service
            title="Revitalización de ojeras"
            description="Tratamiento poli-revitalizante con ácido hialurónico, vitaminas, aminoácidos y minerales."
          />
          <Service
            title="Enzimas lipolíticas"
            description="Aplicación terapéutica de enzimas para tratar grasa localizada, fibrosis, celulitis y secuelas cutáneas."
          />
          <Service
            title="Factores de crecimiento facial"
            description="Tratamiento regenerativo que estimula colágeno y elastina, mejorando textura, manchas y arrugas."
          />
          <Service
            title="Factores de crecimiento capilar"
            description="Estimula el crecimiento capilar y fortalece el folículo piloso."
          />
        </Category>

        <Category title="Bioestimuladores">
          <Service
            title="Radiesse"
            description="Bioestimulador de hidroxiapatita cálcica que induce colágeno y mejora firmeza facial y corporal."
          />
          <Service
            title="Profhilo"
            description="Bioestimulador de ácido hialurónico que mejora hidratación, tonicidad y luminosidad de la piel."
          />
          <Service
            title="Sculptra"
            description="Bioestimulador de colágeno a base de ácido poli-L-láctico aprobado por la FDA."
          />
          <Service
            title="Protocolo Glow Up Lift"
            description="Ultrasonido micro y macrofocalizado para mejorar contorno facial y lograr efecto lifting."
          />
          <Service
            title="Retiro de verrugas"
            description="Procedimiento seguro mediante cauterización eléctrica, previa valoración médica."
          />
          <Service
            title="Hidratación de labios"
            description="Tratamiento con dermapen o revitalizantes para mejorar textura e hidratación labial."
          />
        </Category>

        <Category title="Otros">
          <Service
            title="Retiro de verrugas"
            description="Procedimiento seguro mediante cauterización eléctrica, previa valoración médica."
          />
          <Service
            title="Revitalización de Piel (Skin Booster)"
            description="Tratamiento poli-revitalizante con ácido hialurónico, vitaminas, aminoácidos y minerales."
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

      <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
