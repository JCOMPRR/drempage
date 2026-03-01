import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PromoBanner from "./components/PromoBanner";

// Navbar
import Home from "./pages/Home";
import Servicios from "./components/Servicios";
import Resultados from "./pages/Resultados";
import GlowGuide from "./pages/GlowGuide";
// import Blog from "./pages/Blog";

// Terminos y Condiciones
import Terminos from "./pages/TerminosyCondiciones";
import Cookies from "./pages/PoliticaCookies";

// Servicios
import ProcedimientosMedicos from "./pages/ProcedimientosMedicos";
import TratamientosFaciales from "./pages/TratamientosFaciales";
import TratamientosCorporales from "./pages/TratamientosCorporales";
import CookieBanner from "./components/CookieBanner";

// Paginas en Blog
// import BlogTendenciasActuales from "./pages/BlogTendenciasActuales";
// import BlogToxinaBotulinica from "./pages/BlogToxinaBotulinica";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/theGlowGuide" element={<GlowGuide />} />
        <Route path="/protocolosMedicos" element={<ProcedimientosMedicos />} />
        <Route
          path="/tratamientosFaciales"
          element={<TratamientosFaciales />}
        />
        <Route
          path="/tratamientosCorporales"
          element={<TratamientosCorporales />}
        />
        <Route path="/terminosycondiciones" element={<Terminos />} />
        <Route path="/politicaCookies" element={<Cookies />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route
          path="/BlogTendenciasActuales"
          element={<BlogTendenciasActuales />}
        /> */}
        {/* <Route path="/pages/:slug" element={<BlogToxinaBotulinica />} /> */}
      </Routes>
      <Footer />

      <PromoBanner />
      <CookieBanner />
    </BrowserRouter>
  );
}
