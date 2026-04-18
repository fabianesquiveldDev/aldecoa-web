// SectionTitle.jsx
export default function SectionTitle({ 
  title, 
  subtitle, 
  align = "center",
  as: Tag = "h2"  // ← flexible: pasa as="h1" en la hero, as="h2" en secciones
}) {

  // Genera un id limpio desde el título para deep linking
  const id = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>

      {subtitle && (
        // <span> con role="doc-subtitle" es más semántico que <p>
        <span 
          role="doc-subtitle"
          className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          {subtitle}
        </span>
      )}

      <Tag
        id={id}
        className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter"
      >
        {title}
      </Tag>

      <div className={`w-32 h-2 bg-red-600 mt-4 ${align === "center" ? "mx-auto" : ""}`} />

    </div>
  );
}