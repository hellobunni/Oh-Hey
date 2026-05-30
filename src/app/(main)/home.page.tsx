"use client"
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.elements.namedItem('email') as HTMLInputElement
    if (!input.value) return
    try { localStorage.setItem('oh-hey-notify', input.value) } catch {}
    setDone(true)
  }

  const lastUpdated = "Apr 2025"
  const Eyebrow = ({ lastUpdated }: { lastUpdated: string }) => {
    return (
      <p className="font-mono text-xs text-ink-soft mb-6 m-0">
        ~/oh-hey-lynae &middot; idx 026 &middot; updated {lastUpdated}
      </p>
    )
  }

  return (
    <>



        {/* ── Main ── */}
        <main className="flex-1 grid grid-cols-[1.5fr_1fr] gap-[clamp(32px,5vw,72px)] items-center px-[clamp(20px,5vw,80px)] py-[clamp(48px,8vh,120px)] max-w-[1440px] w-full mx-auto max-[860px]:grid-cols-1">

          <div>
            {/* Eyebrow */}
            <Eyebrow lastUpdated={lastUpdated} />

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-[clamp(48px,8vw,104px)] leading-[0.92] tracking-tight m-0 mb-7">
              Notes from a curious<br />
              <span className="text-accent font-light">/</span> generalist.
            </h1>

            {/* Subtext */}
            <p className="text-[clamp(15px,1.6vw,18px)] text-ink-soft max-w-[520px] leading-normal m-0 mb-10">
            A logbook of things I'm building, lifting, drawing, and obsessing over. Frontend craft sits next to print zines, squat PRs, and Lego shelves. Nothing here pretends to be siloed.
            </p>
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
            <div className="flex gap-2.5"><span className="text-accent">$</span><span>cat about.txt</span></div>
            <div className="flex gap-2.5"><span className="text-ink-mute leading-4">// I write code, ship sites,</span></div>
            <div className="flex gap-2.5"><span className="text-ink-mute leading-4">// pull heavy, draw weird,</span></div>
            <div className="flex gap-2.5"><span className="text-ink-mute leading-5">// and collect too much plastic.</span></div>
            <div className="flex gap-2.5"><span className="text-accent">$</span><span>ls -l ./domains</span></div>
            <div className="max-w-[175px] w-full gap-0">
            <div className="flex gap-2.5"><span className="w-1/2">tech</span><span className="w-1/2">coming soon</span></div>
            <div className="flex gap-2.5"><span className="w-1/2">fitness</span><span className="w-1/2">coming soon</span></div>
            <div className="flex gap-2.5"><span className=" w-1/2">creative</span><span className="w-1/2">coming soon</span></div>
            <div className="flex gap-2.5"><span className="text-accent">$</span><span>_</span></div>
            </div>
          </aside>
        </main>

    </>
  )
}

  

