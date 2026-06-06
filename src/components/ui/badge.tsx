import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"

import { cn, cva, type VariantProps } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex items-center gap-1.5 font-mono text-xs py-1 px-2.5 border transition-colors",
  {
    variants: {
      variant: {
        default:     "bg-primary text-primary-foreground border-transparent [a]:hover:bg-primary/80",
        secondary:   "bg-secondary text-secondary-foreground border-transparent [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 text-destructive border-transparent focus-visible:ring-destructive/20 dark:bg-destructive/20 [a]:hover:bg-destructive/20",
        outline:     "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:       "border-transparent hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link:        "border-transparent text-primary underline-offset-4 hover:underline",
        // ─── Domain variants ───────────────────────────────────────────
        tech:        "text-tech",
        fitness:     "text-fitness",
        creative:    "text-creative",
        nerd:        "text-nerd",
      },
      shape: {
        square: "rounded-none",
        pill:   "rounded-full border-0",
      },
    },
    compoundVariants: [
      // Squared — colored border at 30% opacity
      { variant: "tech",     shape: "square", class: "border-tech/30" },
      { variant: "fitness",  shape: "square", class: "border-fitness/30" },
      { variant: "creative", shape: "square", class: "border-creative/30" },
      { variant: "nerd",     shape: "square", class: "border-nerd/30" },
      // Pill — tinted background
      { variant: "tech",     shape: "pill", class: "bg-tech-bg" },
      { variant: "fitness",  shape: "pill", class: "bg-fitness-bg" },
      { variant: "creative", shape: "pill", class: "bg-creative-bg" },
      { variant: "nerd",     shape: "pill", class: "bg-nerd-bg" },
    ],
    defaultVariants: {
      variant: "default",
      shape: "square",
    },
  }
)

function Badge({
  className,
  variant = "default",
  shape = "square",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, shape }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
