import Image from "next/image";

export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex min-w-0 items-center gap-2 sm:gap-3 leading-none group">
      <Image
        src="/assets/logo-tom-contorno.webp"
        alt="TomCash Tattoo Logo"
        width={512}
        height={358}
        className={`${big ? "h-16" : "h-10 sm:h-12"} w-auto shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transition-transform group-hover:scale-105`}
      />
      <span className="inline-flex min-w-0 flex-col overflow-hidden">
        <span
          className={`truncate font-serif tracking-wide text-gold font-bold uppercase transition-colors group-hover:text-gold-hover ${
            big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          TomCash
        </span>
        <span
          className={`flex items-center gap-1.5 whitespace-nowrap font-mono uppercase text-bone/70 ${
            big ? "mt-1 text-[11px] tracking-[0.35em]" : "mt-0.5 text-[8px] tracking-[0.3em]"
          }`}
        >
          Tattoo <span className="text-gold">✦</span> Salvador
        </span>
      </span>
    </span>
  );
}
