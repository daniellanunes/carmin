import { NeedleMark } from "./Ui";

export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`font-display uppercase text-carmim ${big ? "text-6xl md:text-7xl" : "text-2xl"}`}>
        Carmim
      </span>
      <span
        className={`flex items-center gap-1.5 font-mono uppercase text-bone/80 ${
          big ? "mt-2 text-xs tracking-[0.35em]" : "mt-0.5 text-[8px] tracking-[0.3em]"
        }`}
      >
        Tattoo <NeedleMark className={`text-carmim ${big ? "h-4 w-4" : "h-2.5 w-2.5"}`} /> Studio
      </span>
    </span>
  );
}
