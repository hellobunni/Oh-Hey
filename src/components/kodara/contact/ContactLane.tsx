import { cn } from '@/lib/utils'

interface LaneProps {
  num:      string
  tagline:  string
  title:    string
  desc:     string
  action:   string
  primary?: boolean
  href?:    string
  onClick?: () => void
}

export function ContactLane({ num, tagline, title, desc, action, primary, href, onClick }: LaneProps) {
  const base = cn(
    'flex min-h-[320px] flex-col border-r border-t border-line p-9 text-left transition-colors hover:bg-paper-2',
    primary && 'bg-accent-soft hover:bg-accent/10',
    !primary && 'bg-paper',
  )

  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.1em] text-accent">{num}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">{tagline}</span>
      </div>
      <h3 className="mt-11 font-sans text-[28px] font-bold leading-[1.05] tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3.5 flex-1 text-sm leading-relaxed text-ink-2">{desc}</p>
      <span className={cn(
        'mt-7 flex items-center justify-between gap-3 border-t border-line pt-[18px] font-mono text-xs uppercase tracking-[0.1em] text-accent',
        primary && 'border-accent/20',
      )}>
        {action} <span>→</span>
      </span>
    </>
  )

  if (href) {
    return <a href={href} className={base}>{inner}</a>
  }
  return <button type="button" onClick={onClick} className={base}>{inner}</button>
}
