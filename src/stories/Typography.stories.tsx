import { cn } from '@/lib/utils'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Typography',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Font Families ──────────────────────────────────────────────────────────

export const Families: Story = {
  name: 'Font Families',
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <div className="font-mono uppercase mb-3 text-xs tracking-wide text-gray-500">--font-sans</div>
        <div className="font-sans text-4xl font-bold tracking-tight leading-tight">Geist</div>
        <p className="font-mono mt-3 text-sm text-gray-500">Workhorse sans. 300–900. Used for everything except metadata and editorial italics.</p>
      </div>
      <div>
        <div className="font-mono uppercase mb-3 text-xs" style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--ink-soft)'}}>--font-mono</div>
        <div className="font-mono text-4xl font-medium tracking-tight leading-tight">Geist Mono</div>
        <p className="mt-3 font-mono text-sm text-gray-500">Metadata, labels, eyebrows, technical context. Brings the "engineered" signal.</p>
      </div>
      <div>
        <div className="font-mono uppercase text-xs tracking-wide text-gray-500">--font-serif</div>
        <div className="font-serif italic text-3xl font-light tracking-tight leading-tight">Fraunces</div>
        <p className="mt-3 font-mono text-sm" style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}>Italic-only. Used for editorial accents inside sans headlines — never as body or solo display.</p>
      </div>
    </div>
  ),
}

// ─── Type Scale ──────────────────────────────────────────────────────────────

const scaleSteps = [
  { token: '--text-xs',    px: '11px',  sample: 'EYEBROWS · LABELS · METADATA', classes: 'font-mono text-xs uppercase tracking-wide' },
  { token: '--text-sm',    px: '13px',  sample: 'Secondary text · monospace dates · captions',  classes: 'font-mono text-sm' },
  { token: '--text-body',  px: '15px',  sample: 'Body copy at the default density.',                  classes: "text-body"},
  { token: '--text-md',    px: '18px',  sample: 'Lead paragraphs and list items in editorial layouts.', classes: "text-md" },
  { token: '--text-lg',    px: '22px',  sample: 'Sub-headlines and card titles.',  classes: "text-lg font-semibold" },
  { token: '--text-xl',    px: '28px',  sample: 'Section headings (h3).',  classes: "text-xl font-bold tracking-snug" },
  { token: '--text-2xl',   px: '36px',  sample: 'Secondary display (h2).',  classes: "text-2xl font-bold tracking-snug" },
  { token: '--text-3xl',   px: '48px',  sample: 'Primary display.', classes: "text-3xl font-bold tracking-snug leading-snug" },
  { token: '--text-4xl',   px: '64px',  sample: 'Page heading.', classes: "text-4xl font-bold tracking-tight leading-tight" },
  { token: '--text-5xl',   px: '96px',  sample: 'Hero.',    classes: "text-5xl font-bold tracking-tight leading-tight" },
  { token: '--text-6xl',   px: '144px', sample: 'Broadsheet.',    classes: "text-6xl font-bold tracking-tight leading-tight" },
]

export const TypeScale: Story = {
  name: 'Type Scale',
  render: () => (
    <div>
      <div className="font-mono uppercase mb-6 tracking-wide text-xs text-gray-500">
        Scale ratio ≈ 1.20 · Anchor: 15px body
      </div>
      <div className="flex flex-col">
        {scaleSteps.map(({ token, px, sample, classes }) => (
          <div key={token} className="grid grid-cols-[100px_52px_1fr] items-baseline gap-4 py-3 border-b border-gray-200">
            <div className="font-mono text-xs text-gray-500">{token}</div>
            <div className="font-mono text-xs text-gray-500">{px}</div>
            <div className={cn( classes)}>{sample}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ─── Editorial Pairing ───────────────────────────────────────────────────────

export const EditorialPairing: Story = {
  name: 'Editorial Pairing',
  render: () => (
    <div>
      <div style={{ fontSize: '64px', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1 }}>
        A little bit of{' '}
        <em style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}>everything</em>
        , loudly.
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', marginTop: '24px' }}>
        Sans + italic-serif fragment · use sparingly — one emphasis word per headline
      </div>
    </div>
  ),
}
