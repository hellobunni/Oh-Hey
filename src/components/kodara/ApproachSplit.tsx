import { cn } from '@/lib/utils'

const LEAD = [
  'Knowing which problem to solve first',
  'Cross-industry pattern recognition',
  'Brand & product taste',
  'Honest, accountable pushback',
  'Translating between business & tech',
]
const AI = [
  'Research & competitive analysis',
  'Rapid design iteration',
  'Boilerplate & documentation',
  'Options generation at speed',
  'Timelines that took months',
]

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-4 border-b border-line-strong pb-4 font-mono text-sm uppercase tracking-wider text-accent">
        {title}
      </h4>
      <ul>
        {items.map((item) => (
          <li key={item} className="flex gap-3 border-b border-line py-3.5 text-body text-ink-2 before:text-accent before:content-['→']">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ApproachSplit({ className }: { className?: string }) {
  return (
    <section className={cn(
      'grid grid-cols-[1fr_2fr] gap-16 border-b border-line px-[clamp(20px,5vw,80px)] py-[72px]',
      'max-md:grid-cols-1 max-md:gap-10',
      className,
    )}>
      {/* left — thesis */}
      <div>
        <div className="font-mono text-sm uppercase tracking-wider text-accent">The split</div>
        <h2 className="mt-4 font-sans text-[40px] font-bold leading-snug tracking-tight text-ink">
          I handle the <span className="text-accent">judgment.</span> AI handles the volume.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink-2">
          Twelve years of brand, product, and engineering decide what to build and why.
          AI compresses how long it takes to get there.
        </p>
      </div>

      {/* right — two lists */}
      <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
        <List title="Where I lead" items={LEAD} />
        <List title="Where AI accelerates" items={AI} />
      </div>
    </section>
  )
}

export { ApproachSplit }
