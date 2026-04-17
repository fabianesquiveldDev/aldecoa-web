import Image from "next/image";
import portafolioData from "@/data/portafolio.json";

export default function PortfolioMasPage() {

  const imagenes = portafolioData.images.map((img) => img.url);


 

  return (

    <section className="py-24 bg-surface min-h-screen">

      <div className="container mx-auto px-8">


        {/* titulo */}
        <div className="mb-20">

          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            font-headline
            text-white
            uppercase
            tracking-tighter
          ">

            Portafolio

          </h1>

        </div>


        {/* galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {imagenes.map((src, index) => (

            <div
              key={index}
              className="
                relative
                aspect-[7/5]
                overflow-hidden
                bg-surface-container
              "
            >

              <Image
                src={src}
                alt="Proyecto realizado"
                fill
                className="
                  object-cover
                  grayscale
                  hover:grayscale-0
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />

            </div>

          ))}

        </div>


      </div>

    </section>

  );

}