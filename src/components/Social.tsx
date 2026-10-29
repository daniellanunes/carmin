"use client";

import { SectionTitle, Star } from "./Ui";

const socials = [
  {
    name: "Instagram",
    user: "@tomcashtattoo",
    desc: "Acompanhe trabalhos diários, fotos cicatrizadas e novidades.",
    href: "https://www.instagram.com/tomcashtattoo/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    user: "@tomcashtattoo",
    desc: "Processos de criação, vídeos de tatuando e bastidores.",
    href: "https://www.tiktok.com/@tomcashtattoo?_t=ZM-8unKGzLw2Lv&_r=1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp Atendimento",
    user: "(71) 98933-1091",
    desc: "Canal oficial para orçamentos rápidos e dúvidas.",
    href: "https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp Direto Artista",
    user: "(74) 98861-0287",
    desc: "Contato direto com Tom para alinhamentos artísticos.",
    href: "https://wa.me/5574988610287",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Social() {
  return (
    <section id="localizacao" className="scroll-mt-20 py-24 md:py-32 bg-coal border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
            06 — Onde Me Encontrar
          </span>
          <SectionTitle className="mt-3">
            Localização &amp;
            <br />
            Redes Sociais
          </SectionTitle>
          <p className="mt-4 text-sm md:text-base text-bone/70">
            Venha conhecer o estúdio em frente ao mar da Barra ou acompanhe todo o processo artístico online.
          </p>
        </div>

        {/* Grid de Redes */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 bg-void p-6 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(201,158,103,0.15)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-void">
                  {s.icon}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-fog group-hover:text-gold transition-colors">
                  Acessar ↗
                </span>
              </div>
              <h3 className="mt-6 font-serif text-lg font-bold text-bone group-hover:text-gold transition-colors">
                {s.name}
              </h3>
              <p className="font-mono text-xs text-gold mt-1">{s.user}</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/60">{s.desc}</p>
            </a>
          ))}
        </div>

        {/* Iframe Mapa & Horários */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-stretch">
          {/* Embed Google Maps */}
          <div className="relative min-h-[350px] overflow-hidden border border-gold/30 bg-void">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.418142504204!2d-38.526958600000015!3d-13.009023199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035be7e33827%3A0xe5f3592c4f508fed!2sTomCashTattoo!5e0!3m2!1spt-BR!2sbr!4v1743624412139!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380, filter: "invert(90%) hue-rotate(180deg) contrast(95%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TomCash Tattoo Salvador Mapa"
            />
          </div>

          {/* Card Endereço e Horários */}
          <div className="flex flex-col justify-between border border-gold/30 bg-void p-6 md:p-8">
            <div>
              <div className="flex items-center gap-2 text-gold">
                <Star className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Endereço</span>
              </div>
              <p className="mt-3 font-serif text-xl font-bold text-bone">
                Centro Comercial Barra Center
              </p>
              <p className="mt-1 text-sm text-bone/80">
                Av. Oceânica, 551 - sala 106 - Barra
              </p>
              <p className="text-sm text-bone/60">Salvador - BA, CEP 40140-080</p>
              <p className="mt-2 text-xs italic text-gold">Em frente ao mar e ao Farol da Barra</p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold block mb-3">
                Horário de Atendimento
              </span>
              <dl className="space-y-2 font-mono text-xs text-bone/80">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <dt className="text-fog">Segunda a Sexta:</dt>
                  <dd className="font-bold text-bone">08h às 23:30</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <dt className="text-fog">Sábado:</dt>
                  <dd className="font-bold text-bone">08h às 22:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-fog">Domingo:</dt>
                  <dd className="font-bold text-bone">08h às 22:00</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gold py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void hover:bg-gold-hover transition-colors"
              >
                Agendar Horário
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
