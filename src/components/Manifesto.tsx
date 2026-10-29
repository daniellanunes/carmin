import { Label, Star } from "./Ui";

const keywords = ["Ousado", "Moderno", "Expressivo", "Premium", "Pessoal", "Cru", "Focado", "Sem desculpas"];

export default function Manifesto() {
  return (
    <section id="estudio" className="relative scroll-mt-16 overflow-hidden border-y border-white/5 bg-coal py-24 md:py-32">
      <p className="pointer-events-none absolute -right-6 bottom-0 select-none font-display text-[16rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(224,20,76,0.35)] md:text-[22rem]" aria-hidden>
        CM
      </p>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:gap-20 md:px-8">
        <div className="reveal">
          <Label>01 — O estúdio</Label>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] uppercase leading-[0.9]">
            Não é só
            <br />
            <span className="text-carmim">um estúdio.</span>
          </h2>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.15em]">
            Ousado. Moderno. Expressivo. Permanente.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/70">
            A Carmim nasceu pra fugir do estúdio genérico. Tipografia limpa,
            contraste forte e o magenta como assinatura — uma linguagem visual
            inspirada na arte, na precisão e na intensidade da tatuagem.
          </p>
        </div>

        <div className="reveal relative md:border-l md:border-carmim/40 md:pl-12">
          <Star className="absolute -left-[9px] top-1/2 hidden h-4 w-4 text-carmim md:block" />
          <p className="text-sm leading-relaxed text-bone/80">
            Nossa ideia é ser <span className="text-carmim">premium</span> sem forçar
            a barra — <span className="text-carmim">confiante, moderno</span> e
            memorável em cada detalhe, do primeiro esboço à cicatrização.
          </p>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-fog">Palavras-chave</p>
          <ul className="mt-4 space-y-2.5">
            {keywords.map((k) => (
              <li key={k} className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
                {k}
                <span className="h-px flex-1 bg-carmim/40" />
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em]">
            Não é só um estúdio. <span className="text-carmim">É uma declaração.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
