import { useEffect, useRef } from "react";

export default function GoogleReviewsCarousel({ reviews }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrame;
    let position = 0;
    let isPaused = false;
    const speed = 0.3;

    const animate = () => {
      if (!isPaused) {
        position -= speed;

        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    track.addEventListener("mouseenter", () => (isPaused = true));
    track.addEventListener("mouseleave", () => (isPaused = false));

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Opiniones de nuestros pacientes
        </h2>

        <div className="relative">
          <div ref={trackRef} className="flex gap-6 w-max">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="min-w-[340px] max-w-[340px] h-[260px] bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-yellow-400 text-sm">
                    {"★★★★★".slice(0, review.rating)}
                  </div>

                  <svg width="18" height="18" viewBox="0 0 48 48">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.73 1.22 9.23 3.62l6.9-6.9C35.64 2.36 30.17 0 24 0 14.82 0 6.73 5.16 2.69 12.73l8.03 6.24C12.52 13.23 17.73 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.1 24.55c0-1.64-.15-3.22-.42-4.75H24v9h12.4c-.54 2.9-2.18 5.36-4.64 7.03l7.19 5.6c4.2-3.87 6.65-9.57 6.65-16.88z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.72 28.97A14.5 14.5 0 0 1 9.5 24c0-1.72.3-3.37.84-4.92l-8.03-6.24A23.93 23.93 0 0 0 0 24c0 3.87.93 7.52 2.58 10.73l8.14-5.76z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.17 0 11.34-2.04 15.12-5.55l-7.19-5.6c-2 1.34-4.57 2.13-7.93 2.13-6.27 0-11.48-3.73-13.28-9.05l-8.14 5.76C6.73 42.84 14.82 48 24 48z"
                    />
                  </svg>
                </div>

                {/* TEXTO CON LINE CLAMP */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">
                  {review.text}
                </p>

                {/* NOMBRE */}
                <div className="mt-auto pt-4 text-sm font-medium text-black">
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="https://maps.app.goo.gl/8RbStBu39zS2Q66VA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-black hover:underline"
        >
          Ver perfil completo y opiniones verificadas en Google
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.73 1.22 9.23 3.62l6.9-6.9C35.64 2.36 30.17 0 24 0 14.82 0 6.73 5.16 2.69 12.73l8.03 6.24C12.52 13.23 17.73 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.1 24.55c0-1.64-.15-3.22-.42-4.75H24v9h12.4c-.54 2.9-2.18 5.36-4.64 7.03l7.19 5.6c4.2-3.87 6.65-9.57 6.65-16.88z"
            />
            <path
              fill="#FBBC05"
              d="M10.72 28.97A14.5 14.5 0 0 1 9.5 24c0-1.72.3-3.37.84-4.92l-8.03-6.24A23.93 23.93 0 0 0 0 24c0 3.87.93 7.52 2.58 10.73l8.14-5.76z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.17 0 11.34-2.04 15.12-5.55l-7.19-5.6c-2 1.34-4.57 2.13-7.93 2.13-6.27 0-11.48-3.73-13.28-9.05l-8.14 5.76C6.73 42.84 14.82 48 24 48z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
