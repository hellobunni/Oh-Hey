import type { ReactNode } from "react"

import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type AlertToastProps = {
  src?: string
  headline: string
  subtext?: ReactNode
  tone?: "accent" | "primary"
  icon?: ReactNode
  className?: string
}

function AlertToast({
  src,
  headline,
  subtext,
  tone = "accent",
  icon,
  className,
}: AlertToastProps) {
  const border =
    tone === "primary" ? "border-primary text-primary" : "border-accent text-accent"

  return (
    <div
      className={cn(
        "bg-[#1d1c29] border-[3px] px-3.5 py-2.5 flex items-center gap-2.5 w-fit",
        border,
        className
      )}
    >
      {icon ?? (src ? <Avatar src={src} size={28} ring="primary" /> : null)}
      <span className="font-pixel text-[10px]">
        {headline}
        {subtext != null && (
          <>
            {" "}
            <span className="font-sans font-semibold text-ink-2">{subtext}</span>
          </>
        )}
      </span>
    </div>
  )
}

export { AlertToast }
