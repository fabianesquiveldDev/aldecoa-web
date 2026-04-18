"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import site from "../data/site.json";

const ICONS = {
  inicio: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 7.5L8 2l6 5.5V14a.5.5 0 01-.5.5h-3V10h-5v4.5h-3A.5.5 0 012 14V7.5z" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),

  servicios: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),

  nosotros: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 14c0-2.761 2.686-5 6-5s6 2.239 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),

  contacto: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
};

const Logo = ({
  size = 40,
  textSize = "text-xl",
  tagSize = "text-[8px]",
  company,
  logo
}) => (
  <div className="flex items-center gap-3">

    <Image
      src={logo.src}
      alt="Aldecoa logo"
      width={size}
      height={size}
      className="object-contain"
    />

    <div className="flex flex-col">

      <span className={`${textSize} font-black text-white tracking-tighter font-headline uppercase`}>
        {company.name}
      </span>

      <span className={`${tagSize} font-bold text-primary tracking-[0.2em] uppercase -mt-1`}>
        {company.tagline}
      </span>

    </div>

  </div>
);

export default function Navbar() {

  const { navigation: navItems, company, logo } = site;

  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("inicio");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

    const handleKey = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, []);

  useEffect(() => {

    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };

  }, [sidebarOpen]);

  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) return;

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {
        threshold: 0.2,
        rootMargin: "0px 0px -60% 0px"
      }

    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();

  }, []);

  const isActive = (href) =>
    mounted && active === href.replace(/^[/#]+/, "");

  const isSidebarOpen = mounted && sidebarOpen;

  const closeSidebar = () => setSidebarOpen(false);

  return (

    <>
    
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]">

        <div className="px-6 py-4 grid grid-cols-3 items-center">

          {/* LOGO */}
          <Link href="/#inicio">

            <Logo
              size={40}
              company={company}
              logo={logo}
            />

          </Link>


          {/* MENU DESKTOP */}
          <div className="hidden md:flex justify-center gap-8">

            {navItems.map((item, i) => (

              <a
                key={i}
                href={`/${item.href}`}
                className={`font-headline font-black tracking-tight uppercase text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-white/70 hover:text-white"
                }`}
              >

                {item.label}

              </a>

            ))}

          </div>


          {/* BOTON MOBILE */}
          <div className="flex justify-end md:hidden col-start-3">

            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menú"
              className="flex flex-col gap-[5px] p-2 -mr-2 group"
            >

              <span className="block w-5 h-[1.5px] bg-white rounded-full"/>

              <span className="block w-[13px] h-[1.5px] bg-white/60 rounded-full group-hover:w-5 transition-all"/>

              <span className="block w-5 h-[1.5px] bg-white rounded-full"/>

            </button>

          </div>

          <div className="hidden md:block"/>

        </div>

      </nav>


      {/* OVERLAY */}
      <div
        onClick={closeSidebar}
        aria-hidden="true"
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 md:hidden"
        style={{
          opacity: isSidebarOpen ? 1 : 0,
          pointerEvents: isSidebarOpen ? "auto" : "none"
        }}
      />


      {/* SIDEBAR MOBILE */}
      <aside
        className="fixed top-0 left-0 h-full w-[260px] z-[70] bg-zinc-950 border-r border-white/[0.07] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden"
        style={{
          transform: isSidebarOpen
            ? "translateX(0)"
            : "translateX(-100%)"
        }}
      >

        <div className="flex items-center justify-between px-5 py-5 border-b border-white/[0.07]">

          <Logo
            size={32}
            textSize="text-sm"
            tagSize="text-[7px]"
            company={company}
            logo={logo}
          />

          <button
            onClick={closeSidebar}
            aria-label="Cerrar menú"
            className="p-1.5 text-white/40 hover:text-white"
          >

            ✕

          </button>

        </div>


        <nav className="flex flex-col py-3 flex-1">

          {navItems.map((item, i) => {

            const active_ = isActive(item.href);

            return (

              <a
                key={i}
                href={`/${item.href}`}
                onClick={closeSidebar}
                className="flex items-center gap-3.5 px-5 py-3.5 text-xs font-black uppercase tracking-[0.06em] border-l-2 transition-colors"
                style={{
                  borderLeftColor: active_
                    ? "#e63946"
                    : "transparent",

                  backgroundColor: active_
                    ? "rgba(230,57,70,0.08)"
                    : undefined
                }}
              >

                <span style={{
                  color: active_
                    ? "#e63946"
                    : "rgba(255,255,255,0.3)"
                }}>

                  {ICONS[item.label.toLowerCase()]}

                </span>

                <span style={{
                  color: active_
                    ? "#fff"
                    : "rgba(255,255,255,0.4)"
                }}>

                  {item.label}

                </span>

              </a>

            );

          })}

        </nav>


        <div className="px-5 py-5 border-t border-white/[0.07]">

          <p
            className="text-[10px] text-white/25 uppercase tracking-widest"
            suppressHydrationWarning
          >

            {mounted
              ? `© ${new Date().getFullYear()} ${company.name}`
              : ""
            }

          </p>

        </div>

      </aside>

    </>

  );

}