// src/pages/Ia.jsx
import fondo3 from "../assets/fondo3.jpg";

import { AiOutlineRobot, AiOutlineLineChart, AiOutlineAlert } from "react-icons/ai";

function Ia() {
  return (
    <>
      
        <title>Inteligencia de Datos y Analítica en la Nube | Starts</title>
        <meta
          name="description"
          content="Optimiza tu negocio con inteligencia de datos y analítica en la nube. Descubre cómo potenciar tus operaciones con tecnología avanzada."
        />
        <meta
          name="keywords"
          content="inteligencia de datos, analítica en la nube, cloud analytics, machine learning, Starts"
        />
        <meta name="author" content="Starts" />
        <meta property="og:title" content="Inteligencia de Datos y Analítica en la Nube" />
        <meta
          property="og:description"
          content="Optimiza tu negocio con inteligencia de datos y analítica en la nube."
        />
        <meta property="og:image" content={fondo3} />
        <meta property="og:type" content="website" />
      

        {/* Hero */}
        <div
          className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${fondo3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center animate-fade-in">
            Inteligencia de datos y analítica en la nube
          </h1>
        </div>

        {/* Sección CTA IA — estilo tech/Mac */}
        <section className="relative overflow-hidden py-20">
        {/* Fondo sutil con grid + halos morados */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 opacity-[0.07]"
            style={{
                backgroundImage:
                "linear-gradient(to right, rgba(16,0,43,.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,0,43,.25) 1px, transparent 1px)",
                backgroundSize: "32px 32px"
            }}
            />
            <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-accent/50 blur-3xl" />
        </div>

        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Columna texto */}
            <div className="animate-fade-in-up">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary ring-1 ring-primary/30">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft"></span>
                IA aplicada al negocio
            </span>

            {/* Título con gradiente */}
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-dark">
                Lleva tu{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                transformación con IA
                </span>
                <br /> al siguiente nivel
            </h2>

            {/* subrayado */}
            <div className="mt-4 h-1 w-24 rounded bg-primary/80"></div>

            <p className="mt-6 text-dark/80 leading-relaxed">
                La IA no es magia: es una forma práctica de <b>ahorrar tiempo</b>, <b>tomar mejores decisiones</b> y
                <b> mejorar la experiencia</b> de tus clientes.
            </p>
            <p className="mt-3 text-dark/80 leading-relaxed">
                Te guiamos paso a paso: entendemos el problema, preparamos los datos, construimos un modelo útil,
                lo desplegamos de forma segura y medimos resultados para seguir mejorando.
            </p>

            {/* bullets */}
            <ul className="mt-6 space-y-3 text-dark/85">
                {[
                "Detecta oportunidades de automatización sin cambiar todo de golpe.",
                "Métricas claras y tableros simples para entender qué funciona.",
                "Empieza pequeño y escala cuando veas impacto real."
                ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start animate-fade-in-up" style={{ animationDelay: `${90 + i * 80}ms` }}>
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>{t}</span>
                </li>
                ))}
            </ul>

            {/* CTA glassy con halo */}
            <a
                href="/contacto"
                className="inline-block mt-8 px-6 py-3 rounded-full font-semibold text-white bg-primary hover:bg-primary/90 transition
                        shadow-[0_10px_30px_-8px_rgba(157,78,221,.55)] ring-1 ring-white/10 animate-fade-in-up [animation-delay:360ms]"
            >
                Hablar con un especialista en IA
            </a>
            </div>

            {/* Columna visual: “terminal” glass con borde neón */}
            <div className="relative animate-fade-in-up">
            {/* glow de fondo */}
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-primary/30 via-accent/50 to-primary/30 blur-2xl" />

            {/* tarjeta principal */}
            <div className="rounded-[20px] bg-white/70 backdrop-blur-xl ring-1 ring-primary/20 shadow-2xl p-6">
                {/* barra superior */}
                <div className="flex items-center gap-2 mb-5">
                <span className="h-3 w-3 rounded-full bg-primary/80" />
                <span className="h-3 w-3 rounded-full bg-primary/50" />
                <span className="h-3 w-3 rounded-full bg-primary/30" />
                <div className="ml-auto h-3 w-28 rounded bg-accent/70" />
                </div>

                {/* “líneas de código / UI” */}
                <div className="space-y-3">
                <div className="h-3 rounded bg-dark/10"></div>
                <div className="h-3 rounded bg-dark/10 w-11/12"></div>
                <div className="h-3 rounded bg-dark/10 w-9/12"></div>
                <div className="mt-2 h-2 rounded bg-primary/20 w-1/2"></div>
                </div>

                {/* chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                {["Automatización", "Predicción", "Métricas claras"].map((c) => (
                    <span
                    key={c}
                    className="px-3 py-1 text-sm rounded-full bg-accent/60 text-dark/90 ring-1 ring-primary/20"
                    >
                    {c}
                    </span>
                ))}
                </div>
            </div>

            {/* tarjetita flotante tipo widget */}
            <div className="hidden sm:block absolute -bottom-7 -right-7 w-[78%] rounded-2xl bg-white/60 backdrop-blur-md
                            ring-1 ring-primary/15 shadow-xl p-5 animate-fade-in-up [animation-delay:160ms]">
                <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/20 grid place-items-center">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1">
                    <div className="h-3 rounded bg-dark/10 w-3/4 mb-2"></div>
                    <div className="h-3 rounded bg-dark/10 w-1/2"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Sección Casos de Uso de IA */}
        <section className="relative py-20 overflow-hidden">
        {/* Fondo tech con gradientes suaves */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/40 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-dark">
            Casos de uso{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                de IA en la nube
            </span>
            </h2>
            <p className="mt-4 text-dark/70 max-w-2xl mx-auto">
            Descubre cómo aplicamos inteligencia artificial y aprendizaje automático para resolver problemas reales,
            optimizar procesos y generar valor de negocio.
            </p>

            {/* Tarjetas */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                icon: <AiOutlineRobot className="text-primary text-5xl" />,
                title: "Asistentes virtuales inteligentes",
                text: "Automatiza la atención al cliente con chatbots y asistentes que aprenden de cada interacción y mejoran con el tiempo."
                },
                {
                icon: <AiOutlineLineChart className="text-primary text-5xl" />,
                title: "Predicción de demanda",
                text: "Usa modelos predictivos para anticipar tendencias de ventas y optimizar inventarios de forma proactiva."
                },
                {
                icon: <AiOutlineAlert className="text-primary text-5xl" />,
                title: "Detección de anomalías",
                text: "Identifica comportamientos inusuales en transacciones, redes o sensores antes de que se conviertan en problemas."
                }
            ].map((card, i) => (
                <div
                key={i}
                className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur-xl ring-1 ring-primary/20 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
                >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

                <div className="relative z-10">
                    <div className="mb-4 flex justify-center">{card.icon}</div>
                    <h3 className="text-xl font-bold text-dark mb-2">{card.title}</h3>
                    <p className="text-dark/70 text-sm leading-relaxed">{card.text}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

    </>
  );
}

export default Ia;
