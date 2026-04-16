import Image from "next/image";
import site from "../data/site.json";

export default function PortfolioPreview() {

  const proyectos = [

    {
      image: "/images/portfolio/evento1.jpg",
      category: "Evento Corporativo",
      title: "Convención Anual 2024",
      span: "md:col-span-2",
      ratio: "aspect-video",
    },

    {
      image: "/images/portfolio/evento2.jpg",
      category: "Activación BTL",
      title: "",
      ratio: "aspect-square",
    },

    {
      image: "/images/portfolio/evento3.jpg",
      category: "Producción",
      title: "",
      ratio: "aspect-square",
    },

    {
      image: "/images/portfolio/evento4.jpg",
      category: "Trade Marketing",
      title: "",
      ratio: "aspect-square",
    },

    {
      image: "/images/portfolio/evento5.jpg",
      category: "Tecnología",
      title: "Foro Digital Innovación",
      span: "md:col-span-3",
      ratio: "aspect-[21/9]",
    },

  ];


  return (

    <section id={site.navigation[4].href.substring(1)} className="py-24 bg-surface">

      <div className="container mx-auto px-8">

        {/* titulo */}
        <div className="mb-16">

          <h2 className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter">

            Nuestro trabajo

          </h2>

          <p className="text-primary font-bold tracking-widest uppercase text-sm mt-4">

            Momentos que definen marcas

          </p>

        </div>


        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {proyectos.map((item, index) => (

            <div

              key={index}

              className={`

                relative overflow-hidden bg-surface-container

                ${item.span || ""}

                ${item.ratio}

              `}

            >

              <Image

                src={item.image}

                alt={item.title}

                fill

                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"

              />


              {/* overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60">

                <p className="text-[10px] font-bold text-primary uppercase">

                  {item.category}

                </p>


                {item.title && (

                  <h5 className="text-xl font-black text-white">

                    {item.title}

                  </h5>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}