// servicios/[slug]/page.js
import servicesData from "../../../data/services.json";
import site from "../../../data/site.json";
import Script from "next/script";
import ServiceWhatsAppButton from "../../../components/ServiceWhatsAppButton";



// ─── Pre-renderiza todas las rutas en build time ───────────────────────────
// Sin esto Next.js genera cada página bajo demanda (más lento, peor SEO)
export async function generateStaticParams() {
  return servicesData.servicios.map((s) => ({ slug: s.slug }));
}

// ─── Meta tags dinámicos por servicio ─────────────────────────────────────
// Google usa title y description para mostrar el resultado en buscadores
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const servicio = servicesData.servicios.find((s) => s.slug === slug);

  if (!servicio) {
    return {
      title: "Servicio no encontrado | Aldecoa 360",
    };
  }

  const { nombreSeccion, descripcion } = servicio;
  const title = `${nombreSeccion} | Aldecoa 360`;
  const description =
    descripcion ??
    `Descubre nuestros servicios de ${nombreSeccion}. Agencia de marketing en el sureste mexicano.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.aldecoa360.com/servicios/${slug}`,
      siteName: "Aldecoa 360",
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://www.aldecoa360.com/servicios/${slug}`,
    },
  };
}


// ─── Íconos ────────────────────────────────────────────────────────────────
const WHATSAPP_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Componentes ───────────────────────────────────────────────────────────


function SectionLabel({ text }) {
  return (
    <div className="flex items-center" style={{ gap: 10, marginBottom: 10 }}>
      <span className="block rounded-full" style={{ width: 24, height: 2, background: "#dc2626" }} />
      <span className="font-black uppercase" style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)" }}>
        {text}
      </span>
    </div>
  );
}


