"use client";

import { useState } from "react";
import Logo from "./Logo";
import { Arrow, Slashes, Star } from "./Ui";

const columns = [
  { title: "Estúdio", items: ["Sobre", "Equipe", "Higiene", "Cuidados"] },
  { title: "Serviços", items: ["Tatuagem", "Piercing", "Cobertura", "Flash day"] },
  { title: "Estilos", items: ["Fine line", "Blackwork", "Neo-trad", "Realismo"] },
  { title: "Contato", items: ["R. Augusta, 2000", "São Paulo · SP", "(11) 99999-9999", "oi@carmim.ink"] },
];

// Código de barras decorativo, como uma etiqueta de produto.
const bars = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 2, 3, 1];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-void pt-20">
      <Slashes className="inset-0 h-full w-full opacity-60" />
      <Star className="absolute left-6 top-8 h-6 w-6 text-carmim md:left-10" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1.2fr_2.5fr_1.3fr] md:px-8">
        <div>
          <Logo size="lg" />
          <p className="mt-6 max-w-[16rem] text-xs leading-relaxed text-bone/60">
            Estúdio de tatuagem e piercing autoral. Feito pra durar, tatuado pra expressar.
          </p>
          <a href="#contato" className="mt-6 inline-flex items-center gap-3 border border-carmim px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-carmim hover:bg-carmim hover:text-bone">
            Agendar <Arrow className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-carmim">
                <Star className="h-2.5 w-2.5" /> {c.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-bone/70">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p className="font-display text-2xl uppercase">Fique por dentro</p>
          <p className="mt-2 text-xs text-bone/60">Flash days, vagas na agenda e novidades.</p>
          {joined ? (
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-carmim">Inscrição feita ✶</p>
          ) : (
            <form
              className="mt-4 flex"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                aria-label="Seu e-mail"
                className="min-w-0 flex-1 border border-white/15 bg-transparent px-3 py-2.5 text-xs outline-none focus:border-carmim"
              />
              <button type="submit" aria-label="Inscrever" className="grid w-11 place-items-center bg-carmim">
                <Arrow className="h-4 w-4" />
              </button>
            </form>
          )}
          <div className="mt-8 flex h-10 items-stretch gap-[2px]" aria-hidden>
            {bars.map((w, i) => (
              <span key={i} className="bg-carmim" style={{ width: w * 2 }} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:flex-row md:px-8">
        <span>© 2026 Carmim Tattoo Studio</span>
        <span className="flex items-center gap-2">
          <Star className="h-3 w-3 text-carmim" /> Feito pra durar. Tatuado pra expressar.
        </span>
        <span>Privacidade · Termos</span>
      </div>
    </footer>
  );
}
