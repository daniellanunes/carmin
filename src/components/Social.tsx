import { Dagger } from "./TattooArt";
import { SectionTitle, Slashes, Tile } from "./Ui";

const networks = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 3 2.5 5 5 5" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M11 8.5c3-1 5 .5 5 3s-2 4-3.5 3.5M12 11l-2.5 9" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5511999999999",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
      </svg>
    ),
  },
];

export default function Social() {
  return (
    <section id="redes" className="relative scroll-mt-16 overflow-hidden py-16 md:py-24">
      <Slashes className="inset-0 h-full w-full" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle className="reveal">
          Redes
          <br />
          sociais
        </SectionTitle>

        <Tile alt="Tatuador de luvas pretas trabalhando" tone="warm" className="reveal mt-10 border border-white/10">
          <Dagger className="absolute -right-6 top-1/2 h-[140%] -translate-y-1/2 rotate-[70deg] text-carmim/40 md:right-[30%]" />
          <div className="relative flex flex-col gap-8 bg-gradient-to-r from-void/90 via-void/60 to-transparent p-6 md:flex-row md:items-center md:justify-between md:p-12">
            <p className="max-w-xs text-sm leading-relaxed text-bone/85">
              Acompanhe os bastidores, trabalhos novos e as datas de flash day
              antes de todo mundo.
            </p>
            <ul className="flex gap-3">
              {networks.map((n) => (
                <li key={n.name}>
                  <a
                    href={n.href}
                    aria-label={n.name}
                    className="grid h-14 w-14 place-items-center border border-white/25 bg-void/50 backdrop-blur transition-colors hover:border-carmim hover:bg-carmim"
                  >
                    {n.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Tile>
      </div>
    </section>
  );
}
