"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import site from "../data/site.json"

// ─── Íconos SVG ────────────────────────────────────────────────────────────
const ICONS = {
  inicio: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 7.5L8 2l6 5.5V14a.5.5 0 01-.5.5h-3V10h-5v4.5h-3A.5.5 0 012 14V7.5z" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  servicios: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  nosotros: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 14c0-2.761 2.686-5 6-5s6 2.239 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  portafolio: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 4V3a1 1 0 011-1h2a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  clientes: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="11" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 13c0-2 2-3 3-3s3 1 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 13c0-2 2-3 3-3s3 1 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  cobertura: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  contacto: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
}

// ─── Logo ──────────────────────────────────────────────────────────────────
const Logo = ({ size = 40, textSize = "text-xl", tagSize = "text-[8px]", company, logo }) => (
  <div className="flex items-center gap-3">
    <Image
      src={logo.src}
      alt={`Logo de ${company.name}`}
      width={size}
      height={size}
      className="object-contain"
      priority
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
)

// ─── Navbar principal ──────────────────────────────────────────────────────
export default function Navbar() {
  const { navigation: navItems, company, logo } = site

  const pathname = usePathname()
  const router   = useRouter()

  const [mounted,     setMounted]     = useState(false)
  const [active,      setActive]      = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (pathname !== "/") return
    let currentSection = ""
    const detectSection = () => {
      const scrollPosition = window.scrollY + 140
      navItems.forEach(link => {
        if (!link.href.startsWith("#")) return
        const id = link.href.replace("#","")
        const el = document.getElementById(id)
        if (!el) return
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          if (currentSection !== id) {
            currentSection = id
            setActive(id)
            window.history.replaceState(null, "", `/#${id}`)
          }
        }
      })
    }
    detectSection()
    window.addEventListener("scroll", detectSection)
    return () => window.removeEventListener("scroll", detectSection)
  }, [pathname, navItems])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setSidebarOpen(false) }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [sidebarOpen])

  const goToSection = (href) => {
    const id = href.replace("#", "")
    setActive(id)
    setSidebarOpen(false)
    if (pathname !== "/") {
      router.push("/" + href)
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", href)
    }
  }

  const isActive      = (href) => mounted && active === href.replace(/^[/#]+/, "")
  const isSidebarOpen = mounted && sidebarOpen
  const closeSidebar  = () => setSidebarOpen(false)

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <nav
        aria-label="Navegación principal de Aldecoa 360"
        className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]"
      >
        <div className="px-6 py-4 flex items-center justify-between md:grid md:grid-cols-3">

          {/* LOGO */}
          <button
            onClick={() => goToSection(site.navigation[0].href)}
            aria-label="Ir al inicio de Aldecoa 360"
            className="text-left"
          >
            <Logo size={40} company={company} logo={logo} />
          </button>

          {/* MENU DESKTOP */}
          <div
            className="hidden md:flex justify-center gap-8"
            role="list"
          >
            {navItems.map((item, i) => (
              <button
                key={i}
                role="listitem"
                onClick={() => goToSection(item.href)}
                aria-label={`Ir a ${item.label}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`font-headline font-black tracking-tight uppercase text-sm transition-colors pb-1 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* BOTÓN HAMBURGUESA MOBILE */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isSidebarOpen}
              aria-controls="sidebar-mobile"
              className="flex flex-col gap-[5px] p-2 -mr-2 group"
            >
              <span className="block w-5 h-[1.5px] bg-white rounded-full" />
              <span className="block w-[13px] h-[1.5px] bg-white/60 rounded-full group-hover:w-5 transition-all" />
              <span className="block w-5 h-[1.5px] bg-white rounded-full" />
            </button>
          </div>

          <div className="hidden md:block" />
        </div>
      </nav>

      {/* ── OVERLAY ────────────────────────────────────────────────────── */}
      <div
        onClick={closeSidebar}
        aria-hidden="true"
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 md:hidden"
        style={{
          opacity:       isSidebarOpen ? 1 : 0,
          pointerEvents: isSidebarOpen ? "auto" : "none",
        }}
      />

      {/* ── SIDEBAR MOBILE ─────────────────────────────────────────────── */}
      <aside
        id="sidebar-mobile"
        aria-label="Menú de navegación móvil"
        aria-hidden={!isSidebarOpen}
        className="fixed top-0 left-0 h-full w-[260px] z-[70] bg-zinc-950 border-r border-white/[0.07] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden"
        style={{ transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        {/* Header del sidebar */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/[0.07]">
          <Logo size={32} textSize="text-sm" tagSize="text-[7px]" company={company} logo={logo} />
          <button
            onClick={closeSidebar}
            aria-label="Cerrar menú de navegación"
            className="p-1.5 text-white/40 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Links del sidebar */}
        <nav aria-label="Navegación móvil" className="flex flex-col py-3 flex-1">
          {navItems.map((item, i) => {
            const active_ = isActive(item.href)
            return (
              <button
                key={i}
                onClick={() => goToSection(item.href)}
                aria-label={`Ir a ${item.label}`}
                aria-current={active_ ? "page" : undefined}
                className="flex items-center gap-3.5 px-5 py-3.5 text-xs font-black uppercase tracking-[0.06em] border-l-2 transition-colors text-left"
                style={{
                  borderLeftColor: active_ ? "#e63946" : "transparent",
                  backgroundColor: active_ ? "rgba(230,57,70,0.08)" : undefined,
                }}
              >
                <span style={{ color: active_ ? "#e63946" : "rgba(255,255,255,0.3)" }}>
                  {ICONS[item.label.toLowerCase()]}
                </span>
                <span style={{ color: active_ ? "#fff" : "rgba(255,255,255,0.4)" }}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Footer del sidebar */}
        <div className="px-5 py-5 border-t border-white/[0.07]">
          <p className="text-[10px] text-white/25 uppercase tracking-widest" suppressHydrationWarning>
            {mounted ? `© ${new Date().getFullYear()} ${company.name}` : ""}
          </p>
        </div>
      </aside>
    </>
  )
}