import React from 'react'
import { cn } from '@/lib/utils'
import {
  FigmaLogo,
  QualigenceLogo,
  RedBullLogo,
  RocketLogo,
  StockXLogo,
  UMichLogo,
} from '@/utils/logos'

// ─── Types ────────────────────────────────────────────────────────────────────

interface LogoItem {
  id:   string
  Logo: React.ComponentType
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_LOGOS: LogoItem[] = [
  { id: 'stockx',     Logo: StockXLogo     },
  { id: 'redbull',    Logo: RedBullLogo    },
  { id: 'rocket',     Logo: RocketLogo     },
  { id: 'umich',      Logo: UMichLogo      },
  { id: 'qualigence', Logo: QualigenceLogo },
  { id: 'figma',      Logo: FigmaLogo      },
]

const EDGE_FADE: React.CSSProperties = {
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
  maskImage:       'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ClientReel({
  logos     = DEFAULT_LOGOS,
  className,
}: {
  logos?:    LogoItem[]
  className?: string
}) {
  return (
    <section className={cn('border-b border-line bg-paper px-[clamp(20px,5vw,80px)] py-14', className)}>
      <div className="mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-accent">
        <span className="h-px w-8 bg-accent shrink-0" />
        Trusted by teams at
        <span className="ml-auto text-ink-mute">[ SELECTED CLIENTS ]</span>
      </div>

      <div className="relative overflow-hidden border-y border-line" style={EDGE_FADE}>
        {/* Two copies — the -50% keyframe makes the loop seamless */}
        <div className="flex w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 items-center"
              aria-hidden={dup === 1 || undefined}
            >
              {logos.map(({ id, Logo }) => (
                <div
                  key={id}
                  className={cn(
                    'flex min-w-[180px] shrink-0 items-center justify-center border-r border-line px-12 py-8',
                    'text-ink-mute opacity-60 transition-[opacity,color] duration-200 hover:text-ink hover:opacity-100',
                  )}
                >
                  <Logo />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export type { LogoItem }
