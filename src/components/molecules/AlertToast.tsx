'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from 'react'
import { X } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

type AlertToastCta = {
  label: string
  href?: string
  onClick?: () => void
}

type AlertToastProps = {
  src?: string
  headline: string
  subtext?: ReactNode
  tone?: 'pink' | 'mint'
  icon?: ReactNode
  /** Optional link/action inside the toast */
  cta?: AlertToastCta
  /** Show dismiss X. Default true. */
  dismissible?: boolean
  /** Auto-dismiss after ms. 0 = hold until dismissed. Default 4000. */
  duration?: number
  /** Skip enter animation (static demos). */
  instant?: boolean
  onDismiss?: () => void
  className?: string
}

type Phase = 'enter' | 'idle' | 'exit'

const ENTER_MS = 450
const EXIT_MS = 400
const SWIPE_THRESHOLD = 72

function AlertToast({
  src,
  headline,
  subtext,
  tone = 'pink',
  icon,
  cta,
  dismissible = true,
  duration = 4000,
  instant = false,
  onDismiss,
  className,
}: AlertToastProps) {
  const [phase, setPhase] = useState<Phase>(instant ? 'idle' : 'enter')
  const [lift, setLift] = useState(false)
  const [dragX, setDragX] = useState(0)

  const pausedRef = useRef(false)
  const remainingRef = useRef(duration)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timerStartedRef = useRef<number | null>(null)
  const exitingRef = useRef(false)
  const dragOriginRef = useRef<number | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    timerStartedRef.current = null
  }, [])

  const beginExit = useCallback(() => {
    if (exitingRef.current) return
    exitingRef.current = true
    clearTimer()
    setPhase('exit')
    setLift(false)
    window.setTimeout(() => onDismiss?.(), EXIT_MS)
  }, [clearTimer, onDismiss])

  const startTimer = useCallback(
    (ms: number) => {
      if (ms <= 0 || exitingRef.current) return
      clearTimer()
      remainingRef.current = ms
      timerStartedRef.current = performance.now()
      timerRef.current = setTimeout(() => beginExit(), ms)
    },
    [beginExit, clearTimer]
  )

  // Enter → idle
  useEffect(() => {
    if (instant) return
    const id = window.setTimeout(() => setPhase('idle'), ENTER_MS)
    return () => window.clearTimeout(id)
  }, [instant])

  // Auto-dismiss while idle
  useEffect(() => {
    if (phase !== 'idle' || duration <= 0 || pausedRef.current) return
    startTimer(remainingRef.current > 0 ? remainingRef.current : duration)
    return clearTimer
  }, [phase, duration, startTimer, clearTimer])

  const onPointerEnter = () => {
    if (phase === 'exit') return
    setLift(true)
    pausedRef.current = true
    if (timerStartedRef.current != null && timerRef.current) {
      const elapsed = performance.now() - timerStartedRef.current
      remainingRef.current = Math.max(0, remainingRef.current - elapsed)
      clearTimer()
    }
  }

  const onPointerLeave = () => {
    if (phase === 'exit') return
    setLift(false)
    pausedRef.current = false
    dragOriginRef.current = null
    setDragX(0)
    if (phase === 'idle' && duration > 0) startTimer(remainingRef.current)
  }

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!dismissible || phase === 'exit') return
    dragOriginRef.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragOriginRef.current == null) return
    setDragX(Math.max(0, e.clientX - dragOriginRef.current))
  }

  const onPointerUp = () => {
    if (dragOriginRef.current == null) return
    const dx = dragX
    dragOriginRef.current = null
    if (dx >= SWIPE_THRESHOLD) {
      beginExit()
    } else {
      setDragX(0)
    }
  }

  const border =
    tone === 'mint' ? 'border-mint text-mint' : 'border-pink text-pink'

  const motionClass =
    phase === 'enter'
      ? 'animate-[toast-enter_450ms_ease_forwards]'
      : phase === 'exit'
        ? 'animate-[toast-exit_400ms_ease_forwards]'
        : ''

  return (
    <div
      role="status"
      aria-live="polite"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className={cn(
        'relative flex w-fit max-w-sm touch-pan-y items-center gap-2.5 border-[3px] bg-card-2 px-3.5 py-2.5',
        'transition-transform duration-200 ease',
        border,
        motionClass,
        lift && phase !== 'exit' && '-translate-y-0.5',
        className
      )}
      style={dragX > 0 ? { transform: `translateX(${dragX}px)`, opacity: Math.max(0.35, 1 - dragX / 160) } : undefined}
    >
      {icon ?? <Avatar src={src} size={28} ring="mint" />}

      <div className="min-w-0 flex-1">
        <div className="font-px text-[10px]">
          {headline}
          {subtext != null && (
            <>
              {' '}
              <span className="font-sans font-semibold text-ink-2">{subtext}</span>
            </>
          )}
        </div>
        {cta && (
          cta.href ? (
            <a
              href={cta.href}
              onClick={(e) => {
                e.stopPropagation()
                cta.onClick?.()
              }}
              className="mt-1 inline-block font-sans text-[11px] font-bold uppercase tracking-wide text-current underline-offset-2 hover:underline"
            >
              {cta.label}
            </a>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                cta.onClick?.()
              }}
              className="mt-1 cursor-pointer border-0 bg-transparent p-0 font-sans text-[11px] font-bold uppercase tracking-wide text-current underline-offset-2 hover:underline"
            >
              {cta.label}
            </button>
          )
        )}
      </div>

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={(e) => {
            e.stopPropagation()
            beginExit()
          }}
          className="shrink-0 cursor-pointer border-0 bg-transparent p-0.5 text-current opacity-70 transition-opacity hover:opacity-100"
        >
          <X size={14} strokeWidth={2.5} aria-hidden />
        </button>
      )}
    </div>
  )
}

export { AlertToast }
export type { AlertToastProps, AlertToastCta }
