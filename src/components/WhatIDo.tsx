import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  num:       string
  name:      string
  desc:      string
  href?:     string
  ctaLabel?: string
}

export interface WhatIDoProps {
  eyebrow?:   string
  heading?:   React.ReactNode
  cta?:       { label: string; href: string }
  services?:  Service[]
  columns?:   2 | 3 | 4
  theme?:     'oh-hey' | 'kodara'
  className?: string
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_SERVICES: Service[] = [
  { num: '01', name: 'Design Systems',     desc: 'Tokens, components, docs, and the governance that keeps it from drifting.' },
  { num: '02', name: 'Frontend Dev',       desc: 'Production React / Next / TanStack. Fast, accessible, built to last.' },
  { num: '03', name: 'UI / UX Consulting', desc: 'Audits, flows, and a prioritized roadmap before you spend the budget.' },
  { num: '04', name: 'Brand & Visual',     desc: 'Identity systems for companies that want to look like they mean it.' },
]

const DEFAULT_HEADING: React.ReactNode = (
  <>Four ways to<br />work <span className="text-accent">together.</span></>
)

const COLS_CLASS: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function WhatIDo({
  eyebrow  = 'What I do',
  heading  = DEFAULT_HEADING,
  cta      = { label: 'All services →', href: '/consulting/services' },
  services = DEFAULT_SERVICES,
  columns  = 4,
  theme    = 'oh-hey',
  className,
}: WhatIDoProps) {
  const total    = String(services.length).padStart(2, '0')
  const isKodara = theme === 'kodara'

  return (
    <section className={cn(
      'border-b border-line px-[clamp(20px,5vw,80px)] py-[72px]',
      // Grid lives on the section — cards sit solid on top of it
      isKodara && [
        '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)]',
        '[background-size:calc(100%/12)_96px]',
      ],
      className,
    )}>
      {/* Header */}
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <div className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-accent">
            <span className="h-px w-8 bg-accent shrink-0" />
            {eyebrow}
          </div>
          <h2 className="font-sans font-bold leading-6 tracking-tight text-ink [font-size:clamp(36px,4vw,56px)]">
            {heading}
          </h2>
        </div>
        {cta && (
          <a
            href={cta.href}
            className="whitespace-nowrap border-b border-accent pb-1 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:text-accent"
          >
            {cta.label}
          </a>
        )}
      </div>

      {/* Grid */}
      <div className={cn(
        'grid border-l border-t border-line-strong',
        COLS_CLASS[columns],
        columns === 4 && 'max-md:grid-cols-2 max-[560px]:grid-cols-1',
        columns === 3 && 'max-md:grid-cols-2 max-[560px]:grid-cols-1',
        columns === 2 && 'max-[560px]:grid-cols-1',
      )}>
        {services.map((s) => {
          const Tag = s.href ? 'a' : 'div'
          const linkProps = s.href ? { href: s.href } : {}
          return (
            <Tag
              key={s.num}
              {...linkProps}
              className={cn(
                'group flex min-h-[260px] flex-col border-b border-r border-line p-7 transition-colors',
                // Solid backgrounds — never transparent, always covers the section grid
                isKodara ? 'bg-kodara-accent-soft-solid hover:bg-kodara-accent-soft/50' : 'bg-paper',
                s.href && !isKodara && 'hover:bg-paper-2',
              )}
            >
              <div className="font-mono text-xs tracking-widest text-accent">
                {s.num} / {total}
              </div>
              <div className="mt-10 font-sans text-xl font-bold tracking-tight text-ink">
                {s.name}
              </div>
              {s.desc && (
                <div className="mt-3.5 flex-1 text-sm leading-relaxed text-ink-2">
                  {s.desc}
                </div>
              )}
              {s.href && (
                <div className="mt-2 flex items-center justify-between font-mono text-sm uppercase tracking-wider text-ink-soft transition-colors group-hover:text-accent">
                  <span>{s.ctaLabel ?? 'Explore'}</span>
                  <span>→</span>
                </div>
              )}
            </Tag>
          )
        })}
      </div>
    </section>
  )
}
