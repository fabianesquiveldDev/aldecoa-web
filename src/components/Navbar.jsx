"use client";

import Image from "next/image";
import site from "../data/site.json";
import { useState, useEffect } from "react";

export default function Navbar() {

  const navItems = site.navigation;
  const company = site.company;

  const [active, setActive] = useState("inicio");


  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {
        threshold: 0.6,
      }

    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

  }, []);



  return (

    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl flex justify-between items-center px-8 py-4">


      {/* LOGO */}
      <div className="flex items-center gap-3">

        <div className="relative w-10 h-10">

          <Image
            src="/logos/icon.png"
            alt="Aldecoa logo"
            width={40}
            height={40}
            className="object-contain"
          />

        </div>

        <div className="flex flex-col">

          <span className="text-xl font-black text-white tracking-tighter font-headline uppercase">
            {company.name}
          </span>

          <span className="text-[8px] font-bold text-primary tracking-[0.2em] uppercase -mt-1">
            {company.tagline}
          </span>

        </div>

      </div>



      {/* MENU dinámico */}
      <div className="hidden md:flex gap-8 items-center">

        {navItems.map((item, index) => {

          const isActive = active === item.href.replace("#", "");

          return (

            <a
              key={index}
              href={item.href}

              className={`

                font-headline font-black tracking-tight uppercase text-sm transition-colors

                ${isActive

                  ? "text-primary border-b-2 border-primary pb-1"

                  : "text-white/70 hover:text-white"}

              `}
            >

              {item.label}

            </a>

          );

        })}

      </div>



      {/* BOTON */}
      <button className="bg-primary text-white px-6 py-2.5 font-headline font-black tracking-tight uppercase text-sm hover:-translate-y-1 active:scale-95 transition-all duration-300">

        Cotizar Proyecto

      </button>


    </nav>

  );

}