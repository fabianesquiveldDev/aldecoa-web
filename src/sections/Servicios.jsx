// Servicios.jsx
import Image from "next/image";
import Link from "next/link";
import site from "../data/site.json";
import servicesData from "../data/services.json";

export default function Servicios() {
  const services = servicesData.servicios.map((servicio) => ({
    id_seccion: servicio.id_seccion,
    title: servicio.nombreSeccion,
    icon: servicio.icon,
    img: servicio.img,
    slug: servicio.slug,
  }));

  return (
    <section
      id={site.navigation[2].href.substring(1)}
      aria-labelledby="servicios-titulo"
      className="py-16 md:py-24 bg-surface-container-lowest"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-20 text-center">
          <h2
            id="servicios-titulo"
            className="text-3xl md:text-6xl font-black font-headline text-white mb-4 uppercase tracking-tighter"
          >
            Nuestros Servicios
          </h2>

          <div
            aria-hidden="true"
            className="w-24 md:w-32 h-1.5 md:h-2 bg-primary mx-auto"
          />
        </div>

        {/* MOBILE */}
        <nav
          aria-label="Servicios de ALDECOA"
          className="grid grid-cols-2 gap-1 md:hidden bg-zinc-800"
        >
          {services.map((servicio) => (
            <Link
              key={servicio.id_seccion}
              href={`/servicios/${servicio.slug}`}
              aria-label={`Ver servicio: ${servicio.title}`}
              className="
                relative overflow-hidden
                bg-surface group
                transition-all duration-500
                aspect-[4/3]
              "
            >
              {servicio.img && (
                <Image
                  src={servicio.img}
                  alt={servicio.title}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="
                    object-cover
                    transition-all duration-700
                    group-hover:scale-105
                    group-hover:brightness-110
                  "
                />
              )}

              <div className="absolute inset-0 bg-black/21 group-hover:bg-black/10 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="relative z-10 h-full p-5 flex flex-col justify-end">
                <span
                  aria-hidden="true"
                  className="
                     material-symbols-outlined
                    text-4xl
                    text-white
                    mb-4
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                    transition-colors
                  "
                >
                  {servicio.icon}
                </span>

                <p className="pr-10 text-sm font-black font-headline text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {servicio.title}
                </p>
              </div>
            </Link>
          ))}
        </nav>

        {/* DESKTOP */}
        <nav
          aria-label="Servicios de ALDECOA"
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-800"
        >
          {services.map((servicio) => (
            <Link
              key={servicio.id_seccion}
              href={`/servicios/${servicio.slug}`}
              aria-label={`Ver servicio: ${servicio.title}`}
              className="
                relative overflow-hidden
                bg-surface group
                transition-all duration-500 cursor-pointer
                aspect-video
              "
            >
              {servicio.img && (
                <Image
                  src={servicio.img}
                  alt={servicio.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-all duration-700
                    group-hover:scale-105
                    group-hover:brightness-110
                  "
                />
              )}

              <div className="absolute inset-0 bg-black/21 group-hover:bg-black/10 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="relative z-10 h-full p-7 md:p-8 flex flex-col justify-end">

                <span
                  aria-hidden="true"
                  className="
                    material-symbols-outlined
                    text-4xl
                    text-white
                    mb-4
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                    transition-colors
                  "
                >
                  {servicio.icon}
                </span>

                <p className="text-base md:text-xl font-black font-headline text-white uppercase leading-tight">
                  {servicio.title}
                </p>

              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}