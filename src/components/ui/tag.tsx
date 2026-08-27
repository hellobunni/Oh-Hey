import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Tag — static content label (category / episode metadata).
 * Silkscreen + sharp corners. Display-only — not interactive.
 */
const tagVariants = cva(
  [
    "inline-flex items-center gap-1.5 whitespace-nowrap",
    "font-px uppercase tracking-wider rounded-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // paper-2 / ink → card / ink-2
        neutral:
          "bg-paper-2 text-ink dark:bg-card dark:text-ink-2",
        // mint fill — dark text on brand in both themes
        primary:
          "bg-mint text-card-2",
        // pink outline — alert text in light, pink in dark
        outline:
          "bg-transparent border-2 border-pink text-alert dark:text-pink",
        // domain category colors (square outline chips)
        tech:     "text-tech border border-tech/30 bg-transparent",
        fitness:  "text-fitness border border-fitness/30 bg-transparent",
        creative: "text-creative border border-creative/30 bg-transparent",
        nerd:     "text-nerd border border-nerd/30 bg-transparent",
      },
      size: {
        sm: "text-[10px] px-2 py-[3px]",     // 10px / 8×3
        md: "text-[11px] px-3 py-[5px]",     // 11px / 12×5
      },
    },
    compoundVariants: [
      // outline sizes account for 2px border
      { variant: "outline", size: "sm", class: "px-[6px] py-px" },
      { variant: "outline", size: "md", class: "px-2.5 py-[3px]" },
    ],
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
)

function Tag({
  className,
  variant = "neutral",
  size = "md",
  ...props
}: ComponentProps<"span"> & VariantProps<typeof tagVariants>) {
  return (
    <span
      data-slot="tag"
      className={cn(tagVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Tag, tagVariants }
