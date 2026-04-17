import site from "../data/site.json";
import nosotrosData from "../data/nosotros.json";
import Image from "next/image";

export default function Nosotros() {

  const { section_tag, title, description, quote } = nosotrosData;
  const image = nosotrosData.image;

  const stats = nosotrosData.stats.map(stat => ({
    id: stat.id,
    value: stat.value,
    label: stat.label
  }));


  return (

    <section
      id={site.navigation[1].href.substring(1)}
      className="py-24 bg-surface"
    >

      <div className="container mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">


          {/* IMAGEN */}
          <div className="relative">

            <div className="bg-surface-container-low p-4 relative z-10">

              <Image
                src={image}
                alt="Equipo Aldecoa trabajando en evento corporativo"
                width={1000}
                height={1250}
                priority
                className="
                  w-full
                  h-[600px]
                 object-contain

                grayscale
                hover:grayscale-0
                transition-all
                duration-700
                "
              />

            </div>


            {/* cuadro rojo decorativo */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary"></div>

          </div>



          {/* TEXTO */}
          <div className="space-y-8">


            <div className="space-y-4">

              <h2 className="
                text-primary
                font-black
                tracking-widest
                text-sm
                uppercase
              ">
                {section_tag}
              </h2>


              <h3 className="
                text-4xl
                md:text-5xl
                font-black
                font-headline
                text-white
                leading-tight
                uppercase
              ">
                {title}
              </h3>

            </div>



            <p className="
              text-on-background/70
              text-lg
              leading-relaxed
            ">
              {description}
            </p>



            {/* frase destacada */}
            <div className="
              border-l-4
              border-primary
              pl-8
              py-4
              bg-surface-container-low
              italic
            ">

              <p className="
                text-xl
                text-white
                font-medium
              ">
                "{quote}"
              </p>

            </div>



            {/* métricas */}
            <div className="grid grid-cols-3 gap-8 pt-8">

              {stats.map((stat) => (

                <div key={stat.id}>

                  <p className="
                    text-4xl
                    font-black
                    text-white
                    font-headline
                  ">
                    {stat.value}
                  </p>


                  <p className="
                    text-[10px]
                    font-bold
                    text-primary
                    uppercase
                    tracking-widest
                    mt-2
                  ">
                    {stat.label}
                  </p>


                </div>

              ))}

            </div>


          </div>


        </div>

      </div>

    </section>

  );

}