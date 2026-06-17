import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import TerminalCard, { type TerminalLine } from '@/components/home/TerminalCard'

export interface TerminalDomain {
  label: string
  count: string
}

export interface HeroTerminalOHProps {
  meta?:      string
  headline?:  ReactNode
  body?:      string
  about?:     string[]
  domains?:   TerminalDomain[]
  /** Override the terminal card lines entirely */
  lines?:     TerminalLine[]
  className?: string
}

const GRID_STYLE: CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(to right, rgba(12,12,12,0.06) 0px, rgba(12,12,12,0.06) 1px, transparent 1px, transparent 14.285%)',
}

const DEFAULT_HEADLINE: React.ReactNode = (
  <>
    Notes from<br />
    a curious<br />
    <span className="text-accent">/</span>{' '}generalist.
  </>
)

const DEFAULT_ABOUT = [
  '// I write code, ship sites,',
  '// pull heavy, draw weird,',
  '// and collect too much plastic.',
]

const DEFAULT_DOMAINS: TerminalDomain[] = [
  { label: 'tech',     count: '14 posts' },
  { label: 'fitness',  count: '09 posts' },
  { label: 'creative', count: '06 posts' },
  { label: 'nerd',     count: '11 posts' },
]

function buildLines(about: string[], domains: TerminalDomain[]): TerminalLine[] {
  return [
    { type: 'command', text: 'cat about.txt' },
    ...about.map(text => ({ type: 'comment' as const, text })),
    { type: 'gap' },
    { type: 'command', text: 'ls -l ./domains' },
    {
      type:  'listing',
      items: domains.map(d => ({ label: d.label, value: d.count })),
    },
    { type: 'cursor' },
  ]
}

export default function HeroTerminalOH({
  meta     = '~/oh-hey-lynae · idx 026 · updated Apr 2026',
  headline = DEFAULT_HEADLINE,
  body     = "A logbook of things I'm building, lifting, drawing, and obsessing over. Frontend craft sits next to print zines, squat PRs, and Lego shelves. Nothing here pretends to be siloed.",
  about    = DEFAULT_ABOUT,
  domains  = DEFAULT_DOMAINS,
  lines,
  className,
}: HeroTerminalOHProps) {
  const terminalLines = lines ?? buildLines(about, domains)

  return (
    <section
      className="home-inner"
    >
      <div className="site-inner px-[clamp(20px,5vw,80px)] py-16">
        {/* Meta row */}
        <div className="font-mono text-xs text-ink-mute mb-10">{meta}</div>

        {/* Two-column layout */}
        <div className="grid gap-12 items-start grid-cols-2">
          {/* Left: headline + body */}
          <div className='md:col-span-1 col-span-2'>
            <h1
              className="font-sans font-black text-ink tracking-tight leading-[0.94] mb-8"
              style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
            >
              {headline}
            </h1>
            <p className="font-sans text-body text-ink-soft leading-normal max-w-[460px]">
              {body}
            </p>
          </div>

          {/* Right: terminal card */}
          <TerminalCard lines={terminalLines} className="self-center md:col-span-1 col-span-2" />
        </div>

      </div>
    </section>
  )
}
