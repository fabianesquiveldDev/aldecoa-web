// page.js - Página de detalle de servicio
import servicesData from "../../../data/services.json";
import site from "../../../data/site.json";

const WHATSAPP_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function WhatsAppButton({ url, label }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 transition-all duration-200 whitespace-nowrap"
      style={{
        background: "#dc2626",
        color: "#fff",
        padding: "15px 28px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        fontSize: 11,
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.12)",
        textDecoration: "none",
        boxShadow: "0 10px 30px rgba(220,38,38,0.2)",
      }}
    >
      <span
        className="rounded-full flex items-center justify-center shrink-0"
        style={{ background: "rgba(255,255,255,0.18)", width: 30, height: 30 }}
      >
        {WHATSAPP_ICON}
      </span>
      <span>{label}</span>
      <span style={{ fontSize: 16, fontWeight: 900 }}>→</span>
    </a>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center" style={{ gap: 10, marginBottom: 10 }}>
      <span
        className="block rounded-full"
        style={{ width: 24, height: 2, background: "#dc2626" }}
      />
      <span
        className="font-black uppercase"
        style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)" }}
      >
        {text}
      </span>
    </div>
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const servicio = servicesData.servicios.find((s) => s.slug === slug);

  if (!servicio) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#111111", color: "#fff" }}
      >
        <div className="text-center">
          <span
            className="block mx-auto mb-6 rounded-full"
            style={{ width: 40, height: 3, background: "#dc2626" }}
          />
          <p
            className="font-black uppercase"
            style={{ fontSize: 12, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)" }}
          >
            Servicio no encontrado
          </p>
        </div>
      </main>
    );
  }

  const { nombreSeccion, descripcion, servicios, id_seccion } = servicio;
  const serviceCount = servicios?.length ?? 0;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${site.contact.phone}&text=Hola%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(nombreSeccion)}`;

  return (
    <main style={{ background: "#111111", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Número de fondo */}
        <span
          className="absolute select-none pointer-events-none font-black hidden lg:block"
          style={{
            top: 60,
            right: 32,
            fontSize: 140,
            lineHeight: 1,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-4px",
            zIndex: 0,
          }}
        >
          {String(id_seccion ?? "01").padStart(2, "0")}
        </span>

        {/* Grid interior */}
        <div
          className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 items-start"
          style={{ maxWidth: 1100, gap: 60, padding: "120px 40px 56px" }}
        >

          {/* ── COL IZQUIERDA ── */}
          <div>

            {/* Breadcrumb */}
            <div className="flex items-center" style={{ gap: 10, marginBottom: 28 }}>
              <span
                className="font-black uppercase"
                style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)" }}
              >
                Servicios
              </span>
              <span
                style={{ width: 20, height: 1, background: "rgba(255,255,255,0.15)", display: "inline-block" }}
              />
              <span
                className="font-black uppercase"
                style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}
              >
                {nombreSeccion}
              </span>
            </div>

            {/* Título */}
            <h1
              className="font-black uppercase"
              style={{ fontSize: 52, letterSpacing: "-1.5px", lineHeight: 0.95, marginBottom: 22 }}
            >
              {nombreSeccion}
            </h1>

            {/* Barra decorativa */}
            <div className="flex items-center" style={{ gap: 14, marginBottom: 24 }}>
              <span style={{ display: "block", width: 48, height: 3, background: "#dc2626", borderRadius: 2 }} />
              <span style={{ display: "block", width: 8, height: 3, background: "rgba(220,38,38,0.4)", borderRadius: 2 }} />
            </div>

            {/* Descripción */}
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, maxWidth: 380 }}>
              {descripcion ??
                "Soluciones estratégicas diseñadas para impulsar tu marca y maximizar tu presencia en el mercado digital."}
            </p>

            {/* Stat */}
            <div className="flex items-center" style={{ gap: 16, marginTop: 36 }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "14px 22px",
                }}
              >
                <span
                  className="font-black block"
                  style={{ fontSize: 26, lineHeight: 1 }}
                >
                  {String(serviceCount).padStart(2, "0")}
                </span>
                <span
                  className="font-black uppercase block"
                  style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginTop: 3 }}
                >
                  {serviceCount === 1 ? "Servicio" : "Servicios"}
                </span>
              </div>
              <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)" }} />
              <span
                className="font-black uppercase"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)" }}
              >
                Disponibles
              </span>
            </div>
          </div>

          {/* ── COL DERECHA ── */}
          <div>

            {/* Header */}
            <div className="flex items-center" style={{ gap: 10, marginBottom: 28 }}>
              <span style={{ display: "block", width: 3, height: 22, background: "#dc2626", borderRadius: 2 }} />
              <h2
                className="font-black uppercase"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.45)" }}
              >
                Lo que incluye
              </h2>
            </div>

            {/* Lista de subservicios */}
            <div
              className="flex flex-col"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {servicios?.map((item, index) => (
                <article
                  key={item.id_servicio}
                  className="group flex items-center transition-all duration-200"
                  style={{
                    gap: 16,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Número circular */}
                  <span
                    className="flex items-center justify-center font-black shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#dc2626",
                      fontSize: 10,
                      color: "#fff",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-black uppercase"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {item.nombre}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{ maxWidth: 1100, padding: "48px 40px", gap: 32 }}
        >
          <div>
            <SectionLabel text="¿Listo para empezar?" />
            <h2
              className="font-black uppercase"
              style={{ fontSize: 30, letterSpacing: "-0.5px", lineHeight: 1.1 }}
            >
              Hablemos de tu{" "}
              <span style={{ color: "#dc2626" }}>proyecto</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.6, marginTop: 10, maxWidth: 360 }}>
              Cuéntanos qué necesitas y te asesoramos sin compromiso. Un equipo especialista está listo para atenderte.
            </p>
          </div>

          <WhatsAppButton url={whatsappUrl} label="Solicitar información" />
        </div>
      </section>
    </main>
  );
}