"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import site from "../data/site.json";
import portafolioPrwData from "../data/PortfolioPreview.json";

function GridItem({ item, mobile = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (item.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [item.type]);

  const baseClass = mobile
    ? `
      group relative overflow-hidden
      shrink-0 w-[85vw] snap-start aspect-video
      bg-surface-container
      border border-white/10
      shadow-[8px_8px_0px_rgba(0,0,0,0.35)]
    `
    : `
      group relative overflow-hidden bg-surface-container
      ${item.span ?? ""}
      ${item.ratio ?? "aspect-square"}
    `;

  if (item.type === "video") {
    return (
      <li ref={ref} className={baseClass}>

        {!visible && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="h-14 w-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
              <span className="text-white text-2xl ml-1">▶</span>
            </div>
          </div>
        )}

        {visible && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&rel=0&vq=hd720`}
            title={item.title || "Video ALDECOA"}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}

        <div className="absolute left-0 top-0 z-30 px-3 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest">
          Video
        </div>
      </li>
    );
  }

  return (
    <li className={baseClass}>
      <Image
        src={item.image}
        alt={`${item.title || item.category} — proyecto de ALDECOA 360`}
        fill
        loading="lazy"
        sizes={mobile ? "85vw" : "(max-width:768px) 100vw, 25vw"}
        className="object-cover transition-all duration-700 group-hover:scale-105"
      />

     

      {mobile && (
        <>
          <div className="absolute left-0 top-0 h-full w-1.5 bg-primary" />
          <div className="absolute right-4 top-4 h-10 w-10 border border-white/20 rotate-45" />
        </>
      )}

      <div className="absolute bottom-4 left-4 right-4 z-20">
        <p className="inline-block mb-2 bg-primary px-2 py-1 text-[9px] font-black text-white uppercase tracking-widest shadow-lg">
            {item.category}
        </p>

        {item.title && (
          <h3 className="text-xl font-black text-white leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {item.title}
          </h3>
        )}
      </div>
    </li>
  );
}

function MobileCarousel({ title, children }) {
  return (
    <div className="md:hidden">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h3 className="text-white font-black uppercase text-lg tracking-tight">
            {title}
          </h3>
        </div>

        <span className="text-white/40 text-xs font-bold uppercase">
          Desliza →
        </span>
      </div>

      <div className="relative">
        

        <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-8 px-8 pb-3 list-none">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default function PortfolioPreview() {
  const proyectos = portafolioPrwData.PortfolioPreview;
  const imagenes = proyectos.filter((item) => item.type !== "video");
  const videos = proyectos.filter((item) => item.type === "video");

  return (
    <section
      id={site.navigation[3].href.substring(1)}
      aria-labelledby="portfolio-titulo"
      className="py-24 bg-surface"
    >
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <h2
            id="portfolio-titulo"
            className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter"
          >
            Nuestro trabajo
          </h2>

          <p className="text-primary font-bold tracking-widest uppercase text-sm mt-4">
            Momentos que definen marcas
          </p>
        </div>

        {/* DESKTOP */}
        <ul className="hidden md:grid grid-cols-4 gap-4 list-none">
          {proyectos.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </ul>

        {/* MÓVIL: imágenes */}
        <MobileCarousel title="Galería">
          {imagenes.map((item, index) => (
            <GridItem key={index} item={item} mobile />
          ))}
        </MobileCarousel>

        {/* MÓVIL: videos */}
        {videos.length > 0 && (
          <div className="mt-10">
            <MobileCarousel title="Videos">
              {videos.map((item, index) => (
                <GridItem key={index} item={item} mobile />
              ))}
            </MobileCarousel>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Link
            href="/portfolioMas"
            aria-label="Ver más proyectos de marketing y entretenimiento de ALDECOA 360"
            className="
              border border-primary text-primary
              px-10 py-3
              font-headline font-black tracking-widest uppercase text-sm
              hover:bg-primary hover:text-white hover:-translate-y-1
              transition-all duration-300
            "
          >
            Ver más proyectos →
          </Link>
        </div>
      </div>
    </section>
  );
}