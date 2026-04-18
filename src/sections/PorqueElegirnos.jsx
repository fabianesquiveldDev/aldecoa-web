import whyChooseUsData from "../data/whyChooseUs.json";

export default function PorqueElegirnos() {
  const items = whyChooseUsData.items.map(item => ({
    number: item.id_whychooseus,
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="bg-primary py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {items.map((item, index) => (
            <div
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
              {/* número */}
              <p className="text-white/30 font-black text-6xl md:text-8xl font-headline leading-none">
                {String(item.number).padStart(2, "0")}
              </p>

              {/* título */}
              <h4 className="text-lg md:text-2xl font-black font-headline text-white uppercase">
                {item.title}
              </h4>

              {/* descripción */}
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}