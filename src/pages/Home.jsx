import Hero from "../components/Hero";
import SobreMi from "../components/SobreMi";
import Servicios from "../components/Servicios";
import CTA from "../components/CTA";
import Podcast from "../components/Podcast";
import GoogleReviewsCarousel from "../components/GoogleReviewsCarrousel";

const reviews = [
  {
    name: "Elio Utrilla",
    rating: 5,
    text: "Una de las mejores clínicas en Hermosillo, desde el trato de las personas que te reciben hasta la Dra. Elise, que te explica con lujo de detalle el procedimiento que va a realizar, los beneficios del mismo y los resultados esperados, al principio tenía dudas pero con el transcurso de los días empece a notar los cambios, sin duda fue una de las mejores experiencias, no duden en ir con ella, créanme vale la pena!",
  },
  {
    name: "Mariann Romero",
    rating: 5,
    text: "El mejor lugar para hacerte faciales, masajes y procedimientos de medicina estética con personal capacitado y en constante actualización. Tengo más de 5 años haciéndome distintos procedimientos y estoy encantada con los resultados",
  },
  {
    name: "Marisol Flores Pacheco",
    rating: 5,
    text: "¡Tienen que ir! ¡Impecable el lugar, la doctora súper preparada, muy amable y te atiende de maravilla. En lo que esperaba mi consulta me pasaron a un sillón de masaje 🤩 Recomendado 🙌🏻",
  },
  {
    name: "Andrea Bojorquez",
    rating: 5,
    text: "Súper recomendada La Dra. Elise es increíble, siempre me hace sentir en confianza. Me he realizado botox, labios y tratamientos faciales y todo queda muy natural 🫰🏻, Además, los masajes relajantes son una delicia, amo su atención y profesionalismo 💖",
  },
  {
    name: "Rosa Maria",
    rating: 5,
    text: "En varias ocasiones había ido con distintos profesionales a preguntar del botox y con la dra elise es la primera que me dio la confianza de hacerlo. Altamente recomendada, estoy fascinada con cómo se ve mi piel! La clínica muy limpia, hasta con masaje salí mientras esperaba la cita 10/10",
  },
  {
    name: "Martin Chavez",
    rating: 5,
    text: "Un servicio súper profesional, en todo momento me sentí acompañado he informado en cada procedimiento, recibí un servicio de calidad por parte de todo el equipo de la clínica de medicina estética, sobre todo súper contento con los resultados y la atención personalizada de la Dra Elise Monserrat.",
  },
  {
    name: "Stephanie Hernandez",
    rating: 5,
    text: "Me encantó todooooooo😍😍😍y debo de agradecerles infinitamente por qué gracias a la visita con ustedes mi piel cambió totalmente 🥹 empecé a utilizar los productos adecuados y wow!!! Que cosa , que gran cambio. Un abrazote a Fernanda que me explicó detalladamente cómo estaba mi piel, en verdad mi piel es otra 😍 y a la Dra Elise otrooooooo🥰🥰🫂 10000000/10 la aplicacion,veo hasta más iluminada mi piel no se si sea por eso también. Pero en verdad si vi los cambios y la aplicación excelente cero dolor, todo muy bien explicado. En verdad todo perfecto, muchísimas gracias por la atención y el seguimiento, no tengo nada más que cosas buenas que decir. Gracias 💖",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Servicios />
      <GoogleReviewsCarousel reviews={reviews} />
      <Podcast />
      <CTA />
    </>
  );
}
