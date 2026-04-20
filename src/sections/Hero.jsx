import Container from "../components/Container";
import heroData from "../data/hero.json";
import site from "../data/site.json";
import Image from "next/image";

export default function Hero() {
  const { badge, description, title, logo, imgMovil } = heroData;
  const contact = site.contact;

  const schemaOrg = {
    "@context": "https://aldecoa360.com",
    "@type": "Organization",
    name: "ALDECOA",
    description: description,
    url: site.url ?? "",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone_main,
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
  };

  return (
    <section
      id={site.navigation[0].href.substring(1)}
      aria-label="Sección principal"
      className="relative min-h-screen flex items-start lg:items-center pt-16 sm:pt-20 overflow-hidden bg-[#111111]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Decoraciones fondo */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container opacity-5 kinetic-slash" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[40px] border-red-600/10 rotate-45" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center py-8 sm:py-12 lg:py-0">

        {/* TEXTO */}
        <div className="w-full">

          <p className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary-container text-white text-[9px] sm:text-[10px] font-extrabold tracking-[0.3em] uppercase mb-4 sm:mb-6">
            {badge}
          </p>

          <h1 className="text-[2.4rem] leading-[0.92] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter text-white mb-4 sm:mb-7 uppercase">
            {title.line1}{" "}
            <span className="text-primary-container">{title.highlight}</span>{" "}
            {title.line2}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-on-background/80 font-body max-w-xl mb-6 sm:mb-9 leading-relaxed">
            {description}
          </p>

          <nav
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            aria-label="Acciones principales"
          >
            <a
              href={`https://api.whatsapp.com/send?phone=${contact.phone_main}&text=Hola%20me%20interesa%20información%20sobre%20sus%20servicios.%20¿Podrían%20apoyarme%20con%20una%20cotización?`}
              className="bg-primary-container text-white px-6 py-4 sm:px-10 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a ALDECOA por WhatsApp para cotización"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.849L.057 23.428a.5.5 0 00.611.612l5.638-1.474A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 01-5.037-1.378l-.36-.214-3.742.979.999-3.648-.235-.374A9.862 9.862 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z" />
              </svg>
              Contáctanos por WhatsApp
            </a>

            <a
              href={site.navigation[2].href}
              className="border-2 border-white/20 text-white px-6 py-4 sm:px-10 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm hover:border-red-600 transition-colors duration-200 flex items-center justify-center w-full sm:w-auto"
              aria-label="Ver servicios de marketing y entretenimiento de ALDECOA"
            >
              Conoce nuestros servicios
            </a>
          </nav>
        </div>

        {/* IMAGEN MÓVIL — aspect-[4/5] correcto para imagen vertical */}
        <figure className="relative lg:hidden mt-2">
          <div className="relative w-full sm:max-w-sm sm:mx-auto aspect-[4/5]">
            <Image
              src={imgMovil}
              alt="Equipo creativo de ALDECOA trabajando en estrategias de marketing digital en el sur de México"
              fill
              priority
              className="object-cover rounded-sm"
              sizes="(max-width: 640px) 100vw, 384px"
            />
            <div className="absolute inset-0 border-[10px] sm:border-[12px] border-red-600/20 pointer-events-none rounded-sm" />
          </div>
          <figcaption className="sr-only">
            Equipo ALDECOA — agencia de marketing, publicidad y entretenimiento en Campeche, México
          </figcaption>
        </figure>

        {/* VIDEO SOLO DESKTOP */}
        <figure
          className="relative hidden lg:block"
          aria-label="Video de presentación de ALDECOA"
        >
          <div className="aspect-square bg-white relative overflow-hidden">
            <Image
              src={logo}
              alt="ALDECOA agencia de marketing y entretenimiento en el sur de México"
              fill
              priority
              className="object-contain p-10"
              sizes="(max-width: 1024px) 0px, 50vw"
            />
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            >
              <source src={heroData.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 border-[20px] border-red-600/20 pointer-events-none" />
          </div>
          <figcaption className="sr-only">
            Presentación de servicios de ALDECOA — agencia de marketing, publicidad y entretenimiento
          </figcaption>
        </figure>

      </Container>
    </section>
  );
}