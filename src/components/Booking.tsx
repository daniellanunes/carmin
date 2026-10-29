"use client";

import { useState } from "react";
import { Arrow, Label, Star } from "./Ui";

const inputField =
  "w-full border border-white/10 bg-void px-4 py-3.5 text-sm text-bone outline-none transition-colors placeholder:text-fog focus:border-gold";

export default function Booking() {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    estilo: "Autoral / Selos",
    localCorpo: "",
    tamanho: "",
    ideia: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMsg = `Olá Tom! Gostaria de fazer um orçamento de tatuagem:
- *Nome:* ${formData.nome}
- *Contato:* ${formData.contato}
- *Estilo:* ${formData.estilo}
- *Local do Corpo:* ${formData.localCorpo || "A definir"}
- *Tamanho Estimado:* ${formData.tamanho || "A combinar"}
- *Descrição da Ideia:* ${formData.ideia}`;

    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/5571989331091?text=${encoded}`, "_blank");
  };

  return (
    <section id="orcamento" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32 bg-void">
      <Star className="absolute -left-20 bottom-0 h-72 w-72 text-gold/5" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Coluna Informações e Termos */}
          <div className="reveal">
            <Label>05 — Orçamento &amp; Agendamento</Label>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold uppercase leading-[1.05] text-bone">
              Vamos fazer um
              <br />
              <span className="text-gold italic font-normal">orçamento?</span>
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-bone/80">
              Cada tatuagem é única — e o orçamento também. O valor de um trabalho é definido com base em fatores
              como tamanho, nível de detalhamento, localização anatômica, tempo estimado de execução e estilo escolhido.
            </p>

            {/* Termos e Condições Detalhados */}
            <div className="mt-10 space-y-6">
              <h3 className="font-serif text-xl font-bold uppercase text-gold">
                Termos &amp; Condições de Atendimento
              </h3>

              <div className="border border-white/10 bg-coal/50 p-5 space-y-3">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                  <Star className="h-3 w-3" /> 1. Sinal para Confirmação
                </p>
                <p className="text-xs leading-relaxed text-bone/75">
                  • <strong>30% do valor total:</strong> caso a arte já esteja pronta (com pequenos ajustes).<br />
                  • <strong>50% do valor total:</strong> para artes autorais desenvolvidas do zero.<br />
                  • <em>Processo criativo:</em> Esboços enviados para alinhamento e a arte final enviada com até 24 horas de antecedência do procedimento.
                </p>
              </div>

              <div className="border border-white/10 bg-coal/50 p-5 space-y-3">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                  <Star className="h-3 w-3" /> 2. Agendamento &amp; Reserva
                </p>
                <p className="text-xs leading-relaxed text-bone/75">
                  A data e o horário só são confirmados mediante o pagamento do sinal via <strong>Pix ou transferência bancária</strong> no ato da reserva.
                </p>
              </div>

              <div className="border border-white/10 bg-coal/50 p-5 space-y-3">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                  <Star className="h-3 w-3" /> 3. Formas de Pagamento
                </p>
                <p className="text-xs leading-relaxed text-bone/75">
                  O saldo restante é quitado no dia do procedimento (antes do início da sessão).<br />
                  • Pix, transferência bancária ou dinheiro em espécie.<br />
                  • Cartão de débito.<br />
                  • Cartão de crédito parcelado em até <strong>12x</strong> (com taxa da maquininha).
                </p>
              </div>

              <div className="border border-gold/30 bg-gold/5 p-4 text-xs leading-relaxed text-bone/80">
                <strong className="text-gold uppercase tracking-wider font-mono block mb-1">
                  ⚠️ Observação Importante:
                </strong>
                O valor do sinal não é reembolsável em casos de desistência por parte do cliente, salvo situações previamente acordadas. Alterações de data devem ser comunicadas com antecedência.
              </div>
            </div>
          </div>

          {/* Coluna Formulário com envio para WhatsApp */}
          <div className="reveal border border-gold/30 bg-coal p-6 md:p-10 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold uppercase text-bone">
              Solicitar Orçamento
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-bone/70">
              Preencha os dados abaixo para receber uma estimativa personalizada direto no WhatsApp do Tom.
            </p>

            <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-fog mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  required
                  name="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Ex: Camila Silva"
                  className={inputField}
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-fog mb-1.5">
                  Seu WhatsApp ou Telefone *
                </label>
                <input
                  required
                  name="contato"
                  value={formData.contato}
                  onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                  placeholder="(71) 99999-9999"
                  className={inputField}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-fog mb-1.5">
                    Estilo Preferido
                  </label>
                  <select
                    value={formData.estilo}
                    onChange={(e) => setFormData({ ...formData, estilo: e.target.value })}
                    className={`${inputField} cursor-pointer`}
                  >
                    <option value="Os Selos (Projeto Autoral)">Os Selos (Projeto Autoral)</option>
                    <option value="Blackwork">Blackwork</option>
                    <option value="Fine line">Fine line</option>
                    <option value="Colorido / Pintura Óleo">Colorido / Pintura Óleo</option>
                    <option value="Anime / Mangá">Anime / Mangá</option>
                    <option value="Realismo">Realismo</option>
                    <option value="Outro / Mistura">Outro / Mistura</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-fog mb-1.5">
                    Tamanho Estimado (cm)
                  </label>
                  <input
                    name="tamanho"
                    value={formData.tamanho}
                    onChange={(e) => setFormData({ ...formData, tamanho: e.target.value })}
                    placeholder="Ex: 10 cm, 15 cm..."
                    className={inputField}
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-fog mb-1.5">
                  Local do Corpo onde quer tatuar
                </label>
                <input
                  name="localCorpo"
                  value={formData.localCorpo}
                  onChange={(e) => setFormData({ ...formData, localCorpo: e.target.value })}
                  placeholder="Ex: Antebraço, costela, panturrilha..."
                  className={inputField}
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-fog mb-1.5">
                  Conte sua ideia ou referências *
                </label>
                <textarea
                  required
                  name="ideia"
                  rows={4}
                  value={formData.ideia}
                  onChange={(e) => setFormData({ ...formData, ideia: e.target.value })}
                  placeholder="Descreva o que deseja tatuar, elementos, inspirações..."
                  className={`${inputField} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-3 bg-gold px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void transition-all hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(201,158,103,0.4)]"
              >
                Enviar via WhatsApp <Arrow className="h-4 w-4" />
              </button>

              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-fog mt-2">
                Resposta rápida e atendimento humanizado diretamente com o tatuador.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
