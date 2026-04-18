// cobertura.jsx
"use client";
import site from '../data/site.json';
import coverturaData from '../data/coverage.json';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mexicoMap from "../data/mexico.json";

export default function Cobertura() {
  const { title, description, states } = coverturaData;
  const estadosActivos = states.map(s => s.name);

  return (
    <section
      id={site.navigation[5].href.substring(1)}
      aria-labelledby="cobertura-titulo"
      className="py-16 md:py-24 bg-surface"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* MAPA */}
          <figure
            className="
              order-first lg:order-last
              relative bg-surface-container-low
              p-6 md:p-12 overflow-hidden
              aspect-square flex items-center justify-center
            "
            // ↓ describe el mapa para Google y lectores de pantalla
            aria-label="Mapa de cobertura de ALDECOA en el sur de México"
            role="img"
          >
            <div className="relative z-10 w-full h-full">
              {/* ↓ el mapa SVG es visual — ocultarlo de crawlers evita
                  que indexe paths de SVG como contenido */}
              <div aria-hidden="true">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 1400, center: [-102, 23] }}
                  className="w-full h-full"
                >
                  <Geographies geography={mexicoMap}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const nombreEstado = geo.properties.name;
                        const activo = estadosActivos.includes(nombreEstado);
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            className={`
                              transition-all duration-300
                              stroke-white/40 hover:opacity-80
                              ${activo ? "fill-red-600" : "fill-white/10"}
                            `}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 border-[2px] border-red-600/30 pointer-events-none"
              />
            </div>

            {/* ↓ figcaption oculto — Google lee los estados cubiertos */}
            <figcaption className="sr-only">
              ALDECOA opera en: {states.map(s => s.name).join(", ")}
            </figcaption>
          </figure>

          {/* TEXTO */}
          <div className="order-last lg:order-first">

            <h2
              id="cobertura-titulo"
              className="
                text-3xl sm:text-4xl md:text-5xl
                font-black font-headline text-white
                leading-tight uppercase tracking-tighter
                mb-4 md:mb-8
              "
            >
              {title}
            </h2>

            <p className="text-on-background/70 text-base md:text-lg mb-8 md:mb-12">
              {description}
            </p>

            {/* ↓ ul/li correcto para lista de estados */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8 list-none">
              {states.map((state) => (
                <li
                  key={state.id_state}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <span aria-hidden="true" className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 shrink-0" />
                  <span className="
                    font-bold text-white uppercase tracking-widest
                    text-[10px] sm:text-xs md:text-sm truncate
                  ">
                    {state.name}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}