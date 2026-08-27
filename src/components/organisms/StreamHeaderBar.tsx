import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type StreamHeaderBarProps = {
  avatarSrc?: string
  name?: string
  tagline?: string
  live?: boolean
  /** When offline: show OFFLINE badge (default) or hide it entirely */
  showOfflineBadge?: boolean
  /** Clicking the bar → channel/profile */
  href?: string
  className?: string
}

function StreamHeaderBar({
  avatarSrc,
  name = 'OHHEYLYNAE',
  tagline = 'cozy games & chaos',
  live = false,
  showOfflineBadge = true,
  href,
  className,
}: StreamHeaderBarProps) {
  const Comp = href ? 'a' : 'div'

  return (
    <Comp
      {...(href ? { href } : {})}
      className={cn(
        'flex w-80 items-center gap-3.5 rounded-2xl bg-card-2 px-5 py-4 no-underline',
        'transition-colors duration-200 ease',
        href && 'cursor-pointer hover:bg-[color-mix(in_oklch,var(--color-card-2)_82%,white)]',
        !live && 'opacity-70',
        className
      )}
    >
      <Avatar
        src={avatarSrc}
        size={52}
        ring={live ? 'mint' : 'none'}
      />
      <div className="min-w-0 flex-1">
        <div
          className={cn(
            'font-px text-base',
            live ? 'text-mint' : 'text-ink-mute'
          )}
        >
          {name}
        </div>
        <div className="truncate font-sans text-xs font-semibold text-ink-soft">
          {tagline}
        </div>
      </div>

      {live ? (
        <Badge tone="mint" className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-current animate-glow"
          />
          LIVE
        </Badge>
      ) : showOfflineBadge ? (
        <Badge tone="neutral">OFFLINE</Badge>
      ) : null}
    </Comp>
  )
}

export { StreamHeaderBar }
export type { StreamHeaderBarProps }
