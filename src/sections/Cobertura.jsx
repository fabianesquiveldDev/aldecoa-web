"use client";

import coverturaData from '../data/coverage.json';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mexicoMap from "../data/mexico.json";

export default function Cobertura() {

  const { title, description, states } = coverturaData;

  // convertir nombres a array simple
  const estadosActivos = states.map(s => s.name);

  return (

    <section className="py-24 bg-surface">

      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* texto */}
        <div>

          <h2
            className="
              text-5xl
              font-black
              font-headline
              text-white
              leading-tight
              uppercase
              tracking-tighter
              mb-8
            "
          >
            {title}
          </h2>

          <p
            className="
              text-on-background/70
              text-lg
              mb-12
            "
          >
            {description}
          </p>


          {/* estados dinámicos */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">

            {states.map((state) => (

              <div
                key={state.id_state}
                className="flex items-center gap-3"
              >

                <span className="w-2 h-2 bg-red-600"></span>

                <span
                  className="
                    font-bold
                    text-white
                    tracking-widest
                    uppercase
                    text-sm
                  "
                >
                  {state.name}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* MAPA REAL */}
        <div
          className="
            relative
            bg-surface-container-low
            p-12
            overflow-hidden
            aspect-square
            flex
            items-center
            justify-center
          "
        >

         

          {/* mapa */}
          <div className="relative z-10 w-full h-full">

            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 1400,
                center: [-102, 23]
              }}
              className="w-full h-full"
            >

              <Geographies geography={mexicoMap}>

                {({ geographies }) =>
                  geographies.map((geo) => {

                    const nombreEstado =
                      geo.properties.name;

                    const activo =
                      estadosActivos.includes(nombreEstado);

                    return (

                      <Geography
                        key={geo.rsmKey}
                        geography={geo}

                        className={`
                          transition-all duration-300
                          stroke-white/40
                          hover:opacity-80
                          ${activo
                            ? "fill-red-600"
                            : "fill-white/10"
                          }
                        `}
                      />

                    );

                  })
                }

              </Geographies>

            </ComposableMap>

            {/* borde decorativo */}
            <div className="absolute inset-0 border-[2px] border-red-600/30"></div>

          </div>

        </div>

      </div>

    </section>

  );

}