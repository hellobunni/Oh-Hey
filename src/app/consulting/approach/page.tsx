import { CtaSection } from '@/components/kodara/CtaSection'
import { ApproachSplit } from '@/components/kodara/ApproachSplit'
import { OperatingPrinciples } from '@/components/kodara/OperatingPrinciples'


const STEPS = [
  { n: '01', tag: 'Week 0',   t: 'Intake',    d: 'Complete the questionnaire. I review and reach out within 48 hours if it is a fit.' },
  { n: '02', tag: 'Week 1',   t: 'Discovery', d: 'A focused conversation to understand the real problem and what success looks like.' },
  { n: '03', tag: 'Week 1–2', t: 'Scope',     d: 'Clear deliverables, timeline, and investment — agreed before a single pixel or line of code.' },
  { n: '04', tag: 'Ongoing',  t: 'Execution', d: "Heads-down work with regular check-ins. You're never waiting and wondering." },
  { n: '05', tag: 'Close',    t: 'Delivery',  d: 'Shipped, documented, and handed off cleanly, with a clear path forward.' },
]

const GRID =
  '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)] [background-size:calc(100%/12)_96px]'

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ApproachPage() {
  return (
    <div className="bg-kodara-accent-soft-solid">

      {/* ── Hero ── */}
      <section className={`border-b border-line px-[clamp(20px,5vw,80px)] py-20 ${GRID}`}>
        <div className="mb-10 flex items-center gap-2 font-mono text-xxs uppercase tracking-wider text-ink-mute">
          <span>KODARA</span>
          <span className="text-line-strong">/</span>
          <span className="text-accent">Approach</span>
        </div>
        <div className="grid gap-12 md:grid-cols-[55fr_45fr]">
          <div>
            <div className="mb-5 font-mono text-sm uppercase tracking-wider text-accent">
              How I work
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-tight text-ink"
              style={{ fontSize: 'clamp(48px,8vw,88px)' }}
            >
              The thinking<br />
              <span className="text-accent">AI cannot</span><br />
              do for you.
            </h1>
          </div>
          <p className="self-end font-sans text-base leading-relaxed text-ink-soft md:pb-3">
            Most businesses don't fail because they lack execution. They fail because no one
            connected the <em>business problem</em> to the right solution. That's the gap I
            fill — faster than a traditional engagement.
          </p>
        </div>
      </section>

      {/* ── The Split ── */}
      <ApproachSplit className={`bg-kodara-accent-soft/50 ${GRID}`} />

      {/* ── Operating Principles ── */}
      <OperatingPrinciples className={`bg-kodara-accent-soft-solid ${GRID}`} />

      {/* ── Process ── */}
      <section className={`border-b border-line px-[clamp(20px,5vw,80px)] py-20 ${GRID}`}>
        <div className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-accent">
          <span className="h-px w-8 bg-accent shrink-0" />
          How it works
        </div>
        <h2 className="mb-12 max-w-[520px] font-sans font-bold leading-snug tracking-tight text-ink [font-size:clamp(28px,3.5vw,44px)]">
          A process to move fast and move right.
        </h2>

        <div className="grid border-l border-t border-line-strong sm:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s) => (
            <div key={s.n} className="border-b border-r border-line bg-kodara-accent-soft-solid p-7">
              <div className="mb-1 font-mono text-xs tracking-[0.1em] text-accent">{s.n}</div>
              <div className="mb-4 font-mono text-xxs uppercase tracking-wider text-ink-mute">{s.tag}</div>
              <div className="mb-3 font-sans text-base font-bold text-ink">{s.t}</div>
              <div className="text-sm leading-relaxed text-ink-2">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaSection
        eyebrow="Sound like your kind of partner?"
        body="Six minutes. Eight questions. A response inside 48 hours — yes, no, or who you should talk to instead."
        className="bg-kodara-accent-soft/50"
      />

    </div>
  )
}