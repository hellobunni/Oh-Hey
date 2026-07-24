import React from 'react'
import { cn } from '@/lib/utils'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Typography',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Font Families ────────────────────────────────────────────────────────────

export const Families: Story = {
  name: 'Type — font families',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">02 · Foundations — Typography</div>
      <h2 className="font-pixel text-2xl text-primary mb-8">FONT FAMILIES</h2>
      <div className="grid grid-cols-1 gap-8" style={{ maxWidth: 860 }}>

        {/* Silkscreen */}
        <div style={{ borderBottom: '1px solid var(--color-line)', paddingBottom: 24 }}>
          <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">--font-pixel · Silkscreen</div>
          <div className="font-pixel mb-3" style={{ fontSize: 56, color: 'var(--color-primary)', lineHeight: 1.1 }}>OHHEYLYNAE</div>
          <div className="font-pixel text-ink-soft mb-3" style={{ fontSize: 18 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789</div>
          <div className="flex gap-3 flex-wrap">
            <span className="font-mono text-xs text-ink-soft px-2 py-1 border border-line">Display · headlines · wordmarks</span>
            <span className="font-mono text-xs text-accent px-2 py-1 border border-line">Max 5 words · never body copy</span>
          </div>
        </div>

        {/* Quicksand */}
        <div style={{ borderBottom: '1px solid var(--color-line)', paddingBottom: 24 }}>
          <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">--font-sans · Quicksand</div>
          <div className="font-sans mb-3" style={{ fontSize: 48, fontWeight: 700, color: 'var(--color-link)', lineHeight: 1.15 }}>The quick bunny jumps</div>
          <div className="font-sans mb-2" style={{ fontSize: 16, fontWeight: 500 }}>Weight 500 — body copy and descriptions</div>
          <div className="font-sans mb-2" style={{ fontSize: 16, fontWeight: 600 }}>Weight 600 — UI labels and subtext</div>
          <div className="font-sans mb-3" style={{ fontSize: 16, fontWeight: 700 }}>Weight 700 — bold, badges, buttons</div>
          <div className="flex gap-3 flex-wrap">
            <span className="font-mono text-xs text-ink-soft px-2 py-1 border border-line">Body · descriptions · UI labels</span>
            <span className="font-mono text-xs text-primary px-2 py-1 border border-line">Weights: 500 / 600 / 700</span>
          </div>
        </div>

        {/* Geist Mono */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">--font-mono · Geist Mono</div>
          <div className="font-mono mb-3" style={{ fontSize: 32, color: 'var(--color-ink-soft)', lineHeight: 1.2 }}>EYEBROW · LABEL · DATE · TAG</div>
          <div className="font-mono mb-3 text-sm">Metadata, labels, eyebrows, tokens, technical context — the "engineered" signal</div>
          <div className="flex gap-3 flex-wrap">
            <span className="font-mono text-xs text-ink-soft px-2 py-1 border border-line">Metadata · dates · code · tags</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

// ─── Type Scale ───────────────────────────────────────────────────────────────

const DISPLAY_SCALE = [
  { label: 'H1',    px: '64px',  cls: 'font-pixel', sample: 'OhHeyLynae',          color: 'var(--color-primary)' },
  { label: 'H2',    px: '40px',  cls: 'font-pixel', sample: 'Stream Schedule',      color: 'var(--color-primary)' },
  { label: 'H3',    px: '24px',  cls: 'font-pixel', sample: 'Episode 12',           color: 'var(--color-accent)' },
]

const TEXT_SCALE = [
  { label: 'Body',    px: '16px', w: 600,  sample: 'Quicksand at 16 — the quick brown fox jumps over the lazy dog.' },
  { label: 'Small',   px: '12px', w: 600,  sample: 'Caption / label text — metadata and secondary info.' },
  { label: 'Mono XS', px: '11px', w: 400,  sample: 'EYEBROW · LABEL · APR 7, 2026', mono: true },
]

export const TypeScale: Story = {
  name: 'Type — scale',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">Type scale</div>

      {/* Display / Silkscreen */}
      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3 mt-6">Display — Silkscreen</div>
      <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-line)' }}>
        {DISPLAY_SCALE.map(({ label, px, sample, color }) => (
          <div key={label} className="grid items-baseline gap-4 py-4" style={{ gridTemplateColumns: '60px 40px 1fr', borderBottom: '1px solid var(--color-line)' }}>
            <div className="font-mono text-xs text-ink-soft">{label}</div>
            <div className="font-mono text-xs text-ink-mute">{px}</div>
            <div className="font-pixel" style={{ fontSize: px, color, lineHeight: 1.1 }}>{sample}</div>
          </div>
        ))}
      </div>

      {/* Text / Quicksand */}
      <div className="font-mono text-xs uppercase tracking-widest text-link mb-3 mt-8">Text — Quicksand</div>
      <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-line)' }}>
        {TEXT_SCALE.map(({ label, px, w, sample, mono }) => (
          <div key={label} className="grid items-baseline gap-4 py-4" style={{ gridTemplateColumns: '60px 40px 1fr', borderBottom: '1px solid var(--color-line)' }}>
            <div className="font-mono text-xs text-ink-soft">{label}</div>
            <div className="font-mono text-xs text-ink-mute">{px}</div>
            <div style={{ fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: px, fontWeight: w, lineHeight: 1.5 }}>
              {sample}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ─── Usage Pairings ───────────────────────────────────────────────────────────

export const UsagePairings: Story = {
  name: 'Type — pairings in context',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>

      {/* Dark card — streaming context */}
      <div style={{ background: '#1d1c29', padding: 28, borderRadius: 14, minWidth: 300, flex: 1 }}>
        <div className="font-mono text-xs text-ink-soft mb-3 uppercase tracking-widest">Streaming / dark context</div>
        <div className="font-pixel text-primary" style={{ fontSize: 22, marginBottom: 8 }}>OHHEYLYNAE</div>
        <div className="font-sans" style={{ fontSize: 13, fontWeight: 600, color: '#8a869e', marginBottom: 16 }}>cozy games &amp; chaos</div>
        <div className="font-pixel text-link" style={{ fontSize: 14, marginBottom: 8 }}>SCHEDULE</div>
        <div className="font-sans" style={{ fontSize: 13, fontWeight: 600, color: '#e8e6f0', marginBottom: 4 }}>Tues 7pm — Variety</div>
        <div className="font-sans" style={{ fontSize: 13, fontWeight: 600, color: '#e8e6f0', marginBottom: 4 }}>Thurs 7pm — Art</div>
        <div className="font-sans" style={{ fontSize: 13, fontWeight: 600, color: '#e8e6f0' }}>Sun 3pm — Chill</div>
      </div>

      {/* Light card — blog/post context */}
      <div style={{ background: '#f6f3ec', padding: 28, borderRadius: 14, minWidth: 300, flex: 1, border: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="font-mono text-xs text-ink-soft mb-3 uppercase tracking-widest">Blog / light context</div>
        <div className="font-pixel" style={{ fontSize: 16, color: '#3a3550', marginBottom: 4 }}>DEV LOG #4</div>
        <div className="font-mono text-xs text-ink-mute mb-4">Jul 21 · 5 min read</div>
        <div className="font-sans" style={{ fontSize: 14, fontWeight: 500, color: '#3a3550', lineHeight: 1.7, marginBottom: 16 }}>
          Body copy runs in Quicksand — readable at length while the pixel headline stays reserved for moments that need punch.
        </div>
        <button className="font-pixel text-xs" style={{ color: '#f6f3ec', background: '#3a3550', border: 'none', padding: '10px 18px', cursor: 'pointer' }}>
          READ MORE
        </button>
      </div>

    </div>
  ),
}
