import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundation/Spacing & Radius',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Data ─────────────────────────────────────────────────────────────────────

const SPACING = [
  { value: 4,  label: '4px',  note: 'Gap within components — icon + label, dot + text' },
  { value: 8,  label: '8px',  note: 'Tight spacing — badge row, chip cluster' },
  { value: 16, label: '16px', note: 'Base grid unit — card padding, section gap' },
  { value: 24, label: '24px', note: 'Component padding — card interior, form spacing' },
  { value: 32, label: '32px', note: 'Section gap — between groups on a page' },
  { value: 48, label: '48px', note: 'Page-level — between major sections' },
] as const

const RADII = [
  { value: 0,    label: '0',     note: 'Pixel / sharp — buttons, chips, toasts, inputs' },
  { value: 8,    label: '8px',   note: 'Small surface — input control, small card' },
  { value: 10,   label: '10px',  note: 'Medium container' },
  { value: 14,   label: '14px',  note: 'Card — standard DS card radius' },
  { value: 16,   label: '16px',  note: 'Large card — blog post, template containers' },
  { value: 9999, label: 'full',  note: 'Pill — status badges, avatar' },
] as const

// ─── Stories ──────────────────────────────────────────────────────────────────

export const SpacingScale: Story = {
  name: 'Spacing — scale',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">03 · Foundations — Spacing</div>
      <h2 className="font-pixel text-2xl text-primary mb-1">SPACING SCALE</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Based on a 4px grid. Use multiples of 4 for all spatial decisions. 16px is the base unit for most layout gaps and card padding.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid var(--color-line)' }}>
        {SPACING.map(({ value, label, note }) => (
          <div key={value} style={{ display: 'grid', gridTemplateColumns: '48px 56px 1fr', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--color-line)' }}>
            <div className="font-mono text-xs text-ink-mute">{label}</div>
            <div style={{ height: value, width: value, background: 'var(--color-primary)', flexShrink: 0 }} />
            <div className="font-sans text-sm text-ink-soft">{note}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const BorderRadius: Story = {
  name: 'Spacing — border radius',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">03 · Foundations — Border Radius</div>
      <h2 className="font-pixel text-2xl text-accent mb-1">BORDER RADIUS</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Pixel UI elements (buttons, chips, toasts, inputs) use <strong>0</strong> radius. Surface containers use 8–16px. Avatars and status pills use full/pill.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end' }}>
        {RADII.map(({ value, label, note }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <div style={{
              width: 72,
              height: 72,
              background: 'var(--color-card)',
              borderRadius: value,
              border: '2px solid var(--color-primary)',
            }} />
            <div className="font-pixel text-xs text-primary text-center">{label}</div>
            <div className="font-sans text-ink-soft text-center" style={{ fontSize: 11, maxWidth: 88 }}>{note}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, borderTop: '1px solid var(--color-line)', paddingTop: 20 }}>
        <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-4">In practice</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Sharp button */}
          <button style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: '#1d1c29', background: 'var(--color-primary)', border: 'none', padding: '10px 20px', borderRadius: 0, cursor: 'pointer' }}>
            SHARP BUTTON
          </button>
          {/* Rounded input */}
          <input
            readOnly
            value="Input — 8px radius"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--color-ink)', background: 'var(--color-paper-2)', border: '2px solid var(--color-line-strong)', borderRadius: 8, padding: '10px 14px' }}
          />
          {/* Card preview */}
          <div style={{ background: 'var(--color-card)', borderRadius: 14, padding: '10px 16px', fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--color-link)' }}>
            CARD — 14px
          </div>
          {/* Pill badge */}
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, color: '#1d1c29', background: 'var(--color-primary)', borderRadius: 9999, padding: '5px 14px' }}>
            PILL BADGE
          </span>
        </div>
      </div>
    </div>
  ),
}
