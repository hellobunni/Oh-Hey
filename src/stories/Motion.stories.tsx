import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Motion',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Data ─────────────────────────────────────────────────────────────────────

const DURATIONS = [
  { token: '--dur-1', value: '120ms', use: 'Hover lifts, link underline, color shifts.' },
  { token: '--dur-2', value: '200ms', use: 'Card state, button press, input focus.' },
  { token: '--dur-3', value: '320ms', use: 'Modal & overlay transitions.' },
  { token: '--dur-4', value: '600ms', use: 'Entrance animations (fade-up).' },
] as const

const EASINGS = [
  { token: '--ease-out', value: 'cubic-bezier(0.16, 1, 0.3, 1)', use: 'Default easing for all enter/show.' },
  { token: '--ease-in',  value: 'cubic-bezier(0.7, 0, 0.84, 0)',  use: 'Exits & hide transitions.' },
] as const

const ALL_TOKENS = [...DURATIONS, ...EASINGS]

// ─── Shared styles ────────────────────────────────────────────────────────────

const mono: React.CSSProperties = {
  fontFamily: 'font-mono',
  fontSize: '12px',
}

// ─── Token Table ──────────────────────────────────────────────────────────────

export const Tokens: Story = {
  name: 'Motion — tokens',
  render: () => (
    <div>
      <div style={{ fontFamily: 'font-mono', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft, #6b6b66)', marginBottom: '8px' }}>
        07 · Motion
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: '32px', fontWeight: 700, margin: '0 0 32px' }}>
        Quiet, fast, no bounce.
      </h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', ...mono }}>
        <thead>
          <tr style={{ background: 'var(--color-paper-2, #f4f3ee)' }}>
            {['TOKEN', 'VALUE', 'USE'].map((h) => (
              <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontWeight: 600, letterSpacing: '0.08em', fontSize: '11px', color: 'var(--color-ink-soft, #6b6b66)', borderBottom: '1px solid var(--color-line, rgba(12,12,12,0.08))' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ALL_TOKENS.map(({ token, value, use }) => (
            <tr key={token} style={{ borderBottom: '1px solid var(--color-line, rgba(12,12,12,0.08))' }}>
              <td style={{ padding: '14px 16px', color: 'var(--color-accent, #2563eb)', whiteSpace: 'nowrap' }}>{token}</td>
              <td style={{ padding: '14px 16px', color: 'var(--color-ink, #0c0c0c)', whiteSpace: 'nowrap' }}>{value}</td>
              <td style={{ padding: '14px 16px', color: 'var(--color-ink-soft, #6b6b66)' }}>{use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}

// ─── Live Preview ─────────────────────────────────────────────────────────────

export const LivePreview: Story = {
  name: 'Motion — live preview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <div style={{ fontFamily: 'font-mono', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft, #6b6b66)', marginBottom: '16px' }}>
          Duration — hover each pill
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {DURATIONS.map(({ token, value }) => (
            <DurationPill key={token} token={token} value={value} />
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontFamily: 'font-mono', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft, #6b6b66)', marginBottom: '16px' }}>
          Easing — click to animate
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <EasingDemo label="ease-out" easing="var(--ease-out, cubic-bezier(0.16,1,0.3,1))" />
          <EasingDemo label="ease-in"  easing="var(--ease-in, cubic-bezier(0.7,0,0.84,0))" />
        </div>
      </div>
    </div>
  ),
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function DurationPill({ token, value }: { token: string; value: string }) {
  return (
    <div
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '8px 14px',
        border: '1px solid var(--color-line, rgba(12,12,12,0.08))',
        borderRadius: '8px',
        fontFamily: 'font-mono', fontSize: '12px',
        background: 'var(--color-paper, #fafaf7)',
        cursor: 'default',
        transition: `background var(${token}, 200ms) var(--ease-out, cubic-bezier(0.16,1,0.3,1)),
                     box-shadow var(${token}, 200ms) var(--ease-out, cubic-bezier(0.16,1,0.3,1))`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--color-accent-soft, rgba(37,99,235,0.10))'
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--color-paper, #fafaf7)'
        el.style.boxShadow = 'none'
      }}
    >
      <span style={{ color: 'var(--color-accent, #2563eb)' }}>{token}</span>
      <span style={{ color: 'var(--color-ink-soft, #6b6b66)' }}>{value}</span>
    </div>
  )
}

function EasingDemo({ label, easing }: { label: string; easing: string }) {
  const [active, setActive] = React.useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button
        onClick={() => { setActive(false); requestAnimationFrame(() => requestAnimationFrame(() => setActive(true))) }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '7px 12px',
          border: '1px solid var(--color-line, rgba(12,12,12,0.08))',
          borderRadius: '6px', background: 'none', cursor: 'pointer',
          fontFamily: 'font-mono', fontSize: '12px',
          color: 'var(--color-accent, #2563eb)',
        }}
      >
        --{label} ▶
      </button>
      <div style={{ position: 'relative', height: '12px', width: '240px', background: 'var(--color-paper-2, #f4f3ee)', borderRadius: '6px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0,
          height: '100%', width: active ? '100%' : '0%',
          background: 'var(--color-accent, #2563eb)',
          borderRadius: '6px',
          transition: active ? `width 600ms ${easing}` : 'none',
        }} />
      </div>
    </div>
  )
}

