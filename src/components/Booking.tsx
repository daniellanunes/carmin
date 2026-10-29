"use client";

import { useState } from "react";
import { Arrow, Label, Star } from "./Ui";

const field =
  "w-full border border-white/10 bg-void px-4 py-3.5 text-sm text-bone outline-none transition-colors placeholder:text-fog focus:border-carmim";

export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative scroll-mt-16 overflow-hidden py-24 md:py-32">
      <Star className="absolute -left-20 bottom-0 h-72 w-72 text-carmim/10" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
        <div className="reveal">
          <Label>02 — Agendamento</Label>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-[0.9]">
            Sua ideia,
            <br />
            <span className="text-carmim">nossa agulha.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
            Conte o que você quer tatuar ou furar. Em até 24h a gente responde
            com orçamento, sugestão de tamanho e as próximas datas livres.
          </p>
          <dl className="mt-10 grid max-w-sm grid-cols-2 gap-6 font-mono text-xs uppercase tracking-[0.15em]">
            <div>
              <dt className="text-fog">Horário</dt>
              <dd className="mt-1">Ter–Sáb · 11h–20h</dd>
            </div>
            <div>
              <dt className="text-fog">Endereço</dt>
              <dd className="mt-1">R. Augusta, 2000 · SP</dd>
            </div>
          </dl>
        </div>

        <div className="reveal border border-white/10 bg-coal p-6 md:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <Star className="h-12 w-12 text-carmim" />
              <p className="mt-6 font-display text-4xl uppercase">Recebido</p>
              <p className="mt-2 text-sm text-bone/70">Logo a gente te chama pra fechar os detalhes.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-carmim underline">
                Enviar outra
              </button>
            </div>
          ) : (
            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Sem backend ainda: conecte aqui um serviço de e-mail ou uma API route.
                setSent(true);
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input required name="nome" placeholder="Nome" className={field} />
                <input required name="contato" placeholder="WhatsApp ou e-mail" className={field} />
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] uppercase tracking-[0.15em]">
                {["Tatuagem", "Piercing"].map((t, i) => (
                  <label key={t} className="cursor-pointer">
                    <input type="radio" name="servico" value={t} defaultChecked={i === 0} className="peer sr-only" />
                    <span className="block border border-white/10 py-3 text-center transition-colors peer-checked:border-carmim peer-checked:bg-carmim/15 peer-checked:text-carmim">
                      {t}
                    </span>
                  </label>
                ))}
              </div>
              <textarea required name="ideia" rows={5} placeholder="Descreva sua ideia, tamanho e local do corpo" className={`${field} resize-none`} />
              <button
                type="submit"
                className="mt-2 flex items-center justify-between bg-carmim px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-bone hover:text-void"
              >
                Enviar pedido <Arrow className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
