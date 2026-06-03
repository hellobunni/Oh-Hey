import type { Metadata } from 'next'
import { WorkspaceTools } from '@/components/kodara/WorkspaceTools'
import { TicketForm } from '@/components/kodara/TicketForm'


export const metadata: Metadata = {
  title: 'Client Workspace — Kodara',
  description: 'Submit a request, book time, or grab your files.',
  robots: { index: false, follow: false },
}

export default function ClientWorkspacePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line px-[clamp(20px,5vw,80px)] py-16">
        <div className="mb-8 inline-flex items-center gap-2 border border-line-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          <span>⬡</span> For active clients
        </div>
        <h1 className="text-[clamp(44px,5.5vw,80px)] font-extrabold leading-[0.96] tracking-tight text-ink">
          Client <span className="text-accent">Workspace.</span>
        </h1>
        <p className="mt-6 max-w-[520px] text-base leading-relaxed text-ink-soft">
          Everything you need while we're working together — submit a new request, book time, or
          grab your files.
        </p>
      </section>

      <WorkspaceTools />
      <TicketForm />
    </div>
  )
}
