"use client";

import { useState } from "react";
import { Dagger, Eye, Moth, Rose, Skull, Snake, Swallow } from "./TattooArt";
import { Arrow, SectionTitle } from "./Ui";

// Flash = desenhos prontos, com preço fechado.
const flashes = [
  { name: "Mariposa", art: Moth, price: "R$ 450" },
  { name: "Rosa", art: Rose, price: "R$ 380" },
  { name: "Caveira", art: Skull, price: "R$ 520" },
  { name: "Andorinha", art: Swallow, price: "R$ 350" },
  { name: "Serpente", art: Snake, price: "R$ 480" },
  { name: "Punhal", art: Dagger, price: "R$ 400" },
  { name: "Olho", art: Eye, price: "R$ 420" },
];

export default function Flash() {
  const [active, setActive] = useState(2);
  const go = (d: number) => setActive((i) => (i + d + flashes.length) % flashes.length);
  const current = flashes[active];

  return (
    <section id="flash" className="scroll-mt-16 border-t border-white/5 bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <SectionTitle>
            Flash
            <br />
            designs
          </SectionTitle>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center border border-white/20 transition-colors hover:border-carmim"
            >
              <Arrow className="h-4 w-4 rotate-180" />
            </button>
            <span className="w-16 text-center font-mono text-xs tracking-[0.2em]">
              {String(active + 1).padStart(2, "0")} / {String(flashes.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center bg-carmim transition-colors hover:bg-bone hover:text-void"
            >
              <Arrow className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Faixa: o item ativo cresce no centro, os vizinhos ficam menores e escuros */}
        <div className="mt-14 flex items-center justify-center gap-3 md:gap-5">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const i = (active + offset + flashes.length) % flashes.length;
            const { art: Art, name } = flashes[i];
            const isActive = offset === 0;
            return (
              <button
                key={offset}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver flash ${name}`}
                className={`relative shrink-0 border transition-all duration-500 ${
                  isActive
                    ? "aspect-[3/4] w-44 border-carmim bg-bone text-void md:w-64"
                    : `aspect-square w-16 border-white/10 bg-slate text-bone/50 hover:text-bone md:w-32 ${
                        Math.abs(offset) === 2 ? "hidden sm:block" : ""
                      }`
                }`}
              >
                <Art className="absolute inset-0 m-auto h-4/5 w-4/5" />
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="font-display text-3xl uppercase">{current.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-fog">
            A partir de <span className="text-carmim">{current.price}</span> · até 10 cm
          </p>
          <a
            href="#contato"
            className="mt-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-carmim hover:underline"
          >
            Quero esse flash <Arrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
