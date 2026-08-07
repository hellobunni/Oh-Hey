import { Circle, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface HeroTerminalOHProps {
  eyebrow?: React.ReactNode
  headline?: React.ReactNode
  body?: React.ReactNode
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  social?: string
  imageSrc?: string
  imageTag?: string
  className?: string
}

export default function HeroTerminalOH({
  eyebrow = (
    <span className="inline-flex items-center gap-1.5">
      <Circle size={8} className="fill-current" strokeWidth={0} aria-hidden />
      LIVE TUES / THURS / SUN · 7PM
    </span>
  ),
  headline = (
    <>
      OH HEY!<br />
      COZY GAMES,<br />
      <span className="text-mint">CHAOTIC ENERGY.</span>
    </>
  ),
  body = (
    <>
      New games every week with <strong className="text-ink">one winking bunny</strong> — plus
      the dev log where I build things, lift things, and draw things between streams.
    </>
  ),
  primaryCta = { label: 'LATEST VIDEO', href: '#videos' },
  secondaryCta = { label: 'READ THE LOG', href: '#log' },
  social = '@ohheylynae everywhere — clips on TikTok',
  imageSrc = '/avatar-bust.png',
  imageTag = 'PRESS START',
  className,
}: HeroTerminalOHProps) {
  return (
    <section className={cn('home-inner border-b-2 border-card py-[72px_0_64px]', className)}>
      <div className="site-inner px-[clamp(20px,5vw,80px)] py-[72px] md:py-[72px_0_64px]">
        <div
          className="grid gap-14 items-center max-md:grid-cols-1"
          style={{ gridTemplateColumns: '1.3fr 1fr' }}
        >
          <div>
            <div className="font-pixel text-xs text-pink mb-5">{eyebrow}</div>

            <h1
              className="font-pixel font-bold text-ink leading-[1.15]"
              style={{ fontSize: 'clamp(34px, 5.5vw, 58px)' }}
            >
              {headline}
            </h1>

            <p className="font-sans font-medium text-ink-soft mt-[22px] max-w-[460px]" style={{ fontSize: '17px' }}>
              {body}
            </p>

            <div className="flex gap-3.5 mt-8 flex-wrap">
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 font-pixel text-xs bg-mint text-ink px-5 py-[13px] shadow-[4px_4px_0_rgba(0,0,0,0.35)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <Play size={12} fill="currentColor" strokeWidth={0} aria-hidden />
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                className="font-pixel text-xs bg-transparent text-mint border-2 border-mint px-5 py-[13px] shadow-[4px_4px_0_rgba(0,0,0,0.35)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                {secondaryCta.label}
              </a>
            </div>

            {social && (
              <div className="mt-6 font-sans font-semibold text-sm text-peri">{social}</div>
            )}
          </div>

          <div className="relative justify-self-center max-md:order-first">
            <img
              src={imageSrc}
              alt="ohheylynae mascot"
              style={{ width: 'min(320px, 70vw)', display: 'block', border: '3px solid var(--color-mint)', boxShadow: '8px 8px 0 rgba(0,0,0,0.4)' }}
            />
            {imageTag && (
              <span className="absolute bottom-[-14px] left-[-14px] font-pixel text-xs bg-pink text-ink px-[11px] py-[7px] shadow-[3px_3px_0_rgba(0,0,0,0.35)]">
                {imageTag}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
