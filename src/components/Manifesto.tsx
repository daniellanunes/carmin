"use client";

import Image from "next/image";
import { Label, Star } from "./Ui";

const techniques = [
  {
    title: "Sobreposição Sutil de Linhas",
    desc: "Cria texturas delicadas e gradientes orgânicos na pele com profundidade singular.",
  },
  {
    title: "Sombras Rasteladas Estilo Óleo",
    desc: "Remetem à densidade e intenção da tinta a óleo, como uma tela viva de pintura.",
  },
  {
    title: "Fusão Fine Line & Pontilhismo",
    desc: "Equilíbrio entre precisão anatômica milimétrica e leveza visual.",
  },
  {
    title: "Cuidado, Conforto & Pausas",
    desc: "Respeito ao seu tempo e ao seu corpo. Uma experiência acolhedora e segura.",
  },
];

export default function Manifesto() {
  return (
    <section id="sobre" className="relative scroll-mt-20 overflow-hidden border-y border-white/10 bg-coal py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          {/* Coluna Texto e Apresentação */}
          <div className="reveal">
            <Label>01 — O Artista</Label>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold uppercase leading-[1.05] text-bone">
              Tom Cash
              <br />
              <span className="text-gold italic font-normal text-[0.85em]">Salvador Tattoo Studio</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-bone/90 md:text-lg">
              Sou co-proprietário do estúdio <strong>Salvador Tattoo</strong> e atuo como tatuador há alguns anos.
              Minha formação artística e trajetória profissional sempre foram pautadas pela busca de autenticidade
              e qualidade em cada trabalho. Acredito que tatuar é também escutar, entender histórias e transformar sentimentos
              em traços e cores permanentes.
            </p>

            <blockquote className="my-8 border-l-2 border-gold pl-6 py-2 italic font-serif text-lg text-gold/90 bg-gold/5">
              “Na tatuagem, sou fascinado pela tradução colocada na pele da minha técnica com o pensamento do outro. Existe algo poderoso nessa troca: sintetizar algo pensado por alguém em algo feito especialmente para ela.”
            </blockquote>

            <p className="text-sm leading-relaxed text-bone/75">
              Gosto especialmente de usar a cor como se estivesse pintando um quadro com tinta a óleo — com profundidade, textura e intenção. Mais do que estética, cada tatuagem pode ser um gesto de afirmação, uma escolha que carrega memória, sentimento ou até mesmo um posicionamento político e social.
            </p>

            {/* Grid de Técnicas Exclusivas */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {techniques.map((t) => (
                <div key={t.title} className="border border-white/10 bg-void/50 p-4">
                  <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gold">
                    <Star className="h-3 w-3 shrink-0" />
                    {t.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-bone/70">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Fotos do Artista (Airton / Tom) */}
          <div className="reveal space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/40 shadow-2xl">
              <Image
                src="/assets/airton1-BB91Tj_f.webp"
                alt="Tom Cash - Tatuador e Artista"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="font-serif text-2xl font-bold uppercase text-bone">Airton (Tom)</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-gold">Tatuador &amp; Fundador</p>
                </div>
                <div className="border border-gold/60 bg-void/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                  Salvador · BA
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image
                  src="/assets/airton2-KCv7lYBx.webp"
                  alt="Processo Criativo de Tom Cash"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center border border-white/10 bg-slate/40 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Experiência</p>
                <p className="mt-1 font-serif text-xl font-bold text-gold">Segurança &amp; Conforto</p>
                <p className="mt-2 text-xs leading-relaxed text-bone/70">
                  Estrutura profissional de alto padrão no Salvador Barra Center com vista para o mar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
