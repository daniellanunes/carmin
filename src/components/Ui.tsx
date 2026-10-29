import type { ComponentType, ReactNode } from "react";

type IconProps = { className?: string };

/** Estrela de 8 pontas, o símbolo da marca. */
export function Star({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden>
      <path d="M50 0l5 38 23-30-15 35 37 7-37 7 15 35-23-30-5 38-5-38-23 30 15-35L0 50l37-7L22 8l23 30z" />
    </svg>
  );
}

/** Marca da agulha usada ao lado do logo. */
export function NeedleMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21 2l1 1-9.5 11.5-1-1zM11 13.5l-1.5-1.5-5 5 1 1-1.5 3 3-1.5 1 1 5-5z" />
    </svg>
  );
}

export function Arrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Rótulo pequeno em fonte mono, com traço magenta. */
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fog ${className}`}>
      <span className="h-px w-6 bg-carmim" />
      {children}
    </p>
  );
}

/** Título de seção com barra vertical magenta, como no modelo. */
export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`flex gap-4 font-display text-4xl uppercase leading-[0.95] md:text-5xl ${className}`}>
      <span className="mt-1 w-1 shrink-0 bg-carmim" />
      <span>{children}</span>
    </h2>
  );
}

const tones = {
  dark: "bg-[radial-gradient(circle_at_30%_25%,#3a3a3f_0%,#121214_75%)]",
  warm: "bg-[radial-gradient(circle_at_60%_30%,#5b2a35_0%,#141012_75%)]",
  light: "bg-[radial-gradient(circle_at_50%_40%,#d9d6d2_0%,#8f8b88_85%)]",
};

type TileProps = {
  alt: string;
  art?: ComponentType<{ className?: string }>;
  tone?: keyof typeof tones;
  /** Cor do traço do placeholder. */
  ink?: string;
  className?: string;
  children?: ReactNode;
};

/** Placeholder de foto: troque por <Image /> com as fotos reais do estúdio. */
export function Tile({ alt, art: Art, tone = "dark", ink = "text-carmim/80", className = "", children }: TileProps) {
  return (
    <div role="img" aria-label={alt} className={`grain relative overflow-hidden ${tones[tone]} ${className}`}>
      {Art && <Art className={`absolute inset-0 m-auto h-3/4 w-3/4 ${ink}`} />}
      {children}
    </div>
  );
}

/** Linhas diagonais finas usadas como textura de fundo. */
export function Slashes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="none" className={`pointer-events-none absolute ${className}`} aria-hidden>
      <path d="M0 80L400 0M0 400L400 120M120 400L400 260" stroke="#e0144c" strokeOpacity="0.45" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
