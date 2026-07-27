import { CHANNELS } from '@/data/contact.data'

export function DirectChannels() {
  return (
    <div className="border-r border-line px-[clamp(20px,5vw,80px)] py-16 max-md:border-b max-md:border-r-0">
      <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        — Direct
      </div>
      <div className="flex flex-col">
        {CHANNELS.map((c) => {
          const inner = (
            <>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">{c.k}</span>
                <span className="font-sans text-lg font-semibold tracking-tight text-ink">{c.v}</span>
              </div>
              {c.ext && <span className="font-mono text-accent">↗</span>}
            </>
          )
          return c.href ? (
            <a key={c.k} href={c.href}
              className="flex items-center justify-between border-b border-line py-5 transition-[padding] hover:pl-3 first:border-t">
              {inner}
            </a>
          ) : (
            <div key={c.k} className="flex items-center justify-between border-b border-line py-5 first:border-t">
              {inner}
            </div>
          )
        })}
      </div>
    </div>
  )
}
