// layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Epilogue, Manrope } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-epilogue",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-manrope",
});

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata = {
  title: {
    default: "ALDECOA | Agencia de Marketing y Entretenimiento en el Sur de México",
    template: "%s | ALDECOA",
  },
  description:
    "ALDECOA es la agencia líder en el sur de México especializada en marketing, publicidad, entretenimiento, shows promocionales y activaciones de marca.",
  keywords: [
    "agencia de marketing sur de México",
    "publicidad Tabasco",
    "publicidad Chiapas",
    "entretenimiento empresarial",
    "shows promocionales México",
    "activaciones de marca",
    "agencia publicitaria Villahermosa",
    "ALDECOA",
  ],
  metadataBase: new URL("https://www.aldecoa360.com"),
  // ❌ ELIMINADO: alternates.canonical aquí — causaba que TODAS las páginas
  // tuvieran canonical apuntando al home, lo que confunde a Google.
  // El canonical se pone en cada page.js individualmente.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.aldecoa360.com",
    siteName: "ALDECOA",
    title: "ALDECOA | Agencia de Marketing y Entretenimiento en el Sur de México",
    description:
      "Marketing, publicidad, entretenimiento y activaciones de marca para empresas en el sur de México.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALDECOA Agencia de Marketing y Entretenimiento en el Sur de México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALDECOA | Agencia de Marketing y Entretenimiento en el Sur de México",
    description:
      "Marketing, publicidad, entretenimiento y activaciones de marca para empresas en el sur de México.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
// Usamos MarketingAgency (más específico que Organization) — coincide con
// el schema del Footer que ya generamos anteriormente.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",  // consistente con Footer.jsx
  name: "ALDECOA 360",
  url: "https://www.aldecoa360.com",
  logo: "https://www.aldecoa360.com/logo.png",
  description:
    "Agencia de marketing, publicidad, entretenimiento y shows promocionales en el sur de México.",
  areaServed: [
    "Tabasco",
    "Chiapas",
    "Campeche",
    "Yucatán",
    "Quintana Roo",
    "Veracruz",
    "Oaxaca",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Villahermosa",
    addressRegion: "Tabasco",
    addressCountry: "MX",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
    telephone: "+52-993-461-8119",
  },
  // Agrega aquí todas las redes sociales del cliente
  sameAs: [
    "https://www.facebook.com/aldecoamkt",
    // "https://www.instagram.com/aldecoa360",  // ← descomenta y completa
    // "https://www.tiktok.com/@aldecoa360",    // ← si tienen TikTok
  ],
};

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`dark ${epilogue.variable} ${manrope.variable}`}>
      <head>
        {/*
          JSON-LD va en <head>, no en <body>.
          Next.js App Router permite poner <script> directamente aquí.
          Antes estaba en <body> lo cual es técnicamente incorrecto.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-manrope">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}