import { cn } from '@/lib/utils'
import React from 'react'

export interface PrevNextProps {
    prev?:      { title: string; href?: string }
    next?:      { title: string; href?: string }
    className?: string
  }
const PrevNext = ({ prev, next, className }: PrevNextProps) => {
    return (
        <div className={cn('inline-flex border border-line-strong w-full', className)}>
          {prev && (
            <a
              className="flex flex-col items-start flex-1 px-4 py-2.5 gap-1 no-underline cursor-pointer hover:bg-paper-2 transition-colors duration-100 border-r border-line-strong"
              href={prev.href}
            >
              <span className="font-mono text-[10px] tracking-[0.08em] text-ink-mute uppercase">← PREV</span>
              <span className="text-[13px] text-ink">{prev.title}</span>
            </a>
          )}
          {next && (
            <a
              className="flex flex-col items-end flex-1 px-4 py-2.5 gap-1 no-underline cursor-pointer hover:bg-paper-2 transition-colors duration-100"
              href={next.href}
            >
              <span className="font-mono text-[10px] tracking-[0.08em] text-ink-mute uppercase">NEXT →</span>
              <span className="text-[13px] text-ink">{next.title}</span>
            </a>
          )}
        </div>
      )
}

export default PrevNext