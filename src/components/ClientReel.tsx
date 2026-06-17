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
  { id: 'qualigence', Logo: QualigenceLogo },
  { id: 'rocket',     Logo: RocketLogo     },
  { id: 'umich',      Logo: UMichLogo      },
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
    <section className={cn(' bg-paper px-[clamp(20px,5vw,80px)] py-8 md:py-14', className)}>
      <div className="mb-8 flex items-center gap-3 font-mono md:text-sm text-xs uppercase tracking-wider text-accent">
        <span className="h-px md:w-8 w-4 bg-accent shrink-0" />
        Trusted by teams at
        <span className="ml-auto text-ink-mute hidden md:block">[ SELECTED CLIENTS ]</span>
      </div>

      <div className="relative overflow-hidden" style={EDGE_FADE}>
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
                    'flex min-w-[180px] shrink-0 items-center justify-center px-12 md:py-8 py-4',
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
