import { cn } from '@/lib/utils'

interface CalloutProps {
  headline?: React.ReactNode
  byline?: string
  linkLabel?: string
  linkHref?: string
  className?: string
}

const DEFAULT_HEADLINE: React.ReactNode = (
  <>
    Most businesses don't fail because they lack execution. They fail because no one
    connected the <span className="font-medium text-accent">business problem</span> to the
    right solution. That's the gap I fill.
  </>
)

function Callout({
  headline = DEFAULT_HEADLINE,
  byline = 'Bryanna Lynae · Founder & Principal',
  linkLabel = 'Read the full approach →',
  linkHref = '/consulting/approach',
  className,
}: CalloutProps) {
  return (
    <section className={cn(
      'px-[clamp(20px,5vw,80px)] md:py-20 py-8 bg-size-[calc(100%/12)_98px] grid-bg-transparent',
      className,
    )}>
      <div className="mb-10 font-mono text-sm uppercase tracking-wider text-accent">— The Callout</div>

      <h2 className="max-w-[1000px] font-sans font-light leading-snug tracking-tight text-ink [font-size:clamp(32px,4.5vw,52px)]">
        {headline}
      </h2>

      <div className="md:mt-14 mt-8 flex flex-wrap items-center justify-between md:gap-8 gap-4 md:pt-8">
        <div className="font-mono text-xxs uppercase tracking-wider text-ink-soft">{byline}</div>
        <a href={linkHref} className="border-b border-accent pb-1 font-mono text-xxs uppercase tracking-wider text-accent">
          {linkLabel}
        </a>
      </div>
    </section>
  )
}

export { Callout }