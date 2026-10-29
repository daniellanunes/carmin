"use client";

import { useState } from "react";
import { Dagger, Eye, Moth, Rose, Skull, Snake, Swallow } from "./TattooArt";
import { Arrow, SectionTitle, Tile } from "./Ui";

type Status = "Finalizada" | "Em andamento";

// Trabalhos de exemplo — troque pelos reais (fotos em /public/trabalhos).
const works: { title: string; status: Status; art: typeof Rose; tone: "dark" | "warm" | "light" }[] = [
  { title: "Rosa", status: "Finalizada", art: Rose, tone: "warm" },
  { title: "Punhal", status: "Em andamento", art: Dagger, tone: "dark" },
  { title: "Mariposa", status: "Finalizada", art: Moth, tone: "light" },
  { title: "Caveira", status: "Finalizada", art: Skull, tone: "dark" },
  { title: "Serpente", status: "Em andamento", art: Snake, tone: "warm" },
  { title: "Andorinha", status: "Finalizada", art: Swallow, tone: "dark" },
  { title: "Olho", status: "Em andamento", art: Eye, tone: "light" },
  { title: "Fechamento", status: "Em andamento", art: Rose, tone: "dark" },
  { title: "Costas", status: "Finalizada", art: Skull, tone: "warm" },
  { title: "Antebraço", status: "Finalizada", art: Snake, tone: "light" },
];

const filters = ["Todas", "Finalizada", "Em andamento"] as const;

export default function Works() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todas");
  const visible = filter === "Todas" ? works : works.filter((w) => w.status === filter);

  return (
    <section id="trabalhos" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <SectionTitle>
            Finalizadas &amp;
            <br />
            em andamento
          </SectionTitle>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  filter === f ? "border-carmim bg-carmim text-bone" : "border-white/15 text-bone/70 hover:border-carmim"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {visible.map((w) => (
            <li key={w.title} className="group">
              <Tile alt={`Tatuagem: ${w.title}`} art={w.art} tone={w.tone} ink={w.tone === "light" ? "text-void/70" : "text-carmim/70"} className="aspect-[3/4]">
                <span
                  className={`absolute left-2 top-2 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] ${
                    w.status === "Finalizada" ? "bg-carmim text-bone" : "bg-bone text-void"
                  }`}
                >
                  {w.status}
                </span>
                <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-void/85 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-transform duration-300 group-hover:translate-y-0">
                  {w.title} <Arrow className="h-3.5 w-3.5 text-carmim" />
                </span>
              </Tile>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
