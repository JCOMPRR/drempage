import { useEffect, useRef, useState } from "react";

export default function PodcastSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20">
      <div
        ref={ref}
        className={`
          max-w-5xl mx-auto px-6 text-center
          ${visible ? "animate-fadeUp" : "opacity-0"}
        `}
      >
        <h2 className="font-heading text-3xl md:text-4xl text-black">
          Disfruta del Podcast de la Dra. Elise Monserrat
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Un espacio donde la Dra. Elise Monserrat comparte información clara y
          responsable sobre ciencia, emprendimiento y bienestar en un solo
          espacio. Platicas con expertos, tips y anécdotas para crecer.
        </p>

        <div className="mt-12 aspect-video w-full overflow-hidden rounded-sm">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/WFJXodm3rNE"
            title="Podcast Dra. Elise Monserrat"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <a
          href="https://open.spotify.com/show/5aFGR0FJTcz5V0jUDZrP4f?si=512e3e2d1ba94efd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-10 px-10 py-3
                     bg-[#1DB954] text-white font-medium rounded-md
                     hover:bg-[#17a74a] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="w-5 h-5 fill-current"
            aria-hidden="true"
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm114.7 357.4c-4.5 7.4-14.2 9.8-21.6 5.3-59.2-36.2-133.8-44.4-221.7-24.4-8.3 1.9-16.6-3.3-18.5-11.6-1.9-8.3 3.3-16.6 11.6-18.5 96.3-22 179.5-12.5 246.3 28.5 7.4 4.5 9.8 14.2 5.3 21.6zm30.8-68.5c-5.6 9.1-17.6 12-26.7 6.4-67.8-41.7-171.2-53.8-251.6-29.3-10.2 3.1-21-2.6-24.1-12.8-3.1-10.2 2.6-21 12.8-24.1 92.2-28 207-14.5 285.4 33.3 9.1 5.6 12 17.6 6.4 26.7zm2.6-71.3C317.6 173 185.3 167 97.4 193.9c-12.2 3.7-25.1-3.2-28.8-15.4-3.7-12.2 3.2-25.1 15.4-28.8 101.7-30.8 244.1-24.8 333.9 34.5 11 7.2 14.1 22 6.9 33-7.2 11-22 14.1-33 6.9z" />
          </svg>
          Escuchar en Spotify
        </a>
      </div>
    </section>
  );
}