// ─── Page ──────────────────────────────────────────────────────────────────
export default async function Page({ params }) {
  
  const { slug } = await params;
  const servicio = servicesData.servicios.find((s) => s.slug === slug);

  if (!servicio) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#111111", color: "#fff" }}>
        <div className="text-center">
          <span className="block mx-auto mb-6 rounded-full" style={{ width: 40, height: 3, background: "#dc2626" }} />
          <p className="font-black uppercase" style={{ fontSize: 12, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)" }}>
            Servicio no encontrado
          </p>
        </div>
      </main>
    );
  }

  const { nombreSeccion, descripcion, servicios, id_seccion } = servicio;
  const serviceCount = servicios?.length ?? 0;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${site.contact.phone_main}&text=Hola%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(nombreSeccion)}`;

  // JSON-LD: BreadcrumbList — Google lo muestra en los resultados de búsqueda
  // Ejemplo: aldecoa360.com › Servicios › Branding
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.aldecoa360.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://www.aldecoa360.com/servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: nombreSeccion,
        item: `https://www.aldecoa360.com/servicios/${slug}`,
      },
    ],
  };

  // JSON-LD: Service — le dice a Google qué tipo de servicio es y quién lo ofrece
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nombreSeccion,
    description:
      descripcion ??
      `Servicios de ${nombreSeccion} en el sureste mexicano.`,
    provider: {
      "@type": "Organization",
      name: "Aldecoa 360",
      url: "https://www.aldecoa360.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Sureste de México",
    },
    url: `https://www.aldecoa360.com/servicios/${slug}`,
  };

  return (
    <>
      {/* JSON-LD inyectado en <head> */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />

      <main style={{ background: "#111111", color: "#fff", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section
          aria-label={`Detalle del servicio: ${nombreSeccion}`}
          className="relative overflow-hidden"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >

          {/* Glow decorativo */}
          <div
            className="absolute pointer-events-none rounded-full"
            aria-hidden="true"
            style={{ top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)" }}
          />

          {/* Número decorativo */}
          <span
            className="absolute select-none pointer-events-none font-black hidden lg:block"
            aria-hidden="true"
            style={{ top: 60, right: 32, fontSize: 140, lineHeight: 1, color: "rgba(255,255,255,0.025)", letterSpacing: "-4px", zIndex: 0 }}
          >
            {String(id_seccion ?? "01").padStart(2, "0")}
          </span>

          <div
            className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 items-start"
            style={{
              maxWidth: 1100,
              gap: "clamp(24px, 5vw, 60px)",
              padding: "clamp(96px, 12vw, 120px) clamp(20px, 5vw, 40px) clamp(40px, 6vw, 56px)",
            }}
          >

            {/* ── COL IZQUIERDA ── */}
            <div>

              {/* Breadcrumb — semántico con nav + aria-label */}
              <nav aria-label="Ruta de navegación" className="flex items-center flex-wrap" style={{ gap: 8, marginBottom: 20 }}>
                <ol
                  style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, listStyle: "none", margin: 0, padding: 0 }}
                  itemScope
                  itemType="https://schema.org/BreadcrumbList"
                >
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <a
                      itemProp="item"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        itemProp="name"
                        className="font-black uppercase"
                        style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)" }}
                      >
                        Servicios
                      </span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li aria-hidden="true">
                    <span style={{ width: 16, height: 1, background: "rgba(255,255,255,0.15)", display: "inline-block", flexShrink: 0 }} />
                  </li>
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span
                      itemProp="name"
                      aria-current="page"
                      className="font-black uppercase"
                      style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}
                    >
                      {nombreSeccion}
                    </span>
                    <meta itemProp="position" content="2" />
                  </li>
                </ol>
              </nav>

              {/* Título principal */}
              <h1
                className="font-black uppercase"
                style={{ fontSize: "clamp(28px, 8vw, 52px)", letterSpacing: "-1.5px", lineHeight: 0.95, marginBottom: 20 }}
              >
                {nombreSeccion}
              </h1>

              {/* Barra decorativa */}
              <div className="flex items-center" aria-hidden="true" style={{ gap: 14, marginBottom: 20 }}>
                <span style={{ display: "block", width: 48, height: 3, background: "#dc2626", borderRadius: 2 }} />
                <span style={{ display: "block", width: 8, height: 3, background: "rgba(220,38,38,0.4)", borderRadius: 2 }} />
              </div>

              {/* Descripción */}
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.7, maxWidth: 380 }}>
                {descripcion ?? "Soluciones estratégicas diseñadas para impulsar tu marca y maximizar tu presencia en el mercado digital."}
              </p>

              {/* Stat */}
              <div className="flex items-center" style={{ gap: 16, marginTop: 28 }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px 22px" }}>
                  <span className="font-black block" style={{ fontSize: 26, lineHeight: 1 }}>
                    {String(serviceCount).padStart(2, "0")}
                  </span>
                  <span className="font-black uppercase block" style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginTop: 3 }}>
                    {serviceCount === 1 ? "Servicio" : "Servicios"}
                  </span>
                </div>
                <div aria-hidden="true" style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)" }} />
                <span className="font-black uppercase" style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)" }}>
                  Disponibles
                </span>
              </div>
            </div>

            {/* ── COL DERECHA ── */}
            <div>

              <div
                className="block lg:hidden"
                aria-hidden="true"
                style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 28 }}
              />

              <div className="flex items-center" style={{ gap: 10, marginBottom: 20 }}>
                <span aria-hidden="true" style={{ display: "block", width: 3, height: 22, background: "#dc2626", borderRadius: 2 }} />
                <h2 className="font-black uppercase" style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.45)" }}>
                  Lo que incluye
                </h2>
              </div>

              {/* Lista de subservicios */}
              <ul
                className="flex flex-col"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)", listStyle: "none", margin: 0, padding: 0 }}
                aria-label={`Servicios incluidos en ${nombreSeccion}`}
              >
                {servicios?.map((item, index) => (
                  <li
                    key={item.id_servicio}
                    className="group flex items-center transition-all duration-200"
                    style={{ gap: 16, paddingTop: 14, paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span
                      className="flex items-center justify-center font-black shrink-0"
                      aria-hidden="true"
                      style={{ width: 30, height: 30, borderRadius: "50%", background: "#dc2626", fontSize: 10, color: "#fff" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* h3 para jerarquía correcta: h1 > h2 > h3 */}
                    <h3
                      className="font-black uppercase"
                      style={{ fontSize: "clamp(11px, 2vw, 12px)", letterSpacing: "0.08em", color: "rgba(255,255,255,0.85)" }}
                    >
                      {item.nombre}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section
          aria-label="Llamada a la acción"
          style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div
            className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between"
            style={{ maxWidth: 1100, padding: "clamp(28px, 6vw, 48px) clamp(20px, 5vw, 40px)", gap: 24 }}
          >
            <div>
              <SectionLabel text="¿Listo para empezar?" />
              <h2 className="font-black uppercase" style={{ fontSize: "clamp(20px, 5vw, 30px)", letterSpacing: "-0.5px", lineHeight: 1.1 }}>
                Hablemos de tu <span style={{ color: "#dc2626" }}>proyecto</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.6, marginTop: 8, maxWidth: 360 }}>
                Cuéntanos qué necesitas y te asesoramos sin compromiso. Un equipo especialista está listo para atenderte.
              </p>
            </div>

            <ServiceWhatsAppButton
              url={whatsappUrl}
              label="Solicitar información"
              serviceName={nombreSeccion}
            />
          </div>
        </section>

      </main>
    </>
  );
}