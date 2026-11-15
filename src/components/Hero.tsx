"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Arrow } from "./Ui";

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
    src: "/assets/IMG_6-tTrvDqcq.webp",
    alt: "Tatuagem autoral ornamental TomCash Tattoo",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [floating, setFloating] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [dockPos, setDockPos] = useState<{
    bottom: number;
    right: number;
    btnW: number;
    isDesktop: boolean;
  } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const measureAnchor = () => {
      const el = anchorRef.current;
      const isDesktop = window.innerWidth >= 1024;
      if (el && isDesktop) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          const vw = document.documentElement.clientWidth;
          const right = vw - rect.right;
          const bottom = window.innerHeight - (rect.bottom + window.scrollY);
          const btnW = (rect.width - 10) / 2;
          setDockPos({ bottom, right, btnW, isDesktop: true });
          return;
        }
      }
      if (!isDesktop) {
        setDockPos({ bottom: 20, right: 16, btnW: 44, isDesktop: false });
      }
    };

    const onScroll = () => {
      setFloating(window.scrollY > 60);
    };

    measureAnchor();
    onScroll();

    let ro: ResizeObserver | null = null;
    if (anchorRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measureAnchor);
      ro.observe(anchorRef.current);
    }

    window.addEventListener("resize", measureAnchor);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measureAnchor);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
    <section id="topo" className="relative isolate min-h-[100svh] pt-20 overflow-hidden flex items-center">
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

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:py-20 md:px-8 lg:pr-68">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Badge Tagline Oficial */}
          <div className="inline-flex items-center border border-gold/40 bg-gold/10 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Um corpo sem pintura é um corpo mudo
            </span>
          </div>

          <h1 className="mt-5 font-serif text-[clamp(2.2rem,5.8vw,5.25rem)] font-bold uppercase leading-[0.95] text-bone drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Arte autoral,
            <br />
            <span className="text-gold italic font-normal">técnica refinada</span>
            <br />
            &amp; significado.
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-bone/90 lg:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Tom é um tatuador reconhecido por sua versatilidade e olhar artístico apurado.
            Com uma abordagem que une técnica refinada e sensibilidade estética, criando
            peças únicas no <strong>Salvador Tattoo Estudio</strong>, em frente ao mar da Barra.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#orcamento"
              className="flex items-center gap-2 bg-gold px-6 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-void transition-all hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(216,195,174,0.4)]"
            >
              Fazer Orçamento <Arrow className="h-4 w-4" />
            </a>
            <a
              href="#galeria"
              className="flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3.5 sm:px-8 sm:py-4 font-mono text-xs uppercase tracking-[0.18em] text-bone backdrop-blur transition-all hover:border-gold hover:text-gold"
            >
              Ver Galeria
            </a>
          </div>

          {/* Acesso rápido Mobile/Tablet para WhatsApp, Instagram e Os Selos */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 lg:hidden">
            <a
              href="https://wa.me/5571999114505?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/40 bg-void/70 px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-md"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/tomcashtattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/40 bg-void/70 px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-md"
            >
              Instagram
            </a>
            <a
              href="#selos"
              className="inline-flex items-center border border-white/15 bg-void/70 px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-bone/85 backdrop-blur-md"
            >
              Os Selos
            </a>
          </div>

          {/* Indicadores de slides */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2">
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
            <span className="ml-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-fog">
              Salvador Tattoo Estudio · Salvador - BA
            </span>
          </div>
        </div>
      </div>

      {/* Card Flutuante "Os Selos" + âncora dos botões WhatsApp & Instagram */}
      <div className="absolute bottom-10 right-4 hidden w-56 flex-col gap-3 md:right-8 lg:flex">
        <div
          ref={anchorRef}
          className={`grid grid-cols-2 gap-2.5 ${dockPos ? "invisible pointer-events-none" : ""}`}
        >
          <a
            href="https://wa.me/5571999114505?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp TomCash Tattoo"
            className="flex items-center justify-center gap-2 border border-gold/40 bg-void/80 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/tomcashtattoo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram TomCash Tattoo"
            className="flex items-center justify-center gap-2 border border-gold/40 bg-void/80 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>

        <a
          href="#selos"
          className="group block w-full border border-gold/30 bg-void/80 p-3.5 backdrop-blur-md transition-all hover:border-gold"
        >
          <div className="flex items-center justify-between text-gold">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Projeto Autoral</span>
            <Arrow className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </div>
          <p className="mt-1 font-serif text-lg font-bold text-bone group-hover:text-gold transition-colors">
            Os Selos
          </p>
          <p className="mt-1 text-[11px] leading-tight text-bone/60">
            Tatuar memórias e obras em formato de selos postais.
          </p>
          <div className="relative mt-3 aspect-square overflow-hidden border border-white/10">
            <Image
              src="/assets/selos/selo-farol.webp"
              alt="Selo da Barra - TomCash Tattoo"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </a>
      </div>
    </section>

      {/* Botões WhatsApp e Instagram animados: lado a lado no topo -> giram e empilham no canto ao scrollar */}
      {dockPos && (
        <>
          <a
            href="https://wa.me/5571999114505?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp TomCash Tattoo"
            title="WhatsApp"
            style={{
              bottom: floating ? 74 : dockPos.bottom,
              right: floating ? (dockPos.isDesktop ? 32 : 16) : dockPos.right + dockPos.btnW + 10,
              width: floating ? 44 : dockPos.btnW,
              height: floating ? 44 : 38,
              transform: floating ? "rotate(360deg)" : "rotate(0deg)",
            }}
            className={`fixed z-50 flex items-center justify-center overflow-hidden border border-gold/45 bg-void/85 font-mono text-[10px] font-bold uppercase tracking-wider text-gold shadow-lg backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold hover:bg-gold hover:text-void ${
              floating ? "gap-0 opacity-100" : dockPos.isDesktop ? "gap-2 opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                floating ? "max-w-0 opacity-0" : "max-w-[80px] opacity-100"
              }`}
            >
              WhatsApp
            </span>
          </a>

          <a
            href="https://www.instagram.com/tomcashtattoo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram TomCash Tattoo"
            title="Instagram"
            style={{
              bottom: floating ? 20 : dockPos.bottom,
              right: floating ? (dockPos.isDesktop ? 32 : 16) : dockPos.right,
              width: floating ? 44 : dockPos.btnW,
              height: floating ? 44 : 38,
              transform: floating ? "rotate(-360deg)" : "rotate(0deg)",
            }}
            className={`fixed z-50 flex items-center justify-center overflow-hidden border border-gold/45 bg-void/85 font-mono text-[10px] font-bold uppercase tracking-wider text-gold shadow-lg backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold hover:bg-gold hover:text-void ${
              floating ? "gap-0 opacity-100" : dockPos.isDesktop ? "gap-2 opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                floating ? "max-w-0 opacity-0" : "max-w-[80px] opacity-100"
              }`}
            >
              Instagram
            </span>
          </a>
        </>
      )}
    </>
  );
}
