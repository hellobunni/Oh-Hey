import { STACK } from '@/data/services.data'

export function ServiceStack() {
  return (
    <section className="grid grid-cols-[1fr_2fr] items-start gap-20 border-t border-line px-[clamp(20px,5vw,80px)] py-[72px] max-lg:grid-cols-1 max-lg:gap-10 bg-kodara-accent-soft/20">
      <div>
        <div className="mb-4 font-mono text-sm uppercase tracking-wider text-accent">
          Tools &amp; stack
        </div>
        <h2 className="font-sans text-[40px] font-bold leading-snug tracking-tight text-ink">
          The same toolchain<br />I'd <span className="text-accent">recommend to you.</span>
        </h2>
        <p className="mt-5 max-w-[360px] leading-relaxed text-ink-2">
          What gets used on most engagements. Bring a different stack and I adapt — the point is
          shipping something that survives two years without a rewrite.
        </p>
      </div>

      <div className="grid grid-cols-4 border-l border-t border-line max-[640px]:grid-cols-2">
        {STACK.map((t) => (
          <div key={t.tool} className="flex min-h-[110px] flex-col justify-between border-b border-r border-line px-5 py-6">
            <div className="font-mono text-xxs uppercase tracking-[0.14em] text-ink-mute">{t.cat}</div>
            <div>
              <div className="font-sans text-lg font-semibold tracking-tight text-ink">{t.tool}</div>
              <div className="font-mono text-xxs uppercase tracking-wider text-accent">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
