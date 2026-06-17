const GRID =
  '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)] [background-size:calc(100%/12)_98px]'

export function PageHero({
  crumb,
  eyebrow,
  title,
  lede,
}: {
  crumb:   string
  eyebrow: string
  title:   React.ReactNode
  lede:    React.ReactNode
}) {
  return (
    <section className={`px-[clamp(20px,5vw,80px)] py-22 ${GRID}`}>
      <div className="mb-12 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
        <span>KODARA</span>
        <span className="text-ink-mute">/</span>
        <span className="text-accent">{crumb}</span>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] items-end gap-16 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent before:h-px before:w-8 before:bg-accent before:content-['']">
            {eyebrow}
          </div>
          <h1 className="font-sans font-extrabold leading-[0.94] tracking-tight text-ink [font-size:clamp(52px,6.5vw,104px)]">
            {title}
          </h1>
        </div>
        <p className="max-w-[460px] text-base leading-relaxed text-ink-2">{lede}</p>
      </div>
    </section>
  )
}
