// clientes.jsx
import Image from "next/image";
import site from "../data/site.json";
import clientesData from "../data/clients.json";

export default function Clientes() {
  const { title, items } = clientesData;
  const loopItems = [...items, ...items];

  return (
    <section
      id={site.navigation[4].href.substring(1)}
      aria-labelledby="clientes-titulo"
      className="bg-white py-12 md:py-20 overflow-hidden"
    >
      {/* título */}
      <div className="container mx-auto px-4 md:px-8 mb-10 md:mb-16">
        {/* ↓ h3 → h2 — no hay h2 en esta sección, no saltar niveles */}
        <h2
          id="clientes-titulo"
          className="
            text-black font-black text-center
            text-[10px] md:text-sm
            tracking-[0.3em] md:tracking-[0.4em]
            uppercase
          "
        >
          {title}
        </h2>
      </div>

      {/* carrusel */}
      <div
        className="overflow-hidden"
        // ↓ informa a lectores de pantalla que es contenido en movimiento
        aria-label="Carrusel de clientes de ALDECOA"
        role="region"
      >
        {/* ↓ los items duplicados son decorativos — ocúltalos de crawlers
            para que Google no indexe logos repetidos como contenido duplicado */}
        <div
          className="flex w-max animate-marquee"
          aria-hidden="true"
        >
          {loopItems.map((cliente, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-6 md:px-12 group"
            >
              <div className="
                w-[90px] h-[55px] sm:w-[110px] sm:h-[68px] md:w-[140px] md:h-[85px]
                flex items-center justify-center
              ">
                <Image
                  src={cliente.logo}
                  alt={cliente.name}
                  width={140}
                  height={85}
                  loading="lazy"
                  className="
                    object-contain max-h-full max-w-full
                    grayscale-0 opacity-100
                    md:grayscale md:opacity-50
                    md:group-hover:grayscale-0 md:group-hover:opacity-100
                    transition duration-300
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* ↓ lista real para Google — visible solo para crawlers y screen readers */}
        <ul className="sr-only" aria-label="Clientes de ALDECOA">
          {items.map((cliente, index) => (
            <li key={index}>{cliente.name}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}