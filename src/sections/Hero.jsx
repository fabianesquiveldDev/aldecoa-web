// Hero.jsx
import Container from "../components/Container";
import heroData from "../data/hero.json";
import site from "../data/site.json";
import Image from "next/image"; // ← next/image para el poster

export default function Hero() {
  const { badge, description, title, logo } = heroData;
  const contact = site.contact;

  return (
    <section
      id={site.navigation[0].href.substring(1)}
      aria-label="Sección principal"
      className="relative min-h-screen flex items-start lg:items-center pt-20 sm:pt-20 overflow-hidden bg-[#111111]"
    >
      {/* decoraciones fondo */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container opacity-5 kinetic-slash" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[40px] border-red-600/10 rotate-45" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-14 lg:py-0">

        {/* TEXTO */}
        {/* ↓ cambiado de <header> a <div> — solo debe haber un <header> por página */}
        <div className="max-w-3xl w-full">

          {/* ↓ cambiado a <p> con role visual — no es un heading semántico */}
          <p className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary-container text-white text-[9px] sm:text-[10px] font-extrabold tracking-[0.3em] uppercase mb-4 sm:mb-6">
            {badge}
          </p>

          {/* ↓ el h1 es correcto aquí, pero asegúrate que title.line1, highlight
              y line2 juntos formen una frase con keywords reales, por ejemplo:
              "Agencia de Marketing y Entretenimiento en el Sur de México" */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline leading-[0.9] tracking-tighter text-white mb-5 sm:mb-8 uppercase">
            {title.line1}{" "}
            <span className="text-primary-container">{title.highlight}</span>{" "}
            {title.line2}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-on-background/80 font-body max-w-xl mb-7 sm:mb-10 leading-relaxed">
            {description}
          </p>

          <nav
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            aria-label="Acciones principales"
          >
            <a
              href={`https://api.whatsapp.com/send?phone=${contact.phone_main}&text=Hola%20me%20interesa%20información%20sobre%20sus%20servicios.%20¿Podrían%20apoyarme%20con%20una%20cotización?`}
              className="bg-primary-container text-white px-6 py-4 sm:px-10 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 hover:translate-x-1 hover:-translate-y-1 transition-all w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              // ↓ aria-label más descriptivo con nombre de empresa
              aria-label="Contactar a ALDECOA por WhatsApp"
            >
              Contáctanos por WhatsApp
            </a>

            <a
              href={site.navigation[2].href}
              className="border-2 border-white/20 text-white px-6 py-4 sm:px-10 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm hover:border-red-600 transition-colors flex items-center justify-center w-full sm:w-auto"
              aria-label="Ver servicios de marketing y entretenimiento de ALDECOA"
            >
              Conoce nuestros servicios
            </a>
          </nav>
        </div>

        {/* VIDEO */}
        <figure
          className="relative hidden lg:block"
          // ↓ añadido para accesibilidad y SEO
          aria-label="Video de presentación de ALDECOA"
        >
          <div className="aspect-square bg-white dark:bg-white relative overflow-hidden">
            {/* ↓ poster como next/image para que Google pueda indexar la imagen
                y mejora el LCP (Largest Contentful Paint) */}
            <Image
              src={logo}
              alt="ALDECOA agencia de marketing y entretenimiento en el sur de México"
              fill
              priority           // ← LCP crítico, carga primero
              className="object-contain p-10"
              sizes="(max-width: 1024px) 0px, 50vw"

            />

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              // ↓ sin poster aquí porque ya tenemos el Image encima como fallback
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            >
              <source src={heroData.video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 border-[20px] border-red-600/20 pointer-events-none" />
          </div>

          {/* ↓ figcaption oculto visualmente pero legible por Google */}
          <figcaption className="sr-only">
            Presentación de servicios de ALDECOA — agencia de marketing, publicidad y entretenimiento
          </figcaption>
        </figure>

      </Container>
    </section>
  );
}