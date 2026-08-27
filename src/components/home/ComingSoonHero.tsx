import { cn } from '@/lib/utils'

const DOMAIN_PILLS = [
  { label: 'THE TECH LAB', color: 'bg-mint/20 text-mint' },
  { label: 'FITNESS + IRL', color: 'bg-pink/20 text-pink' },
  { label: 'CREATIVE', color: 'bg-peri/20 text-peri' },
  { label: 'NERD STUFF', color: 'bg-yellow-400/20 text-yellow-600 dark:text-yellow-400' },
]

export default function ComingSoonHero() {
  return (
    <section className="border-b-2 border-paper-2">
      <div className="site-inner px-[clamp(20px,5vw,80px)] pt-[60px] pb-[64px]">
        <p className="font-mono text-[10px] tracking-widest text-ink-soft/50 uppercase mb-8">
          Blog / Home / oh hey there lynae
        </p>

        <div
          className="grid gap-14 items-center"
          style={{ gridTemplateColumns: '1.3fr 1fr' }}
        >
          <div>
            <h1
              className="font-px font-bold text-ink leading-[1.1]"
              style={{ fontSize: 'clamp(36px, 5.5vw, 62px)' }}
            >
              OH HEY!
              <br />
              THE SITE&apos;S
              <br />
              <span className="text-mint">STILL</span>
              <br />
              <span className="text-mint">LOADING.</span>
            </h1>

            <p className="font-sans font-medium text-ink-soft mt-6 max-w-[440px]" style={{ fontSize: '17px' }}>
              Two videos are up, the rest is being built in public. Follow along on{' '}
              <a
                href="https://www.youtube.com/@ohheylynae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2 hover:text-mint transition-colors"
              >
                YouTube
              </a>
              , or drop your email and I&apos;ll ping you the second the full site goes live.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {DOMAIN_PILLS.map((d) => (
                <span
                  key={d.label}
                  className={cn(
                    'font-px text-[9px] tracking-widest px-3 py-1.5 opacity-60',
                    d.color,
                  )}
                >
                  {d.label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative justify-self-center max-md:order-first">
            <img
              src="/avatar-bust.png"
              alt="ohheylynae mascot"
              style={{
                width: 'min(300px, 65vw)',
                display: 'block',
                border: '3px solid var(--color-mint)',
                boxShadow: '8px 8px 0 rgba(0,0,0,0.4)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
