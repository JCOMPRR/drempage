export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="animate-fadeUp">
          <h1 className="text-white text-4xl md:text-6xl font-light">
            Medicina estética en Hermosillo
          </h1>

          <p className="text-gray-200 mt-4 max-w-xl mx-auto">
            Tratamientos personalizados para el cuidado de tu piel
          </p>

          <button className="mt-8 bg-[#D4AD45] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Agenda tu cita
          </button>
        </div>
      </div>
    </section>
  );
}
