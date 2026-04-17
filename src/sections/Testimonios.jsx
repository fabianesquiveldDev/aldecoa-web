import site from "../data/site.json";
export default function Testimonios() {

  return (

    <section
      id={site.navigation[3].href.substring(1)}
      className="py-24 bg-surface-container-lowest"
    >

      <div className="container mx-auto px-8">


        {/* titulo */}
        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            font-headline
            text-white
            text-center
            mb-16
            uppercase
          "
        >
          LO QUE DICEN NUESTROS CLIENTES
        </h2>



        {/* grid */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >


          {/* testimonial 1 */}
          <div
            className="
              bg-surface-container
              p-10
              border-t-4
              border-red-600
              relative
            "
          >

            {/* comillas decorativas */}
            <span
              className="
                material-symbols-outlined
                text-red-600
                text-5xl
                absolute
                -top-3
                right-6
                opacity-20
              "
            >
              format_quote
            </span>


            <p
              className="
                text-on-background/80
                mb-8
                leading-relaxed
              "
            >
              "La capacidad de ALDECOA para aterrizar conceptos complejos
              en ejecuciones impecables es lo que los diferencia del resto
              de las agencias."
            </p>


            <div>

              <p
                className="
                  font-black
                  text-white
                  uppercase
                  tracking-tighter
                "
              >
                Director de Marketing
              </p>


              <p
                className="
                  text-red-600
                  text-[10px]
                  font-bold
                  uppercase
                "
              >
                Consumo Masivo
              </p>

            </div>

          </div>



          {/* testimonial 2 */}
          <div
            className="
              bg-surface-container
              p-10
              border-t-4
              border-red-600
              relative
            "
          >

            <span
              className="
                material-symbols-outlined
                text-red-600
                text-5xl
                absolute
                -top-3
                right-6
                opacity-20
              "
            >
              format_quote
            </span>


            <p
              className="
                text-on-background/80
                mb-8
                leading-relaxed
              "
            >
              "Su logística en el sureste no tiene comparación.
              Manejaron múltiples puntos simultáneos con una
              coordinación impecable."
            </p>


            <div>

              <p
                className="
                  font-black
                  text-white
                  uppercase
                  tracking-tighter
                "
              >
                Gerente de Operaciones
              </p>


              <p
                className="
                  text-red-600
                  text-[10px]
                  font-bold
                  uppercase
                "
              >
                Retail Nacional
              </p>

            </div>

          </div>



          {/* testimonial 3 */}
          <div
            className="
              bg-surface-container
              p-10
              border-t-4
              border-red-600
              relative
            "
          >

            <span
              className="
                material-symbols-outlined
                text-red-600
                text-5xl
                absolute
                -top-3
                right-6
                opacity-20
              "
            >
              format_quote
            </span>


            <p
              className="
                text-on-background/80
                mb-8
                leading-relaxed
              "
            >
              "Buscábamos impacto y logramos una experiencia que
              conectó con nuestro público de manera memorable."
            </p>


            <div>

              <p
                className="
                  font-black
                  text-white
                  uppercase
                  tracking-tighter
                "
              >
                CEO
              </p>


              <p
                className="
                  text-red-600
                  text-[10px]
                  font-bold
                  uppercase
                "
              >
                Startup
              </p>

            </div>

          </div>



        </div>


      </div>

    </section>

  );

}