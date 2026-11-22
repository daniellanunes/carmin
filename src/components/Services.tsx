"use client";

import Image from "next/image";
import { Arrow, SectionTitle } from "./Ui";

const services = [
  {
    number: "01",
    title: "Criação de Tattoo",
    subtitle: "Arte 100% Autoral",
    image: "/assets/servicos/criacao.webp",
    desc: "Desenvolvimento de artes exclusivas criadas do zero a partir da sua ideia, referências e história, com alinhamento de esboços antes da sessão.",
    whatsappText: "Olá Tom! Gostaria de fazer um orçamento para Criação de Tattoo autoral.",
  },
  {
    number: "02",
    title: "Fechamento de Áreas",
    subtitle: "Projetos de Grande Porte",
    image: "/assets/servicos/fechamento.webp",
    desc: "Planejamento estratégico para braços, pernas, costas ou peito. Composições contínuas pensadas para encaixar com fluidez na anatomia do corpo.",
    whatsappText: "Olá Tom! Tenho interesse em um projeto de Fechamento de Área.",
  },
  {
    number: "03",
    title: "Cobertura de Tattoo",
    subtitle: "Cover-up Estratégico",
    image: "/assets/servicos/cobertura.webp",
    desc: "Transformação de tatuagens antigas ou indesejadas em uma nova peça marcante, com estudo de contraste, texturas e encaixe sobre o desenho anterior.",
    whatsappText: "Olá Tom! Gostaria de avaliar uma Cobertura de Tattoo.",
  },
  {
    number: "04",
    title: "Reforma de Tattoo",
    subtitle: "Restauração & Realce",
    image: "/assets/servicos/reforma.webp",
    desc: "Revitalização de tatuagens que desbotaram ou perderam definição com o tempo — renovando traços, sombras, profundidade e brilho das cores.",
    whatsappText: "Olá Tom! Gostaria de fazer um orçamento para Reforma de Tattoo.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 py-20 md:py-28 bg-void border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              02 — Serviços
            </span>
            <SectionTitle className="mt-3">
              Do Esboço
              <br />
              à Transformação
            </SectionTitle>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/70">
            Cada projeto recebe acompanhamento técnico e artístico personalizado, seja uma criação inédita,
            um fechamento completo, uma cobertura ou a restauração de uma peça existente.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal group flex flex-col justify-between overflow-hidden border border-white/10 bg-coal transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(216,195,174,0.12)]"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/20 to-transparent" />
                  <span className="absolute left-3 top-3 border border-gold/40 bg-void/85 px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-gold backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>

                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-1.5 font-serif text-xl font-bold uppercase text-bone group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-bone/75">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <a
                  href="#orcamento"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("select-service", { detail: service.title }));
                  }}
                  className="inline-flex w-full items-center justify-between border border-gold/30 bg-void/60 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-gold transition-all hover:border-gold hover:bg-gold hover:text-void"
                >
                  Orçar serviço <Arrow className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
