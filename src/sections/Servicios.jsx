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
      className="py-16 md:py-24 bg-surface-container-lowest"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Título */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-6xl font-black font-headline text-white mb-4 uppercase tracking-tighter">
            Nuestros Servicios
          </h2>
          <div className="w-24 md:w-32 h-1.5 md:h-2 bg-primary mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0.5 bg-zinc-800">
          {services.map((servicio) => (
            <Link
              key={servicio.id_seccion}
              href={`/servicios/${servicio.slug}`}
              className="
                bg-surface group hover:bg-primary
                transition-all duration-500 cursor-pointer
                flex flex-col justify-between
                p-5 sm:p-7 md:p-10
                aspect-square
              "
            >
              {/* Ícono */}
              <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-primary group-hover:text-white transition-colors">
                {servicio.icon}
              </span>

              {/* Título */}
              <h4 className="text-sm sm:text-base md:text-lg font-black font-headline group-hover:text-white uppercase leading-tight">
                {servicio.title}
              </h4>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}