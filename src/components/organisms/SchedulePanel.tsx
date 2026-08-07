import { cn } from "@/lib/utils"

type ScheduleItem = {
  day: string
  detail: string
}

type SchedulePanelProps = {
  items: ScheduleItem[]
  title?: string
  className?: string
}

function SchedulePanel({
  items,
  title = "SCHEDULE",
  className,
}: SchedulePanelProps) {
  return (
    <div
      className={cn(
        "w-72 bg-[#1d1c29] rounded-2xl px-5 py-[18px] flex flex-col gap-2.5",
        className
      )}
    >
      <div className="font-pixel text-sm text-link">{title}</div>
      {items.map(({ day, detail }) => (
        <div
          key={day}
          className="flex justify-between font-sans font-semibold text-sm text-white"
        >
          <span>{day}</span>
          <span className="text-ink-soft">{detail}</span>
        </div>
      ))}
    </div>
  )
}

export { SchedulePanel }
export type { ScheduleItem, SchedulePanelProps }
