'use client'

import { useEffect, useRef, useState, type MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'

type StatPairProps = {
  /** Numeric or formatted string. Null/undefined/"" → empty dash. */
  value: string | number | null | undefined
  label: string
  /** Token color for the value — defaults to periwinkle/peri */
  tone?: 'peri' | 'mint' | 'pink' | 'gold'
  /** Optional click — filters/drills into that stat */
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const tones = {
  peri: 'text-peri',
  mint: 'text-mint',
  pink: 'text-pink',
  gold: 'text-gold',
} as const

const EMPTY = '—'
const DURATION_MS = 400

type Parsed = {
  num: number
  prefix: string
  suffix: string
  decimals: number
  grouped: boolean
}

function parseValue(value: string | number): Parsed | null {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return null
    const decimals = Number.isInteger(value)
      ? 0
      : Math.min(2, (String(value).split('.')[1] ?? '').length)
    return { num: value, prefix: '', suffix: '', decimals, grouped: Math.abs(value) >= 1000 }
  }

  const trimmed = value.trim()
  if (!trimmed) return null

  const match = trimmed.match(/^([^0-9\-+.]*)([-+]?\d[\d,]*(?:\.\d+)?)(.*)$/)
  if (!match) return null

  const raw = match[2].replace(/,/g, '')
  const num = Number(raw)
  if (!Number.isFinite(num)) return null

  const decimals = raw.includes('.') ? (raw.split('.')[1]?.length ?? 0) : 0
  return {
    num,
    prefix: match[1],
    suffix: match[3],
    decimals,
    grouped: match[2].includes(','),
  }
}

function formatParsed(num: number, parsed: Parsed): string {
  const fixed =
    parsed.decimals > 0 ? num.toFixed(parsed.decimals) : String(Math.round(num))

  if (!parsed.grouped) return `${parsed.prefix}${fixed}${parsed.suffix}`

  const [intPart, decPart] = fixed.split('.')
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const body = decPart != null ? `${grouped}.${decPart}` : grouped
  return `${parsed.prefix}${body}${parsed.suffix}`
}

function easeOut(t: number): number {
  return 1 - (1 - t) ** 3
}

function StatPair({
  value,
  label,
  tone = 'peri',
  onClick,
  className,
}: StatPairProps) {
  const [display, setDisplay] = useState(() => {
    if (value == null || value === '') return EMPTY
    const parsed = parseValue(value)
    return parsed ? formatParsed(parsed.num, parsed) : String(value)
  })
  const [flashing, setFlashing] = useState(false)

  const fromRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const flashTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    if (value == null || value === '') {
      fromRef.current = 0
      setDisplay(EMPTY)
      setFlashing(false)
      return
    }

    const next = parseValue(value)

    // Non-numeric strings — set immediately, no tween
    if (!next) {
      setDisplay(String(value))
      return
    }

    // First paint — no animation
    if (!mountedRef.current) {
      mountedRef.current = true
      fromRef.current = next.num
      setDisplay(formatParsed(next.num, next))
      return
    }

    const from = fromRef.current
    const to = next.num

    if (from === to) {
      setDisplay(formatParsed(to, next))
      return
    }

    // Mint flash + rolling count-up (.4s ease-out)
    setFlashing(true)
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    flashTimerRef.current = setTimeout(() => setFlashing(false), DURATION_MS)

    const start = performance.now()
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current)

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS)
      const current = from + (to - from) * easeOut(t)
      setDisplay(formatParsed(current, next))
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        fromRef.current = to
        rafRef.current = null
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    }
  }, [value])

  const shell = cn(
    'flex w-40 flex-col gap-0.5 rounded-xl bg-card-2 px-5 py-4 text-left',
    onClick &&
      'cursor-pointer transition-opacity duration-200 ease hover:opacity-90 active:opacity-75',
    className
  )

  const body = (
    <>
      <span
        className={cn(
          'font-px text-2xl transition-colors duration-[400ms] ease-out',
          flashing ? 'text-mint' : tones[tone]
        )}
      >
        {display}
      </span>
      {/* Label stays static — no motion */}
      <span className="font-sans text-xs font-bold uppercase tracking-wide text-ink-soft">
        {label}
      </span>
    </>
  )

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={shell}>
        {body}
      </button>
    )
  }

  return <div className={shell}>{body}</div>
}

export { StatPair }
export type { StatPairProps }
