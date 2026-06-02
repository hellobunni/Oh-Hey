import { cn } from '@/lib/utils'

type Principle = { n: string; h: string; d: string }

const PRINCIPLES: Principle[] = [
  { n: '01', h: 'Problem before pixels',      d: 'No work starts until we agree on the real problem. Most budget is wasted solving the wrong one well.' },
  { n: '02', h: 'Taste is a deliverable',     d: 'Strategy and engineering matter, but so does judgment about what is actually good. You pay for both.' },
  { n: '03', h: 'AI as leverage, not output', d: 'AI compresses research, iteration, and boilerplate — so more of your hours buy thinking, not typing.' },
  { n: '04', h: 'Accountable, not agreeable', d: "I'll tell you when you're wrong. The point is the outcome, not a comfortable engagement." },
  { n: '05', h: 'Ship and document',          d: 'Work is not done until it is shipped, handed off cleanly, and survivable by the next team.' },
  { n: '06', h: 'One throat to choke',        d: 'You work directly with me. No account managers, no junior staffing, no telephone game.' },
]

function OperatingPrinciples({ principles = PRINCIPLES, className }: { principles?: Principle[]; className?: string }) {
  return (
    <section className={cn('border-b border-line px-[clamp(20px,5vw,80px)] py-[72px]', className)}>
      <div className="mb-12 font-mono text-sm uppercase tracking-wider text-accent">— Operating Principles</div>

      <div className="grid grid-cols-3 border-l border-t border-line-strong max-md:grid-cols-1">
        {principles.map((p) => (
          <div key={p.n} className="flex min-h-[200px] flex-col border-b border-r border-line p-7">
            <div className="font-mono text-xs tracking-[0.1em] text-accent">{p.n}</div>
            <h4 className="mt-7 font-sans text-xl font-bold tracking-tight text-ink">{p.h}</h4>
            <div className="mt-3 text-sm leading-relaxed text-ink-2">{p.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { OperatingPrinciples }
export type { Principle }
