import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type VideoCardProps = {
  thumbnail?: string
  duration: string
  title: string
  channel: string
  views: string
  avatarSrc?: string
  className?: string
}

function VideoCard({
  thumbnail,
  duration,
  title,
  channel,
  views,
  avatarSrc,
  className,
}: VideoCardProps) {
  return (
    <div
      className={cn(
        "w-72 bg-[#1d1c29] rounded-2xl overflow-hidden",
        className
      )}
    >
      <div className="h-40 bg-deep relative">
        {thumbnail ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-pixel text-[10px] text-ink-mute tracking-widest uppercase">
            Thumbnail
          </div>
        )}
        <span className="absolute right-2 bottom-2 font-pixel text-[10px] text-white bg-black/60 px-1.5 py-0.5">
          {duration}
        </span>
      </div>
      <div className="p-3.5 flex gap-2.5">
        <Avatar src={avatarSrc} size={32} ring="primary" />
        <div>
          <div className="font-sans font-bold text-sm text-white">{title}</div>
          <div className="font-sans font-semibold text-xs text-ink-soft mt-0.5">
            {channel} · {views}
          </div>
        </div>
      </div>
    </div>
  )
}

export { VideoCard }
