'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ComingSoonClient() {
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.elements.namedItem('email') as HTMLInputElement
    if (!input.value) return
    try { localStorage.setItem('oh-hey-notify', input.value) } catch {}
    setDone(true)
  }

  return (
    <>
      {/* Only keyframes stay — everything else is Tailwind */}
      <style>{`
        @keyframes cs-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 var(--color-accent-soft); }
          50%       { opacity: 0.5; box-shadow: 0 0 0 6px transparent; }
        }
        @keyframes cs-blink { 50% { opacity: 0; } }
        .cs-pulse { animation: cs-pulse 1.8s var(--ease-out) infinite; }
        .cs-blink { animation: cs-blink 1.1s steps(1) infinite; }
      `}</style>

      <div className="min-h-screen flex flex-col bg-paper text-ink antialiased font-sans tracking-normal [background-image:linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px)] [background-size:calc(100%/12)_100%]">

        {/* ── Nav ── */}
        <nav className="flex items-center justify-between px-[clamp(20px,5vw,80px)] py-[22px] border-b border-line">
          <a className="inline-flex items-center gap-2.5 font-mono font-semibold text-sm text-ink no-underline">
            <span className="w-2 h-2 bg-accent shrink-0" />
            oh-hey-lynae
          </a>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-ink-soft uppercase tracking-wide">
            <span className="cs-pulse w-[7px] h-[7px] rounded-full bg-accent shrink-0" />
            <span className="max-[540px]:hidden">Building &middot; launching soon</span>
          </div>
        </nav>

        {/* ── Main ── */}
        <main className="flex-1 grid grid-cols-[1.5fr_1fr] gap-[clamp(32px,5vw,72px)] items-center px-[clamp(20px,5vw,80px)] py-[clamp(48px,8vh,120px)] max-w-[1440px] w-full mx-auto max-[860px]:grid-cols-1">

          <div>
            {/* Eyebrow */}
            <p className="font-mono text-xs text-ink-soft mb-6 m-0">
              ~/oh-hey-lynae &middot; <span className="text-accent">status: coming soon</span> &middot; est. 2026
            </p>

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-[clamp(48px,8vw,104px)] leading-[0.92] tracking-tight m-0 mb-7">
              Something<br />good is<br />
              <span className="text-accent font-light">/</span> compiling.
            </h1>

            {/* Subtext */}
            <p className="text-[clamp(15px,1.6vw,18px)] text-ink-soft max-w-[520px] leading-normal m-0 mb-10">
              A logbook of building, lifting, drawing, and obsessing over too much plastic — by Lynae
              Thomas. Frontend craft sits next to print zines, squat PRs, and the Lego shelf. Drop your
              email and I&rsquo;ll tell you the moment it&rsquo;s live.
            </p>

            {/* Domain badges */}
            <div className="flex flex-wrap gap-2 mb-11">
              <Badge variant="tech" shape="square">
                <span className="w-[7px] h-[7px] rounded-full bg-current shrink-0" />
                Tech
              </Badge>
              <Badge variant="fitness" shape="square">
                <span className="w-[7px] h-[7px] rounded-full bg-current shrink-0" />
                Fitness
              </Badge>
              <Badge variant="creative" shape="square">
                <span className="w-[7px] h-[7px] rounded-full bg-current shrink-0" />
                Creative
              </Badge>
              <Badge variant="nerd" shape="square">
                <span className="w-[7px] h-[7px] rounded-full bg-current shrink-0" />
                Nerd Stuff
              </Badge>
            </div>

            {/* Email capture */}
            <form className="max-w-[460px]" onSubmit={handleSubmit}>
              <p className="font-mono text-[11px] text-ink-mute uppercase tracking-wide mb-2.5 m-0">
                &#9635;&nbsp;&nbsp;Get notified at launch
              </p>
              {!done ? (
                <>
                  <div className="flex border border-line-strong bg-paper">
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      className="flex-1 min-w-0 border-0 outline-none bg-transparent font-mono text-sm text-ink px-4 py-[15px] placeholder:text-ink-mute"
                    />
                    <Button type="submit" variant="default" className="rounded-none shrink-0">
                      notify me &rarr;
                    </Button>
                  </div>
                  <p className="font-mono text-[11px] text-ink-mute mt-3 tracking-[0.03em] m-0">
                    No spam, no tracking. One email when the doors open.
                  </p>
                </>
              ) : (
                <div className="font-mono text-sm text-fitness px-4 py-[15px] border border-fitness/35 bg-fitness-bg">
                  ✓ You&rsquo;re on the list. Talk soon.
                </div>
              )}
            </form>
          </div>

          {/* ── Terminal card ── */}
          <aside
            className="border border-line-strong bg-paper-2 font-mono text-[12.5px] leading-[1.85] text-ink-2 px-[22px] py-[20px] max-[860px]:order-first"
            aria-hidden="true"
          >
            <div className="flex gap-1.5 mb-3.5 pb-3 border-b border-dashed border-line">
              <span className="w-[9px] h-[9px] rounded-full bg-ink-mute opacity-50" />
              <span className="w-[9px] h-[9px] rounded-full bg-ink-mute opacity-50" />
              <span className="w-[9px] h-[9px] rounded-full bg-ink-mute opacity-50" />
            </div>
            <div className="flex gap-2.5"><span className="text-accent">$</span><span>whoami</span></div>
            <div className="flex gap-2.5"><span>lynae &mdash; dev &middot; creator &middot; generalist</span></div>
            <div className="flex gap-2.5"><span className="text-accent">$</span><span>cat status.txt</span></div>
            <div className="flex gap-2.5"><span className="text-ink-mute">// site v3.0 in progress</span></div>
            <div className="flex gap-2.5"><span className="text-ink-mute">// writing the first posts</span></div>
            <div className="flex gap-2.5"><span className="text-ink-mute">// shop opening later</span></div>
            <div className="flex gap-2.5"><span className="text-accent">$</span><span>deploy --when ready</span></div>
            <div className="flex gap-2.5"><span>queued &#x2713;</span></div>
            <div className="flex gap-2.5">
              <span className="text-accent">$</span>
              <span className="cs-blink inline-block w-2 h-[15px] bg-accent align-[-2px]" />
            </div>
          </aside>
        </main>

        {/* ── Footer ── */}
        <footer className="flex items-center justify-between px-[clamp(20px,5vw,80px)] py-6 border-t border-line font-mono text-[11px] text-ink-mute uppercase tracking-wide max-[540px]:flex-col max-[540px]:gap-3.5 max-[540px]:text-center">
          <span>&copy; 2026 Lynae Thomas</span>
          <div className="flex gap-[22px]">
            <a className="transition-colors duration-[120ms] hover:text-accent" href="#">GitHub</a>
            <a className="transition-colors duration-[120ms] hover:text-accent" href="#">Instagram</a>
            <a className="transition-colors duration-[120ms] hover:text-accent" href="#">Are.na</a>
          </div>
        </footer>
      </div>
    </>
  )
}
