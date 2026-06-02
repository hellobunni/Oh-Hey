import { cn } from '@/lib/utils'

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      'flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-accent',
      'before:h-px before:w-8 before:bg-accent before:content-[""]',
      className,
    )}>
      {children}
    </div>
  )
}

export function SectionHead({
  label,
  title,
  side,
}: {
  label: string
  title: React.ReactNode
  side?: string
}) {
  return (
    <div className="px-[clamp(20px,5vw,80px)] pb-10 pt-20">
      <div className="flex items-end justify-between max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-3">
        <div>
          <SectionLabel className="mb-4">{label}</SectionLabel>
          <h2 className="font-sans font-bold leading-snug tracking-tight text-ink [font-size:clamp(40px,4.5vw,64px)]">
            {title}
          </h2>
        </div>
        {side && (
          <div className="font-mono text-sm uppercase tracking-wider text-ink-mute max-[640px]:order-first">
            {side}
          </div>
        )}
      </div>
    </div>
  )
}
