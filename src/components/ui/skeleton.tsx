import { cn } from '@/lib/utils'

type SkeletonProps = {
  /** Mirrors the real surface it replaces */
  shape?: 'rect' | 'circle' | 'text' | 'thumbnail'
  width?: number | string
  height?: number | string
  className?: string
}

/**
 * Skeleton — loading placeholder.
 * Shape mirrors the real component; never mix with spinners on the same surface.
 */
function Skeleton({
  shape = 'rect',
  width,
  height,
  className,
}: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'animate-[shimmer_1.4s_linear_infinite]',
        'bg-[linear-gradient(90deg,var(--color-paper-2)_25%,color-mix(in_oklch,var(--color-paper-2)_70%,white)_37%,var(--color-paper-2)_63%)]',
        'dark:bg-[linear-gradient(90deg,var(--color-card)_25%,#353349_37%,var(--color-card)_63%)]',
        'bg-[length:400%_100%]',
        shape === 'circle' && 'rounded-full',
        shape === 'rect' && 'rounded-md',
        shape === 'text' && 'rounded h-2.5',
        shape === 'thumbnail' && 'rounded-none',
        className
      )}
      style={{
        width: width ?? (shape === 'circle' ? 32 : shape === 'text' ? '80%' : '100%'),
        height:
          height ??
          (shape === 'circle' ? 32 : shape === 'text' ? 10 : shape === 'thumbnail' ? 158 : 16),
      }}
    />
  )
}

/** Video-card-shaped skeleton composite for common loading layouts */
function SkeletonVideoCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-[280px] overflow-hidden rounded-[14px] bg-card-2',
        className
      )}
    >
      <Skeleton shape="thumbnail" height={158} />
      <div className="flex gap-2.5 px-3.5 py-3">
        <Skeleton shape="circle" width={32} height={32} className="shrink-0" />
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          <Skeleton shape="text" width="80%" height={10} />
          <Skeleton shape="text" width="50%" height={8} />
        </div>
      </div>
    </div>
  )
}

export { Skeleton, SkeletonVideoCard }
export type { SkeletonProps }
