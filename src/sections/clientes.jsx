import Image from "next/image";
import site from "../data/site.json";
import clientesData from "../data/clients.json";

export default function Clientes() {

  const { title, items } = clientesData;

  // duplicamos para scroll infinito continuo
  const loopItems = [...items, ...items];

  return (

    <section
      id={site.navigation[4].href.substring(1)}
      className="bg-white py-20 overflow-hidden"
    >

      {/* titulo */}
      <div className="container mx-auto px-8 mb-16">

        <h3 className="
          text-black
          font-black
          text-center
          text-sm
          tracking-[0.4em]
          uppercase
        ">

          {title}

        </h3>

      </div>



      {/* carrusel */}
      <div className="overflow-hidden">

        <div className="flex w-max animate-marquee">

          {loopItems.map((cliente, index) => (

            <div
              key={index}

              className="
                flex
                flex-col
                items-center
                justify-center
                px-12
                group
              "
            >

              {/* contenedor logo */}
              <div className="
                w-[140px]
                h-[85px]

                flex
                items-center
                justify-center
              ">

                <Image
                  src={cliente.logo}
                  alt={cliente.name}
                  width={140}
                  height={85}

                  className="
                    object-contain
                    max-h-full
                    max-w-full

                    grayscale
                    opacity-60

                    group-hover:grayscale-0
                    group-hover:opacity-100

                    transition
                    duration-300
                  "
                />

              </div>




            </div>

          ))}

        </div>

      </div>

    </section>

  );

}