"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#estudio", label: "Estúdio" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#flash", label: "Flash" },
  { href: "#redes", label: "Redes" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#topo" aria-label="Carmim — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-carmim"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="border border-carmim px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-carmim transition-colors hover:bg-carmim hover:text-bone"
          >
            Agendar
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-5 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/5 px-4 pb-6 md:hidden">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-white/5 py-3 font-display text-3xl uppercase"
            >
              <span className="font-mono text-xs text-carmim">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
