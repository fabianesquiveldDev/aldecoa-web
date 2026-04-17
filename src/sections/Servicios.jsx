import Link from "next/link";
import site from "../data/site.json";
import servicesData from "../data/services.json";

export default function Servicios() {

  const services = servicesData.servicios.map(servicio => ({

    id_seccion: servicio.id_seccion,
    title: servicio.nombreSeccion,
    icon: servicio.icon,
    slug: servicio.slug

  }));

  console.log(services);

  return (

    <section
      id={site.navigation[2].href.substring(1)}
      className="py-24 bg-surface-container-lowest"
    >

      <div className="container mx-auto px-8">


        {/* titulo */}
        <div className="mb-20 text-center">

          <h2 className="text-4xl md:text-6xl font-black font-headline text-white mb-4 uppercase tracking-tighter">

            Nuestros Servicios

          </h2>

          <div className="w-32 h-2 bg-primary mx-auto"></div>

        </div>



        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 bg-zinc-800">


          {services.map((servicio) => (

            <Link
              key={servicio.id_seccion}
              href={`/servicios/${servicio.slug}`}
              className="bg-surface p-10 group hover:bg-primary transition-all duration-500 cursor-pointer aspect-square flex flex-col justify-between"
            >


              {/* icono */}
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">

                {servicio.icon}

              </span>



              {/* titulo */}
              <h4 className="text-lg font-black font-headline group-hover:text-white uppercase leading-none">

                {servicio.title}

              </h4>


            </Link>

          ))}


        </div>


      </div>

    </section>

  );

}