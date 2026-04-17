"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import portafolioData from "@/data/portafolio.json";

export default function PortfolioMasPage() {
  const imagenes = portafolioData.images.map((img) => img.url);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detectar si es dispositivo táctil
  useEffect(() => {
    const checkTouch = () =>
      setIsTouchDevice(
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
    checkTouch();
  }, []);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % imagenes.length);
  }, [imagenes.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  }, [imagenes.length]);

  // Cerrar con Escape y navegar con flechas
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goNext, goPrev]);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  return (
    <section className="py-24 bg-surface min-h-screen">
      <div className="container mx-auto px-8">

        {/* Título */}
        <div className="mb-20">
          <h1 className="
            text-5xl md:text-7xl
            font-black font-headline
            text-white uppercase tracking-tighter
          ">
            Portafolio
          </h1>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((src, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="
                relative aspect-[7/5] overflow-hidden
                bg-surface-container
                group cursor-pointer
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              "
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image
                src={src}
                alt={`Proyecto realizado ${index + 1}`}
                fill
                className={`
                  object-cover
                  transition-all duration-700
                  group-hover:scale-105
                  ${isTouchDevice
                    ? "grayscale-0"
                    : "grayscale group-hover:grayscale-0"
                  }
                `}
              />
              {/* Overlay sutil al hover en desktop */}
              {!isTouchDevice && (
                <span className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/10
                  transition-colors duration-500
                " />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {selectedIndex !== null && (
        <div
          className="
            fixed inset-0 z-50
            flex flex-col items-center justify-center
            bg-black/90 backdrop-blur-sm
            px-3 py-4 sm:p-6
          "
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          {/* Contenedor principal */}
          <div
            className="
              relative w-full max-w-5xl
              flex flex-col
              max-h-[100dvh]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Barra superior: contador + botón cerrar */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
              <span className="text-white/50 text-xs sm:text-sm font-mono tracking-widest">
                {String(selectedIndex + 1).padStart(2, "0")}
                <span className="mx-1">/</span>
                {String(imagenes.length).padStart(2, "0")}
              </span>

              <button
                onClick={closeModal}
                className="
                  group flex items-center gap-2
                  text-white/60 active:text-white hover:text-white
                  transition-colors duration-200
                  focus:outline-none
                  -mr-1 p-1
                "
                aria-label="Cerrar"
              >
                <span className="text-xs uppercase tracking-widest hidden sm:inline">
                  Cerrar
                </span>
                <span className="
                  w-9 h-9 sm:w-8 sm:h-8
                  flex items-center justify-center
                  border border-white/20 group-hover:border-white/60 group-active:border-white/60
                  transition-colors duration-200
                ">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <line x1="2" y1="2" x2="14" y2="14" />
                    <line x1="14" y1="2" x2="2" y2="14" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Imagen — usa aspect ratio en móvil, altura fija en desktop */}
            <div className="
              relative w-full
              aspect-[4/3] sm:aspect-[16/10]
              overflow-hidden bg-surface-container
            ">
              <Image
                key={selectedIndex}
                src={imagenes[selectedIndex]}
                alt={`Proyecto ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 80vw"
                priority
              />

              {/* Flechas superpuestas en móvil (toque lateral) */}
              <div className="absolute inset-0 flex sm:hidden">
                <button
                  onClick={goPrev}
                  className="w-1/2 h-full focus:outline-none"
                  aria-label="Imagen anterior"
                />
                <button
                  onClick={goNext}
                  className="w-1/2 h-full focus:outline-none"
                  aria-label="Siguiente imagen"
                />
              </div>
            </div>

            {/* Navegación inferior */}
            <div className="flex items-center justify-between mt-2 sm:mt-3 px-1">

              {/* Anterior — visible solo en sm+ */}
              <button
                onClick={goPrev}
                className="
                  group hidden sm:flex items-center gap-2
                  text-white/60 hover:text-white
                  transition-colors duration-200 focus:outline-none
                "
                aria-label="Imagen anterior"
              >
                <span className="
                  w-9 h-9 flex items-center justify-center
                  border border-white/20 group-hover:border-white/60
                  transition-colors duration-200
                ">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="10 4 6 8 10 12" />
                  </svg>
                </span>
                <span className="text-xs uppercase tracking-widest">Anterior</span>
              </button>

              {/* En móvil: hint de swipe-tap */}
              <p className="sm:hidden text-white/30 text-xs tracking-widest">
                ← toca lados →
              </p>

              {/* Dots */}
              <div className="flex gap-1.5 items-center">
                {imagenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`
                      h-1.5 rounded-full transition-all duration-300 focus:outline-none
                      ${i === selectedIndex
                        ? "bg-white w-4"
                        : "bg-white/30 w-1.5 hover:bg-white/60"
                      }
                    `}
                    aria-label={`Ir a imagen ${i + 1}`}
                  />
                ))}
              </div>

              {/* Siguiente — visible solo en sm+ */}
              <button
                onClick={goNext}
                className="
                  group hidden sm:flex items-center gap-2
                  text-white/60 hover:text-white
                  transition-colors duration-200 focus:outline-none
                "
                aria-label="Siguiente imagen"
              >
                <span className="text-xs uppercase tracking-widest">Siguiente</span>
                <span className="
                  w-9 h-9 flex items-center justify-center
                  border border-white/20 group-hover:border-white/60
                  transition-colors duration-200
                ">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 4 10 8 6 12" />
                  </svg>
                </span>
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}