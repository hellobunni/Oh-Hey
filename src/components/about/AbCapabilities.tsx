import { CAPABILITIES } from '@/data/about.data'
import { SectionHeader } from '@/components/layout/SectionHeader'

interface AbCapabilitiesProps {
  className?: string
}

export function AbCapabilities({ className }: AbCapabilitiesProps) {
  return (
    <section className={className}>
      <SectionHeader num="03" title="CAPABILITIES" />

      <div className="border-t border-b border-line px-[clamp(20px,5vw,80px)] py-10">
        <div className="flex flex-wrap gap-3">
          {CAPABILITIES.map((cap) => (
            <span
              key={cap}
              className="border border-line px-4 py-2 font-mono text-xs text-ink-soft tracking-wide transition-colors hover:border-ink hover:text-ink"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
