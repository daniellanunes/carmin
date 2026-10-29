"use client";

import { useState } from "react";
import Image from "next/image";
import { Arrow, SectionTitle, Star } from "./Ui";

const selosList = [
  {
    id: 1,
    name: "Selo Memória I",
    src: "/assets/IMGselo_1-KM-RFfPS.webp",
    theme: "Obra Clássica & Releitura",
  },
  {
    id: 2,
    name: "Selo Memória II",
    src: "/assets/IMGselo_2-GrF2VsKf.webp",
    theme: "Gravura em Metal & Selo Postal",
  },
  {
    id: 3,
    name: "Selo Memória III",
    src: "/assets/IMGselo_3-BCRdbMKl.webp",
    theme: "Inspiração Pintura a Óleo",
  },
  {
    id: 4,
    name: "Selo Memória IV",
    src: "/assets/IMGselo_4-BoBdqVTv.webp",
    theme: "Arte Autoral & Textura",
  },
  {
    id: 5,
    name: "Selo Memória V",
    src: "/assets/IMGselo_5-DoiVpO5e.webp",
    theme: "Composição Nostalgia & Afeto",
  },
];

export default function Selos() {
  const [active, setActive] = useState(2);
  const current = selosList[active];

  return (
    <section id="selos" className="scroll-mt-20 py-24 md:py-32 bg-void border-t border-white/5 relative overflow-hidden">
      {/* Detalhes de background */}
      <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-3 py-1">
            <Star className="h-3 w-3 text-gold" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold font-bold">
              Projeto Autoral Especial
            </span>
          </div>
          <SectionTitle className="mt-4">
            Conheça meu projeto:
            <br />
            <span className="text-gold italic font-normal">Os Selos</span>
          </SectionTitle>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-bone/80">
            Tenho um projeto que consiste em tatuar selos postais que remetem memórias, afetos ou grandes obras de arte.
            Cada peça possui moldura serrilhada de selo clássico e uma composição exclusiva dentro.
          </p>
        </div>

        {/* Carrossel / Galeria dos Selos */}
        <div className="mt-16 flex items-center justify-center gap-3 md:gap-6">
          {selosList.map((selo, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={selo.id}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Ver ${selo.name}`}
                className={`relative shrink-0 transition-all duration-500 overflow-hidden border ${
                  isActive
                    ? "w-52 sm:w-64 md:w-80 aspect-[4/5] border-gold shadow-[0_0_30px_rgba(201,158,103,0.3)] z-10 scale-105"
                    : "w-20 sm:w-28 md:w-40 aspect-[4/5] border-white/10 opacity-50 hover:opacity-80 scale-95"
                }`}
              >
                <Image
                  src={selo.src}
                  alt={selo.name}
                  fill
                  className="object-cover"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detalhe do Selo Ativo */}
        <div className="mt-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase text-gold">
            {current.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-bone/70">
            {current.theme}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/5571989331091?text=${encodeURIComponent(
                `Olá Tom! Adorei o projeto "Os Selos" e gostaria de tatuar o ${current.name} (${current.theme})!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void transition-all hover:bg-gold-hover hover:shadow-[0_0_15px_rgba(201,158,103,0.4)]"
            >
              Quero Tatuar Este Selo <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

