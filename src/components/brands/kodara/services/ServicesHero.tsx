import { SectionLabel } from './_shared'

const META = [
  { k: 'EXPERIENCE',        v: '12', unit: 'yr', d: 'Design + engineering on both sides of the table.' },
  { k: 'INDUSTRIES',        v: '6',  unit: '+',  d: 'Healthcare, fintech, web3, e-com, SaaS, entertainment.' },
  { k: 'ENGAGEMENT MODELS', v: '4',  unit: '.',  d: 'Audit, build, retainer, advisory.' },
  { k: 'RESPONSE TIME',     v: '48', unit: 'hr', d: "Quick read on whether we're a fit." },
]

export function ServicesHero() {
  return (
    <section className="border-b border-line px-[clamp(20px,5vw,80px)] pb-20 pt-[72px]">
      <div className="mb-14 flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-wider text-ink-soft">
        <span>KODARA</span>
        <span className="text-ink-mute">/</span>
        <span className="text-accent">Services</span>
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] items-end gap-16 max-md:grid-cols-1 max-md:gap-10">
        <div>
          <SectionLabel className="mb-7">Strategic Design × Engineering · Est. 2014</SectionLabel>
          <h1 className="font-sans font-extrabold leading-[0.94] tracking-tight text-ink [font-size:clamp(56px,7vw,104px)]">
            Senior design<br />&amp; engineering,<br />without the <span className="text-accent">agency tax.</span>
          </h1>
        </div>
        <p className="max-w-[460px] text-base leading-relaxed text-ink-2">
          Four ways to work together — from a{' '}
          <span className="font-medium text-accent">one-week diagnostic</span> to a fractional
          partner who knows your codebase. AI compresses the timelines; 12 years of pattern
          recognition does the rest.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-4 gap-6 border-t border-line pt-8 max-lg:grid-cols-2 max-[640px]:grid-cols-1">
        {META.map((m) => (
          <div key={m.k} className="flex flex-col gap-2">
            <div className="font-mono text-xxs uppercase tracking-wider text-ink-mute">{m.k}</div>
            <div className="font-sans text-xl font-bold tracking-tight text-ink">
              {m.v}<span className="text-accent">{m.unit}</span>
            </div>
            <div className="text-xs text-ink-soft">{m.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
