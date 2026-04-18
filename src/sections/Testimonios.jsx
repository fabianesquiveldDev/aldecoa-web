// testimonios.jsx
import site from "../data/site.json";
import testimoniosData from "../data/testimonios.json";

export default function Testimonios() {
  const testimonios = testimoniosData.testimonios;

  return (
    <section
      id={site.navigation[4].href.substring(1)}
      aria-labelledby="testimonios-titulo"
      className="py-14 md:py-24 bg-surface-container-lowest"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* título */}
        <h2
          id="testimonios-titulo"
          className="text-3xl md:text-5xl font-black font-headline text-white text-center mb-10 md:mb-16 uppercase leading-tight"
        >
          Lo que dicen nuestros clientes
        </h2>

        {/* ↓ ul/li correcto para lista de testimonios */}
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 list-none">
          {testimonios.map((testimonio) => (
            <li key={testimonio.id}>

              {/* ↓ figure + blockquote es la estructura semántica correcta
                  para testimonios — Google puede generar rich results con esto */}
              <figure className="bg-surface-container p-6 md:p-10 border-t-4 border-red-600 relative h-full">

                {/* icono decorativo */}
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-red-600 text-5xl absolute -top-3 right-6 opacity-20"
                >
                  format_quote
                </span>

                {/* ↓ blockquote para la cita */}
                <blockquote className="text-on-background/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  "{testimonio.testimonio}"
                </blockquote>

                {/* ↓ figcaption para el autor — estructura correcta de cita */}
                <figcaption>
                  <p className="font-black text-white uppercase tracking-tighter text-sm md:text-base">
                    {testimonio.cargo}
                  </p>
                  <p className="text-red-600 text-[10px] font-bold uppercase">
                    {testimonio.empresa}
                  </p>
                </figcaption>

              </figure>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}