"use client";

import QRCode from "react-qr-code";
import { createPortal } from "react-dom";

export default function WhatsAppModal({ whatsappUrl, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative z-[10000] w-full max-w-md overflow-hidden border border-red-600/30 bg-[#131313] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-red-600" />

        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 border-[28px] border-red-600/10 rotate-45" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-24 w-24 bg-red-600/5 rotate-45" />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar modal de WhatsApp"
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center border border-white/10 bg-[#131313] text-white/60 hover:border-red-600 hover:bg-red-600 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="relative z-10 p-8">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
            Contacto directo
          </p>

          <h3 className="mb-4 font-headline text-3xl font-black uppercase leading-none tracking-tight text-white">
            Hablemos por WhatsApp
          </h3>

          <p className="mb-7 text-sm leading-relaxed text-white/70">
            Escanea el código con tu teléfono y comienza una conversación directa
            con el equipo de ALDECOA 360.
          </p>

          <div className="mb-7 flex justify-center">
            <div className="relative bg-white p-4 shadow-[6px_6px_0px_0px_rgba(227,6,19,0.35)]">
              <QRCode value={whatsappUrl} size={220} />

              <span className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-red-600" />
              <span className="absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-red-600" />
              <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-red-600" />
              <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-red-600" />
            </div>
          </div>

          <div className="mb-5 flex items-center justify-center gap-3 text-white/50">
            <span className="h-px w-16 bg-white/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
              o continúa aquí
            </span>
            <span className="h-px w-16 bg-white/10" />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 bg-red-600 px-6 py-4 text-center text-sm font-black uppercase tracking-widest text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-red-700 active:scale-95"
          >
            Abrir WhatsApp Web
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="mt-5 text-center text-xs leading-relaxed text-white/40">
            Ideal si estás navegando desde computadora y prefieres continuar
            desde tu celular.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}