// servicios.jsx
import Link from "next/link";
import site from "../data/site.json";
import servicesData from "../data/services.json";

export default function Servicios() {
  const services = servicesData.servicios.map(servicio => ({
    id_seccion: servicio.id_seccion,
    title: servicio.nombreSeccion,
    icon: servicio.icon,
    slug: servicio.slug,
  }));

  return (
    <section
      id={site.navigation[2].href.substring(1)}
      aria-labelledby="servicios-titulo" // ← vincula heading a section
      className="py-16 md:py-24 bg-surface-container-lowest"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Título */}
        <div className="mb-10 md:mb-20 text-center">
          <h2
            id="servicios-titulo"
            className="text-3xl md:text-6xl font-black font-headline text-white mb-4 uppercase tracking-tighter"
          >
            Nuestros Servicios
          </h2>
          <div aria-hidden="true" className="w-24 md:w-32 h-1.5 md:h-2 bg-primary mx-auto" />
        </div>

        {/* ── MOBILE ─────────────────────────────────────────────────────── */}
        {/* ↓ nav es el elemento correcto — es una lista de links de navegación */}
        <nav
          aria-label="Servicios de ALDECOA"
          className="grid grid-cols-2 gap-0.5 bg-zinc-800 md:hidden"
        >
          {services.map((servicio) => (
            <Link
              key={servicio.id_seccion}
              href={`/servicios/${servicio.slug}`}
              // ↓ aria-label descriptivo con keyword del servicio
              aria-label={`Ver servicio: ${servicio.title}`}
              className="
                bg-surface group hover:bg-primary
                transition-all duration-500
                flex flex-row items-center gap-3
                px-4 py-5
              "
            >
              <span
                aria-hidden="true" // ← icono decorativo, el texto ya lo describe
                className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors shrink-0"
              >
                {servicio.icon}
              </span>
              {/* ↓ h4 → p — no hay h3 antes de este, rompe jerarquía */}
              <p className="text-[11px] font-black font-headline text-white/80 group-hover:text-white uppercase leading-tight">
                {servicio.title}
              </p>
            </Link>
          ))}
        </nav>

        {/* ── DESKTOP ────────────────────────────────────────────────────── */}
        <nav
          aria-label="Servicios de ALDECOA"
          className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-0.5 bg-zinc-800"
        >
          {services.map((servicio) => (
            <Link
              key={servicio.id_seccion}
              href={`/servicios/${servicio.slug}`}
              aria-label={`Ver servicio: ${servicio.title}`}
              className="
                bg-surface group hover:bg-primary
                transition-all duration-500 cursor-pointer
                flex flex-col justify-between
                p-7 md:p-10
                aspect-square
              "
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-3xl md:text-4xl text-primary group-hover:text-white transition-colors"
              >
                {servicio.icon}
              </span>
              <p className="text-base md:text-lg font-black font-headline group-hover:text-white uppercase leading-tight">
                {servicio.title}
              </p>
            </Link>
          ))}
        </nav>

      </div>
    </section>
  );
}