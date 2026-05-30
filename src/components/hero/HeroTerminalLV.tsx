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

const GRID_STYLE: React.CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(',
    '  to right,',
    '  rgba(37,99,235,0.07) 0px,',
    '  rgba(37,99,235,0.07) 1px,',
    '  transparent 1px,',
    '  transparent 12.5%',
    ')',
  ].join(''),
}

function CircleArt() {
  return (
    <div className="border border-line-strong flex flex-col h-full min-h-[340px]">
      <div className="flex-1 flex items-center justify-center p-10">
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="90" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="56" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="20" fill="#2563eb" />
        </svg>
      </div>
      <div className="flex justify-between items-center px-4 py-2.5 border-t border-line font-mono text-[10px] text-ink-mute tracking-[0.08em] uppercase">
        <span>KODARA / 026</span>
        <span>DESIGN × ENG</span>
      </div>
    </div>
  )
}

const DEFAULT_HEADLINE: React.ReactNode = (
  <>
    Senior<br />
    design<br />
    &amp; engineering,<br />
    <span className="text-accent">on demand.</span>
  </>
)

const DEFAULT_STATS: HeroStat[] = [
  { value: '12',  unit: 'yr', label: 'BOTH SIDES OF\nTHE TABLE'  },
  { value: '120', unit: '+',  label: 'PROJECTS\nSHIPPED'         },
  { value: '48',  unit: 'hr', label: 'RESPONSE\nWINDOW'          },
]

export default function HeroTerminalLV({
  meta         = 'DESIGN + ENGINEERING · EST. 2014',
  headline     = DEFAULT_HEADLINE,
  body         = 'Kodara is the consulting practice of Lynae Thomas — 12 years of brand, product, and engineering, accelerated by AI. Strategic depth and execution speed in a single engagement, without the agency overhead.',
  stats        = DEFAULT_STATS,
  primaryCta   = { label: 'START THE QUESTIONNAIRE →' },
  secondaryCta = { label: 'VIEW SERVICES' },
  className,
}: HeroTerminalLVProps) {
  return (
    <section
      className={cn('bg-white border-b border-line', className)}
      style={GRID_STYLE}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        {/* Meta row */}
        <div className="flex items-center gap-3 font-mono text-xs text-ink-soft mb-12">
          <span className="inline-block w-8 h-px bg-ink-soft shrink-0" />
          {meta}
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: '55fr 45fr' }}>
          {/* Left: headline + body + stats + CTAs */}
          <div className="flex flex-col gap-8">
            <h1
              className="font-sans font-black text-ink tracking-tight leading-[0.92]"
              style={{ fontSize: 'clamp(64px, 9vw, 112px)' }}
            >
              {headline}
            </h1>

            <p className="font-sans text-body text-ink-soft leading-normal max-w-[440px]">
              {body}
            </p>

            {/* Stats row */}
            <div className="flex items-start">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 pr-8 pl-8 first:pl-0"
                  style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(12,12,12,0.18)' : 'none' }}
                >
                  <div
                    className="font-sans font-black text-ink leading-none tracking-tight"
                    style={{ fontSize: 'clamp(32px, 3.5vw, 44px)' }}
                  >
                    {s.value}
                    {s.unit && <span className="text-accent">{s.unit}</span>}
                  </div>
                  <div className="font-mono text-[10px] text-ink-mute tracking-[0.1em] uppercase whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Button variant="accent" size="default">
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
