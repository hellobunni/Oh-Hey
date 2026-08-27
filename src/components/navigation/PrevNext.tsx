import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PrevNextProps {
  prev?: { title: string; href?: string }
  next?: { title: string; href?: string }
  className?: string
}

export default function PrevNext({ prev, next, className }: PrevNextProps) {
  return (
    <div className={cn('inline-flex border border-line-strong w-full', className)}>
      {prev && (
        <a
          className="flex flex-col items-start flex-1 px-4 py-2.5 gap-1 no-underline cursor-pointer hover:bg-paper-2 transition-colors duration-100 border-r border-line-strong"
          href={prev.href}
        >
          <span className="inline-flex items-center gap-1 font-mono text-xxs tracking-wide text-ink-mute uppercase">
            <ArrowLeft size={10} strokeWidth={2} /> Prev
          </span>
          <span className="text-xs text-ink">{prev.title}</span>
        </a>
      )}
      {next && (
        <a
          className="flex flex-col items-end flex-1 px-4 py-2.5 gap-1 no-underline cursor-pointer hover:bg-paper-2 transition-colors duration-100"
          href={next.href}
        >
          <span className="inline-flex items-center gap-1 font-mono text-xxs tracking-wide text-ink-mute uppercase">
            Next <ArrowRight size={10} strokeWidth={2} />
          </span>
          <span className="text-xs text-ink">{next.title}</span>
        </a>
      )}
    </div>
  )
}
