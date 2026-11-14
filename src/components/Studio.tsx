"use client";

import { useState } from "react";
import Image from "next/image";
import { Arrow, SectionTitle } from "./Ui";

const studioPhotos = [
  {
    src: "/assets/estudio/estudio-janela.webp",
    alt: "Salvador Tattoo Studio - Macas de atendimento com vista para o mar",
    caption: "Iluminação natural e vista privilegiada para o mar",
  },
  {
    src: "/assets/estudio/estudio-maca.webp",
    alt: "Salvador Tattoo Studio - Sala de atendimento com painel de madeira",
    caption: "Ambiente climatizado e acolhedor",
  },
  {
    src: "/assets/estudio/studio_bancada.webp",
    alt: "Salvador Tattoo Studio - Bancadas e vista para o mar",
    caption: "Estrutura profissional de alto padrão",
  },
  
];

export default function Studio() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const go = (delta: number) => {
    if (galleryIndex === null) return;
    setGalleryIndex((galleryIndex + delta + studioPhotos.length) % studioPhotos.length);
  };

  return (
    <section id="estudio" className="scroll-mt-20 py-24 md:py-32 bg-void border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-14 items-center">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              05 — O Espaço
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
              <p>Av. Oceânica, 551 - sala 211 - Barra, Salvador - BA</p>
              <p className="text-fog">CEP 40140-080</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                Climatizado
              </span>
              <span className="inline-flex items-center border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                Vista para o Mar
              </span>
              <span className="inline-flex items-center border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                Biossegurança
              </span>
            </div>

            {/* Ações: Ver galeria do studio + Link salvadortattoo.com */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://salvadortattoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void transition-all hover:bg-gold-hover"
              >
                Visite salvadortattoo.com ↗
              </a>
            </div>
          </div>

          {/* Grid de Fotos Maiores do Estúdio */}
          <div className="reveal grid gap-4">
            <button
              type="button"
              onClick={() => setGalleryIndex(0)}
              className="group relative aspect-[16/10] w-full overflow-hidden border border-gold/40 shadow-2xl text-left"
            >
              <Image
                src={studioPhotos[0].src}
                alt={studioPhotos[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wider text-bone">
                  {studioPhotos[0].caption}
                </p>
                <span className="border border-gold/50 bg-void/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                  Ampliar ↗
                </span>
              </div>
            </button>

            <div className="grid grid-cols-2 gap-4">
              {studioPhotos.slice(1, 3).map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setGalleryIndex(idx + 1)}
                  className="group relative aspect-[4/3] w-full overflow-hidden border border-white/15 hover:border-gold/60 transition-colors text-left"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/75 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 font-mono text-[10px] uppercase tracking-wider text-bone/90 line-clamp-1">
                    {photo.caption}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Galeria do Studio */}
      {galleryIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void/95 backdrop-blur-md p-4"
          onClick={() => setGalleryIndex(null)}
        >
          <div
            className="relative max-h-[80vh] max-w-5xl w-full aspect-[16/10] border border-gold/50 shadow-2xl bg-coal"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={studioPhotos[galleryIndex].src}
              alt={studioPhotos[galleryIndex].alt}
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setGalleryIndex(null)}
              className="absolute -top-10 right-0 font-mono text-xs uppercase tracking-widest text-gold hover:text-bone"
            >
              [ Fechar ✕ ]
            </button>
          </div>

          <div
            className="mt-4 flex w-full max-w-5xl items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              className="border border-gold/40 bg-coal px-4 py-2 font-mono text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-void transition-colors"
            >
              ← Anterior
            </button>
            <p className="text-center font-mono text-xs text-bone/80">
              <span className="text-gold font-bold">
                {galleryIndex + 1} / {studioPhotos.length}
              </span>{" "}
              — {studioPhotos[galleryIndex].caption}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              className="border border-gold/40 bg-coal px-4 py-2 font-mono text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-void transition-colors"
            >
              Próxima →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
