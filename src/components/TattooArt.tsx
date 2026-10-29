// Ilustrações em traço fino usadas como "flash" de tatuagem.
// Troque por fotos reais dos seus trabalhos quando tiver (ver README).

type ArtProps = { className?: string };

const base = {
  viewBox: "0 0 200 260",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Rose({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M100 70c-18 0-32 12-32 30s14 34 32 34 32-14 32-34-14-30-32-30z" />
      <path d="M100 82c-10 0-18 7-18 17s8 19 18 19 18-8 18-18" />
      <path d="M100 92c-5 0-8 3-8 7s3 8 8 8 8-3 8-7" />
      <path d="M68 100c-14-4-24 4-24 16 0 18 26 30 56 30s56-12 56-30c0-12-10-20-24-16" />
      <path d="M100 146v96" />
      <path d="M100 182c-14-12-36-14-46-6 12 12 32 14 46 6z" />
      <path d="M100 210c14-12 36-14 46-6-12 12-32 14-46 6z" />
      <path d="M100 170l-6-6M100 196l6-6M100 226l-6-6" />
      <path d="M78 64c4-14 14-24 22-28 8 4 18 14 22 28" />
    </svg>
  );
}

export function Dagger({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M100 18l14 30v118h-28V48z" />
      <path d="M100 30v130" />
      <path d="M60 166h80c6 0 10 4 10 8s-4 8-10 8H60c-6 0-10-4-10-8s4-8 10-8z" />
      <path d="M90 182h20v44H90z" />
      <path d="M90 194h20M90 206h20M90 218h20" />
      <circle cx="100" cy="236" r="10" />
      <path d="M44 120c20 10 32 30 30 52M156 120c-20 10-32 30-30 52" />
      <path d="M60 104c-10 4-16 14-16 24M140 104c10 4 16 14 16 24" />
    </svg>
  );
}

export function Skull({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M100 40c-38 0-62 26-62 62 0 22 10 36 24 44v26h76v-26c14-8 24-22 24-44 0-36-24-62-62-62z" />
      <path d="M62 108c0-12 8-20 20-20s18 8 18 18-8 18-18 18-20-4-20-16zM138 108c0-12-8-20-20-20s-18 8-18 18 8 18 18 18 20-4 20-16z" />
      <path d="M100 128l-8 16h16z" />
      <path d="M62 172h76M76 150v40M88 150v40M100 150v40M112 150v40M124 150v40" />
      <path d="M62 190c0 12 16 20 38 20s38-8 38-20" />
      <path d="M70 60c10-6 20-8 30-8M120 54c8 2 14 6 20 12" />
      <path d="M40 232l120-12M40 220l120 12" />
    </svg>
  );
}

export function Snake({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M70 40c0-10 10-18 22-18s24 8 24 20-10 18-22 18" />
      <path d="M94 60c-30 0-44 18-44 36s18 30 50 30 50 12 50 34-20 34-50 34-48 10-48 28 14 24 36 24" />
      <path d="M94 60c22 0 30 10 30 22" />
      <path d="M62 96c0 10 14 18 38 18M150 160c0-10-14-20-50-20M68 222c0-10 16-16 32-16" />
      <circle cx="104" cy="38" r="2.5" fill="currentColor" />
      <path d="M70 40l-12-4M70 40l-10 6" />
      <path d="M88 248l20-6" />
    </svg>
  );
}

export function Swallow({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M100 110c-10-20-34-44-76-52 22 22 34 42 40 60" />
      <path d="M100 110c10-20 34-44 76-52-22 22-34 42-40 60" />
      <path d="M100 110c-16 0-30 12-30 30 0 16 14 26 30 26s30-10 30-26c0-18-14-30-30-30z" />
      <path d="M86 100c4-12 10-18 14-18s10 6 14 18" />
      <path d="M100 82l-8-10h16z" />
      <circle cx="94" cy="96" r="2" fill="currentColor" />
      <path d="M88 166l-20 70 32-30 32 30-20-70" />
      <path d="M40 74c16 8 26 18 32 30M160 74c-16 8-26 18-32 30" />
    </svg>
  );
}

export function Eye({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M100 30l60 104H40z" />
      <path d="M58 104c14-16 28-24 42-24s28 8 42 24c-14 16-28 24-42 24s-28-8-42-24z" />
      <circle cx="100" cy="104" r="12" />
      <circle cx="100" cy="104" r="4" fill="currentColor" />
      <path d="M100 14v8M66 26l6 8M134 26l-6 8M40 52l8 4M160 52l-8 4" />
      <path d="M100 150c-22 22-22 48 0 70 22-22 22-48 0-70z" />
      <path d="M100 160v54" />
      <path d="M60 236h80" />
    </svg>
  );
}

export function Moth({ className }: ArtProps) {
  return (
    <svg {...base} className={className}>
      <path d="M100 70v130" />
      <path d="M100 80c-10-10-10-24 0-30 10 6 10 20 0 30z" />
      <path d="M96 86c-30-30-70-30-80-14 10 30 50 50 80 48" />
      <path d="M104 86c30-30 70-30 80-14-10 30-50 50-80 48" />
      <path d="M96 128c-24 6-50 30-42 58 20 4 38-20 42-46" />
      <path d="M104 128c24 6 50 30 42 58-20 4-38-20-42-46" />
      <circle cx="60" cy="90" r="10" />
      <circle cx="140" cy="90" r="10" />
      <path d="M96 52c-6-14-14-20-24-22M104 52c6-14 14-20 24-22" />
      <path d="M100 100v6M100 116v6M100 132v6M100 148v6" />
    </svg>
  );
}

export const sketchArt = [Rose, Dagger, Skull, Snake, Swallow, Eye, Moth];
