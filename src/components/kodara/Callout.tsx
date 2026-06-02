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
      'border-b border-line px-[clamp(20px,5vw,80px)] py-24',
      '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)]',
      '[background-size:calc(100%/12)_96px]',
      className,
    )}>
      <div className="mb-10 font-mono text-sm uppercase tracking-wider text-accent">— The Callout</div>

      <h2 className="max-w-[1000px] font-sans font-light leading-snug tracking-tight text-ink [font-size:clamp(32px,4.5vw,52px)]">
        {headline}
      </h2>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-8 border-t border-line pt-8">
        <div className="font-mono text-xxs uppercase tracking-wider text-ink-soft">{byline}</div>
        <a href={linkHref} className="border-b border-accent pb-1 font-mono text-xxs uppercase tracking-wider text-accent">
          {linkLabel}
        </a>
      </div>
    </section>
  )
}

export { Callout }