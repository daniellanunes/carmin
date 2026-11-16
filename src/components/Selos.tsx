"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Arrow, SectionTitle } from "./Ui";

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
  {
    id: 6,
    name: "Selo Memória VI",
    src: "/assets/selos/selo-van-gogh.webp",
    theme: "Releitura Van Gogh",
  },
  {
    id: 7,
    name: "Selo Memória VII",
    src: "/assets/selos/selo-rio.webp",
    theme: "Cartão-Postal Rio de Janeiro",
  },
  {
    id: 8,
    name: "Selo Memória VIII",
    src: "/assets/selos/selo-farol.webp",
    theme: "Farol & Sincronicidade",
  },
  {
    id: 9,
    name: "Selo Memória IX",
    src: "/assets/selos/selo-postal.webp",
    theme: "Retrato em Selo Postal",
  },
];

export default function Selos() {
  const [active, setActive] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const current = selosList[active];
  const touchStartX = useRef<number | null>(null);
  const total = selosList.length;
  const half = Math.floor(total / 2);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, active, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
  };

  return (
    <section id="selos" className="scroll-mt-20 py-24 md:py-32 bg-coal border-t border-white/5 relative overflow-hidden">
      {/* Detalhes de background */}
      <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          
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

        {/* Carrossel Centralizado dos Selos */}
        <div
          className="relative mt-12 h-[300px] sm:h-[360px] md:h-[440px] select-none overflow-hidden [--s1:160px] sm:[--s1:204px] md:[--s1:268px] [--s:88px] sm:[--s:124px] md:[--s:176px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {selosList.map((selo, idx) => {
            const diff = ((idx - active + total + half) % total) - half;
            const abs = Math.abs(diff);
            const isActive = diff === 0;
            const isVisible = abs <= 3;

            const offsetX =
              diff === 0
                ? "0px"
                : diff > 0
                  ? `calc(var(--s1) + ${diff - 1} * var(--s))`
                  : `calc(-1 * (var(--s1) + ${-diff - 1} * var(--s)))`;

            return (
              <button
                key={selo.id}
                type="button"
                data-selo
                onClick={() => setActive(idx)}
                aria-label={`Ver ${selo.name}`}
                aria-current={isActive ? "true" : undefined}
                tabIndex={isVisible ? 0 : -1}
                style={{
                  transform: `translate(calc(-50% + ${offsetX}), -50%) scale(${isActive ? 1.05 : 0.95})`,
                }}
                className={`absolute left-1/2 top-1/2 aspect-[4/5] overflow-hidden border transition-all duration-500 ease-out ${
                  isActive
                    ? "z-20 w-52 sm:w-64 md:w-80 border-gold shadow-[0_0_30px_rgba(216,195,174,0.3)] opacity-100"
                    : isVisible
                      ? "z-10 w-20 sm:w-28 md:w-40 border-white/10 opacity-50 hover:opacity-85 cursor-pointer"
                      : "z-0 w-20 sm:w-28 md:w-40 border-white/10 opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={selo.src}
                  alt={selo.name}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 340px"
                  className="object-cover"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
                )}
              </button>
            );
          })}
        </div>

        {/* Indicadores do Carrossel */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {selosList.map((selo, idx) => (
            <button
              key={selo.id}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Ir para ${selo.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === active ? "w-6 bg-gold" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
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
              href={`https://wa.me/5571999114505?text=${encodeURIComponent(
                `Olá Tom! Adorei o projeto "Os Selos" e gostaria de tatuar o ${current.name} (${current.theme})!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void transition-all hover:bg-gold-hover hover:shadow-[0_0_15px_rgba(216,195,174,0.4)]"
            >
              Quero Tatuar Este Selo <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

