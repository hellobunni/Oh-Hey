import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  num: string          // "01"
  title: string        // "LATEST WRITING"
  action?: { label: string; href: string }
  className?: string
}

function SectionHeader({ num, title, action, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-baseline justify-between px-[clamp(20px,5vw,80px)]',
        'pt-16 pb-7',
        className,
      )}
    >
      <div className="font-mono text-xs text-ink-soft">
        <span className="mr-2 text-ink-mute">[{num}]</span>
        {title}
      </div>
      {action && (
        <a
          href={action.href}
          className="border-b border-ink pb-0.5 font-mono text-xs text-ink"
        >
          {action.label}
        </a>
      )}
    </div>
  )
}

export { SectionHeader }