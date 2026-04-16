export default function SectionTitle({ title, subtitle, align = "center" }) {

  return (

    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>

      {subtitle && (

        <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">

          {subtitle}

        </p>

      )}

      <h2 className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter">

        {title}

      </h2>

      <div className={`w-32 h-2 bg-red-600 mt-4 ${align === "center" ? "mx-auto" : ""}`} />

    </div>

  );

}