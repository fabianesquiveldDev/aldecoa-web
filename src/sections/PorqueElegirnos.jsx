// porqueelegirnos.jsx
import whyChooseUsData from "../data/whyChooseUs.json";

export default function PorqueElegirnos() {
  const items = whyChooseUsData.items.map(item => ({
    number: item.id_whychooseus,
    title: item.title,
    description: item.description,
  }));

  return (
    <section
      aria-labelledby="porque-titulo"
      className="bg-primary py-12 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* ↓ título de sección añadido — Google necesita saber de qué trata */}
        <h2
          id="porque-titulo"
          className="sr-only"
        >
          Por qué elegir ALDECOA — agencia de marketing y entretenimiento
        </h2>

        {/* ↓ ul/li es la estructura correcta para una lista de razones */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 list-none">
          {items.map((item, index) => (
            <li
              key={index}
              className="
                space-y-3 md:space-y-6
                p-6 md:p-10
                border-b border-white/20
                sm:odd:border-r
                lg:border-r lg:border-b-0
                lg:last:border-r-0
              "
            >
              {/* número decorativo */}
              <p
                aria-hidden="true" // ← decorativo, no aporta info semántica
                className="text-white/30 font-black text-6xl md:text-8xl font-headline leading-none"
              >
                {String(item.number).padStart(2, "0")}
              </p>

              {/* ↓ h4 → h3 — venimos de h2 arriba, no saltar niveles */}
              <h3 className="text-lg md:text-2xl font-black font-headline text-white uppercase">
                {item.title}
              </h3>

              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}