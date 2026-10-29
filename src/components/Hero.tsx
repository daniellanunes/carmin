import { Moth, Rose } from "./TattooArt";
import { Arrow, Slashes, Star, Tile } from "./Ui";

export default function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden">
      {/* "Foto" de fundo: pele com traços magenta */}
      <div className="absolute inset-0 -z-10">
        <Tile alt="Cliente com tatuagens florais no pescoço e nos braços" tone="warm" className="h-full">
          <Rose className="absolute right-[8%] top-[6%] h-[80%] text-carmim/50 md:right-[18%]" />
          <Moth className="absolute right-[-6%] top-[40%] h-[45%] text-carmim/25 md:right-[4%]" />
        </Tile>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/80 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-transparent to-transparent" />

      <Star className="animate-spin-slow absolute -right-24 top-10 -z-10 h-[420px] w-[420px] text-carmim/90 md:-right-10 md:h-[560px] md:w-[560px]" />
      <Star className="absolute left-4 top-8 h-8 w-8 text-carmim md:left-8" />
      <Slashes className="inset-0 -z-10 h-full w-full" />

      <p className="text-outline pointer-events-none absolute left-0 top-16 -z-10 select-none font-display text-[22vw] uppercase leading-none" aria-hidden>
        Tinta
      </p>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 md:px-8">
        <h1 className="font-display text-[clamp(3.5rem,11vw,8.5rem)] uppercase leading-[0.88]">
          Tattoos
          <br />
          <span className="text-carmim">autorais &amp;</span>
          <br />
          <span className="text-carmim">piercings</span>
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/75">
          Arte na pele feita com precisão, higiene impecável e um olhar autoral
          em cada projeto. Feito pra durar. Tatuado pra expressar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contato"
            className="bg-carmim px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-bone hover:text-void"
          >
            Agendar
          </a>
          <a
            href="#trabalhos"
            className="flex items-center gap-3 border border-white/20 bg-white/5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] backdrop-blur transition-colors hover:border-carmim"
          >
            Ver trabalhos <Arrow className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Card "Nosso trabalho" */}
      <a
        href="#trabalhos"
        className="group absolute bottom-10 right-4 hidden w-44 border border-white/15 bg-void/70 p-3 backdrop-blur md:right-8 md:block"
      >
        <p className="font-display text-2xl uppercase leading-none">
          Nosso
          <br />
          trabalho
        </p>
        <Tile alt="" tone="dark" className="mt-3 aspect-[4/5]">
          <Moth className="absolute inset-0 m-auto h-3/4 text-bone/60 transition-transform duration-500 group-hover:scale-110" />
        </Tile>
      </a>
    </section>
  );
}
