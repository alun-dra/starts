// src/pages/Soluciones.jsx

import fondo5 from "../assets/fondo5.jpg";

function Soluciones() {
  return (
    <>
      
        <title>Soluciones empresariales integradas | starts</title>
        <meta
          name="description"
          content="Diseñamos software a medida que se conecta con tus sistemas existentes para agilizar procesos internos, automatizar tareas y escalar tu operación."
        />
        <meta
          name="keywords"
          content="integraciones, software a medida, automatización, APIs, microservicios, ERP, CRM"
        />
        <meta name="author" content="starts" />
        <meta
          property="og:title"
          content="Soluciones empresariales integradas | starts"
        />
        <meta
          property="og:description"
          content="Integramos tus sistemas, automatizamos procesos y construimos software a medida para que tu operación escale con eficiencia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={fondo5} />
      

      {/* Hero */}
      <div
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${fondo5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-center text-white font-bold animate-fade-in text-3xl sm:text-4xl md:text-5xl">
          Soluciones empresariales integradas
        </h1>
      </div>

      {/* Descripción principal */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary ring-1 ring-primary/30">
              Qué hacemos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-dark">
              Software a medida que{" "}
              <span className="text-primary">conecta tu operación</span>
            </h2>
            <div className="mt-3 h-1 w-20 bg-primary/80 rounded" />
            <p className="mt-6 text-dark/80 leading-relaxed">
              Diseñamos y construimos soluciones que se integran con tus
              sistemas actuales (ERP, CRM, e‑commerce, BI y más) para{" "}
              <strong>agilizar procesos internos</strong>,{" "}
              <strong>automatizar tareas</strong> y{" "}
              <strong>escalar tu operación</strong> sin fricciones.
            </p>
            <ul className="mt-6 space-y-3 text-dark/85">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary inline-block" />
                Nos conectamos a lo que ya usas: SAP, Salesforce, Dynamics,
                Magento, HubSpot, entre otros.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary inline-block" />
                Menos pasos manuales y menos errores con flujos automatizados.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary inline-block" />
                Entregas rápidas con enfoque iterativo y medible.
              </li>
            </ul>
            <a
              href="/contacto"
              className="inline-block mt-8 px-6 py-3 rounded-full font-semibold bg-primary text-white hover:bg-primary/90 transition shadow-[0_10px_30px_-8px_rgba(157,78,221,.55)]"
            >
              Conversemos tu caso
            </a>
          </div>

          {/* Panel visual (glassmorphism) */}
          <div className="relative animate-fade-in-up self-center">
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
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["ERP", "CRM", "E‑commerce", "BI"].map((tag, i) => (
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

      {/* Features / Qué entregamos */}
      <section className="pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-dark text-center">
            ¿Qué entregamos?
          </h3>
          <div className="mt-3 h-1 w-20 bg-primary/80 rounded mx-auto" />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integraciones seguras",
                desc: "Conectores y ETL/ELT que sincronizan datos entre tus plataformas con trazabilidad.",
              },
              {
                title: "Automatización de procesos",
                desc: "Workflows orquestados que reducen tiempos y errores en áreas clave como ventas, finanzas y operaciones.",
              },
              {
                title: "APIs & Microservicios",
                desc: "Capas de servicios escalables para exponer, componer o extender capacidades de tu negocio.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="group rounded-2xl bg-white border border-primary/20 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h4 className="text-lg font-bold text-primary mb-2">
                  {c.title}
                </h4>
                <p className="text-dark/75 leading-relaxed">{c.desc}</p>
                <div className="mt-6 h-1 w-10 bg-primary/40 rounded group-hover:w-14 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Soluciones;
