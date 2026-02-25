import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Navbar
import Home from "./pages/Home";
import PromoBanner from "./components/PromoBanner";
import Servicios from "./components/Servicios";
import Resultados from "./pages/Resultados";
// import Blog from "./pages/Blog";

// Servicios
import ProcedimientosMedicos from "./pages/ProcedimientosMedicos";
import TratamientosFaciales from "./pages/TratamientosFaciales";
import TratamientosCorporales from "./pages/TratamientosCorporales";

// Paginas en Blog
// import BlogTendenciasActuales from "./pages/BlogTendenciasActuales";
// import BlogToxinaBotulinica from "./pages/BlogToxinaBotulinica";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />
      <PromoBanner />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/protocolosMedicos" element={<ProcedimientosMedicos />} />
        <Route
          path="/tratamientosFaciales"
          element={<TratamientosFaciales />}
        />
        <Route
          path="/tratamientosCorporales"
          element={<TratamientosCorporales />}
        />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route
          path="/BlogTendenciasActuales"
          element={<BlogTendenciasActuales />}
        /> */}
        {/* <Route path="/pages/:slug" element={<BlogToxinaBotulinica />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
