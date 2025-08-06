import { Helmet } from "react-helmet-async";
import heroImg from "../assets/img-home.png";
import { FaCogs, FaCloud, FaRocket, FaBriefcase } from "react-icons/fa";
import CarruselTecnologias from "../components/TechCarousel";



function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio | starts.cl</title>
        <meta name="description" content="Innovación tecnológica hecha en Chile. Soluciones digitales con impacto." />
        <link rel="canonical" href="https://www.starts.cl/" />
      </Helmet>

      {/* Hero / Eslogan */}
      <section className="bg-dark text-white py-28 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-accent">
              Tecnología a tu medida
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl">
              En <span className="text-primary font-semibold">starts</span> ofrecemos desarrollo de software personalizado, integración de sistemas y servicios cloud adaptados a las necesidades de tu empresa.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-accent text-dark font-semibold px-8 py-3 rounded-full shadow hover:brightness-110 transition transform hover:scale-105"
            >
              Comienza tu proyecto
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Tecnología ilustración"
              className="w-full max-w-md drop-shadow-xl animate-fade-in "
            />
          </div>
        </div>
      </section>

      {/* Sección de propuesta de valor */}
      <section className="bg-white py-20 text-dark">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          ¿Por qué elegir{" "}
          <span className="text-primary relative inline-block animate-fade-in-up hover:scale-105 transition-transform duration-300">
            starts.cl
          </span>
          ?
        </h2>




        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex gap-6 items-start transition hover:scale-[1.02] duration-200">
            <FaCogs className="text-5xl text-accent shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Soluciones tecnológicas personalizadas</h3>
              <p className=" text-base text-gray-700 leading-relaxed">
                Diseñamos software a medida que se adapta a los procesos únicos de tu empresa. Ya sea una plataforma interna o una app externa, nos ajustamos a tus objetivos y estilo de trabajo.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex gap-6 items-start transition hover:scale-[1.02] duration-200">
            <FaCloud className="text-5xl text-accent shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Especialistas en cloud e integraciones</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Implementamos arquitecturas escalables en la nube, conectamos APIs y automatizamos procesos para optimizar tu operación y asegurar una infraestructura moderna y eficiente.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex gap-6 items-start transition hover:scale-[1.02] duration-200">
            <FaRocket className="text-5xl text-accent shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Innovación para tu crecimiento</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Integramos tecnologías de vanguardia como IA, automatización y análisis de datos para que tu empresa crezca de forma inteligente, competitiva y sostenible.
              </p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex gap-6 items-start transition hover:scale-[1.02] duration-200">
            <FaBriefcase className="text-5xl text-accent shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Alineados con tus objetivos de negocio</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Nuestras soluciones están enfocadas en generar impacto real. Nos comprometemos con tus metas a corto y largo plazo, priorizando resultados tangibles y retorno de inversión.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>


      <CarruselTecnologias />

      <section className="bg-white py-24 text-dark">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6">
            Innovar con <span className="text-primary">soluciones en la nube</span>
          </h2>
          <p className="text-center text-dark/80 text-base sm:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Trabaje con un experto en la nube certificado y confiable para satisfacer las necesidades de su negocio. <br />
            En <strong className="text-primary font-semibold">starts</strong> te ayudamos a crecer con...
          </p>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automatización y migración a la nube",
                desc: "Impulsa tu transición hacia la nube con soluciones automatizadas y arquitectura escalable, optimizando recursos y reduciendo riesgos operativos.",
              },
              {
                title: "Inteligencia de datos y analítica en la nube",
                desc: "Convierte grandes volúmenes de datos en información útil para decisiones estratégicas mediante plataformas analíticas avanzadas y entornos cloud seguros.",
              },
              {
                title: "Inteligencia artificial y machine learning",
                desc: "Implementa modelos predictivos personalizados que mejoran la eficiencia operativa y la experiencia del usuario con IA adaptada a tu negocio.",
              },
              {
                title: "Infraestructura multicloud flexible",
                desc: "Desarrollamos entornos híbridos y multicloud para maximizar rendimiento, disponibilidad y cumplimiento según tus necesidades técnicas y de negocio.",
              },
              {
                title: "Soluciones empresariales integradas",
                desc: "Diseñamos software a medida que se conecta con tus sistemas existentes para agilizar procesos internos, automatizar tareas y escalar tu operación.",
              },
              {
                title: "Monitoreo industrial en tiempo real",
                desc: "Creamos sistemas de software para plantas industriales con visualización en tiempo real, control de procesos, alarmas y conexión con sensores o PLCs.",
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg border border-accent/30 p-6 min-h-[260px] flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-xl duration-300"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dark/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="mt-4 inline-block text-sm font-semibold text-dark border-b-2 border-dark/40 hover:text-primary hover:border-primary transition duration-200"
                >
                  Más información
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>





    </>
  );
}
export default Home;
