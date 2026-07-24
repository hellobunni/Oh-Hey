import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@/components/ui/avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered', backgrounds: { default: 'ink' } },
  argTypes: {
    ring: { control: 'select', options: ['primary', 'accent', 'none'] },
    size: { control: { type: 'range', min: 24, max: 128, step: 4 } },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// ─── Controls story ────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { size: 64, ring: 'primary' },
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export const Showcase: Story = {
  name: 'Avatar — showcase',
  render: () => (
    <div style={{ color: '#e8e6f0' }}>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">
        Atoms · Avatar
      </div>
      <h2 className="font-pixel text-2xl text-primary mb-1">AVATAR</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Circular avatar with an optional ring. Ring color communicates status — <code className="font-mono text-xs text-accent">primary</code> for live/active, <code className="font-mono text-xs text-accent">accent</code> for alerts, <code className="font-mono text-xs text-accent">none</code> for neutral.
      </p>

      {/* Sizes */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Sizes</div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end', padding: 20, background: '#1d1c29', borderRadius: 10, marginBottom: 24 }}>
        {([24, 32, 44, 64, 96] as const).map(size => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar size={size} ring="primary" />
            <span className="font-mono text-ink-soft" style={{ fontSize: 10 }}>{size}px</span>
          </div>
        ))}
      </div>

      {/* Ring variants */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Ring variants</div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', padding: 20, background: '#1d1c29', borderRadius: 10, marginBottom: 24 }}>
        {(['primary', 'accent', 'none'] as const).map(ring => (
          <div key={ring} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar size={64} ring={ring} />
            <span className="font-mono text-ink-soft" style={{ fontSize: 10 }}>{ring}</span>
          </div>
        ))}
      </div>

      {/* With image src */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">With image</div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end', padding: 20, background: '#1d1c29', borderRadius: 10, marginBottom: 24 }}>
        {([32, 44, 64] as const).map(size => (
          <Avatar
            key={size}
            size={size}
            ring="primary"
            src="https://i.pravatar.cc/150?img=47"
          />
        ))}
      </div>

      {/* Usage notes */}
      <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="font-mono text-xs text-ink-soft"><span className="text-primary">primary ring</span> — Active / live state. 3px mint border.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-accent">accent ring</span> — Alert / notification state. 3px pink border.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-ink-soft">none</span> — No ring. Neutral / offline context.</div>
        <div className="font-mono text-xs text-ink-soft">Background position: 50% 39% · size: 340% — optimized for face portraits.</div>
      </div>
    </div>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Avatar — sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
      {([24, 32, 44, 64, 96] as const).map(size => (
        <Avatar key={size} size={size} ring="primary" />
      ))}
    </div>
  ),
}

// ─── Rings ────────────────────────────────────────────────────────────────────

export const Rings: Story = {
  name: 'Avatar — ring variants',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['primary', 'accent', 'none'] as const).map(ring => (
        <div key={ring} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <Avatar size={64} ring={ring} />
          <span className="font-mono text-xs text-ink-soft">{ring}</span>
        </div>
      ))}
    </div>
  ),
}
