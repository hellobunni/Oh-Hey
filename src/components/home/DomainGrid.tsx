import { DOMAIN_META, type Domain } from "@content/domains";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/layout/SectionHeader";

type DomainCard = { domain: Domain; desc: string; count: number; href: string };

interface DomainGridProps {
  domains?: DomainCard[];
  num?: string;
  className?: string;
}

const DEFAULT_DOMAINS: DomainCard[] = [
  {
    domain: "tech",
    desc: "Frontend craft, dev tools, building in public.",
    count: 2,
    href: "/tech",
  },
  {
    domain: "fitness",
    desc: "Strength training, running, the boring middle.",
    count: 0,
    href: "/fitness",
  },
  {
    domain: "creative",
    desc: "Prints, process, gouache vs procreate.",
    count: 0,
    href: "/creative",
  },
  {
    domain: "nerd",
    desc: "Comics, cards, gaming, the Lego shelf.",
    count: 1,
    href: "/nerd",
  },
];

const DOMAIN_SHADOW: Record<Domain, string> = {
  tech: "shadow-[5px_5px_0_rgba(126,214,192,0.28)]",
  fitness: "shadow-[5px_5px_0_rgba(242,167,195,0.28)]",
  creative: "shadow-[5px_5px_0_rgba(143,168,232,0.28)]",
  nerd: "shadow-[5px_5px_0_rgba(233,196,106,0.28)]",
};

const DOMAIN_TEXT: Record<Domain, string> = {
  tech: "text-primary",
  fitness: "text-accent",
  creative: "text-link",
  nerd: "text-gold",
};

function DomainGrid({
  domains = DEFAULT_DOMAINS,
  num = "02",
  className,
}: DomainGridProps) {
  return (
    <section className={className}>
      <SectionHeader num={num} title="FOUR SAVE SLOTS" />

      <div className="grid grid-cols-4 px-[clamp(20px,5vw,50px)] py-8 gap-[18px] site-inner">
        {domains.map((d) => {
          const meta = DOMAIN_META[d.domain];
          return (
            <a
              key={d.domain}
              href={d.href}
              className={cn(
                "bg-card-2 border-2 border-card p-[22px] no-underline",
                "transition-transform duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5",
                DOMAIN_SHADOW[d.domain],
              )}
            >
              <div
                className={cn(
                  "font-pixel text-sm mb-2.5",
                  DOMAIN_TEXT[d.domain],
                )}
              >
                {d.domain === "tech" && "▲ "}
                {d.domain === "fitness" && "♥ "}
                {d.domain === "creative" && "◼ "}
                {d.domain === "nerd" && "★ "}
                {meta.label.toUpperCase()}
              </div>
              <div className="font-sans font-medium text-sm text-ink-soft leading-snug">
                {d.desc}
              </div>
              {d.count > 0 && (
                <div className="mt-5 font-mono text-xs text-ink-mute">
                  {String(d.count).padStart(2, "0")} posts
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export { DomainGrid };
