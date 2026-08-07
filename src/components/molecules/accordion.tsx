'use client'

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type AccordionItemData = {
  value: string
  title: string
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItemData[]
  /** Allow multiple panels open. Default false (FAQ single-open). */
  multiple?: boolean
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  className?: string
}

/**
 * Accordion — FAQ / collapsible groups.
 * Quicksand bold 14px headers, +/− convention, hairline dividers between items.
 */
function Accordion({
  items,
  multiple = false,
  defaultValue,
  value,
  onValueChange,
  className,
}: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      multiple={multiple}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={cn('w-full', className)}
    >
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className={cn(i > 0 && 'border-t border-line')}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={cn(
                'group flex w-full cursor-pointer items-center justify-between gap-4',
                'bg-transparent py-3.5 text-left font-sans text-sm font-bold',
                'text-ink-mute transition-colors duration-200 ease',
                'hover:text-ink data-[panel-open]:text-ink',
                'dark:hover:text-white dark:data-[panel-open]:text-white'
              )}
            >
              {item.title}
              <span
                aria-hidden
                className="relative size-4 shrink-0 text-ink-mute group-data-[panel-open]:text-ink dark:group-data-[panel-open]:text-white"
              >
                {/* horizontal bar (always) */}
                <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current" />
                {/* vertical bar (hidden when open → becomes −) */}
                <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-current transition-transform duration-200 ease group-data-[panel-open]:scale-y-0" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Panel
            className={cn(
              'h-[var(--accordion-panel-height)] overflow-hidden',
              'transition-[height] duration-[250ms] ease',
              'data-[ending-style]:h-0 data-[starting-style]:h-0'
            )}
          >
            <div className="pb-4 font-sans text-[13px] leading-relaxed text-ink-soft">
              {item.content}
            </div>
          </AccordionPrimitive.Panel>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}

export { Accordion }
export type { AccordionProps, AccordionItemData }
