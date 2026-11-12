"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#estilos", label: "Estilos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#selos", label: "Os Selos" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-void/90 backdrop-blur-md"
          : "bg-gradient-to-b from-void/70 via-void/25 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-2 px-4 md:px-8">
        <a href="#topo" aria-label="TomCash Tattoo — início" className="flex min-w-0 shrink lg:mr-6 lg:shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden text-bone"
        >
          <span className={`h-0.5 w-6 bg-gold transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-coal/95 px-6 pb-6 pt-2 backdrop-blur-lg lg:hidden">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-white/5 py-3.5 font-serif text-2xl uppercase text-bone transition-colors hover:text-gold"
            >
              <span className="font-mono text-xs text-gold">0{i + 1}</span>
              {l.label}
            </a>
          ))}          
        </nav>
      )}
    </header>
  );
}
