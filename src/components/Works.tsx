"use client";

import { useState } from "react";
import Image from "next/image";
import { Arrow, SectionTitle, Star } from "./Ui";

const worksData = [
  { id: 1, title: "Arte Botânica & Selo", category: "Autoral", src: "/assets/IMG_1-DzSL33vw.webp" },
  { id: 2, title: "Composição Serpente & Flor", category: "Blackwork", src: "/assets/IMG_3-CAqXKlNU.webp" },
  { id: 3, title: "Crânio & Geometria", category: "Blackwork", src: "/assets/IMG_4-BpWmXPlo.webp" },
  { id: 4, title: "Ilustração Poética", category: "Fine line", src: "/assets/IMG_5-kSviiu_O.webp" },
  { id: 5, title: "Criação Exclusiva", category: "Autoral", src: "/assets/IMG_6-tTrvDqcq.webp" },
  { id: 6, title: "Traço Sutil Anatômico", category: "Fine line", src: "/assets/IMG_7-B6qWZTSN.webp" },
  { id: 7, title: "Figura Mitológica", category: "Artístico", src: "/assets/IMG_8-CuUeIMJM.webp" },
  { id: 8, title: "Textura & Sombras Óleo", category: "Artístico", src: "/assets/IMG_9-WwO-LOUo.webp" },
  { id: 9, title: "Floral em Movimento", category: "Colorido", src: "/assets/IMG_10-BNyXj12z.webp" },
  { id: 10, title: "Traço Firme & Bold", category: "Blackwork", src: "/assets/IMG_11-Day_5IZq.webp" },
  { id: 11, title: "Composição em Camadas", category: "Artístico", src: "/assets/IMG_12-Dxsfue5w.webp" },
  { id: 12, title: "Fechamento Detalhado", category: "Autoral", src: "/assets/IMG_13-D1n2Y5nI.webp" },
];

const categories = ["Todas", "Autoral", "Blackwork", "Fine line", "Artístico", "Colorido"] as const;

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = selectedCategory === "Todas"
    ? worksData
    : worksData.filter((w) => w.category === selectedCategory);

  return (
    <section id="galeria" className="scroll-mt-20 py-24 md:py-32 bg-coal border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              03 — Galeria Oficial
            </span>
            <SectionTitle className="mt-3">
              Trabalhos
              <br />
              Concluídos
            </SectionTitle>
            <p className="mt-4 max-w-md text-sm text-bone/70">
              Conheça algumas das tatuagens que os clientes amaram. Cada peça é criada sob medida com máxima atenção aos detalhes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-all ${
                  selectedCategory === cat
                    ? "border-gold bg-gold text-void font-bold"
                    : "border-white/15 text-bone/70 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Trabalhos */}
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <li key={item.id} className="group">
              <div
                onClick={() => setLightboxImage(item.src)}
                className="cursor-pointer relative aspect-[3/4] overflow-hidden border border-white/10 bg-void transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_10px_30px_rgba(201,158,103,0.2)]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <span className="absolute left-2.5 top-2.5 bg-void/85 border border-gold/40 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-gold">
                  {item.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-3.5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between">
                  <span className="font-serif text-sm font-semibold text-bone">
                    {item.title}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-void text-xs">
                    ✦
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
            Quer uma arte exclusiva pensada para o seu corpo?
          </p>
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20vi%20a%20galeria%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 border border-gold px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-void"
          >
            Pedir Orçamento da Minha Ideia <Arrow className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Modal Lightbox */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 backdrop-blur-md p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-2xl w-full aspect-[3/4] border border-gold/50 shadow-2xl">
            <Image
              src={lightboxImage}
              alt="Ampliação da tatuagem"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 font-mono text-xs uppercase tracking-widest text-gold hover:text-bone"
            >
              [ Fechar ✕ ]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
