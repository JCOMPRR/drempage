import Hero from "../components/Hero";
import SobreMi from "../components/SobreMi";
import Servicios from "../components/Servicios";
import CTA from "../components/CTA";
import Podcast from "../components/Podcast";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Servicios />
      <Podcast />
      <CTA />
    </>
  );
}
