import { Circle } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type StreamHeaderBarProps = {
  avatarSrc?: string
  name?: string
  tagline?: string
  live?: boolean
  className?: string
}

function StreamHeaderBar({
  avatarSrc,
  name = 'OHHEYLYNAE',
  tagline = 'cozy games & chaos',
  live = false,
  className,
}: StreamHeaderBarProps) {
  return (
    <div
      className={cn(
        'w-80 bg-[#1d1c29] rounded-2xl px-5 py-4 flex items-center gap-3.5',
        !live && 'opacity-70',
        className
      )}
    >
      <Avatar
        src={avatarSrc}
        size={52}
        ring={live ? 'primary' : 'none'}
      />
      <div className="flex-1 min-w-0">
        <div
          className={cn(
            'font-pixel text-base',
            live ? 'text-primary' : 'text-ink-mute'
          )}
        >
          {name}
        </div>
        <div className="font-sans font-semibold text-xs text-ink-soft truncate">
          {tagline}
        </div>
      </div>
      {live ? (
        <Badge variant="mint" shape="pill" className="inline-flex items-center gap-1.5">
          <Circle size={7} className="fill-current" strokeWidth={0} aria-hidden />
          LIVE
        </Badge>
      ) : (
        <Badge variant="offline" shape="pill">
          OFFLINE
        </Badge>
      )}
    </div>
  )
}

export { StreamHeaderBar }
