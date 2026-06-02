import { cn } from '@/lib/utils'

export function ChoiceCard({
  optKey,
  name,
  sub,
  selected,
  onClick,
}: {
  optKey:   string
  name:     string
  sub:      string
  selected: boolean
  onClick:  () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex flex-col gap-2 border p-6 text-left transition-colors',
        selected
          ? 'border-accent bg-accent-soft'
          : 'border-line-strong hover:border-accent',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xxs uppercase tracking-[0.16em] text-accent">
          OPT {optKey}
        </span>
        <span className={cn(
          'h-4 w-4 rounded-full border',
          selected ? 'border-accent bg-accent' : 'border-line-strong',
        )} />
      </div>
      <div className="text-lg font-semibold tracking-tight text-ink">{name}</div>
      <div className="text-xs text-ink-soft">{sub}</div>
    </button>
  )
}
