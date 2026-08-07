import { cn } from "@/lib/utils"

type NavItemGroupProps = {
  items: string[]
  activeIndex?: number
  onSelect?: (index: number) => void
  className?: string
}

function NavItemGroup({
  items,
  activeIndex = 0,
  onSelect,
  className,
}: NavItemGroupProps) {
  return (
    <div
      className={cn(
        "bg-[#1d1c29] rounded-lg px-4 py-3 flex gap-5 w-fit",
        className
      )}
      role="navigation"
    >
      {items.map((item, i) => {
        const active = i === activeIndex
        return (
          <button
            key={item}
            type="button"
            onClick={() => onSelect?.(i)}
            className={cn(
              "font-sans font-bold text-sm bg-transparent border-0 cursor-pointer p-0 pb-1",
              active
                ? "text-primary border-b-2 border-primary"
                : "text-ink-soft border-b-2 border-transparent hover:text-ink-2"
            )}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export { NavItemGroup }
