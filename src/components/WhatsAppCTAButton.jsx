"use client";

import { useState } from "react";
import WhatsAppModal from "./WhatsAppModal";

export default function WhatsAppCTAButton({
  href,
  children,
  ariaLabel,
  className = "",
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(href, "_blank");
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </button>

      {open && (
        <WhatsAppModal
          whatsappUrl={href}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}