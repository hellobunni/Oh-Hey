import { cn } from "@/lib/utils"

type StatPairProps = {
  value: string
  label: string
  /** Token color class for the value — defaults to periwinkle/link */
  tone?: "link" | "primary" | "accent" | "gold"
  className?: string
}

const tones = {
  link: "text-link",
  primary: "text-primary",
  accent: "text-accent",
  gold: "text-gold",
} as const

function StatPair({
  value,
  label,
  tone = "link",
  className,
}: StatPairProps) {
  return (
    <div
      className={cn(
        "bg-[#1d1c29] rounded-xl px-5 py-4 flex flex-col gap-0.5 w-40",
        className
      )}
    >
      <span className={cn("font-pixel text-2xl", tones[tone])}>{value}</span>
      <span className="font-sans font-bold text-xs text-ink-soft tracking-wide uppercase">
        {label}
      </span>
    </div>
  )
}

export { StatPair }
