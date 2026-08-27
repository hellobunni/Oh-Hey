import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0 cursor-pointer rounded-none",
    "transition-[transform,filter,background-color,border-color,color,opacity] duration-[var(--dur-1)] ease-[var(--ease-out)]",
    "hover:-translate-y-[2px] hover:brightness-110",
    "active:translate-y-px active:scale-[0.97] active:brightness-100",
    "disabled:pointer-events-none disabled:opacity-50 disabled:translate-y-0 disabled:scale-100",
  ].join(" "),
  {
    variants: {
      variant: {
        solid: "text-card-2 bg-mint",
        outline: "text-ink bg-transparent border-[3px] border-ink",
        ghost: "text-ink-2 bg-paper-2 dark:bg-card",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
)

type IconButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof iconButtonVariants> & {
    icon: ReactNode
    size?: number
    rounded?: boolean
    "aria-label": string
  }

function IconButton({
  className,
  variant = "solid",
  icon,
  size = 44,
  rounded = false,
  style,
  ...props
}: IconButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="icon-button"
      className={cn(
        iconButtonVariants({ variant }),
        rounded && "rounded-full",
        className
      )}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      {icon}
    </ButtonPrimitive>
  )
}

export { IconButton, iconButtonVariants }
