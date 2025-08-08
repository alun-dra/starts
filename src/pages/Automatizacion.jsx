import { Helmet } from "react-helmet-async";
import fondo1 from "../assets/fondo1.jpg";

const SITE_URL = import.meta.env.VITE_SITE_URL || "";
const PAGE_PATH = "/automatizacionymigracion";
const PAGE_URL  = SITE_URL ? `${SITE_URL}${PAGE_PATH}` : undefined;
const OG_IMAGE  = SITE_URL ? `${SITE_URL}/og/automatizacion.jpg` : undefined;

export default function Automatizacion() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark">
      {/* Metadatos */}
      <Helmet>
        <title>Automatización y Migración a la Nube | starts</title>

        {/* SEO básico */}
        <meta
          name="description"
          content="Descubre cómo optimizar procesos y migrar tu infraestructura a la nube de forma segura, escalable y eficiente con las soluciones de starts."
        />
        <meta name="robots" content="index,follow" />
        {PAGE_URL && <link rel="canonical" href={PAGE_URL} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        {PAGE_URL && <meta property="og:url" content={PAGE_URL} />}
        <meta property="og:site_name" content="starts" />
        <meta property="og:title" content="Automatización y Migración a la Nube | starts" />
        <meta
          property="og:description"
          content="Impulsa tu negocio con automatización inteligente y migración a la nube. Seguridad, escalabilidad y eficiencia garantizadas."
        />
        {OG_IMAGE && <meta property="og:image" content={OG_IMAGE} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automatización y Migración a la Nube | starts" />
        <meta
          name="twitter:description"
          content="Automatización inteligente y migración a la nube: seguridad, escalabilidad y eficiencia."
        />
        {OG_IMAGE && <meta name="twitter:image" content={OG_IMAGE} />}
      </Helmet>

      {/* Hero */}
      <div
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${fondo1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center animate-fade-in">
          Automatización y migración a la nube
        </h1>
      </div>

      {/* Tarjetas informativas (2) */}
      <section className="py-16 px-6  max-w-1100 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-primary/20 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-primary mb-4">Automatización</h2>
          <p className="text-dark/80 leading-relaxed mb-4">
            Libera a tu equipo de tareas manuales y repetitivas gracias a soluciones
            de automatización diseñadas a medida. Implementamos flujos de trabajo
            inteligentes que integran tus sistemas, optimizan tiempos de respuesta
            y reducen errores humanos.
          </p>
          <p className="text-dark/80 leading-relaxed mb-4">
            Nuestras soluciones aprovechan lo mejor de las plataformas cloud y on‑premise,
            permitiéndote escalar procesos y mantener un control centralizado en tiempo real.
          </p>
          <a
            href="#contacto"
            className="inline-block mt-2 px-5 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Hablemos
          </a>
        </div>

        <div className="bg-white border border-primary/20 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up [animation-delay:120ms]">
          <h2 className="text-2xl font-bold text-primary mb-4">Migración a la nube</h2>
          <p className="text-dark/80 leading-relaxed mb-4">
            Lleva tu infraestructura a un entorno seguro, escalable y preparado para el futuro.
            Te guiamos desde el assessment hasta la puesta en producción, garantizando continuidad
            operativa y un retorno rápido de la inversión.
          </p>
          <p className="text-dark/80 leading-relaxed mb-4">
            Trabajamos con arquitecturas multi-cloud e híbridas para que la transición sea
            transparente para tus usuarios y cumpla con tus requisitos de negocio.
          </p>
          <br />
         
          <a
            href="#contacto"
            className="inline-block mt-2 px-5 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Hablemos
          </a>
        </div>
      </section>

      {/* Tarjetas específicas (3) — sin imágenes */}
      <section className="pb-16 px-6 max-w-1100 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up [animation-delay:0ms]">
          <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">1</span>
          <h3 className="text-lg font-bold text-dark mb-3">Viaje a la nube</h3>
          <p className="text-dark/70 leading-relaxed">
            Planifique su camino con un roadmap claro: assessment, priorización de cargas,
            quick wins y automatización desde el día uno.
          </p>
          <div className="mt-6 h-1 w-12 mx-auto bg-primary/30 rounded-full group-hover:w-16 transition-all"></div>
        </div>

        <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up [animation-delay:120ms]">
          <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">2</span>
          <h3 className="text-lg font-bold text-dark mb-3">Consultoría en la nube</h3>
          <p className="text-dark/70 leading-relaxed">
            Talleres, buenas prácticas y arquitectura de referencia para seguridad, costos,
            observabilidad y desempeño antes de migrar.
          </p>
          <div className="mt-6 h-1 w-12 mx-auto bg-primary/30 rounded-full group-hover:w-16 transition-all"></div>
        </div>

        <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up [animation-delay:240ms]">
          <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">3</span>
          <h3 className="text-lg font-bold text-dark mb-3">Migración a la nube</h3>
          <p className="text-dark/70 leading-relaxed">
            Plan y ejecución: rehost, replatform o refactor según el caso. Cero sorpresas,
            métricas de éxito y go-live asistido.
            
          </p>
          
          <div className="mt-6 h-1 w-12 mx-auto bg-primary/30 rounded-full group-hover:w-16 transition-all"></div>
        </div>
      </section>
    </div>
  );
}
