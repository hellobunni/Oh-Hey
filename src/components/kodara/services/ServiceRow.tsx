import type { Service } from '@/data/services.data'

export function ServiceRow({ service }: { service: Service }) {
  const total = String(TOTAL).padStart(2, '0')

  return (
    <div
      id={service.keyword}
      className="grid grid-cols-[64px_1.4fr_1fr] items-start gap-14 border-b border-line py-14 max-lg:grid-cols-[40px_1fr] max-lg:gap-x-8 max-lg:gap-y-6 max-[640px]:grid-cols-1 max-[640px]:gap-6"
    >
      {/* index */}
      <div className="pt-2 font-mono text-xs tracking-[0.1em] text-accent max-[640px]:pt-0">
        {service.num} / {total}
      </div>

      {/* body */}
      <div>
        <div className="mb-6 font-mono text-sm uppercase tracking-[0.14em] text-ink-soft">
          {service.tag}
        </div>
        <h3 className="font-sans font-bold leading-none tracking-tight text-ink [font-size:clamp(32px,3.5vw,40px)]">
          {service.name}<span className="text-accent">.</span>
        </h3>
        <p className="mt-6 max-w-[540px] text-base leading-relaxed text-ink-2">{service.blurb}</p>

        <div className="mb-3.5 mt-6 border-b border-line pb-2.5 font-mono text-xxs uppercase tracking-wider text-ink-mute">
          Included in the engagement
        </div>
        <ul className="grid grid-cols-2 gap-x-8 max-[640px]:grid-cols-1">
          {service.includes.map((it) => (
            <li
              key={it}
              className="flex items-baseline gap-2.5 border-b border-hairline py-2.5 text-sm text-ink-2 before:font-mono before:text-accent before:content-['+']"
            >
              {it}
            </li>
          ))}
        </ul>
      </div>

      {/* spec card */}
      <div className="border border-line-strong bg-kodara-accent-soft-solid p-7 max-lg:col-span-full">
        <div className="mb-4 border-b border-line pb-3 font-mono text-xxs uppercase tracking-wider text-accent">
          [ {service.num} · SPECIFICATIONS ]
        </div>
        {service.specs.map((sp) => (
          <div key={sp.k} className="border-b border-hairline py-3 last:border-0 last:pb-0">
            <div className="mb-1 font-mono text-xxs uppercase tracking-[0.14em] text-ink-mute">{sp.k}</div>
            <div className={sp.ac ? 'font-sans text-body font-semibold text-accent' : 'font-sans text-body text-ink'}>
              {sp.v}
            </div>
          </div>
        ))}
        <a
          href="/questionnaire"
          className="mt-5 flex w-full items-center justify-between bg-accent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper"
        >
          SCOPE THIS SERVICE <span>→</span>
        </a>
      </div>
    </div>
  )
}

// keep in sync with SERVICES.length
const TOTAL = 4
