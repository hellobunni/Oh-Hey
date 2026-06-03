const TALLY_URL = 'https://tally.so/r/Xx250e'

export function TicketForm() {
  return (
    <section className="px-[clamp(20px,5vw,80px)] py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Submit a request
          </div>
          <h2 className="mt-3 text-[clamp(28px,3vw,40px)] font-bold leading-tight tracking-tight text-ink">
            New work ticket.
          </h2>
        </div>
        <p className="max-w-[240px] font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute max-md:max-w-none">
          Tracked &amp; triaged within one business day
        </p>
      </div>

      <a
        href={TALLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-stretch justify-between border border-line-strong bg-paper transition-colors hover:border-accent hover:bg-accent-soft max-md:flex-col"
      >
        <div className="p-11 max-md:p-8">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            ▸ Work request form
          </div>
          <div className="text-[clamp(28px,3.2vw,44px)] font-bold leading-none tracking-tight text-ink">
            Open the ticket form
          </div>
          <p className="mt-3.5 max-w-[440px] text-[15px] leading-snug text-ink-soft">
            Scope, priority, deadline, and any files — takes about two minutes.
          </p>
        </div>

        <div className="flex min-w-[180px] flex-col items-center justify-center gap-3 border-l border-line bg-paper p-10 transition-colors group-hover:bg-accent-soft max-md:min-w-0 max-md:flex-row max-md:justify-between max-md:border-l-0 max-md:border-t max-md:p-6">
          <span className="font-mono text-[32px] text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">
            tally.so
          </span>
        </div>
      </a>
    </section>
  )
}
