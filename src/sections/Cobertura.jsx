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
      className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* MAPA — primero en móvil */}
          <div className="
            order-first lg:order-last
            relative bg-surface-container-low
            p-6 md:p-12
            overflow-hidden
            aspect-square
            flex items-center justify-center
          ">
            <div className="relative z-10 w-full h-full">
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
                            stroke-white/40
                            hover:opacity-80
                            ${activo ? "fill-red-600" : "fill-white/10"}
                          `}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
              <div className="absolute inset-0 border-[2px] border-red-600/30 pointer-events-none"></div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="order-last lg:order-first">

            <h2 className="
              text-3xl sm:text-4xl md:text-5xl
              font-black font-headline text-white
              leading-tight uppercase tracking-tighter
              mb-4 md:mb-8
            ">
              {title}
            </h2>

            <p className="text-on-background/70 text-base md:text-lg mb-8 md:mb-12">
              {description}
            </p>

            {/* estados */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8">
              {states.map((state) => (
                <div key={state.id_state} className="flex items-center gap-2 md:gap-3">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 shrink-0"></span>
                  <span className="
                    font-bold text-white uppercase tracking-widest
                    text-[10px] sm:text-xs md:text-sm
                    truncate
                  ">
                    {state.name}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}