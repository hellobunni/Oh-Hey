import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Molecules',
  parameters: { layout: 'padded', backgrounds: { default: 'ink' } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Shared sub-components ────────────────────────────────────────────────────

function Avatar({ size = 48, mintBorder = true }: { size?: number; mintBorder?: boolean }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #2b2a3d 0%, #3a3550 100%)',
      border: `${size > 36 ? 3 : 2}px solid ${mintBorder ? '#7ed6c0' : '#3a3550'}`,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-pixel)',
      fontSize: Math.max(9, size / 4),
      color: '#7ed6c0',
    }}>
      OHL
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a869e', marginBottom: 10, marginTop: 36 }}>
      {children}
    </div>
  )
}

function Card({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{name}</div>
      {children}
    </div>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const AllMolecules: Story = {
  name: 'Molecules — all',
  render: () => (
    <div style={{ color: '#e8e6f0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a869e', marginBottom: 8 }}>
        OHL Design System · Molecules
      </div>
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 22, color: '#7ed6c0', marginBottom: 4 }}>MOLECULES</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: '#8a869e', maxWidth: 700, lineHeight: 1.6, marginBottom: 8 }}>
        Combinations of atoms. Each molecule has a single, focused function.
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 8 }}>

        {/* Lockup */}
        <Card name="Lockup — avatar + wordmark">
          <div style={{ background: '#1d1c29', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar size={48} />
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 20, color: '#7ed6c0' }}>OHHEYLYNAE</div>
          </div>
          <div style={{ background: '#1d1c29', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar size={32} />
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: '#7ed6c0' }}>OHHEYLYNAE</div>
          </div>
        </Card>

        {/* Stat pair */}
        <Card name="Stat / label pair">
          <div style={{ background: '#1d1c29', borderRadius: 12, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 2, minWidth: 160 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 28, color: '#8fa8e8' }}>1,204</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', letterSpacing: 1, textTransform: 'uppercase' }}>FOLLOWERS</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['4.2K', 'VIEWS'], ['312', 'SUBS'], ['47', 'CLIPS']].map(([n, l]) => (
              <div key={l} style={{ background: '#1d1c29', borderRadius: 10, padding: '12px 16px', flex: 1, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 18, color: '#7ed6c0' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 10, color: '#8a869e', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </Card>

      </div>

      <SectionLabel>Alert Toast</SectionLabel>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {/* New sub toast */}
        <div style={{ background: '#1d1c29', border: '3px solid #f2a7c3', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, minWidth: 240 }}>
          <Avatar size={28} />
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#f2a7c3' }}>
            NEW SUB! <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#c9c5e0' }}>welcome, mochi</span>
          </div>
        </div>
        {/* Raid toast */}
        <div style={{ background: '#1d1c29', border: '3px solid #7ed6c0', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, minWidth: 240 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 18, color: '#7ed6c0' }}>✦</div>
          <div>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#7ed6c0' }}>INCOMING RAID</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#c9c5e0', marginTop: 2 }}>pixelwitch — 84 raiders</div>
          </div>
        </div>
      </div>

      <SectionLabel>Nav Item</SectionLabel>
      <div style={{ background: '#1d1c29', borderRadius: 10, padding: '12px 16px', display: 'inline-flex', gap: 20 }}>
        {[['Home', true], ['Videos', false], ['Schedule', false], ['About', false]].map(([label, active]) => (
          <span
            key={label as string}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 14,
              color: active ? '#7ed6c0' : '#8a869e',
              borderBottom: active ? '2px solid #7ed6c0' : '2px solid transparent',
              paddingBottom: 4,
              cursor: 'pointer',
            }}
          >
            {label as string}
          </span>
        ))}
      </div>

      <SectionLabel>Search Bar</SectionLabel>
      <div style={{ background: '#1d1c29', borderRadius: 8, padding: '0 14px', display: 'inline-flex', alignItems: 'center', gap: 10, minWidth: 280 }}>
        <span style={{ color: '#444258', fontSize: 14 }}>⌕</span>
        <input
          readOnly
          value=""
          placeholder="Search streams, clips, games…"
          style={{ flex: 1, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: '#e8e6f0', background: 'transparent', border: 'none', outline: 'none', padding: '10px 0' }}
        />
        <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#8a869e', background: '#2b2a3d', border: '1px solid #444258', padding: '2px 6px' }}>⌘ K</kbd>
      </div>
    </div>
  ),
}

export const Lockup: Story = {
  name: 'Molecules — lockup',
  parameters: { backgrounds: { default: 'ink' } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: '#e8e6f0' }}>
      <div className="font-mono text-xs uppercase tracking-widest" style={{ color: '#8a869e', marginBottom: 4 }}>Lockup — avatar + wordmark · 3 sizes</div>
      {([64, 48, 32] as const).map(size => (
        <div key={size} style={{ background: '#1d1c29', borderRadius: 12, padding: '14px 18px', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <Avatar size={size} />
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: size * 0.42, color: '#7ed6c0' }}>OHHEYLYNAE</div>
        </div>
      ))}
    </div>
  ),
}

export const StatLabel: Story = {
  name: 'Molecules — stat / label pair',
  parameters: { backgrounds: { default: 'ink' } },
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {[
        { stat: '1,204', label: 'FOLLOWERS', color: '#8fa8e8' },
        { stat: '4.2K',  label: 'VIEWS',     color: '#7ed6c0' },
        { stat: '312',   label: 'SUBS',       color: '#f2a7c3' },
        { stat: '89%',   label: 'UPTIME',     color: '#e9c46a' },
      ].map(({ stat, label, color }) => (
        <div key={label} style={{ background: '#1d1c29', borderRadius: 12, padding: '16px 20px', minWidth: 120, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 28, color }}>{stat}</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 10, color: '#8a869e', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>{label}</div>
        </div>
      ))}
    </div>
  ),
}
