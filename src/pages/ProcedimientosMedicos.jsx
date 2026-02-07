export default function ProcedimientosMedicos() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-black">
            Procedimientos Médicos
          </h1>

          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            El costo del tratamiento puede variar según la recomendación médica,
            valoración clínica y necesidades individuales del paciente.
          </p>
        </div>

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
            title="Baby Botox"
            description="Aplicación de microdosis de toxina botulínica para obtener resultados sutiles y naturales."
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
            title="Bruxismo"
            description="Aplicación en músculo masetero para aliviar dolor mandibular, reducir hipertrofia muscular y estilizar el rostro."
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
            title="Aumento de mentón"
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
          <Service
            title="Power Serum"
            description="Administración intravenosa de líquidos, vitaminas y minerales para hidratación y bienestar general."
          />
        </Category>
      </div>
    </section>
  );
}

function Category({ title, children }) {
  return (
    <div className="mb-16">
      <h2 className="font-heading text-2xl md:text-3xl text-black mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

function Service({ title, description }) {
  return (
    <div className="border border-gray-200 p-6 rounded-sm">
      <h3 className="font-medium text-black">{title}</h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
