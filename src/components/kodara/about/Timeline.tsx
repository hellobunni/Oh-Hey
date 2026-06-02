import { TIMELINE } from '@/data/about.data'

export function Timeline() {
  return (
    <section className="border-b border-line px-[clamp(20px,5vw,80px)] py-[72px]">
      <div className="mb-12 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        — The path here
      </div>
      <div className="grid grid-cols-4 border-l border-t border-line-strong max-md:grid-cols-1">
        {TIMELINE.map((e) => (
          <div key={e.year} className="flex min-h-[180px] flex-col border-b border-r border-line bg-paper p-7">
            <div className="font-sans text-[32px] font-bold tracking-tight text-accent">{e.year}</div>
            <h4 className="mt-6 font-sans text-lg font-bold tracking-tight text-ink">{e.t}</h4>
            <div className="mt-2 text-sm leading-relaxed text-ink-2">{e.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
