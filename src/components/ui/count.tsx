import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Count — numeric quantity indicator.
 * Not a Tag (no text label) or Badge (no status meaning) — quantity only.
 * Quicksand bold. Auto-truncates above max (default 99 → "99+").
 */
const countVariants = cva(
  "inline-flex items-center justify-center font-sans font-bold tabular-nums",
  {
    variants: {
      tone: {
        alert: "bg-alert text-white dark:text-card-2",
        mint:  "bg-mint text-card-2",
      },
      shape: {
        circle: "rounded-full",
        dot:    "rounded-full p-0 border-0",
      },
      size: {
        sm: "min-w-4 h-4 text-[10px] px-1.5",   // 16px / 10px
        md: "min-w-[18px] h-[18px] text-[11px] px-[7px]", // 18px / 11px
      },
      placement: {
        standalone: "",
        overlay:
          "absolute -top-1 -right-1 border-2 border-paper dark:border-deep z-10",
      },
    },
    compoundVariants: [
      // overlay sm — tighter padding + smaller cutout ring
      { placement: "overlay", size: "sm", class: "min-w-4 h-4 px-[5px] py-px text-[10px]" },
      // dot — fixed 10px, ignore size padding
      { shape: "dot", class: "size-2.5 min-w-0 h-2.5 p-0" },
      { shape: "dot", placement: "overlay", class: "border-0" },
    ],
    defaultVariants: {
      tone: "alert",
      shape: "circle",
      size: "md",
      placement: "standalone",
    },
  }
)

type CountProps = Omit<ComponentProps<"span">, "children"> &
  VariantProps<typeof countVariants> & {
    /** Quantity. Ignored when shape="dot". Truncates to "{max}+" above max. */
    value?: number
    /** Truncation ceiling. Default 99. */
    max?: number
  }

function formatCount(value: number, max: number): string {
  return value > max ? `${max}+` : String(value)
}

function Count({
  className,
  value = 0,
  max = 99,
  tone = "alert",
  shape = "circle",
  size = "md",
  placement = "standalone",
  ...props
}: CountProps) {
  const isDot = shape === "dot"

  return (
    <span
      data-slot="count"
      className={cn(countVariants({ tone, shape, size, placement }), className)}
      aria-hidden={isDot && !props["aria-label"] ? true : undefined}
      {...props}
    >
      {isDot ? null : formatCount(value, max)}
    </span>
  )
}

export { Count, countVariants, formatCount }
export type { CountProps }
