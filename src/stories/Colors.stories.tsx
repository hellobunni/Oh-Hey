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
      <div style={{ fontFamily: 'font-mono', fontSize: '11px', lineHeight: 1.4 }}>
        <div style={{ fontWeight: 500 }}>{token}</div>
        {label && <div style={{ color: 'var(--ink-soft, #6b6b66)', marginTop: '2px' }}>{label}</div>}
      </div>
    </div>
  )
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ fontFamily: 'font-mono', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft, #6b6b66)', marginBottom: '16px' }}>
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
        <Swatch token="--color-paper"   label="Main bg" />
        <Swatch token="--color-paper-2" label="Cards / panels" />
      </Group>

      <Group title="Ink">
        <Swatch token="--color-ink"      label="Primary text" />
        <Swatch token="--color-ink-2"    label="Prose body" />
        <Swatch token="--color-ink-soft" label="Meta / secondary" />
        <Swatch token="--color-ink-mute" label="Placeholders" />
      </Group>

      <Group title="Accent">
        <Swatch token="--color-accent"      label="Brand blue" />
        <Swatch token="--color-accent-soft" label="Tinted bg" />
      </Group>

      <Group title="Lines">
        <Swatch token="--color-hairline"    label="Hairline" />
        <Swatch token="--color-line"        label="Default border" />
        <Swatch token="--color-line-strong" label="Emphasis border" />
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
        <Swatch token="--color-tech"     label="Tech" />
        <Swatch token="--color-fitness"  label="Fitness" />
        <Swatch token="--color-creative" label="Creative" />
        <Swatch token="--color-nerd"     label="Nerd" />
      </Group>

      <Group title="Background tints">
        <Swatch token="--color-tech-bg"     label="Tech bg" />
        <Swatch token="--color-fitness-bg"  label="Fitness bg" />
        <Swatch token="--color-creative-bg" label="Creative bg" />
        <Swatch token="--color-nerd-bg"     label="Nerd bg" />
      </Group>
    </div>
  ),
}


// ─── Domain Palette Variants ──────────────────────────────────────────────────

const DOMAINS = ['Tech', 'Fitness', 'Creative', 'Nerd'] as const

const PALETTES = [
  { name: 'Spectrum (default)', cls: 'palette-spectrum', colors: ['#2563eb', '#059669', '#ea580c', '#7c3aed'] },
  { name: 'Monochrome',         cls: 'palette-mono',     colors: ['#0c0c0c', '#0c0c0c', '#0c0c0c', '#0c0c0c'] },
  { name: 'Warm earth',         cls: 'palette-warm',     colors: ['#b45309', '#15803d', '#be185d', '#7c2d12'] },
  { name: 'Electric',           cls: 'palette-electric', colors: ['#06b6d4', '#84cc16', '#f43f5e', '#a855f7'] },
] as const

export const DomainPaletteVariants: Story = {
  name: 'Domain — palette variants',
  render: () => (
    <div>
      <h3 className="ds-h3" style={{ marginBottom: '8px' }}>Domain palette variants</h3>
      <div className="comp-meta" style={{ marginBottom: '24px', fontFamily: 'font-mono', fontSize: '12px', color: 'var(--color-ink-soft)' }}>
        Swap class on root:{' '}
        <code style={{ color: 'var(--color-accent)' }}>
          .palette-&#123;spectrum | mono | warm | electric&#125;
        </code>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {PALETTES.map((palette) => (
          <div key={palette.cls} className={palette.cls}>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid var(--color-line, #e2e2dc)',
              borderRadius: '6px', padding: '3px 10px',
              fontFamily: 'font-mono', fontSize: '11px',
              marginBottom: '12px',
            }}>
              <strong>{palette.name}</strong>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {DOMAINS.map((domain, i) => (
                <span key={domain} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  border: '1px solid var(--color-line, #e2e2dc)',
                  borderRadius: '6px', padding: '3px 10px',
                  fontFamily: 'font-mono', fontSize: '11px',
                }}>
                  <span style={{
                    display: 'inline-block', width: '12px', height: '12px',
                    borderRadius: '2px', background: palette.colors[i], flexShrink: 0,
                  }} />
                  {domain}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

