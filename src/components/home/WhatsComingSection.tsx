import { SectionHeader } from '@/components/layout/SectionHeader'
import { cn } from '@/lib/utils'

const DOMAINS = [
  {
    num: '01',
    title: 'THE TECH LAB',
    description: 'Writing about frontend code, dev tools, and building the whole thing in public.',
    tag: 'TECH',
    tagColor: 'bg-mint/20 text-mint',
  },
  {
    num: '02',
    title: 'FITNESS + IRL',
    description: 'Straight fitness, running, and the unglamorous rabbit hole where the progress actually lives.',
    tag: 'FITNESS',
    tagColor: 'bg-pink/20 text-pink',
  },
  {
    num: '03',
    title: 'CREATIVE',
    description: 'Posts, process posts, glorified diary. Art, projects, and the games I still haven\'t beat alone.',
    tag: 'CREATIVE',
    tagColor: 'bg-peri/20 text-peri',
  },
  {
    num: '04',
    title: 'NERD STUFF',
    description: 'Comics, cards, gaming, and the Lego shelf that keeps quietly assembling.',
    tag: 'NERD',
    tagColor: 'bg-yellow-400/20 text-yellow-600 dark:text-yellow-400',
  },
] as const

export default function WhatsComingSection() {
  return (
    <section id="whats-coming">
      <SectionHeader
        num="02"
        title="WHAT'S COMING"
        action={{ label: 'SUGGEST', href: 'mailto:hey@oheythere.com' }}
      />

      <div className="px-[clamp(20px,5vw,80px)] pb-12 site-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DOMAINS.map((d) => (
            <div
              key={d.num}
              className="border-2 border-paper-2 bg-card p-5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-ink-soft/40">{d.num}</span>
                <span className={cn('font-px text-[9px] px-2.5 py-1', d.tagColor)}>
                  {d.tag}
                </span>
              </div>
              <p className="font-px text-sm text-ink">{d.title}</p>
              <p className="font-sans text-xs text-ink-soft leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
