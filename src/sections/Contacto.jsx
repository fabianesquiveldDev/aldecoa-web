"use client";
import { useState } from "react";
import site from "../data/site.json";
import servicesData from "../data/services.json";

export default function Contacto() {
  const contact = site.contact;
  const social = site.social;

  const [search, setSearch] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarWhatsApp = (e) => {
    // Prevenimos el submit nativo del form
     e.preventDefault();

      const texto = `
      Hola, megustaría más información sobre su servicio de ${form.servicio}.

      Detalles:
      Nombre: ${form.nombre}
      Empresa: ${form.empresa}
      Servicio: ${form.servicio}

      Mensaje:
      ${form.mensaje}
          `.trim();

          const url = `https://api.whatsapp.com/send?phone=${contact.phone_main}&text=${encodeURIComponent(texto)}`;
          window.open(url, "_blank");
   };

  const services = servicesData.servicios.map((servicio) => ({
    id_seccion: servicio.id_seccion,
    title: servicio.nombreSeccion,
    icon: servicio.icon,
    slug: servicio.slug,
  }));

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="contacto" className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* ── TEXTO ── */}
          <div>
            <h2 className="text-5xl font-black font-headline text-white mb-8 leading-none tracking-tighter">
              ¿LISTO PARA QUE TU MARCA ESTÉ EN MOVIMIENTO?
            </h2>

            <p className="text-on-background/70 text-xl mb-12">
              Hablemos de tu próximo gran proyecto. Estamos listos para
              desplegar nuestra estrategia.
            </p>

            {/* Contacto rápido */}
            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="material-symbols-outlined text-red-600 group-hover:text-white">
                    email
                  </span>
                </div>
                <span className="text-white font-bold tracking-widest text-sm">
                  {contact.email}
                </span>
              </div>

              {/* Teléfono principal */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="material-symbols-outlined text-red-600 group-hover:text-white">
                    call
                  </span>
                </div>
                <span className="text-white font-bold tracking-widest text-sm">
                  {contact.phone_main}
                </span>
              </div>

              {/* Teléfono secundario */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="material-symbols-outlined text-red-600 group-hover:text-white">
                    call
                  </span>
                </div>
                <span className="text-white font-bold tracking-widest text-sm">
                  {contact.phone_secondary}
                </span>
              </div>

              {/* Redes sociales */}
              <div className="flex gap-4 pt-4">

                {/* TikTok */}
                <a
                  href="#"
                  className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.862V14.1a5.109 5.109 0 1 1-5.109-5.109c.178 0 .355.01.528.03v2.57a2.54 2.54 0 1 0 2.54 2.54V0h2.54a4.79 4.79 0 0 0 3.27 4.59v2.096z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/${social.facebook}`}
                  className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99h-2.5V12h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* ── FORMULARIO ── */}
          <div className="bg-surface-container-high p-12">

            {/* onSubmit aquí para capturar el enter y el click del botón */}
            <form className="space-y-6" onSubmit={enviarWhatsApp}>

              {/* Fila nombre / empresa */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                    Nombre
                  </label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors text-white py-3 px-4 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                    Empresa
                  </label>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors text-white py-3 px-4 outline-none"
                  />
                </div>

              </div>

              {/* Servicio — custom searchable select */}
              <div className="space-y-2 relative">
                <label className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                  Servicio de interés
                </label>

                <input
                  type="text"
                  placeholder="Selecciona o escribe un servicio"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    // Sincronizamos con el form para que llegue al mensaje de WhatsApp
                    setForm((prev) => ({ ...prev, servicio: e.target.value }));
                    setShowOptions(true);
                  }}
                  onFocus={() => setShowOptions(true)}
                  onBlur={() => setTimeout(() => setShowOptions(false), 150)}
                  className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors text-white py-3 px-4 outline-none"
                />

                {showOptions && (
                  <div className="absolute w-full bg-surface-container-high border border-outline-variant mt-1 max-h-60 overflow-y-auto z-50">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((service) => (
                        <div
                          key={service.slug}
                          onMouseDown={() => {
                            // onMouseDown en vez de onClick para que se ejecute antes del onBlur
                            setSearch(service.title);
                            setForm((prev) => ({ ...prev, servicio: service.title }));
                            setShowOptions(false);
                          }}
                          className="px-4 py-3 cursor-pointer hover:bg-primary-container hover:text-white transition-colors text-white"
                        >
                          {service.title}
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-white/60">
                        No se encontraron servicios
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors text-white py-3 px-4 outline-none resize-none"
                />
              </div>

              {/* Botón — type="submit" para disparar onSubmit del form */}
              <button
                type="submit"
                className="w-full bg-primary-container text-white py-6 font-black uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
              >
                Enviar mensaje
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}