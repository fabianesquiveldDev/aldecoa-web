import whyChooseUsData from "../data/whyChooseUs.json";
export default function PorqueElegirnos() {

  const items = whyChooseUsData.items.map(item => ({
    number: item.id_whychooseus,
    title: item.title,
    description: item.description
  }));
 

  return (

    <section className="bg-primary py-24">

      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-16">

        {items.map((item, index) => (

          <div key={index} className="space-y-6">

            {/* numero */}
            <p className="text-white/40 font-black text-8xl font-headline leading-none">

              {item.number}

            </p>


            {/* titulo */}
            <h4 className="text-2xl font-black font-headline text-white uppercase">

              {item.title}

            </h4>


            {/* descripcion */}
            <p className="text-white/80 leading-relaxed">

              {item.description}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}