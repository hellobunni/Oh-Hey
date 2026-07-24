import { cn } from "@/lib/utils"

type AvatarProps = {
  src?: string
  size?: number
  ring?: "primary" | "accent" | "none"
  className?: string
}

function Avatar({ src, size = 64, ring = "primary", className }: AvatarProps) {
  const rings = {
    primary: "border-primary",
    accent:  "border-accent",
    none:    "border-transparent",
  }
  return (
    <div
      className={cn(
        "rounded-full border-[3px] bg-card bg-cover shrink-0",
        rings[ring],
        className
      )}
      style={{
        width: size,
        height: size,
        ...(src
          ? { backgroundImage: `url(${src})`, backgroundPosition: "50% 39%", backgroundSize: "340%" }
          : {}),
      }}
    />
  )
}

export { Avatar }
