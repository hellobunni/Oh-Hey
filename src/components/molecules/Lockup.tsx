import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type LockupProps = {
  src?: string
  name?: string
  size?: number
  className?: string
}

function Lockup({
  src,
  name = "OHHEYLYNAE",
  size = 48,
  className,
}: LockupProps) {
  return (
    <div
      className={cn(
        "bg-[#1d1c29] rounded-xl px-5 py-4 flex items-center gap-3 w-fit",
        className
      )}
    >
      <Avatar src={src} size={size} ring="primary" />
      <span
        className="font-pixel text-primary"
        style={{ fontSize: Math.max(14, size * 0.42) }}
      >
        {name}
      </span>
    </div>
  )
}

export { Lockup }
