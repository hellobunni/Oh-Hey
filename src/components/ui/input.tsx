import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "font-sans font-semibold text-sm text-white bg-deep border-2 border-ink-mute rounded-lg px-3.5 py-2.5 w-full outline-none transition-colors placeholder:text-ink-soft focus:border-primary disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
