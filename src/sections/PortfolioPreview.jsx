// PortfolioPreview.jsx
import Image from "next/image";
import Link from "next/link";
import site from "../data/site.json";
import portafolioPrwData from "../data/PortfolioPreview.json";

export default function PortfolioPreview() {
  const proyectos = portafolioPrwData.PortfolioPreview;

  return (
    <section
      id={site.navigation[3].href.substring(1)}
      aria-labelledby="portfolio-titulo"
      className="py-24 bg-surface"
    >
      <div className="container mx-auto px-8">

        {/* título */}
        <div className="mb-16">
          <h2
            id="portfolio-titulo"
            className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter"
          >
            Nuestro trabajo
          </h2>
          {/* ↓ subtítulo decorativo, no debe ser heading */}
          <p className="text-primary font-bold tracking-widest uppercase text-sm mt-4">
            Momentos que definen marcas
          </p>
        </div>

        {/* ↓ ul/li correcto para lista de proyectos */}
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 list-none">
          {proyectos.map((item, index) => (
            <li
              key={index}
              className={`
                relative overflow-hidden bg-surface-container
                ${item.span ?? ""}
                ${item.ratio ?? "aspect-square"}
              `}
            >
              <Image
                src={item.image}
                alt={`${item.title || item.category} — proyecto de ALDECOA`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 100vw, 25vw"
                className="
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all duration-700
                  hover:scale-105
                  [filter:grayscale(100%)]
                  [-webkit-filter:grayscale(100%)]
                "
              />
              {/* overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60">
                <p className="text-[10px] font-bold text-primary uppercase">
                  {item.category}
                </p>
                {item.title && (
                  // ↓ h5 → h3 — venimos de h2, no saltar a h5
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* botón */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/portfolioMas"
            // ↓ aria-label descriptivo para crawlers
            aria-label="Ver más proyectos de marketing y entretenimiento de ALDECOA"
            className="
              border border-primary text-primary
              px-10 py-3
              font-headline font-black tracking-widest uppercase text-sm
              hover:bg-primary hover:text-white hover:-translate-y-1
              transition-all duration-300
            "
          >
            Ver más proyectos →
          </Link>
        </div>

      </div>
    </section>
  );
}