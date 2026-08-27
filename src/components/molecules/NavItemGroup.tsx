'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type NavItem =
  | string
  | {
      label: string
      disabled?: boolean
      href?: string
    }

type NavItemGroupProps = {
  items: NavItem[]
  activeIndex?: number
  onSelect?: (index: number) => void
  className?: string
}

function normalize(item: NavItem) {
  return typeof item === 'string' ? { label: item, disabled: false } : item
}

function NavItemGroup({
  items,
  activeIndex = 0,
  onSelect,
  className,
}: NavItemGroupProps) {
  const normalized = items.map(normalize)
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })

  const targetIndex = hoverIndex ?? activeIndex

  const measure = () => {
    const list = listRef.current
    const el = itemRefs.current[targetIndex]
    if (!list || !el) return
    const listBox = list.getBoundingClientRect()
    const itemBox = el.getBoundingClientRect()
    setIndicator({
      left: itemBox.left - listBox.left,
      width: itemBox.width,
      ready: true,
    })
  }

  useLayoutEffect(() => {
    measure()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- remeasure on target/items change
  }, [targetIndex, items, activeIndex])

  useEffect(() => {
    const list = listRef.current
    if (!list || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => measure())
    ro.observe(list)
    return () => ro.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIndex, items])

  return (
    <div
      ref={listRef}
      className={cn(
        'relative flex w-fit gap-5 rounded-lg bg-card-2 px-4 py-3',
        className
      )}
      role="navigation"
      onPointerLeave={() => setHoverIndex(null)}
    >
      {/* Shared sliding underline — one indicator, not per-item borders */}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute bottom-3 left-0 h-0.5 bg-mint',
          indicator.ready
            ? 'transition-[transform,width] duration-200 ease'
            : 'opacity-0'
        )}
        style={{
          width: indicator.width,
          transform: `translateX(${indicator.left}px)`,
        }}
      />

      {normalized.map((item, i) => {
        const active = i === activeIndex
        const hovered = i === hoverIndex
        const disabled = !!item.disabled

        const sharedClass = cn(
          'relative z-[1] border-0 bg-transparent p-0 pb-1 font-sans text-sm',
          'transition-colors duration-200 ease',
          disabled && 'cursor-not-allowed opacity-40',
          !disabled && 'cursor-pointer',
          !disabled && (active || hovered) && 'font-bold text-mint',
          !disabled && !active && !hovered && 'font-semibold text-ink-soft'
        )

        const setRef = (el: HTMLElement | null) => {
          itemRefs.current[i] = el
        }

        const onEnter = () => {
          if (!disabled) setHoverIndex(i)
        }

        if (item.href && !disabled) {
          return (
            <a
              key={item.label}
              ref={setRef}
              href={item.href}
              className={cn(sharedClass, 'no-underline')}
              onPointerEnter={onEnter}
              onClick={() => onSelect?.(i)}
            >
              {item.label}
            </a>
          )
        }

        return (
          <button
            key={item.label}
            ref={setRef}
            type="button"
            disabled={disabled}
            className={sharedClass}
            onPointerEnter={onEnter}
            onClick={() => {
              if (!disabled) onSelect?.(i)
            }}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export { NavItemGroup }
export type { NavItemGroupProps, NavItem }
