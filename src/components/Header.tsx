"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#topo" aria-label="TomCash Tattoo — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
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

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-void"
          >
            Orçamento
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden text-bone"
          >
            <span className={`h-0.5 w-6 bg-gold transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-gold transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
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
          <div className="mt-4 pt-2">
            <a
              href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gold py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void"
              onClick={() => setOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
