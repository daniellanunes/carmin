"use client";

import Image from "next/image";
import { Arrow, SectionTitle, Star } from "./Ui";

const stylesList = [
  {
    name: "Blackwork",
    image: "/assets/IMG_1-DeMZbL7N.webp",
    desc: "Preenchimentos sólidos, contrastes profundos e texturas ricas.",
  },
  {
    name: "Fine line",
    image: "/assets/IMG_2-BR816FZN.webp",
    desc: "Traços delicados, precisão cirúrgica e leveza estética.",
  },
  {
    name: "Colorido",
    image: "/assets/IMG_3-DlbDNVR-.webp",
    desc: "Pigmentação viva, saturação marcante e inspiração em tinta a óleo.",
  },
  {
    name: "Anime",
    image: "/assets/IMG_4-CXVQWsJg.webp",
    desc: "Expressividade pop, fidelidade aos traços de mangás e animações.",
  },
  {
    name: "Realismo",
    image: "/assets/IMG_5-CAtQdCLA.webp",
    desc: "Sombra suave, fidelidade fotográfica e rica tridimensionalidade.",
  },
  {
    name: "Artístico & Autoral",
    image: "/assets/IMG_6-BCoGd3cX.webp",
    desc: "Composições originais unindo elementos orgânicos e geométricos.",
  },
];

export default function Styles() {
  return (
    <section id="estilos" className="scroll-mt-20 py-24 md:py-32 bg-void">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              02 — Estilos &amp; Linguagens
            </span>
            <SectionTitle className="mt-3">
              Versatilidade
              <br />
              &amp; Expressão
            </SectionTitle>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/70">
            Trabalho com uma variedade de estilos com os quais me identifico profundamente.
            Também exploramos misturas criativas, o que permite entregar tatuagens verdadeiramente únicas
            e personalizadas para cada cliente.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stylesList.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden border border-white/10 bg-coal transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(201,158,103,0.15)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Estilo de Tatuagem: ${item.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-bold uppercase text-bone group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-bone/60 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de convite */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border border-gold/30 bg-gold/5 p-6 md:p-8 backdrop-blur">
          <div className="flex items-center gap-4">
            <Star className="h-6 w-6 text-gold shrink-0" />
            <p className="text-sm md:text-base text-bone font-medium">
              Tem uma ideia diferente ou quer misturar estilos? Desenvolvemos um projeto 100% autoral para você.
            </p>
          </div>
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20tenho%20uma%20ideia%20para%20uma%20tatuagem%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 shrink-0 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold hover:underline"
          >
            Conversar sobre sua ideia <Arrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

