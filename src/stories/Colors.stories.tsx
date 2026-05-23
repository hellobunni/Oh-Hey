import { cn } from '@/lib/utils';
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Colors',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Swatch({ token, label }: { token: string; label?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full aspect-square border border-black/10"
        style={{ background: `var(${token})` }}
      />
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', lineHeight: 1.4 }}>
        <div style={{ fontWeight: 500 }}>{token}</div>
        {label && <div style={{ color: 'var(--ink-soft, #6b6b66)', marginTop: '2px' }}>{label}</div>}
      </div>
    </div>
  )
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft, #6b6b66)', marginBottom: '16px' }}>
        {title}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '16px' }}>
        {children}
      </div>
    </div>
  )
}

// ─── Base Palette ─────────────────────────────────────────────────────────────

export const Base: Story = {
  name: 'Base — oh-hey-lynae',
  render: () => (
    <div>
      <Group title="Surface">
        <Swatch token="-paper"   label="Main bg" />
        <Swatch token="--paper-2" label="Cards / panels" />
      </Group>

      <Group title="Ink">
        <Swatch token="--ink"      label="Primary text" />
        <Swatch token="--ink-2"    label="Prose body" />
        <Swatch token="--ink-soft" label="Meta / secondary" />
        <Swatch token="--ink-mute" label="Placeholders" />
      </Group>

      <Group title="Accent">
        <Swatch token="--accent"      label="Brand blue" />
        <Swatch token="--accent-soft" label="Tinted bg" />
      </Group>

      <Group title="Lines">
        <Swatch token="--hairline"    label="Hairline" />
        <Swatch token="--line"        label="Default border" />
        <Swatch token="--line-strong" label="Emphasis border" />
      </Group>
    </div>
  ),
}

// ─── Domain Colors ────────────────────────────────────────────────────────────

export const Domain: Story = {
  name: 'Domain — category colors',
  render: () => (
    <div>
      <Group title="Foreground">
        <Swatch token="--c-tech"     label="Tech" />
        <Swatch token="--c-fitness"  label="Fitness" />
        <Swatch token="--c-creative" label="Creative" />
        <Swatch token="--c-nerd"     label="Nerd" />
      </Group>

      <Group title="Background tints">
        <Swatch token="--c-tech-bg"     label="Tech bg" />
        <Swatch token="--c-fitness-bg"  label="Fitness bg" />
        <Swatch token="--c-creative-bg" label="Creative bg" />
        <Swatch token="--c-nerd-bg"     label="Nerd bg" />
      </Group>
    </div>
  ),
}

// ─── Lunar Vega A ─────────────────────────────────────────────────────────────

export const LunarVegaA: Story = {
  name: 'Lunar Vega — Direction A',
  decorators: [
    (Story) => (
      <div className="lv-a" style={{ padding: '32px', background: 'var(--paper)' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div>
      <Group title="Surface">
        <Swatch token="--paper"   label="Navy bg" />
        <Swatch token="--paper-2" label="Deep panel" />
      </Group>

      <Group title="Ink">
        <Swatch token="--ink"      label="Primary text" />
        <Swatch token="--ink-2"    label="Prose body" />
        <Swatch token="--ink-soft" label="Meta" />
        <Swatch token="--ink-mute" label="Muted" />
      </Group>

      <Group title="Accent">
        <Swatch token="--accent"      label="Electric blue" />
        <Swatch token="--accent-soft" label="Tinted bg" />
      </Group>

      <Group title="Lines">
        <Swatch token="--hairline"    label="Hairline" />
        <Swatch token="--line"        label="Default border" />
        <Swatch token="--line-strong" label="Emphasis border" />
      </Group>
    </div>
  ),
}

// ─── Lunar Vega B ─────────────────────────────────────────────────────────────

export const LunarVegaB: Story = {
  name: 'Lunar Vega — Direction B',
  decorators: [
    (Story) => (
      <div className="lv-b" style={{ padding: '32px', background: 'var(--paper)' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div>
      <Group title="Surface">
        <Swatch token="--paper"   label="Black bg" />
        <Swatch token="--paper-2" label="Deep panel" />
      </Group>

      <Group title="Ink">
        <Swatch token="--ink"      label="Primary text" />
        <Swatch token="--ink-2"    label="Prose body" />
        <Swatch token="--ink-soft" label="Meta" />
        <Swatch token="--ink-mute" label="Muted" />
      </Group>

      <Group title="Accent">
        <Swatch token="--accent"      label="Cyan" />
        <Swatch token="--accent-soft" label="Tinted bg" />
      </Group>

      <Group title="Lines">
        <Swatch token="--hairline"    label="Hairline" />
        <Swatch token="--line"        label="Default border" />
        <Swatch token="--line-strong" label="Emphasis border" />
      </Group>
    </div>
  ),
}
