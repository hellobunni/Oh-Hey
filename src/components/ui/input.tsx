import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-lg border-2 border-line-strong bg-transparent px-3.5 py-2.5",
        "font-sans text-sm font-semibold text-ink outline-none",
        "placeholder:text-ink-mute",
        "transition-colors duration-[var(--dur-2)] ease-[var(--ease-out)]",
        "dark:border-ink-mute dark:bg-deep",
        "focus:border-mint",
        "disabled:cursor-not-allowed disabled:border-line-strong/60 disabled:bg-paper-2 disabled:text-ink-mute",
        "dark:disabled:border-transparent dark:disabled:bg-card dark:disabled:text-ink-soft",
        "aria-invalid:border-red-600 dark:aria-invalid:border-alert",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
