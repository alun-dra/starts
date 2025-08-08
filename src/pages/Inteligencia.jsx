import { Helmet } from "react-helmet-async";
import fondo2 from "../assets/fondo2.jpg";

export default function Inteligencia() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark">
      {/* Metadatos */}
      <Helmet>
        <title>Inteligencia de datos y analítica en la nube | starts</title>
        <meta
          name="description"
          content="Convierte grandes volúmenes de datos en información estratégica mediante plataformas analíticas avanzadas y entornos cloud seguros."
        />
        <meta
          property="og:title"
          content="Inteligencia de datos y analítica en la nube | starts"
        />
        <meta
          property="og:description"
          content="Convierte datos en valor con soluciones avanzadas de analítica e inteligencia en la nube."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={fondo2} />
      </Helmet>

      {/* Hero */}
      <div
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${fondo2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center animate-fade-in">
          Inteligencia de datos y analítica en la nube
        </h1>
      </div>

      {/* Contenido */}
        <section className="py-16 px-6 max-w-1100 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Columna izquierda: título + texto */}
        <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            <span className="text-primary">Datos</span> y análisis en la nube
            </h2>

            <div className="h-1 w-16 bg-primary rounded mb-6"></div>

            <div className="space-y-5 text-dark/80 leading-relaxed">
            <p>
                Toda empresa está respaldada por datos, un recurso invaluable que debe
                aprovecharse al máximo para hacer avanzar la organización.
            </p>
            <p>
                Al reducir la dificultad y los costos para obtener información de calidad,
                potenciamos tu negocio con soluciones de datos y analítica en la nube.
            </p>
            <p>
                Nuestro equipo aporta experiencia para alinear objetivos, KPI y experiencias
                de cliente con una capa de datos moderna y gobernada.
            </p>
            <p>
                Cubrimos desde la modernización de plataformas heredadas hasta la aceleración
                de la innovación con aprendizaje automático.
            </p>
            </div>

            <a
            href="#contacto"
            className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
            >
            Conversemos
            </a>
        </div>

        {/* Columna derecha: tarjetas sin video */}
        <div className="flex flex-col gap-6">
            {/* Tarjeta 1 */}
            <div className="relative rounded-2xl shadow-lg border border-accent/30 bg-white p-6 h-48 sm:h-56 lg:h-60 overflow-hidden animate-fade-in-up [animation-delay:80ms]">
            {/* Decorativo */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10" />
            <div className="absolute right-10 top-8 h-8 w-28 rounded-full bg-primary/15" />
            {/* Contenido */}
            <div className="relative h-full flex flex-col justify-between">
                <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                    Beginner • Fundamentos
                </span>
                <h3 className="mt-3 text-xl font-bold text-dark">
                    Introducción a analítica en la nube
                </h3>
                <p className="mt-2 text-sm text-dark/70">
                    Conecta fuentes, limpia datos y crea tableros iniciales con buenas prácticas de gobernanza.
                </p>
                </div>
                <div className="text-sm text-dark/60">
                ETL/ELT · Dashboards · Gobernanza
                </div>
            </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="relative rounded-2xl shadow-lg border border-accent/30 bg-dark text-white p-6 h-48 sm:h-56 lg:h-60 overflow-hidden animate-fade-in-up [animation-delay:160ms]">
            {/* Decorativo */}
            <div className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-primary/25 blur-sm" />
            {/* Contenido */}
            <div className="relative h-full flex flex-col justify-between">
                <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white/80 bg-white/10 px-3 py-1 rounded-full">
                    Avanzado • Arquitectura
                </span>
                <h3 className="mt-3 text-xl font-bold">
                    Data Warehouse y MLOps en producción
                </h3>
                <p className="mt-2 text-sm text-white/80">
                    Modelado por capas, costos bajo control y canalización de modelos con monitoreo continuo.
                </p>
                </div>
                <div className="text-sm text-white/70">
                DWH · Lakehouse · Feature Stores · Observabilidad
                </div>
            </div>
            </div>
        </div>
        </section>



        {/* Sección: 4 pasos */}
<section className="py-20">
  <div className="max-w-[1100px] mx-auto px-6">
    {/* Título */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2">
      4 claves para impulsar tu{" "}
      <span className="text-primary">transformación digital en la nube</span>
    </h2>
    <div className="h-1 w-14 bg-primary mx-auto rounded mt-4 mb-12"></div>

    {/* Grid de pasos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Paso 1 - Descubrir */}
      <div className="text-center animate-fade-in-up">
        <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          {/* bombilla */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M9 18h6" stroke="#9D4EDD" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M10 21h4" stroke="#9D4EDD" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M12 3a6 6 0 0 0-3 11v1h6v-1a6 6 0 0 0-3-11Z" stroke="#9D4EDD" strokeWidth="1.8"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">Descubrir</h3>
        <p className="text-dark/70 leading-relaxed">
          Identifica oportunidades y retos clave que tu empresa puede resolver con soluciones en la nube.
        </p>
      </div>

      {/* Paso 2 - Planificar */}
      <div className="text-center animate-fade-in-up [animation-delay:120ms]">
        <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          {/* calendario */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="16" rx="2" stroke="#9D4EDD" strokeWidth="1.8"/>
            <path d="M3 10h18" stroke="#9D4EDD" strokeWidth="1.8"/>
            <path d="M8 3v4M16 3v4" stroke="#9D4EDD" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">Planificar</h3>
        <p className="text-dark/70 leading-relaxed">
          Diseña una hoja de ruta clara para implementar y escalar tus proyectos tecnológicos.
        </p>
      </div>

      {/* Paso 3 - Optimizar */}
      <div className="text-center animate-fade-in-up [animation-delay:240ms]">
        <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          {/* engranaje */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="#9D4EDD" strokeWidth="1.8"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .69.4 1.31 1.02 1.58z" stroke="#9D4EDD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">Optimizar</h3>
        <p className="text-dark/70 leading-relaxed">
          Mejora continuamente el rendimiento, la seguridad y la eficiencia de tus sistemas.
        </p>
      </div>

      {/* Paso 4 - Escalar */}
      <div className="text-center animate-fade-in-up [animation-delay:360ms]">
        <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          {/* flecha de crecimiento */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M3 17l6-6 4 4 8-8" stroke="#9D4EDD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 7h7v7" stroke="#9D4EDD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">Escalar</h3>
        <p className="text-dark/70 leading-relaxed">
          Lleva tus soluciones a un mayor alcance y maximiza el impacto en tu negocio.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
