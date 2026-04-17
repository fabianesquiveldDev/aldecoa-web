import Container from "../components/Container";
import heroData from "../data/hero.json";
import site from "../data/site.json";

export default function Hero() {
  const { badge, description, title } = heroData;
  const contact = site.contact;



  return (

    <section
      id={site.navigation[0].href.substring(1)}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#111111]"
    >

      {/* decoraciones fondo */}
      <div className="absolute inset-0 z-0">

        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container opacity-5 kinetic-slash" />

        <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[40px] border-red-600/10 rotate-45" />

      </div>


      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* texto */}
        <div className="max-w-3xl">

          <span className="inline-block px-4 py-1.5 bg-primary-container text-white text-[10px] font-extrabold tracking-[0.3em] uppercase mb-6">

            {badge}

          </span>


          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline leading-[0.9] tracking-tighter text-white mb-8 t uppercase">

            {title.line1} <span className="text-primary-container">

              {title.highlight}

            </span> {title.line2}

          </h1>


          <p className="text-lg md:text-xl text-on-background/80 font-body max-w-xl mb-10 leading-relaxed">

            {description}

          </p>


          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href={`https://api.whatsapp.com/send?phone=${contact.phone_main}&text=Hola%20me%20interesa%20información%20sobre%20sus%20servicios.%20¿Podrían%20apoyarme%20con%20una%20cotización?`}
              className="bg-primary-container text-white px-10 py-5 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:translate-x-1 hover:-translate-y-1 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >

              Contáctanos por WhatsApp

            </a>


            <a
              href={site.navigation[2].href}
              className="border-2 border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:border-red-600 transition-colors flex items-center justify-center"
            >
              Conoce nuestros servicios
            </a>

          </div>

        </div>


        {/* video */}
        <div className="relative hidden lg:block">

          <div className="aspect-square bg-surface-container-highest relative overflow-hidden">

           <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero.jpg"
              className="
                w-full
                h-full
                object-cover
                grayscale
                hover:grayscale-0
                transition-all
                duration-700
              "
            >

              <source
                src={heroData.video}
                type="video/mp4"
              />

            </video>
            <div className="absolute inset-0 border-[20px] border-red-600/20 pointer-events-none" />

          </div>

        </div>

      </Container>

    </section>

  );
  
}