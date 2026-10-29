"use client";

import Logo from "./Logo";
import { Arrow, Star } from "./Ui";

const footerLinks = [
  {
    title: "Navegação",
    items: [
      { label: "Sobre o Artista", href: "#sobre" },
      { label: "Estilos & Técnicas", href: "#estilos" },
      { label: "Galeria de Trabalhos", href: "#galeria" },
      { label: "Projeto Os Selos", href: "#selos" },
      { label: "O Estúdio na Barra", href: "#estudio" },
    ],
  },
  {
    title: "Estilos",
    items: [
      { label: "Blackwork", href: "#estilos" },
      { label: "Fine line", href: "#estilos" },
      { label: "Colorido / Óleo", href: "#estilos" },
      { label: "Anime & Mangá", href: "#estilos" },
      { label: "Realismo", href: "#estilos" },
    ],
  },
  {
    title: "Atendimento",
    items: [
      { label: "Barra Center - Sala 106", href: "#localizacao" },
      { label: "Salvador · Bahia", href: "#localizacao" },
      { label: "(71) 98933-1091", href: "https://wa.me/5571989331091" },
      { label: "(74) 98861-0287", href: "https://wa.me/5574988610287" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-void pt-20 pb-10">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr] items-start">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
              “Um corpo sem pintura é um corpo mudo.”
              <br />
              Tatuagens autorais, técnicas exclusivas e projeto Os Selos no Salvador Tattoo Studio.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-void transition-colors"
              >
                Orçamento via WhatsApp <Arrow className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
                  <Star className="h-2.5 w-2.5" /> {col.title}
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-bone/70 font-mono">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="transition-colors hover:text-gold"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Linha de Copyright com créditos originais */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-fog">
          <span>
            Copyright © 2025{" "}
            <strong className="text-bone font-normal">TomCash Tattoo</strong>. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-2">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/anna-caroline-miranda-martins/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline hover:text-gold-hover transition-colors"
            >
              Anna Caroline Miranda Martins
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
