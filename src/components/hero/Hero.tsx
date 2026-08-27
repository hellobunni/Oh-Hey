import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

export interface HeroProps {
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

export default function Hero({
  headline = (
    <>
      Design<br />
      &amp; engineering,<br />
      <span className="text-mint">on demand.</span>
    </>
  ),
  body = (
    <>
      New games every week — plus the dev log where I build things, lift things, and draw things between streams.
    </>
  ),
  primaryCta = { label: 'LATEST VIDEO', href: '#videos' },
  secondaryCta = { label: 'READ THE LOG', href: '#log' },
  social = '@ohheylynae everywhere — clips on TikTok',
  imageSrc = '/avatar-bust.png',
  className,
}: HeroProps) {
  return (
    <section className={cn('home-inner border-b-2 border-paper-2', className)}>
      <div className="site-inner px-[clamp(20px,5vw,80px)] pt-[72px] pb-[64px]">
        <div
          className="grid gap-14 items-center grid-cols-2"
          style={{ gridTemplateColumns: '1.3fr 1fr' }}
        >
          <div className="col-span-2 md:col-span-1">

            <h1
              className="font-px font-bold text-ink leading-[1.15]"
              style={{ fontSize: 'clamp(34px, 5.5vw, 58px)' }}
            >
              {headline}
            </h1>

            <p className="font-sans font-medium text-ink-soft mt-[22px] max-w-[460px]" style={{ fontSize: '17px' }}>
              {body}
            </p>

            <div className="flex gap-3.5 my-8 flex-wrap">
              <a
                href={primaryCta.href}
                className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'text-white text-xs shadow-[4px_4px_0_rgba(0,0,0,0.35)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)]')}
              >
                <Play size={12} fill="currentColor" strokeWidth={0} aria-hidden /> {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                className={cn(buttonVariants({ variant: 'accent', size: 'md' }), 'bg-white text-xs shadow-[4px_4px_0_rgba(0,0,0,0.35)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)]')}
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
          </div>
        </div>
      </div>
    </section>
  )
}
