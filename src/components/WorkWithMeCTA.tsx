import { cn } from '@/lib/utils'

export default function WorkWithMeCTA({ className }: { className?: string }) {
  return (
    <section className={cn(
      'border-b border-line px-[clamp(20px,5vw,80px)] py-24',
      '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)]',
      '[background-size:calc(100%/12)_96px]',
      className,
    )}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <h2 className="font-sans text-lg font-bold text-ink mb-1">
            Want to work together?
          </h2>
          <p className="text-sm text-ink-soft">
            I'm available for consulting, collaborations, and projects.
          </p>
        </div>
        <a
          href="/work-with-me"
          className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-neutral-800 transition-colors shrink-0"
        >
          Get in touch →
        </a>
      </div>
    </section>
  )
}
