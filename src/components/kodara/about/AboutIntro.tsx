import Image from 'next/image'

export function AboutIntro() {
  return (
    <section className="grid grid-cols-[1.4fr_1fr] gap-16 border-b border-line px-[clamp(20px,5vw,80px)] py-20 max-lg:grid-cols-1 max-lg:gap-10">
      <div>
        <div className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          — The short version
        </div>
        <p className="font-sans text-xl font-light leading-[1.35] tracking-tight text-ink max-[640px]:text-[22px]">
          I'm <span className="font-semibold">Bryanna Lynae</span> — a designer who learned to
          engineer, running a one-person practice that does the work agencies need three teams for.{' '}
          <span className="text-accent">Twelve years</span>, both sides of the table, now
          accelerated by AI.
        </p>
      </div>

      {/* portrait slot — swap for real <img> when available */}
      <div className="relative flex aspect-4/5 items-end border border-line-strong bg-kodara-accent-soft-solid p-6">
        <span className="absolute left-4 top-4 font-mono text-xxs uppercase tracking-[0.18em] text-ink-mute">
          FOUNDER
        </span>
        <div className="absolute z-50 bg-kodara-accent-soft-solid p-4 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          Bryanna Lynae<br />
          <span className="text-ink-soft">Founder & Principal</span>
        </div>
        <Image src="/images/headshot.png" alt="Bryanna Lynae" className='w-full h-full object-cover' fill />
      </div>
    </section>
  )
}
