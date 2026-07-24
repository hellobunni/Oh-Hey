import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 rounded-none cursor-pointer",
  {
    variants: {
      variant: {
        default:       "bg-ink font-light font-mono text-paper hover:bg-neutral-800 text-sm tracking-wide",
        primary:       "font-pixel text-xs text-[#1d1c29] bg-primary hover:bg-primary/90 uppercase tracking-wider",
        accent:        "bg-primary text-[#1d1c29] font-pixel text-xs uppercase tracking-wider hover:bg-primary/90",
        secondary:     "border-[3px] border-primary bg-transparent text-primary font-pixel text-xs uppercase tracking-wider hover:bg-primary/10",
        outlineAccent: "border-[3px] border-accent bg-transparent text-accent font-pixel text-xs uppercase tracking-wider hover:bg-accent/10",
        ghost:         "font-sans font-bold text-xs text-ink-2 bg-card rounded-lg hover:bg-card/70",
      },
      size: {
        default: "px-5 py-3",
        sm:      "px-3.5 py-2",
        md:      "px-5 py-3",
        lg:      "px-7 py-4",
        icon:    "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
