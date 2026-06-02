import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export interface HeroStat {
  value: string
  unit?:  string
  label:  string
}

export interface HeroTerminalLVProps {
  meta?:         string
  headline?:     React.ReactNode
  body?:         string
  stats?:        HeroStat[]
  primaryCta?:   { label: string; href?: string }
  secondaryCta?: { label: string; href?: string }
  className?:    string
}


function CircleArt() {
  const accent = '#2563eb'

  return (
    <div className="relative z-50 flex h-full min-h-[340px] flex-col border border-line-strong bg-accent-soft">
      {/* accent corner ticks */}
      <span className="absolute -left-px -top-px h-px w-8 bg-accent"  />
      <span className="absolute -left-px -top-px h-8 w-px bg-accent"  />
      <span className="absolute -right-px -top-px h-px w-8 bg-accent"  />
      <span className="absolute -bottom-px -left-px h-8 w-px bg-accent"  />
      <span className="absolute -bottom-px -right-px h-px w-8 bg-accent"  />

      {/* concentric rings */}
      <div className="flex flex-1 items-center justify-center p-10">
        <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke={accent} strokeWidth="1.5" />
          <circle cx="100" cy="100" r="56" stroke={accent} strokeWidth="1.5" opacity="0.6" />
          <circle cx="100" cy="100" r="20" fill={accent} />
        </svg>
      </div>

      {/* corner labels */}
      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-xxs uppercase tracking-wide">
        <span className="text-ink-mute">KODARA / 026</span>
        <span style={{ color: accent }}>DESIGN × ENG</span>
      </div>
    </div>
  )
}

const DEFAULT_HEADLINE: React.ReactNode = (
  <>
    Design<br />
    &amp; engineering,<br />
    <span className="text-accent">on demand.</span>
  </>
)

const DEFAULT_STATS: HeroStat[] = [
  { value: '12',  unit: 'yr', label: 'BOTH SIDES OF\nTHE TABLE'  },
  { value: '120', unit: '+',  label: 'PROJECTS\nSHIPPED'         },
  { value: '48',  unit: 'hr', label: 'RESPONSE\nWINDOW'          },
]

export default function HeroTerminalK({
  meta         = 'DESIGN + ENGINEERING · EST. 2014',
  headline     = DEFAULT_HEADLINE,
  body         = 'Kodara is the consulting practice of Bryanna Gardner — 12 years of brand, product, and engineering, accelerated by AI. Strategic depth and execution speed in a single engagement, without the agency overhead.',
  stats        = DEFAULT_STATS,
  primaryCta   = { label: 'START THE QUESTIONNAIRE →' },
  secondaryCta = { label: 'VIEW SERVICES' },
  className,
}: HeroTerminalLVProps) {
  return (
    <section
      className={cn(
        'bg-kodara-accent-soft/50 border-b border-line py-12',
        '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)]',
        '[background-size:calc(100%/12)_85px]',
        className,
      )}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-16 relative z-10">
        {/* Meta row */}
        <div className="flex items-center gap-3 font-mono text-xxs text-accent mb-10 tracking-wider">
          <span className="inline-block w-8 h-px bg-ink-soft shrink-0" />
          {meta}
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: '55fr 45fr' }}>
          {/* Left: headline + body + stats + CTAs */}
          <div className="flex flex-col gap-8">
            <h1
              className="font-sans font-black text-ink tracking-tight leading-[0.92]"
              style={{ fontSize: 'clamp(48px, 8vw, 95px)' }}
            >
              {headline}
            </h1>

            <p className="font-sans text-body text-ink-soft leading-6 max-w-[440px] text-xs">
              {body}
            </p>

            {/* Stats row */}
            <div className="flex items-start py-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 w-1/3 first:pl-0"
                >
                  <div
                    className="font-sans font-bold text-ink leading-9 tracking-tight"
                    style={{ fontSize: 'clamp(28px, 3vw, 32px)' }}
                  >
                    {s.value}
                    {s.unit && <span className="text-accent">{s.unit}</span>}
                  </div>
                  <div className="font-mono text-xxs text-ink-mute tracking-[0.1em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Button variant="kodara-accent" size="default">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button variant="secondary" size="default">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* Right: circle art */}
          <CircleArt />
        </div>
      </div>
    </section>
  )
}
