import { useState } from 'react'; // Asegúrate de importar useState si aún no lo hiciste

import { Link, NavLink, Outlet } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi'
import logo from "../assets/logo.png";
import logoSvg from '../assets/logo.svg';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/soluciones", label: "Soluciones" },
    { to: "/servicios", label: "Servicios" },
    { to: "/recursos", label: "Recursos" },
    { to: "/nosotros", label: "Nosotros" },
  ]
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-dark text-white shadow z-50">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </Link>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Navegación (escondida en móviles) */}
          <nav className="hidden lg:flex gap-6 items-center font-semibold">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `pb-1 transition-transform duration-300 ease-in-out border-b-2 transform ${
                    isActive
                      ? "text-primary border-primary scale-105"
                      : "text-white/90 border-transparent hover:text-primary hover:border-primary hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Botón contacto (escondido en móviles) */}
          <NavLink
            to="/contacto"
            className="hidden lg:inline-block bg-accent text-white font-bold py-2 px-4 rounded-full shadow hover:brightness-105 transition"
          >
            Contáctanos
          </NavLink>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="lg:hidden bg-dark text-white px-4 pb-4">
            <nav className="flex flex-col gap-3 mt-2 font-medium">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="border-b border-white/10 pb-2 hover:text-primary transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}

              <NavLink
                to="/contacto"
                className="mt-3 bg-accent text-white text-center font-bold py-2 px-4 rounded-full shadow hover:brightness-105 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contáctanos
              </NavLink>
            </nav>
          </div>
        )}
      </header>


      {/* Contenido principal */}
      <main className="flex-1 ">
        <div className=" mx-auto ">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      
      <footer className="bg-dark text-white py-12 mt-12">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo */}
            <div className="flex items-start">
              <img src={logoSvg} alt="Logo starts" className="h-34 w-auto" />
            </div>

            {/* Oficinas */}
            <div>
              <p className="font-bold text-primary mb-4">Nuestras oficinas</p>
              <p>Chile - Ahumada 254, oficina 806 - Santiago de Chile</p>
            </div>

            {/* Servicios */}
            <div>
              <p className="text-primary font-bold mb-4">Servicios</p>
              <ul className="space-y-2">
                <li><a href="/automatizacionymigracion" className="hover:text-primary transition">Automatización y migración a la nube</a></li>
                <li><a href="/inteligencia" className="hover:text-primary transition">Inteligencia de datos y analítica en la nube</a></li>
                <li><a href="/inteligeniaArtificial" className="hover:text-primary transition">Inteligencia artificial y machine learning</a></li>
                <li><a href="/infraestructura" className="hover:text-primary transition">Infraestructura multicloud flexible</a></li>
                <li><a href="/solucionesempresariales" className="hover:text-primary transition">Soluciones empresariales integradas</a></li>
                <li><a href="/monitoreo" className="hover:text-primary transition">Monitoreo industrial en tiempo real</a></li>
              </ul>
            </div>

            {/* Acerca de nosotros + botón */}
            <div className="flex flex-col gap-4">
              {/* <div>
                <p className="text-primary font-bold mb-4">Acerca de nosotros</p>
                <ul className="space-y-2">
                  <li><a href="/nosotros" className="hover:text-primary transition">Conoce al equipo</a></li>
                  <li><a href="/alianzas" className="hover:text-primary transition">Alianzas</a></li>
                  <li><a href="/oficinas" className="hover:text-primary transition">Oficinas globales</a></li>
                </ul>
              </div> */}
              <a
                href="/contacto"
                className="bg-accent text-white font-bold py-2 px-5 rounded-full shadow hover:brightness-105 transition w-fit"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-white/70">
            © {new Date().getFullYear()} starts.cl - Todos los derechos reservados
          </div>
        </div>
      </footer>




    </div>
  );
}

export default Layout;
