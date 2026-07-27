import { VALUES } from '@content/about.data'
import { SectionHeader } from '@/components/layout/SectionHeader'

interface ValuesProps {
  className?: string
}

export function Values({ className }: ValuesProps) {
  return (
    <section className={className}>
      <SectionHeader num="02" title="HOW I WORK" />

      <div className="grid grid-cols-3 border-y border-line max-md:grid-cols-1">
        {VALUES.map((v) => (
          <div
            key={v.n}
            className="border-r border-line p-8 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0"
          >
            <div className="font-mono text-xs text-ink-mute mb-6">{v.n}</div>
            <div className="font-sans text-xl font-bold tracking-[-0.02em] text-ink mb-3">
              {v.h}
            </div>
            <div className="font-sans text-sm text-ink-soft leading-[1.65]">{v.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
