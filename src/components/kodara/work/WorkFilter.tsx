'use client'

import { cn } from '@/lib/utils'
import { WORK_FILTERS } from '@/data/work.data'

export function WorkFilter({
  active,
  onChange,
  shown,
  total,
}: {
  active:   string
  onChange: (f: string) => void
  shown:    number
  total:    number
}) {
  return (
    <div className="flex flex-wrap border-b border-line px-[clamp(20px,5vw,80px)] font-mono text-xs">
      {WORK_FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            'border-r border-line px-5 py-[18px] uppercase tracking-wide transition-colors',
            active === f
              ? 'text-accent'
              : 'text-ink-soft hover:bg-paper-2 hover:text-ink',
          )}
        >
          {f}
        </button>
      ))}
      <span className="ml-auto py-[18px] pr-0 text-ink-mute">
        [ {String(shown).padStart(2, '0')} / {String(total).padStart(2, '0')} ]
      </span>
    </div>
  )
}
