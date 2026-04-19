import Link from 'next/link';
import Script from 'next/script';
import sitenavLinks from "../data/site.json"
import legalLinksData from "../data/legalLinks.json"

// JSON-LD: datos estructurados de la empresa (SEO local)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'Aldecoa 360',
  url: 'https://www.aldecoa360.com',
  logo: 'https://www.aldecoa360.com/logo.png', // cambia por la ruta real
  description:
    'Agencia de marketing y estrategia de marca en el sureste mexicano. Especialistas en Tabasco y la región.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Villahermosa',
    addressRegion: 'Tabasco',
    addressCountry: 'MX',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 17.9869,
      longitude: -92.9303,
    },
    geoRadius: '500000', // cubre sureste mexicano
  },
  sameAs: [
    // agrega tus redes sociales reales
    'https://www.instagram.com/aldecoa360',
    'https://www.facebook.com/aldecoa360',
  ],
};



export default function Footer() {

  
  const { navigation } = sitenavLinks; 
  const { legalLinks } = legalLinksData;

  return (
    <>
      {/* JSON-LD inyectado en el <head> via next/script */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      <footer
        aria-label="Pie de página de Aldecoa 360"
        className="bg-[#0E0E0E] border-t border-white/5 w-full"
      >
        <div className="
          max-w-7xl mx-auto
          px-6 sm:px-8
          py-14 sm:py-16
          grid gap-12
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        ">

          {/* Marca — semántica con <address> para SEO local */}
          <div className="space-y-5 text-center sm:text-left">
            {/*
              Usa <p> con aria-label en lugar de <span> mudo.
              Si el logo ya aparece en el <header> como <h1>, no lo repitas como heading.
            */}
            <p
              aria-label="Aldecoa 360 - Agencia de marketing en el sureste mexicano"
              className="text-2xl font-black text-white uppercase tracking-tight"
            >
              ALDECOA
            </p>

            {/*
              <address> le indica a Google que este bloque
              contiene información de contacto/localización real.
            */}
            <address className="not-italic">
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                Expertos en detonar marcas en el sureste mexicano.
                Estrategia y ejecución bajo una misma visión.
              </p>
              {/* Agrega teléfono y ciudad real — ayuda al SEO local */}
              <p className="text-zinc-500 text-xs mt-3">
                Villahermosa, Tabasco · México
              </p>
            </address>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces de navegación en el pie de página">
            <div className="space-y-5 text-center sm:text-left">
              <h2 className="text-white font-semibold uppercase text-xs tracking-[0.25em]">
                Navegación
              </h2>
              <ul className="space-y-3" role="list">
                {navigation.map(({ href, label }) => (
                  <li key={href}>
                    {/*
                      Link de Next.js en lugar de <a>:
                      - prefetch automático
                      - navegación sin recarga completa
                      - mejor puntaje en Core Web Vitals
                    */}
                    <Link
                      href={href}
                      className="footer-link"
                      aria-label={`Ir a ${label}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Legal */}
          <nav aria-label="Enlaces legales en el pie de página">
            <div className="space-y-5 text-center sm:text-left">
              <h2 className="text-white font-semibold uppercase text-xs tracking-[0.25em]">
                Legal
              </h2>
              <ul className="space-y-3" role="list">
                {legalLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Copyright */}
          <div className="space-y-5 text-center sm:text-left">
            <h2 className="text-white font-semibold uppercase text-xs tracking-[0.25em]">
              Copyright
            </h2>
            {/*
              <small> es el elemento semántico correcto para
              avisos legales y copyright según HTML5.
            */}
            <small className="block text-zinc-400 text-xs leading-relaxed not-italic">
              © {new Date().getFullYear()} ALDECOA 360.
              <br />
              Todos los derechos reservados.
            </small>
          </div>

        </div>
      </footer>
    </>
  );
}