import { VALUES } from '@/data/about.data'

export function Values() {
  return (
    <section className="border-b border-line px-[clamp(20px,5vw,80px)] py-[72px]">
      <div className="mb-12 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        — How I work
      </div>
      <div className="grid grid-cols-3 border-l border-t border-line-strong max-md:grid-cols-1">
        {VALUES.map((v) => (
          <div key={v.n} className="flex min-h-[200px] flex-col border-b border-r border-line bg-paper p-7">
            <div className="font-mono text-xs tracking-[0.1em] text-accent">{v.n}</div>
            <h4 className="mt-7 font-sans text-xl font-bold tracking-tight text-ink">{v.h}</h4>
            <div className="mt-3 text-sm leading-relaxed text-ink-2">{v.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
