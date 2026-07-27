import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface CtaSectionProps {
  eyebrow?: string
  headline?: React.ReactNode
  body?: string
  cta?: { label: string; href?: string }
  className?: string
}

function CtaSection({
  eyebrow = 'Ready to scope it?',
  headline = (<>Let's see if<br />we're <span className="text-accent">a fit.</span></>),
  body = 'Six minutes. Eight questions. A response in your inbox inside 48 hours — yes, no, or who you should talk to instead.',
  cta = { label: 'Start the questionnaire →', href: '/consulting/contact' },
  className,
}: CtaSectionProps) {
  return (
    <section className={cn('relative overflow-hidden md:px-20 px-4 md:py-24 py-16 text-center bg-kodara-accent-soft', className)}>
      {/* concentric ring backdrop */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent opacity-[0.18]" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent opacity-10" />

      <div className="relative">
        <div className="mb-6 font-mono text-sm uppercase tracking-wider text-accent">{eyebrow}</div>
        <h2 className="mx-auto font-sans font-bold leading-snug tracking-tight text-ink text-3xl md:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-6 max-w-[540px] text-base text-ink-2">{body}</p>
        <div className="mt-10">
          <a href={cta.href}>
            <Button variant="accent" size="default">{cta.label}</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export { CtaSection }