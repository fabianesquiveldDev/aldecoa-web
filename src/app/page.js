// app/page.js
import Hero from "@/sections/Hero";
import Nosotros from "@/sections/Nosotros";
import Servicios from "@/sections/Servicios";
import PorqueElegirnos from "@/sections/PorqueElegirnos";
import PortfolioPreview from "@/sections/PortfolioPreview";
import Clientes from "@/sections/clientes";
import Contacto from "@/sections/Contacto";
import Testimonios from "@/sections/Testimonios";
import Cobertura from "@/sections/Cobertura";

// ─── METADATA DE LA HOME ──────────────────────────────────────────────────────
export const metadata = {
  // ANTES: title: "Inicio" → generaba "Inicio | ALDECOA" (muy genérico)
  // AHORA: título completo y descriptivo para Google
  // El home es la página más importante — no debe usar el template
  title: {
    absolute: "ALDECOA 360 |  Agencia de Marketing y Estrategas de servicios Integrales en el Sur de México",
  },
  description:
    "ALDECOA 360 es la agencia líder en el sur de México especializada en marketing, publicidad, entretenimiento, shows promocionales y activaciones de marca. Hacemos crecer tu negocio.",
  keywords: [
    "agencia de marketing sur de México",
    "publicidad Tabasco",
    "publicidad Chiapas",
    "entretenimiento empresarial",
    "shows promocionales México",
    "activaciones de marca",
    "agencia publicitaria Villahermosa",
    "ALDECOA 360",
  ],
  alternates: {
    canonical: "https://www.aldecoa360.com",
  },
  openGraph: {
    url: "https://www.aldecoa360.com",
    title: "ALDECOA 360 | Agencia de Marketing y Estrategas de servicios Integrales en el Sur de México",
    description:
      "Marketing, publicidad, entretenimiento y activaciones de marca para empresas en el sur de México.",
  },
};

// ─── STRUCTURED DATA WEBPAGE ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ALDECOA 360 | Agencia de Marketing y Estrategas de servicios Integrales en el Sur de México",
  url: "https://www.aldecoa360.com",
  description:
    "Agencia líder en marketing, publicidad, entretenimiento y shows promocionales en el sur de México.",
  inLanguage: "es-MX",
  isPartOf: {
    "@type": "WebSite",
    name: "ALDECOA 360",
    url: "https://www.aldecoa360.com",
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/*
        En Next.js App Router el JSON-LD en page.js va directo aquí.
        Next.js lo eleva automáticamente al <head> durante el SSR,
        a diferencia del layout donde sí teníamos que moverlo manualmente.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Nosotros />
      <Servicios />
      <PorqueElegirnos />
      <PortfolioPreview />
      <Clientes />
      <Testimonios />
      <Cobertura />
      <Contacto />
    </>
  );
}