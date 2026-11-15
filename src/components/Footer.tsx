"use client";

import Logo from "./Logo";

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
      { label: "Barra Center - Sala 211", href: "#localizacao" },
      { label: "Salvador · Bahia", href: "#localizacao" },
      { label: "(71) 99721-7043", href: "https://wa.me/5571997217043" },
      { label: "(71) 99911-4505", href: "https://wa.me/5571999114505" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-coal pt-20 pb-10">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr] items-start">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
              “Um corpo sem pintura é um corpo mudo.”
              <br />
              Tatuagens autorais, técnicas exclusivas e projeto Os Selos no Salvador Tattoo Estudio.
            </p>            
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
                  {col.title}
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
            Copyright © 2027{" "}
            <strong className="text-bone font-normal">TomCash Tattoo</strong>. Todos os direitos reservados.
          </span>
          
        </div>
      </div>
    </footer>
  );
}
