import { DOMAIN_META, type Domain } from '@/data/domains';
import { cn } from '@/lib/utils'
import { SectionHeader } from '../layout/SectionHeader';

type DomainCard = { domain: Domain; desc: string; count: number; href: string }

interface DomainGridProps {
  domains?: DomainCard[]
  num?: string
  className?: string
}

const DEFAULT_DOMAINS: DomainCard[] = [
  { domain: 'tech',     desc: 'Frontend craft, dev tools, building in public.', count: 2, href: '/tech' },
  { domain: 'fitness',  desc: 'Strength training, running, the boring middle.', count: 0,  href: '/fitness' },
  { domain: 'creative', desc: 'Prints, process, gouache vs procreate.',         count: 0,  href: '/creative' },
  { domain: 'nerd',     desc: 'Comics, cards, gaming, the Lego shelf.',          count: 1, href: '/nerd' },
]

function DomainGrid({ domains = DEFAULT_DOMAINS, num = '02', className }: DomainGridProps) {
  return (
    <section className={className}>
      <SectionHeader num={num} title="DOMAINS" action={{ label: 'All categories →', href: '/domains' }} />

      <div className="grid grid-cols-4 px-[clamp(20px,5vw,50px)] py-12 site-inner">
        {domains.map((d, i) => {
          const meta = DOMAIN_META[d.domain]
          return (
            <a
              key={d.domain}
              href={d.href}
              className={cn(
                'p-7 transition-colors hover:bg-paper-2',
              )}
            >
              <div className="font-mono text-sm text-ink-mute">
                {String(i + 1).padStart(2, '0')} / {String(domains.length).padStart(2, '0')}
              </div>

              <div className="mt-9 flex items-center gap-2.5 text-[22px] font-bold tracking-[-0.02em] text-ink">
                <span className="inline-block h-2.5 w-2.5" style={{ background: meta.var }} />
                {meta.label}
              </div>

              <div className="mt-2.5 text-xs leading-[1.55] text-ink-soft">{d.desc}</div>
              <div className="mt-6 font-mono text-sm text-mute ">
                {String(d.count).padStart(2, '0')} posts
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export { DomainGrid }