import { cn } from '@/lib/utils'
import { STEPS } from '@/data/questionnaire.data'

export function ProgressRail({ current }: { current: number }) {
  const pct = Math.round(((current + 1) / STEPS.length) * 100)

  return (
    <div>
      <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        — The questionnaire
      </div>
      <h1 className="font-sans text-[64px] font-bold leading-[0.98] tracking-tight text-ink max-[640px]:text-[44px]">
        Let's see<br />if we're <span className="text-accent">a fit.</span>
      </h1>
      <p className="mt-7 max-w-[360px] text-base leading-relaxed text-ink-2">
        Six questions about what you're building, your timeline, and what success looks like.
        About four minutes.
      </p>

      <div className="mt-14 border border-line-strong p-6">
        <div className="flex justify-between font-mono text-xs uppercase tracking-[0.14em]">
          <span className="text-ink-mute">Progress</span>
          <span className="text-accent">{pct}%</span>
        </div>
        <div className="relative my-4 h-px bg-line">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="grid grid-cols-6 gap-1">
          {STEPS.map((s, i) => (
            <div
              key={s.key}
              className={cn(
                'border py-2 text-center font-mono text-xs',
                i < current  && 'border-line bg-paper-2 text-ink-2',
                i === current && 'border-accent bg-accent text-white',
                i > current  && 'border-hairline text-ink-mute',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
