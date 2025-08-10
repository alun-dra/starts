import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Automatizacion from "./pages/Automatizacion";
import Inteligencia from "./pages/Inteligencia";
import Ia from "./pages/Ia";
import Infraestructura from "./pages/Infraestructura";
import Soluciones from "./pages/Soluciones";
import Monitoreo from "./pages/Monitoreo";
// import Layout from "./Layout";
import  Layout   from "./layout/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/automatizacionymigracion" element={<Automatizacion />} />
          <Route path="/inteligencia" element={<Inteligencia />} />
          <Route path="/inteligeniaArtificial" element={<Ia />} />
          <Route path="/infraestructura" element={<Infraestructura />} />
          <Route path="/solucionesempresariales" element={<Soluciones />} />
          <Route path="/monitoreo" element={<Monitoreo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
