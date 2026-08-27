import { Avatar } from "@/components/ui/avatar"
import type { AvatarShape } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const wrapperVariants = {
  transparent: "bg-transparent",
  dark:        "bg-card-2 px-5 py-4 rounded-xl",
  light:       "bg-paper-2 px-5 py-4 rounded-xl",
} as const

type LockupVariant = keyof typeof wrapperVariants

type LockupProps = {
  src?: string
  name?: string
  size?: number
  /** When set, lockup becomes a home/profile link — whole unit is clickable. */
  href?: string
  className?: string
  variant?: LockupVariant
  avatarShape?: AvatarShape
}

function Lockup({
  src,
  name = "OHHEYLYNAE",
  size = 48,
  href,
  className,
  variant = 'dark',
  avatarShape = 'circle',
}: LockupProps) {
  const Comp = href ? "a" : "div"

  return (
    <Comp
      {...(href ? { href } : {})}
      className={cn(
        "group inline-flex w-fit items-center gap-3 no-underline",
        href &&
          "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint",
        wrapperVariants[variant],
        className
      )}
    >
      <Avatar
        src={src}
        size={size}
        shape={avatarShape}
        // Visible name beside the mark — keep the image decorative for SRs
        alt=""
        className={cn(
          "transition-[transform,border-color] duration-200 ease",
          "group-hover:-rotate-[2deg] group-hover:scale-[1.06] group-hover:border-pink",
          "group-active:rotate-0 group-active:scale-[0.96]"
        )}
      />
      <span
        className="font-px text-mint"
        style={{ fontSize: Math.max(14, size * 0.42) }}
      >
        {name}
      </span>
    </Comp>
  )
}

export { Lockup }
export type { LockupProps, LockupVariant }
