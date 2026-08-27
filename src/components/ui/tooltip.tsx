'use client'

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type TooltipSide = 'top' | 'bottom' | 'left' | 'right'

type TooltipProps = {
  content: ReactNode
  children: ReactNode
  side?: TooltipSide
  /** Delay before show (ms). Design default 200. */
  delay?: number
  className?: string
}

/**
 * Tooltip — transient micro-copy.
 * Always dark ink bg (#100F1A) for contrast. Quicksand 11px, never pixel.
 */
function Tooltip({
  content,
  children,
  side = 'top',
  delay = 200,
  className,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delay={delay} closeDelay={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger
          render={<span className="inline-flex" />}
        >
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Positioner side={side} sideOffset={8} className="z-50">
            <TooltipPrimitive.Popup
              className={cn(
                'rounded-md bg-deep px-2.5 py-1.5 font-sans text-[11px] font-semibold text-white',
                'shadow-[0_4px_12px_rgba(0,0,0,0.4)]',
                'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
                'data-[side=top]:data-[starting-style]:translate-y-1 data-[side=top]:data-[ending-style]:translate-y-1',
                'data-[side=bottom]:data-[starting-style]:-translate-y-1 data-[side=bottom]:data-[ending-style]:-translate-y-1',
                'data-[side=left]:data-[starting-style]:translate-x-1 data-[side=left]:data-[ending-style]:translate-x-1',
                'data-[side=right]:data-[starting-style]:-translate-x-1 data-[side=right]:data-[ending-style]:-translate-x-1',
                'transition-[opacity,transform] duration-150 ease',
                className
              )}
            >
              {content}
              <TooltipPrimitive.Arrow
                className={cn(
                  'flex data-[side=top]:top-full data-[side=bottom]:bottom-full',
                  'data-[side=left]:left-full data-[side=right]:right-full'
                )}
              >
                <span
                  aria-hidden
                  className="size-2.5 rotate-45 bg-deep"
                />
              </TooltipPrimitive.Arrow>
            </TooltipPrimitive.Popup>
          </TooltipPrimitive.Positioner>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export { Tooltip }
export type { TooltipProps, TooltipSide }
