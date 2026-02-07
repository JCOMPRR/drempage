import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import ProcedimientosMedicos from "./pages/ProcedimientosMedicos";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/botox" element={<ProcedimientosMedicos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
