"use client";

import Image from "next/image";
import { Arrow, SectionTitle, Star } from "./Ui";

const studioPhotos = [
  {
    src: "/assets/IMG_4866-pfgN8ksh.webp",
    alt: "Salvador Tattoo Studio - Espaço de atendimento",
    caption: "Bancadas e equipamentos de nível cirúrgico",
  },
  {
    src: "/assets/IMG_4872-Bg8Wb1Af.webp",
    alt: "Salvador Tattoo Studio - Vista para o Farol da Barra",
    caption: "Iluminação natural e vista privilegiada para o mar",
  },
  {
    src: "/assets/IMG_4875-DY9SpWJU.webp",
    alt: "Salvador Tattoo Studio - Conforto e acolhimento",
    caption: "Ambiente climatizado projetado para o seu bem-estar",
  },
];

export default function Studio() {
  return (
    <section id="estudio" className="scroll-mt-20 py-24 md:py-32 bg-coal border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-center">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              04 — O Espaço
            </span>
            <SectionTitle className="mt-3">
              Salvador Tattoo
              <br />
              Studio
            </SectionTitle>

            <p className="mt-6 text-base leading-relaxed text-bone/90">
              O <strong>Salvador Tattoo Studio</strong> é um estúdio que fundei com outros profissionais
              apaixonados pela arte da tatuagem. Localizado na Barra, um dos bairros mais icônicos de Salvador,
              com vista privilegiada para o mar e o Farol — um verdadeiro cartão-postal da cidade.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-bone/70">
              Cada detalhe do espaço foi projetado para acolher com cuidado: ambiente climatizado,
              iluminação natural, vista inspiradora e estrutura profissional de alto padrão. Nosso compromisso
              é garantir não só uma tatuagem impecável, mas também um momento agradável, seguro e inesquecível para quem nos visita.
            </p>

            <div className="mt-8 border-l-2 border-gold pl-4 font-mono text-xs text-bone/80">
              <p className="text-gold font-bold uppercase tracking-wider">Localização:</p>
              <p className="mt-1">Centro Comercial Barra Center</p>
              <p>Av. Oceânica, 551 - sala 106 - Barra, Salvador - BA</p>
              <p className="text-fog">CEP 40140-080</p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                <Star className="h-2.5 w-2.5" /> Climatizado
              </span>
              <span className="inline-flex items-center gap-1.5 border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                <Star className="h-2.5 w-2.5" /> Vista para o Farol
              </span>
              <span className="inline-flex items-center gap-1.5 border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                <Star className="h-2.5 w-2.5" /> Biossegurança
              </span>
            </div>
          </div>

          {/* Grid de Fotos do Estúdio */}
          <div className="reveal space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden border border-gold/40 shadow-xl group">
              <Image
                src={studioPhotos[0].src}
                alt={studioPhotos[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 font-mono text-xs uppercase tracking-wider text-bone">
                {studioPhotos[0].caption}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {studioPhotos.slice(1).map((photo) => (
                <div key={photo.src} className="relative aspect-[4/3] overflow-hidden border border-white/10 group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
                  <p className="absolute bottom-2 left-3 right-3 font-mono text-[10px] uppercase tracking-wider text-bone/90 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

