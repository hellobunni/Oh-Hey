import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-pixel uppercase tracking-wider rounded-none cursor-pointer",
    "transition-[transform,filter,background-color,border-color,color,opacity] duration-[var(--dur-1)] ease-[var(--ease-out)]",
    "hover:-translate-y-[2px] hover:brightness-110",
    "active:translate-y-px active:scale-[0.97] active:brightness-100",
    "disabled:pointer-events-none disabled:opacity-50 disabled:translate-y-0 disabled:scale-100 disabled:brightness-100",
  ].join(" "),
  {
    variants: {
      variant: {
        // mint fill — text stays dark on brand in both themes
        primary:
          "bg-primary text-card-2 hover:bg-primary",
        // pink outline — alert text in light, accent text in dark
        accent:
          "border-[3px] border-accent bg-transparent text-alert dark:text-accent",
        // ink outline — flips with theme ink tokens
        secondary:
          "border-[3px] border-ink bg-transparent text-ink",
        // paper/card surface — flips with theme
        display:
        "font-pixel font-sm text-soft-ink bg-card-2 border-2 border-card py-2 px-4 cursor-pointer",
        ghost:
          "font-sans font-bold bg-paper-2 text-ink-2 dark:bg-card rounded-lg normal-case tracking-wide",
        // muted inline link — flips with ink-mute
        textLink:
          "font-sans font-bold bg-transparent text-ink-mute normal-case tracking-wide underline-offset-4 hover:underline hover:brightness-100",
      },
      size: {
        sm: "text-xs px-3.5 py-2",   // 11px / 14×8
        md: "text-sm px-5 py-3",     // 12px / 20×12
        lg: "text-base px-7 py-4",     // 16px / 28×16
        icon: "size-9 text-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
