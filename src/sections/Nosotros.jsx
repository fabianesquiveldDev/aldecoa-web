import site from "../data/site.json";
import nosotrosData from "../data/nosotros.json";
import Image from "next/image";

export default function Nosotros() {
  const { section_tag, title, description, quote } = nosotrosData;
  const image = nosotrosData.image;

  const stats = nosotrosData.stats.map(stat => ({
    id: stat.id,
    value: stat.value,
    label: stat.label,
  }));

  return (
    <section
      id={site.navigation[1].href.substring(1)}
      className="py-16 md:py-24 bg-surface"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* IMAGEN */}
          <div className="relative mx-4 md:mx-0">
            <div className="bg-surface-container-low p-3 md:p-4 relative z-10">
              <Image
                src={image}
                alt="Equipo Aldecoa trabajando en evento corporativo"
                width={1000}
                height={1250}
                priority
                className="
                  w-full
                  h-[280px] sm:h-[420px] md:h-[600px]
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all
                  duration-700
                "
              />
            </div>

            {/* cuadro rojo decorativo — más chico en móvil */}
            <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-28 h-28 sm:w-44 sm:h-44 md:w-64 md:h-64 bg-primary"></div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">

            <div className="space-y-3 md:space-y-4">
              <h2 className="
                text-primary font-black tracking-widest text-sm uppercase
              ">
                {section_tag}
              </h2>

              <h3 className="
                text-3xl sm:text-4xl md:text-5xl
                font-black font-headline text-white leading-tight uppercase
              ">
                {title}
              </h3>
            </div>

            <p className="text-on-background/70 text-base md:text-lg leading-relaxed">
              {description}
            </p>

            {/* frase destacada */}
            <div className="
              border-l-4 border-primary
              pl-5 md:pl-8 py-3 md:py-4
              bg-surface-container-low
              italic
            ">
              <p className="text-base md:text-xl text-white font-medium">
                "{quote}"
              </p>
            </div>

            {/* métricas */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <p className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-black text-white font-headline
                  ">
                    {stat.value}
                  </p>
                  <p className="
                    text-[9px] sm:text-[10px]
                    font-bold text-primary uppercase tracking-widest mt-1 md:mt-2
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