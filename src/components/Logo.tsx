import Image from "next/image";

export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex items-center gap-3 leading-none group">
      <div className={`relative ${big ? "h-12 w-12" : "h-9 w-9"} shrink-0 overflow-hidden rounded-full border border-gold/40 bg-coal/80 p-1 transition-transform group-hover:scale-105`}>
        <Image
          src="/assets/logo1-DkOgUzll.webp"
          alt="TomCash Tattoo Logo"
          width={big ? 48 : 36}
          height={big ? 48 : 36}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="inline-flex flex-col">
        <span
          className={`font-serif tracking-wide text-gold font-bold uppercase transition-colors group-hover:text-gold-hover ${
            big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          TomCash
        </span>
        <span
          className={`flex items-center gap-1.5 font-mono uppercase text-bone/70 ${
            big ? "mt-1 text-[11px] tracking-[0.35em]" : "mt-0.5 text-[8px] tracking-[0.3em]"
          }`}
        >
          Tattoo <span className="text-gold">✦</span> Salvador
        </span>
      </span>
    </span>
  );
}
