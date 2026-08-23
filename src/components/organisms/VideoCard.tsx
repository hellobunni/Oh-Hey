import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type VideoCardProps = {
  thumbnail?: string;
  duration: string;
  title: string;
  channel: string;
  views: string;
  avatarSrc?: string;
  /** Whole card click → opens video */
  href?: string;
  /** Avatar click → channel page (separate from card) */
  channelHref?: string;
  /** Watched progress 0–1. Shows sliver + muted title. */
  progress?: number;
  /** Force the loading skeleton. */
  loading?: boolean;
  /** Skip lazy loading — set on above-the-fold cards so the thumb can be the LCP. */
  priority?: boolean;
  /** Layout hint for the responsive srcset. Defaults to the 1/2/3-col grid. */
  sizes?: string;
  className?: string;
};

/** Matches the home grid: 1 col → 2 at md → 3 at lg. */
const DEFAULT_SIZES = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

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
  loading = false,
  priority = false,
  sizes = DEFAULT_SIZES,
  className,
}: VideoCardProps) {
  const watched = progress != null && progress > 0;
  const progressPct = watched ? Math.min(100, Math.max(0, progress * 100)) : 0;
  const showThumb = Boolean(thumbnail) && !loading;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card-2",
        "shadow-[0_0_0_transparent] transition-[transform,box-shadow] duration-200 ease",
        "hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]",
        "active:-translate-y-0.5 active:scale-[0.98]",
        href && "cursor-pointer",
        className,
      )}
    >
      {/* Thumbnail */}
      <div className="relative h-40 overflow-hidden bg-deep">
        {/* Skeleton sits *under* the image — the thumb paints over it once decoded,
            so no load listener (and no client boundary) is needed. */}
        {(loading || showThumb) && (
          <div
            aria-hidden
            className="absolute inset-0 animate-[shimmer_1.4s_linear_infinite] bg-[linear-gradient(90deg,var(--color-card)_0%,var(--color-card-2)_40%,var(--color-card)_80%)] bg-[length:200%_100%]"
          />
        )}

        {showThumb && (
          <Image
            src={thumbnail!}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
            className={cn(
              "object-cover opacity-90",
              "transition-transform duration-300 ease",
              "group-hover:scale-105",
            )}
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

      {/* Card-wide target. Stretched over the card rather than wrapping it, so the
          channel link can be a sibling instead of an <a> nested in an <a>. */}
      {href && (
        <Link
          href={href}
          className={cn("absolute inset-0 z-20 rounded-2xl", focusRing)}
        >
          <span className="sr-only">{title}</span>
        </Link>
      )}

      {/* Meta */}
      <div className="flex gap-2.5 p-3.5">
        {channelHref ? (
          <Link
            href={channelHref}
            aria-label={`${channel} channel`}
            className={cn("relative z-30 shrink-0 rounded-full", focusRing)}
          >
            <Avatar src={avatarSrc} size={32} ring="primary" />
          </Link>
        ) : (
          <Avatar src={avatarSrc} size={32} ring="primary" />
        )}
        <div className="min-w-0">
          <div
            className={cn(
              "font-sans text-sm font-bold",
              watched ? "text-ink-mute" : "text-ink",
            )}
          >
            {title}
          </div>
          <div className="mt-0.5 font-sans text-xs font-semibold text-ink-soft">
            {channel} · {views}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };
export type { VideoCardProps };
