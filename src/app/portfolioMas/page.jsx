// app/portafolioMas/PortafolioPage.jsx - Página de portafolio con galería de imágenes y modal
"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import portafolioData from "@/data/portafolio.json";

const NAV_BTN = "group hidden sm:flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 focus:outline-none";
const ICON_BOX = "w-9 h-9 flex items-center justify-center border border-white/20 group-hover:border-white/60 transition-colors duration-200";

const ChevronIcon = ({ dir }) => (
  <svg
    viewBox="0 0 16 16"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points={dir === "left" ? "10 4 6 8 10 12" : "6 4 10 8 6 12"} />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="2" y1="2" x2="14" y2="14" />
    <line x1="14" y1="2" x2="2" y2="14" />
  </svg>
);

export default function PortfolioMasPage() {
  // Mapeamos objetos completos para acceder a nombre, cliente, etc.
  const imagenes = portafolioData.images;

  const [selected, setSelected] = useState(null);
  const [isTouch, setIsTouch]   = useState(null);
  const tapStartY = useRef(null);

  const close = () => setSelected(null);
  const go = useCallback(
    (dir) => setSelected((p) => (p + dir + imagenes.length) % imagenes.length),
    [imagenes.length]
  );

  const handleTapDown = (e) => {
    tapStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleTapUp = (i) => (e) => {
    const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    if (tapStartY.current !== null && Math.abs(endY - tapStartY.current) < 10) {
      setSelected(i);
    }
    tapStartY.current = null;
  };

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const handlers = {
      Escape:     close,
      ArrowRight: () => go(1),
      ArrowLeft:  () => go(-1),
    };
    const onKey = (e) => handlers[e.key]?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, go]);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  // Genera el alt más descriptivo posible con lo disponible en el JSON
  const getAlt = (img, index, context = "galeria") => {
    const base = img.nombre
      ? `${img.nombre}${img.cliente ? ` — ${img.cliente}` : ""}`
      : `Proyecto de marketing en el sureste mexicano ${index + 1}`;

    return context === "modal"
      ? `${base} — vista ampliada | Aldecoa 360`
      : `${base} | Aldecoa 360`;
  };

  return (
    <section
      aria-label="Galería de proyectos de Aldecoa 360"
      className="py-24 bg-surface min-h-screen"
    >
      <div className="container mx-auto px-8">

        {/* h1 con contexto de marca — más descriptivo para Google */}
        <h1 className="text-5xl md:text-7xl font-black font-headline text-white uppercase tracking-tighter mb-20">
          Portafolio{" "}
          <span className="text-white/30">· Aldecoa 360</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((img, i) => (
            <button
              key={i}
              type="button"
              onTouchStart={handleTapDown}
              onTouchEnd={handleTapUp(i)}
              onMouseDown={handleTapDown}
              onMouseUp={handleTapUp(i)}
              aria-label={img.nombre ? `Ver proyecto: ${img.nombre}` : `Ver proyecto ${i + 1}`}
              className="relative aspect-[7/5] overflow-hidden bg-surface-container group cursor-pointer select-none w-full p-0 border-0"
            >
              <Image
                src={img.url}
                alt={getAlt(img, i)}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-105 pointer-events-none"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 active:bg-white/10 transition-colors duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── MODAL ── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm px-3 py-4 sm:p-6"
          onClick={handleModalClick}
          role="dialog"
          aria-modal="true"
          aria-label={
            imagenes[selected]?.nombre
              ? `Proyecto: ${imagenes[selected].nombre}`
              : "Imagen ampliada"
          }
        >
          <div
            className="relative w-full max-w-5xl flex flex-col max-h-[100dvh]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Barra superior */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
              <span className="text-white/50 text-xs sm:text-sm font-mono tracking-widest">
                {String(selected + 1).padStart(2, "0")} / {String(imagenes.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar galería"
                className="group flex items-center gap-2 text-white/60 hover:text-white active:text-white transition-colors focus:outline-none -mr-1 p-1"
              >
                <span className="text-xs uppercase tracking-widest hidden sm:inline">Cerrar</span>
                <span className={`${ICON_BOX} w-9 h-9 sm:w-8 sm:h-8`}>
                  <CloseIcon />
                </span>
              </button>
            </div>

            {/* Imagen ampliada */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-surface-container">
              <Image
                key={selected}
                src={imagenes[selected].url}
                alt={getAlt(imagenes[selected], selected, "modal")}
                fill
                sizes="(max-width: 640px) 100vw, 80vw"
                priority
                loading="eager"
                className="object-contain"
              />

              {/* Zonas táctiles de navegación — solo mobile */}
              <div className="absolute inset-0 flex sm:hidden z-10">
                {[-1, 1].map((dir) => (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => go(dir)}
                    aria-label={dir === -1 ? "Imagen anterior" : "Siguiente imagen"}
                    className="w-1/2 h-full focus:outline-none"
                  />
                ))}
              </div>
            </div>

            {/* Navegación inferior */}
            <div className="flex items-center justify-between mt-2 sm:mt-3 px-1">
              <button
                type="button"
                onClick={() => go(-1)}
                className={NAV_BTN}
                aria-label="Imagen anterior"
              >
                <span className={ICON_BOX}><ChevronIcon dir="left" /></span>
                <span className="text-xs uppercase tracking-widest">Anterior</span>
              </button>

              <p className="sm:hidden text-white/30 text-xs tracking-widest" aria-hidden="true">
                ← toca lados →
              </p>

              {/* Indicadores de posición */}
              <div className="flex gap-1.5 items-center" role="tablist" aria-label="Navegación por imagen">
                {imagenes.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === selected}
                    aria-label={img.nombre ? `Ir a: ${img.nombre}` : `Ir a imagen ${i + 1}`}
                    onClick={() => setSelected(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                      i === selected ? "bg-white w-4" : "bg-white/30 w-1.5 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className={NAV_BTN}
                aria-label="Siguiente imagen"
              >
                <span className="text-xs uppercase tracking-widest">Siguiente</span>
                <span className={ICON_BOX}><ChevronIcon dir="right" /></span>
              </button>
            </div>

            {/* Nombre del proyecto si existe en el JSON */}
            {imagenes[selected]?.nombre && (
              <p className="text-center text-white/40 text-xs uppercase tracking-widest mt-3">
                {imagenes[selected].nombre}
                {imagenes[selected].cliente && (
                  <span className="text-white/20"> · {imagenes[selected].cliente}</span>
                )}
              </p>
            )}

          </div>
        </div>
      )}
    </section>
  );
}