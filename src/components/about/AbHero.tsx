import { cn } from '@/lib/utils'
import TerminalCard, { type TerminalLine } from '@/components/home/TerminalCard'

const TERMINAL_LINES: TerminalLine[] = [
  { type: 'command', text: 'cat about.txt' },
  { type: 'comment', text: '// started in the studio, ended up in the terminal' },
  { type: 'comment', text: '// designer by training, developer by necessity' },
  { type: 'comment', text: '// generalist on purpose' },
  { type: 'gap' },
  { type: 'command', text: 'whoami' },
  {
    type: 'listing',
    labelWidth: 88,
    items: [
      { label: 'name',     value: 'Bryanna Lynae' },
      { label: 'location', value: 'Detroit, MI' },
      { label: 'role',     value: 'design engineer' },
      { label: 'open to',  value: 'consulting · collabs' },
    ],
  },
  { type: 'cursor' },
]

interface AbHeroProps {
  className?: string
}

export function AbHero({ className }: AbHeroProps) {
  return (
    <section
      className={cn('bg-paper border-b border-line grid-bg-transparent', className)}
    >
      <div className="site-inner px-[clamp(20px,5vw,80px)] py-16">
        <div className="font-mono text-xs text-ink-mute mb-10">~/oh-hey-lynae · about.txt</div>

        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: '55fr 45fr' }}>
          <div>
            <h1
              className="font-pixel font-bold text-ink leading-[1.15] mb-8"
              style={{ fontSize: 'clamp(34px, 5.5vw, 58px)' }}
            >
              Hey, I'm<br />
              Bryanna.<br />
              <span className="text-accent">/</span>{' '}generalist.
            </h1>
            <p className="font-sans text-base text-ink-soft leading-normal max-w-[460px]">
              I started in brand studios and crossed into code — and never looked back.
              Today I ship end-to-end: identity to interface to infrastructure.
              This site is where I log everything else — the lifting, the Lego, the weird prints.
            </p>
          </div>

          <TerminalCard lines={TERMINAL_LINES} className="self-center" />
        </div>
      </div>
    </section>
  )
}
