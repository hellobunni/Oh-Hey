import { OUTCOMES } from '@/data/services.data'

export function Outcomes() {
  return (
    <section className="border-y border-line bg-kodara-accent-soft-solid px-[clamp(20px,5vw,80px)] py-18">
      <div className="grid grid-cols-4 border-l border-line max-[640px]:grid-cols-1">
        {OUTCOMES.map((o) => (
          <div key={o.lbl} className="border-b border-r border-t border-line p-8">
            <div className="font-sans text-[56px] font-bold leading-none tracking-tight text-ink max-[640px]:text-[44px]">
              {o.n}<span className="font-medium text-accent">{o.unit}</span>
            </div>
            <div className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-ink-soft">{o.lbl}</div>
            <div className="mt-2.5 text-xs leading-snug text-ink-2">{o.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
