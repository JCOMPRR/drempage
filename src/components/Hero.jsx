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

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="animate-fadeUp">
          <h1 className="font-heading text-5xl font-semibold text-white uppercase leading-tight">
            Dra. Elise Monserrat
          </h1>

          <h2 className="font-heading text-3xl text-white uppercase leading-tight">
            Donde la elegancia se encuentra con la
          </h2>

          <p className="mt-4 text-white uppercase leading-tight">
            Medicina estética, regenerativa y preventiva
          </p>

          <button className="mt-8 bg-[#D4AD45] text-black px-10 py-4 rounded-full text-sm sm:text-base font-medium">
            Agenda tu cita
          </button>
        </div>
      </div>
    </section>
  );
}
