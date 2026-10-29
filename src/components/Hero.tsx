"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Arrow, Star } from "./Ui";

const heroSlides = [
  {
    src: "/assets/IMG_22-CdZcJtyB.webp",
    alt: "Tatuagem autoral TomCash Tattoo",
  },
  {
    src: "/assets/IMG_19-Ddz3N7IS.webp",
    alt: "Arte e processo de tatuagem",
  },
  {
    src: "/assets/IMGselo_5-Czqo08KH.webp",
    alt: "Projeto Os Selos por TomCash",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="topo" className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden flex items-center">
      {/* Slideshow de fundo com fotos reais do TomCash com iluminação nítida */}
      <div className="absolute inset-0 -z-20">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-85 md:opacity-90 scale-105" : "opacity-0 scale-100"
            } transform transition-transform duration-[6000ms]`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-right md:object-center brightness-105 contrast-105"
            />
          </div>
        ))}
      </div>

      {/* Gradientes equilibrados: protegem o texto à esquerda sem escurecer a foto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-void/95 via-void/75 via-45% to-void/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-transparent via-60% to-void/40" />

      {/* Marca d'água de texto sutil */}
      <p
        className="text-outline pointer-events-none absolute right-4 top-1/4 -z-10 select-none font-serif text-[18vw] uppercase leading-none opacity-20"
        aria-hidden
      >
        TomCash
      </p>

      <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
        <div className="max-w-3xl">
          {/* Badge Tagline Oficial */}
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3 w-3 text-gold" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
              Um corpo sem pintura é um corpo mudo
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[clamp(2.8rem,7.5vw,6rem)] font-bold uppercase leading-[0.95] text-bone drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Arte autoral,
            <br />
            <span className="text-gold italic font-normal">técnica refinada</span>
            <br />
            &amp; significado.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/90 md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Tom é um tatuador reconhecido por sua versatilidade e olhar artístico apurado.
            Com uma abordagem que une técnica refinada e sensibilidade estética, criando
            peças únicas no <strong>Salvador Tattoo Studio</strong>, em frente ao mar da Barra.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void transition-all hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(201,158,103,0.4)]"
            >
              Fazer Orçamento <Arrow className="h-4 w-4" />
            </a>
            <a
              href="#galeria"
              className="flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bone backdrop-blur transition-all hover:border-gold hover:text-gold"
            >
              Ver Galeria
            </a>
          </div>

          {/* Indicadores de slides */}
          <div className="mt-12 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  i === currentSlide ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
              Barra Center · Salvador - BA
            </span>
          </div>
        </div>
      </div>

      {/* Card Flutuante com Destaque de Projeto */}
      <a
        href="#selos"
        className="group absolute bottom-10 right-4 hidden w-56 border border-gold/30 bg-void/80 p-3.5 backdrop-blur-md transition-all hover:border-gold md:right-8 lg:block"
      >
        <div className="flex items-center justify-between text-gold">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Projeto Autoral</span>
          <Star className="h-3 w-3" />
        </div>
        <p className="mt-1 font-serif text-lg font-bold text-bone group-hover:text-gold transition-colors">
          Os Selos
        </p>
        <p className="mt-1 text-[11px] leading-tight text-bone/60">
          Tatuar memórias e obras em formato de selos postais.
        </p>
        <div className="relative mt-3 aspect-square overflow-hidden border border-white/10">
          <Image
            src="/assets/IMGselo_5-Czqo08KH.webp"
            alt="Selo TomCash"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </a>
    </section>
  );
}
