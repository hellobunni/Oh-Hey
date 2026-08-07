'use client'

import { useState, type MouseEventHandler } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

type VideoCardProps = {
  thumbnail?: string
  duration: string
  title: string
  channel: string
  views: string
  avatarSrc?: string
  /** Whole card click → opens video */
  href?: string
  /** Avatar click → channel page (separate from card) */
  channelHref?: string
  /** Watched progress 0–1. Shows sliver + muted title. */
  progress?: number
  /** Force loading skeleton (otherwise waits for image load). */
  loading?: boolean
  className?: string
}

function VideoCard({
  thumbnail,
  duration,
  title,
  channel,
  views,
  avatarSrc,
  href,
  channelHref,
  progress,
  loading: loadingProp,
  className,
}: VideoCardProps) {
  const [imgLoaded, setImgLoaded] = useState(!thumbnail)
  const loading = loadingProp || (Boolean(thumbnail) && !imgLoaded)
  const watched = progress != null && progress > 0
  const progressPct = watched ? Math.min(100, Math.max(0, progress * 100)) : 0

  const Comp = href ? 'a' : 'div'

  const onChannelClick: MouseEventHandler = (e) => {
    if (!channelHref) return
    e.preventDefault()
    e.stopPropagation()
    window.location.assign(channelHref)
  }

  return (
    <Comp
      {...(href ? { href } : {})}
      className={cn(
        'group relative block w-72 overflow-hidden rounded-2xl bg-card-2 no-underline',
        'shadow-[0_0_0_transparent] transition-[transform,box-shadow] duration-200 ease',
        'hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]',
        'active:-translate-y-0.5 active:scale-[0.98]',
        href && 'cursor-pointer',
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative h-40 overflow-hidden bg-deep">
        {thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt=""
            onLoad={() => setImgLoaded(true)}
            className={cn(
              'absolute inset-0 size-full object-cover opacity-90',
              'transition-transform duration-300 ease',
              'group-hover:scale-105',
              loading && 'opacity-0'
            )}
          />
        )}

        {loading && (
          <div
            aria-hidden
            className="absolute inset-0 animate-[shimmer_1.4s_linear_infinite] bg-[linear-gradient(90deg,var(--color-card)_0%,var(--color-card-2)_40%,var(--color-card)_80%)] bg-[length:200%_100%]"
          />
        )}

        {!thumbnail && !loading && (
          <div className="absolute inset-0 flex items-center justify-center font-pixel text-[10px] uppercase tracking-widest text-ink-mute">
            Thumbnail
          </div>
        )}

        {/* Duration — stays fixed (no zoom with thumb) */}
        <span className="absolute bottom-2 right-2 z-10 bg-black/60 px-1.5 py-0.5 font-pixel text-[10px] text-white">
          {duration}
        </span>

        {/* Watched progress sliver */}
        {watched && (
          <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-black/40">
            <div
              className="h-full bg-primary"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex gap-2.5 p-3.5">
        {channelHref ? (
          <button
            type="button"
            aria-label={`${channel} channel`}
            onClick={onChannelClick}
            className="shrink-0 cursor-pointer border-0 bg-transparent p-0"
          >
            <Avatar src={avatarSrc} size={32} ring="primary" />
          </button>
        ) : (
          <Avatar src={avatarSrc} size={32} ring="primary" />
        )}
        <div className="min-w-0">
          <div
            className={cn(
              'font-sans text-sm font-bold',
              watched ? 'text-ink-mute' : 'text-white'
            )}
          >
            {title}
          </div>
          <div className="mt-0.5 font-sans text-xs font-semibold text-ink-soft">
            {channel} · {views}
          </div>
        </div>
      </div>
    </Comp>
  )
}

export { VideoCard }
export type { VideoCardProps }
