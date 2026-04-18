// contacto.jsx
"use client";
import { useState, useEffect } from "react";
import site from "../data/site.json";
import servicesData from "../data/services.json";

const INPUT_CLS = "w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors text-white py-3 px-4 outline-none text-sm md:text-base";

const ContactIcon = ({ icon, href, children }) => {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 md:gap-6 group">
      <div className="w-10 h-10 md:w-12 md:h-12 border border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors shrink-0">
        {icon}
      </div>
      {children}
    </Wrapper>
  );
};

// ↓ redes con aria-label descriptivo para cada una
const SOCIALS = [
  { href: "#", label: "TikTok de ALDECOA", svg: "M19.589 6.686a4.793 4.793 0 0 1-3.77-1.862V14.1a5.109 5.109 0 1 1-5.109-5.109c.178 0 .355.01.528.03v2.57a2.54 2.54 0 1 0 2.54 2.54V0h2.54a4.79 4.79 0 0 0 3.27 4.59v2.096z" },
  { href: "#", label: "Instagram de ALDECOA", svg: "M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" },
  { label: "Facebook de ALDECOA", svg: "M22 12a10 10 0 1 0-11.56 9.87v-6.99h-2.5V12h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12z" },
];

function formatPhone(phone) {
  const local = phone.replace(/^52/, "");
  return local.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

export default function Contacto() {
  const { contact, social } = site;
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", servicio: "", mensaje: "" });

  useEffect(() => setMounted(true), []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const texto = `Hola, me gustaría más información sobre su servicio de ${form.servicio}.\n\nNombre: ${form.nombre}\nEmpresa: ${form.empresa}\nServicio: ${form.servicio}\n\nMensaje:\n${form.mensaje}`.trim();
    window.open(`https://api.whatsapp.com/send?phone=${contact.phone_main}&text=${encodeURIComponent(texto)}`, "_blank");
  };

  const services = servicesData.servicios.map(({ id_seccion, nombreSeccion: title, icon, slug }) => ({ id_seccion, title, icon, slug }));
  const filteredServices = services.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));

  const Label = ({ text, htmlFor }) => (
    // ↓ htmlFor vincula el label al input — crítico para accesibilidad y SEO
    <label htmlFor={htmlFor} className="text-[10px] font-black text-red-600 uppercase tracking-widest">
      {text}
    </label>
  );

  return (
    <section
      id={site.navigation[6].href.substring(1)}
      aria-labelledby="contacto-titulo"
      className="py-16 md:py-24 bg-surface-container-lowest"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20">

          {/* TEXTO */}
          <div>
            <h2
              id="contacto-titulo"
              className="text-3xl sm:text-4xl md:text-5xl font-black font-headline text-white mb-5 md:mb-8 leading-none tracking-tighter"
            >
              ¿LISTO PARA QUE TU MARCA ESTÉ EN MOVIMIENTO?
            </h2>
            <p className="text-on-background/70 text-base md:text-xl mb-8 md:mb-12">
              Hablemos de tu próximo gran proyecto. Estamos listos para desplegar nuestra estrategia.
            </p>

            <address className="not-italic space-y-4 md:space-y-6">
              {/* ↓ address es el elemento semántico correcto para datos de contacto */}
              {[
                {
                  icon: "email",
                  text: contact.email,
                  // ↓ links en email y teléfono son indexables por Google
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: "call",
                  text: formatPhone(contact.phone_main),
                  href: `tel:+52${contact.phone_main}`,
                },
                {
                  icon: "call",
                  text: formatPhone(contact.phone_secondary),
                  href: `tel:+52${contact.phone_secondary}`,
                },
              ].map(({ icon, text, href }) => (
                <ContactIcon key={text} href={href} icon={
                  <span aria-hidden="true" className="material-symbols-outlined text-red-600 group-hover:text-white text-xl md:text-2xl">
                    {icon}
                  </span>
                }>
                  <span className="text-white font-bold tracking-widest text-xs md:text-sm break-all">
                    {text}
                  </span>
                </ContactIcon>
              ))}

              {/* redes sociales */}
              <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
                {SOCIALS.map(({ href, label, svg }, i) => (
                  <a
                    key={i}
                    href={i === 2 ? `https://www.facebook.com/${social.facebook}` : href}
                    aria-label={label} // ↓ describe la red social para crawlers
                    className="w-9 h-9 md:w-10 md:h-10 border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                    {...(i === 2 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 fill-white">
                      <path d={svg} />
                    </svg>
                  </a>
                ))}
              </div>
            </address>
          </div>

          {/* FORMULARIO */}
          <div className="bg-surface-container-high p-6 sm:p-8 md:p-12">
            {!mounted ? <div className="h-[400px] md:h-[500px]" /> : (
              <form
                className="space-y-5 md:space-y-6"
                onSubmit={enviarWhatsApp}
                // ↓ describe el formulario para crawlers y lectores de pantalla
                aria-label="Formulario de contacto ALDECOA"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  {[["nombre", "Nombre"], ["empresa", "Empresa"]].map(([name, label]) => (
                    <div key={name} className="space-y-2">
                      <Label text={label} htmlFor={name} />
                      <input
                        id={name} // ↓ id vincula con el label — antes no existía
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        type="text"
                        autoComplete={name === "nombre" ? "name" : "organization"} // ↓ ayuda a Google a entender el campo
                        className={INPUT_CLS}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2 relative">
                  <Label text="Servicio de interés" htmlFor="servicio" />
                  <input
                    id="servicio"
                    type="text"
                    placeholder="Selecciona o escribe un servicio"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setForm(p => ({ ...p, servicio: e.target.value })); setShowOptions(true); }}
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => setTimeout(() => setShowOptions(false), 150)}
                    // ↓ informa que controla una lista desplegable
                    aria-haspopup="listbox"
                    aria-expanded={showOptions}
                    className={INPUT_CLS}
                  />
                  {showOptions && (
                    <ul
                      role="listbox" // ↓ semántica correcta para dropdown
                      aria-label="Servicios disponibles"
                      className="absolute w-full bg-surface-container-high border border-outline-variant mt-1 max-h-48 md:max-h-60 overflow-y-auto z-50 list-none"
                    >
                      {filteredServices.length > 0
                        ? filteredServices.map(s => (
                          <li
                            key={s.slug}
                            role="option" // ↓ cada opción del listbox
                            aria-selected={form.servicio === s.title}
                            onMouseDown={() => { setSearch(s.title); setForm(p => ({ ...p, servicio: s.title })); setShowOptions(false); }}
                            className="px-4 py-3 cursor-pointer hover:bg-primary-container hover:text-white transition-colors text-white text-sm"
                          >
                            {s.title}
                          </li>
                        ))
                        : <li role="option" aria-selected={false} className="px-4 py-3 text-white/60 text-sm">
                            No se encontraron servicios
                          </li>
                      }
                    </ul>
                  )}
                </div>

                <div className="space-y-2">
                  <Label text="Mensaje" htmlFor="mensaje" />
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows="4"
                    className={`${INPUT_CLS} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-container text-white py-4 md:py-6 font-black uppercase tracking-widest text-sm md:text-base hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
                >
                  Enviar mensaje por WhatsApp
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}