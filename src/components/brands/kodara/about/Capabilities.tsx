import { CAPABILITIES } from '@/data/about.data'

export function Capabilities() {
  return (
    <section className="grid grid-cols-[1fr_2fr] items-start gap-20 border-b border-line px-[clamp(20px,5vw,80px)] py-18 max-lg:grid-cols-1 max-lg:gap-10">
      <div>
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          — What I bring
        </div>
        <h2 className="font-sans text-[40px] font-bold leading-[1.05] tracking-tight text-ink">
          One brain,<br /><span className="text-accent">many lanes.</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 border-l border-t border-line max-[640px]:grid-cols-1">
        {CAPABILITIES.map((c) => (
          <div
            key={c}
            className="border-b border-r border-line px-6 py-5 font-mono text-xs uppercase tracking-wide text-ink-2 transition-colors hover:text-accent"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  )
}
