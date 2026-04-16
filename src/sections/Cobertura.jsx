export default function Cobertura() {

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
            ESTAMOS DONDE TU MARCA NECESITA ESTAR
          </h2>


          <p
            className="
              text-on-background/70
              text-lg
              mb-12
            "
          >
            Nuestra infraestructura operativa está diseñada para cubrir
            los estados estratégicos del sur de México. Centralizados en
            Tabasco, llegamos con rapidez y eficiencia a cada rincón
            de la región.
          </p>



          {/* estados */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">


            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                Tabasco
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                Chiapas
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                Veracruz
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                Campeche
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                Yucatán
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                Quintana Roo
              </span>
            </div>


          </div>

        </div>



        {/* mapa decorativo */}
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


          {/* fondo */}
          <div className="absolute inset-0 opacity-10">

            <img
              src="/images/mapa-textura.jpg"
              alt="Mapa"
              className="w-full h-full object-cover"
            />

          </div>



          {/* mapa svg */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">

            <svg
              className="w-full h-full fill-white/20 stroke-white/40 stroke-2"
              viewBox="0 0 400 300"
            >

              <path d="M50,150 L100,140 L150,160 L200,155 L250,140 L300,120 L350,130 L380,180 L320,250 L250,260 L180,240 L100,260 Z"></path>


              {/* punto villahermosa */}
              <circle
                cx="210"
                cy="180"
                r="8"
                fill="#E30613"
                className="animate-pulse"
              />


              <text
                x="225"
                y="185"
                fill="#E30613"
                className="text-xs font-black font-headline"
              >
                VILLAHERMOSA
              </text>


              <circle cx="280" cy="140" r="4" fill="#E30613"></circle>

              <circle cx="340" cy="160" r="4" fill="#E30613"></circle>

              <circle cx="120" cy="200" r="4" fill="#E30613"></circle>

            </svg>


            {/* borde */}
            <div className="absolute inset-0 border-[2px] border-red-600/30"></div>


          </div>


        </div>


      </div>


    </section>

  );

}