import { TIMELINE } from '@content/about.data'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { cn } from '@/lib/utils'

interface TimelineProps {
  className?: string
}

export function Timeline({ className }: TimelineProps) {
  return (
    <section className={className}>
      <SectionHeader num="01" title="BACKGROUND" />

      <div className="border-t border-line px-[clamp(20px,5vw,80px)]">
        {TIMELINE.map((entry) => (
          <div
            key={entry.year}
            className={cn(
              'grid grid-cols-[80px_1fr] gap-6 items-start',
              'border-b border-line py-7',
              'transition-colors hover:bg-paper-2 hover:-mx-3 hover:px-3',
            )}
          >
            <div className="font-mono text-xs text-accent pt-0.5">{entry.year}</div>
            <div>
              <div className="font-sans text-base font-semibold tracking-[-0.01em] text-ink mb-1">
                {entry.t}
              </div>
              <div className="font-sans text-sm text-ink-soft leading-relaxed">{entry.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
