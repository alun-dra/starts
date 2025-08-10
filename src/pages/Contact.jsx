// src/pages/Contact.jsx
import { useState } from "react";

import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!form.apellido.trim()) e.apellido = "Ingresa tu apellido";
    if (!form.email.trim()) {
      e.email = "Ingresa tu correo";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Correo inválido";
    }
    if (!form.mensaje.trim() || form.mensaje.length < 10)
      e.mensaje = "Cuéntanos un poco más (10+ caracteres)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ nombre: "", apellido: "", email: "", mensaje: "" });
    setErrors({});
  };

  const onChange = (ev) =>
    setForm((f) => ({ ...f, [ev.target.name]: ev.target.value }));

  return (
    <>
      
        {/* Básico */}
        <title>Contáctanos | Starts</title>
        <meta
          name="description"
          content="Hablemos sobre tu proyecto. Déjanos tu nombre, correo y un mensaje; te responderemos muy pronto."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://starts.cl/contacto" />

        {/* Open Graph */}
        <meta property="og:title" content="Contáctanos | Starts" />
        <meta
          property="og:description"
          content="¿Conversemos? Cuéntanos qué necesitas y te contactamos a la brevedad."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starts.cl/contacto" />
        {/* Cambia por una URL absoluta a tu imagen de preview */}
        <meta property="og:image" content="https://starts.cl/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contáctanos | Starts" />
        <meta
          name="twitter:description"
          content="¿Conversemos? Cuéntanos qué necesitas y te contactamos a la brevedad."
        />
        <meta name="twitter:image" content="https://starts.cl/logo.png" />

        {/* JSON‑LD: ContactPage + puntos de contacto */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contáctanos | Starts",
            url: "https://starts.cl/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Starts",
              url: "https://starts.cl",
              logo: "https://starts.cl/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "contacto@starts.cl",
                  telephone: "+56-2-0000-0000",
                  areaServed: "CL",
                  availableLanguage: ["es"]
                }
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ahumada 254, oficina 806",
                addressLocality: "Santiago",
                addressCountry: "CL"
              }
            }
          })}
        </script>
      

      {/* Hero */}
      <header className="relative bg-dark text-white overflow-hidden">
        {/* blobs decorativos sin empujar layout */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[12%] -left-[10%] h-72 w-72 rounded-full bg-primary/25 blur-[90px]" />
          <div className="absolute -bottom-[12%] -right-[10%] h-72 w-72 rounded-full bg-accent/25 blur-[90px]" />
        </div>

        <div className="max-w-[1100px] mx-auto  px-6 py-14 sm:py-16 md:py-18 lg:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl mt-16 md:text-5xl font-extrabold tracking-tight leading-tight animate-fade-in">
            ¿Conversemos?
          </h1>
          <p className="mt-2 sm:mt-3 text-white/80 animate-fade-in-up">
            Cuéntanos qué necesitas y te contactamos a la brevedad.
          </p>
        </div>
      </header>

      {/* Contenido */}
      <main className="pt-12 md:pt-16 pb-16">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Formulario */}
          <section className="relative animate-fade-in-up overflow-hidden h-full">
            {/* brillo decorativo encapsulado para que no desborde */}
            <div className="absolute -inset-4 md:-inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/40 to-primary/20 blur-2xl" />
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-primary/15 shadow-xl p-6 sm:p-8 flex flex-col"
              noValidate
            >
              <div>
                <h2 className="text-xl font-bold text-dark mb-1">Formulario</h2>
                <p className="text-dark/70 mb-6">
                  Responderemos en menos de 1 día hábil.
                </p>

                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div className="relative">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={form.nombre}
                      onChange={onChange}
                      placeholder=" "
                      className={`peer w-full rounded-xl border bg-white/80 px-4 py-3 outline-none transition ${
                        errors.nombre
                          ? "border-red-400 focus:border-red-500"
                          : "border-primary/20 focus:border-primary"
                      }`}
                      aria-invalid={!!errors.nombre}
                      aria-describedby="err-nombre"
                    />
                    <label
                      htmlFor="nombre"
                      className="pointer-events-none absolute left-3 top-3 px-1 text-dark/60 transition
                                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary
                                 peer-[&:not(:placeholder-shown)]:-top-3.5 peer-[&:not(:placeholder-shown)]:text-xs
                                 bg-white rounded"
                    >
                      Nombre
                    </label>
                    {errors.nombre && (
                      <p id="err-nombre" className="mt-1 text-sm text-red-500">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Apellido */}
                  <div className="relative">
                    <input
                      type="text"
                      name="apellido"
                      id="apellido"
                      value={form.apellido}
                      onChange={onChange}
                      placeholder=" "
                      className={`peer w-full rounded-xl border bg-white/80 px-4 py-3 outline-none transition ${
                        errors.apellido
                          ? "border-red-400 focus:border-red-500"
                          : "border-primary/20 focus:border-primary"
                      }`}
                      aria-invalid={!!errors.apellido}
                      aria-describedby="err-apellido"
                    />
                    <label
                      htmlFor="apellido"
                      className="pointer-events-none absolute left-3 top-3 px-1 text-dark/60 transition
                                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary
                                 peer-[&:not(:placeholder-shown)]:-top-3.5 peer-[&:not(:placeholder-shown)]:text-xs
                                 bg-white rounded"
                    >
                      Apellido
                    </label>
                    {errors.apellido && (
                      <p id="err-apellido" className="mt-1 text-sm text-red-500">
                        {errors.apellido}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="relative mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder=" "
                    className={`peer w-full rounded-xl border bg-white/80 px-4 py-3 outline-none transition ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-primary/20 focus:border-primary"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby="err-email"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-3 top-3 px-1 text-dark/60 transition
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                               peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary
                               peer-[&:not(:placeholder-shown)]:-top-3.5 peer-[&:not(:placeholder-shown)]:text-xs
                               bg-white rounded"
                  >
                    Correo electrónico
                  </label>
                  {errors.email && (
                    <p id="err-email" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="relative mt-5">
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={onChange}
                    placeholder=" "
                    className={`peer w-full rounded-xl border bg-white/80 px-4 py-3 outline-none transition resize-y ${
                      errors.mensaje
                        ? "border-red-400 focus:border-red-500"
                        : "border-primary/20 focus:border-primary"
                    }`}
                    aria-invalid={!!errors.mensaje}
                    aria-describedby="err-mensaje"
                  />
                  <label
                    htmlFor="mensaje"
                    className="pointer-events-none absolute left-3 top-3 px-1 text-dark/60 transition
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                               peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary
                               peer-[&:not(:placeholder-shown)]:-top-3.5 peer-[&:not(:placeholder-shown)]:text-xs
                               bg-white rounded"
                  >
                    Mensaje
                  </label>
                  {errors.mensaje && (
                    <p id="err-mensaje" className="mt-1 text-sm text-red-500">
                      {errors.mensaje}
                    </p>
                  )}
                </div>
              </div>

              {/* Botón + feedback al final */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(157,78,221,.55)]
                             hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-70"
                >
                  <FiSend className={`${sending ? "animate-pulse" : ""}`} />
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </button>

                {sent && (
                  <span
                    className="text-sm text-dark/70 animate-fade-in"
                    aria-live="polite"
                  >
                    ¡Gracias! Tu mensaje fue recibido. 👋
                  </span>
                )}
              </div>
            </form>
          </section>

          {/* Lateral */}
          <aside className="animate-fade-in-up [animation-delay:120ms] h-full">
            <div className="h-full rounded-3xl border border-primary/20 p-6 shadow-lg bg-white flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary">También puedes</h3>
                <p className="text-dark/70 mt-2">
                  Si prefieres, escríbenos o llámanos directamente:
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FiMail className="text-primary" />
                  </div>
                  <a
                    href="mailto:contacto@starts.cl"
                    className="text-dark/90 hover:text-primary transition"
                  >
                    contacto@starts.cl
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FiPhone className="text-primary" />
                  </div>
                  <a
                    href="tel:+56200000000"
                    className="text-dark/90 hover:text-primary transition"
                  >
                    +56 2 0000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FiMapPin className="text-primary" />
                  </div>
                  <span className="text-dark/90">
                    Chile - Ahumada 254, oficina 806 - Santiago de Chile
                  </span>
                </li>
              </ul>

              {/* CTA pegado abajo para que ambas tarjetas se vean del mismo alto */}
              <div className="mt-auto rounded-xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 p-5">
                <p className="text-sm text-dark/80">
                  ¿Tienes un proyecto urgente? Agenda una llamada de 15 min y te
                  guiamos en el siguiente paso.
                </p>
                <a
                  href="#contacto"
                  className="mt-4 inline-block rounded-full bg-dark px-5 py-2 text-white font-semibold hover:bg-dark/90 transition"
                >
                  Agendar llamada
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Contact;
