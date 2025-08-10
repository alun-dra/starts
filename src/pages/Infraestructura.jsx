// src/pages/Infraestructura.jsx
import { Helmet } from "react-helmet-async";
import fondo4 from "../assets/fondo4.jpg";

function Infraestructura() {
  return (
    <>
      <Helmet>
        <title>Infraestructura multicloud flexible | starts</title>
        <meta
          name="description"
          content="Diseñamos y operamos infraestructuras multicloud flexibles y seguras, combinando lo mejor de cada proveedor para maximizar rendimiento, disponibilidad y control de costos."
        />
        <meta
          name="keywords"
          content="multicloud, infraestructura en la nube, híbrida, alta disponibilidad, costos, seguridad"
        />
        <meta name="author" content="starts" />
        <meta property="og:title" content="Infraestructura multicloud flexible | starts" />
        <meta
          property="og:description"
          content="Arquitecturas híbridas y multicloud para escalar con seguridad, rendimiento y eficiencia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={fondo4} />
      </Helmet>

      {/* Hero */}
      <div
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${fondo4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative z-10 text-center text-white font-bold animate-fade-in
                     text-3xl sm:text-4xl md:text-5xl"
        >
          Infraestructura multicloud flexible
        </h1>
      </div>

      <section className="py-16">
        {/* CAMBIO: en desktop, centrar verticalmente los items */}
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
            <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary ring-1 ring-primary/30">
                Concepto
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-dark">
                ¿Qué es una infraestructura <span className="text-primary">multicloud</span>?
            </h2>
            <div className="mt-3 h-1 w-20 bg-primary/80 rounded" />
            <p className="mt-6 text-dark/80 leading-relaxed">
                Es una estrategia donde tu negocio utiliza servicios de{" "}
                <strong>más de un proveedor de nube</strong> (y opcionalmente tu
                centro de datos) para aprovechar lo mejor de cada uno. Así logras{" "}
                <strong>alta disponibilidad</strong>,{" "}
                <strong>resiliencia</strong> y <strong>libertad de elección</strong>{" "}
                sin quedarte atado a una sola plataforma.
            </p>
            <ul className="mt-6 space-y-3 text-dark/85">
                <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary inline-block" />
                Portabilidad de cargas entre nubes y on‑premise.
                </li>
                <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary inline-block" />
                Mejor tiempo de disponibilidad y continuidad de negocio.
                </li>
                <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary inline-block" />
                Optimización de costos eligiendo el servicio más conveniente.
                </li>
            </ul>
            </div>

            {/* Panel visual */}
            {/* CAMBIO: self-center para centrar el bloque dentro de su celda; ancho controlado */}
            <div className="relative animate-fade-in-up flex items-center justify-center self-center">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/40 to-primary/20 blur-2xl" />
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-primary/15 shadow-xl p-6 w-[520px] max-w-full">
                <div className="flex items-center gap-2 mb-5">
                <span className="h-3 w-3 rounded-full bg-primary/80" />
                <span className="h-3 w-3 rounded-full bg-primary/50" />
                <span className="h-3 w-3 rounded-full bg-primary/30" />
                <div className="ml-auto h-3 w-24 rounded bg-accent/70" />
                </div>
                <div className="space-y-2">
                <div className="h-3 rounded bg-dark/10" />
                <div className="h-3 rounded bg-dark/10 w-5/6 mx-auto" />
                <div className="h-3 rounded bg-dark/10 w-3/4 mx-auto" />
                </div>
                {/* chips centrados + entrada escalonada opcional */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["AWS", "Azure", "GCP", "On‑prem"].map((tag, i) => (
                    <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-accent/60 text-dark/90 ring-1 ring-primary/15 animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            </div>
        </div>
      </section>


      {/* ¿Cómo funciona e integración? */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="group rounded-2xl bg-white p-6 shadow-md ring-1 ring-primary/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up">
              <h3 className="text-xl font-bold text-dark mb-2">
                1) Capa común
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Definimos <strong>bases compartidas</strong> para todas las nubes:
                redes, identidad (SSO), seguridad, observabilidad y políticas.
                Esta base te permite moverte sin fricción.
              </p>
              <div className="mt-4 h-1 w-12 bg-primary/50 rounded" />
            </div>

            {/* Paso 2 */}
            <div
              className="group rounded-2xl bg-white p-6 shadow-md ring-1 ring-primary/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "120ms" }}
            >
              <h3 className="text-xl font-bold text-dark mb-2">
                2) Capa de ejecución
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Estándares de <strong>despliegue</strong> (IaC), contenedores y
                orquestación (Kubernetes), pipelines y gestión de secretos:
                mismos flujos en cualquier nube.
              </p>
              <div className="mt-4 h-1 w-12 bg-primary/50 rounded" />
            </div>

            {/* Paso 3 */}
            <div
              className="group rounded-2xl bg-white p-6 shadow-md ring-1 ring-primary/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <h3 className="text-xl font-bold text-dark mb-2">
                3) Integración y gobierno
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Conectamos tus sistemas (on‑prem y cloud), definimos{" "}
                <strong>guardrails</strong> de seguridad/costos y dejamos tableros
                de monitoreo con <strong>métricas claras</strong>.
              </p>
              <div className="mt-4 h-1 w-12 bg-primary/50 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center">
            ¿Qué ofrecemos?
          </h2>
          <div className="mt-3 h-1 w-20 bg-primary/80 rounded mx-auto" />
          <p className="mt-4 text-dark/70 text-center max-w-2xl mx-auto">
            Paquetes y servicios que te permiten adoptar multicloud sin dolores,
            con resultados medibles y soporte continuo.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Arquitectura y roadmap",
                desc: "Diseño de referencia, casos de uso, quick wins y plan de adopción por etapas.",
              },
              {
                title: "Implementación IaC",
                desc: "Infraestructura como código, redes, identidades y seguridad listas para escalar.",
              },
              {
                title: "Observabilidad 360°",
                desc: "Logs, métricas y trazas unificadas con tableros y alertas para todas tus nubes.",
              },
              {
                title: "Gobierno y costos",
                desc: "Guardrails, etiquetas, presupuestos y recomendaciones continuas de ahorro.",
              },
              {
                title: "Continuidad y DR",
                desc: "Estrategias multi‑región / multi‑cloud y pruebas de recuperación ante desastres.",
              },
              {
                title: "Soporte y evolución",
                desc: "Acompañamiento operativo, mejoras iterativas y transferencia de conocimiento.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white border border-primary/20 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="text-lg font-bold text-primary mb-2">
                  {c.title}
                </h3>
                <p className="text-dark/75 leading-relaxed">{c.desc}</p>
                <div className="mt-6 h-1 w-10 bg-primary/40 rounded group-hover:w-14 transition-all" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contacto"
              className="inline-block px-6 py-3 rounded-full font-semibold bg-primary text-white hover:bg-primary/90 transition shadow-[0_10px_30px_-8px_rgba(157,78,221,.55)]"
            >
              Conversemos sobre tu estrategia multicloud
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infraestructura;
