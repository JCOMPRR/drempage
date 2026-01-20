export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="animate-fadeUp">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
            Medicina estética en Hermosillo
          </h1>

          <p className="text-gray-200 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Tratamientos personalizados para realzar tu belleza de forma segura
          </p>

          <button className="mt-8 bg-[#D4AD45] text-black px-10 py-4 rounded-full text-sm sm:text-base font-medium">
            Agenda tu cita
          </button>
        </div>
      </div>
    </section>
  );
}
