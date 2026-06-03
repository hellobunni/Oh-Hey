import { cn } from '@/lib/utils'

const TOOLS = [
  {
    num: '01',
    title: 'Book a check-in',
    desc: 'Grab time on the calendar for a working session or status sync.',
    href: 'https://cal.com/kodaraadvisory/discovery',
  },
  {
    num: '02',
    title: 'Email directly',
    desc: 'Quick question or something urgent? Straight to the inbox.',
    href: 'mailto:kodaraadvisory@gmail.com',
  },
  {
    num: '03',
    title: 'Shared drive',
    desc: 'Deliverables, brand files, and docs for your engagement.',
    href: '#',
  },
]

export function WorkspaceTools() {
  return (
    <div className="grid grid-cols-3 border-b border-line max-md:grid-cols-1">
      {TOOLS.map((t, i) => (
        <a
          key={t.num}
          href={t.href}
          className={cn(
            'flex flex-col gap-2 border-r border-line bg-paper p-8 text-left transition-colors hover:bg-accent-soft',
            i === 0 && 'border-l',
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.1em] text-accent">{t.num}</span>
            <span className="font-mono text-accent">→</span>
          </div>
          <h3 className="mt-6 font-sans text-lg font-bold tracking-tight text-ink">{t.title}</h3>
          <p className="text-xs leading-relaxed text-ink-soft">{t.desc}</p>
        </a>
      ))}
    </div>
  )
}
