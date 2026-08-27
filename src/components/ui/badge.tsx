import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Badge — UI status signal (live / new / offline).
 * Quicksand bold + pill/dot shapes. For numeric quantity, use Count.
 * Optional interaction for filter chips.
 */
const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap",
    "font-sans font-bold",
  ].join(" "),
  {
    variants: {
      tone: {
        // mint fill — dark text on brand in both themes
        mint:
          "bg-mint text-deep border-0",
        // pink outline — alert text in light, pink in dark
        pink:
          "bg-transparent border-2 border-pink text-alert dark:text-pink",
        // paper-2 / ink → card / ink-2
        neutral:
          "bg-paper-2 text-ink dark:bg-card dark:text-ink-2 border-0",
      },
      shape: {
        pill: "rounded-full",
        dot:  "rounded-full p-0 border-0 bg-transparent",
      },
      size: {
        sm: "text-[11px] px-[7px] py-0.5",   // 11px / 2×7
        md: "text-[12px] px-3.5 py-[5px]",   // 12px / 5×14
      },
      interactive: {
        true:  "cursor-pointer transition-transform duration-[var(--dur-1)] ease-[var(--ease-out)] hover:scale-[1.08] active:scale-[0.94]",
        false: "",
      },
    },
    compoundVariants: [
      // pink outline padding accounts for 2px border
      { tone: "pink", shape: "pill", size: "sm", class: "px-[5px] py-px" },
      { tone: "pink", shape: "pill", size: "md", class: "px-3 py-[3px]" },
      // dot — kill tone/size padding; size comes from the indicator
      { shape: "dot", class: "size-2 p-0 min-w-0 gap-0 border-0" },
    ],
    defaultVariants: {
      tone: "mint",
      shape: "pill",
      size: "md",
      interactive: false,
    },
  }
)

const dotToneClass: Record<NonNullable<VariantProps<typeof badgeVariants>["tone"]>, string> = {
  mint: "bg-mint",
  pink: "bg-alert",
  neutral: "bg-ink-mute",
}

type BadgeProps = useRender.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Override the indicator color when shape="dot" */
    dotColor?: string
  }

function Badge({
  className,
  tone = "mint",
  shape = "pill",
  size = "md",
  interactive = false,
  dotColor,
  render,
  style,
  children,
  ...props
}: BadgeProps) {
  const isDot = shape === "dot"

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(
          badgeVariants({ tone, shape, size, interactive }),
          isDot && !dotColor && dotToneClass[tone ?? "mint"],
          className
        ),
        style: isDot && dotColor ? { backgroundColor: dotColor, ...style } : style,
        children: isDot ? undefined : children,
        "aria-hidden": isDot && !props["aria-label"] ? true : undefined,
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      tone,
      shape,
    },
  })
}

export { Badge, badgeVariants }
