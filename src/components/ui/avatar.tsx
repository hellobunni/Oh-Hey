import { cn } from '@/lib/utils'

const AVATARS = {
  face: '/avatar-face.png',
  bust: '/avatar-bust.png',
  round: '/avatar-round.png',
} as const

type AvatarVariant = keyof typeof AVATARS
type AvatarRing = 'mint' | 'pink' | 'none'
type AvatarPresence = 'online' | 'offline' | 'none'

type AvatarShape = 'circle' | 'square' | 'no-border'

type AvatarProps = {
  src?: string
  variant?: AvatarVariant
  /** Preset sizes: 24 / 32 / 48 / 64 / 128 / 256 — or any px number */
  size?: number
  ring?: AvatarRing
  shape?: AvatarShape
  /** Presence indicator at bottom-right */
  presence?: AvatarPresence
  /** Desaturate + mute — inactive/offline profile */
  inactive?: boolean
  /** Enables hover tilt/scale (profile links) */
  interactive?: boolean
  alt?: string
  className?: string
}

const PRESETS = [24, 32, 48, 64, 128, 256] as const

const shapeRadius: Record<AvatarShape, string> = {
  circle:      'rounded-full',
  square:      'rounded-lg',
  'no-border': 'rounded-full',
}

function Avatar({
  src,
  variant = 'face',
  size = 64,
  ring = 'mint',
  shape = 'circle',
  presence = 'none',
  inactive = false,
  interactive = false,
  alt = 'ohheylynae',
  className,
}: AvatarProps) {
  const effectiveRing = shape === 'no-border' ? 'none' : ring

  const rings = {
    mint: inactive ? 'border-ink-mute' : 'border-mint',
    pink: 'border-pink',
    none: 'border-transparent',
  }

  const borderW = shape === 'no-border' ? 0 : size <= 32 ? 2 : 3
  const imageSrc = src ?? AVATARS[variant]
  const dotSize = Math.max(10, Math.round(size * 0.22))

  return (
    <div
      className={cn(
        'relative shrink-0',
        interactive &&
          'transition-transform duration-200 ease hover:-rotate-[2deg] hover:scale-[1.06]',
        className
      )}
      style={{ width: size, height: size }}
    >
      <div
        className={cn(
          'size-full overflow-hidden bg-card',
          shapeRadius[shape],
          rings[effectiveRing],
          inactive && 'opacity-60'
        )}
        style={{ borderWidth: borderW }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          className={cn(
            'size-full object-cover',
            variant === 'bust' && 'object-[50%_18%]',
            variant === 'round' && 'object-contain bg-deep',
            inactive && 'grayscale-[60%]'
          )}
          draggable={false}
        />
      </div>

      {presence !== 'none' && (
        <span
          aria-hidden
          className={cn(
            'absolute bottom-0.5 right-0.5 rounded-full border-2 border-card-2',
            presence === 'online' && 'bg-mint',
            presence === 'offline' && 'bg-ink-mute'
          )}
          style={{ width: dotSize, height: dotSize }}
        />
      )}
    </div>
  )
}

export { Avatar, AVATARS, PRESETS }
export type { AvatarProps, AvatarVariant, AvatarRing, AvatarPresence, AvatarShape }
