export function LeadCapture() {
  return (
    <section className="grid grid-cols-2 items-center gap-12 border-t border-line bg-kodara-accent-soft-solid px-[clamp(20px,5vw,80px)] py-16 max-[640px]:grid-cols-1 max-[640px]:gap-7">
      <div>
        <h3 className="font-sans text-4xl font-bold leading-tight tracking-tight text-ink">
          Not sure where <span className="text-accent">you fit?</span>
        </h3>
        <p className="mt-3.5 max-w-[420px] text-body text-ink-2">
          Drop your email and one line about your project — I'll reply with a recommendation,
          or honestly tell you who'd be a better fit.
        </p>
      </div>

      <div>
        <form className="flex border border-line-strong bg-paper max-[640px]:flex-col">
          <input
            type="email"
            className="flex-1 bg-white px-4 py-4 font-mono text-xs text-ink outline-none placeholder:text-ink-mute"
            placeholder="your@email.com — one-liner about the project"
          />
          <button
            type="submit"
            className="bg-accent px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-paper max-[640px]:py-3.5"
          >
            SEND →
          </button>
        </form>
        <div className="mt-3 font-mono text-xxs uppercase tracking-[0.14em] text-ink-soft">
          <span className="text-accent">●</span>{' '}
          AVG. RESPONSE: <span className="text-accent">UNDER 48 HOURS</span> · NO NEWSLETTER · NO SALES SEQUENCE
        </div>
      </div>
    </section>
  )
}
