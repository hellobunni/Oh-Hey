import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors pointer-cursor disabled:pointer-events-none disabled:opacity-50 font-mono text-sm tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-ink font-light text-paper hover:bg-neutral-800",
        secondary: "border border-ink bg-kodara-accent-soft-solid text-ink font-normal hover:bg-neutral-100",
        accent: "bg-accent text-paper font-medium uppercase tracking-wider",
        "kodara-accent": "bg-kodara-accent text-white font-normal",
        ghost: "text-ink underline underline-offset-8 uppercase hover:text-ink",
      },
      size: {
        default: "px-6 py-3 text-xxs",
        sm: "px-3 py-2 text-xs",
        lg: "px-6 py-4",
        icon: "size-9",
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
