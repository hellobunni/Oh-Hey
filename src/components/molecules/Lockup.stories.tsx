import type { Meta, StoryObj } from '@storybook/react-vite'
import { Lockup } from '@/components/molecules/Lockup'

const meta = {
  title: 'Molecules/Lockup',
  component: Lockup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 24, max: 96, step: 4 } },
    href: { control: 'text' },
    name: { control: 'text' },
  },
  args: { size: 48, name: 'OHHEYLYNAE' },
} satisfies Meta<typeof Lockup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'Lockup — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Molecules · Lockup
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">LOCKUP</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Avatar + wordmark. Hover tilts the avatar −2° and scales to 1.06 with a pink ring;
        active presses to .96. Wordmark stays static. Pass{' '}
        <code className="font-mono text-xs text-pink">href</code> to make the whole lockup a link.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Default · hover me
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Lockup size={48} />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Actionable (home / profile link)
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Lockup size={48} href="/" />
        <span className="font-mono text-[11px] text-ink-mute">
          wraps in &lt;a&gt; · pointer cursor · click / press for active
        </span>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Sizes</div>
      <div
        className="mb-8 flex flex-col gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        {([64, 48, 32] as const).map((size) => (
          <div key={size} className="flex items-center gap-3">
            <Lockup size={size} href="/" />
            <span className="font-mono text-[10px] text-ink-mute">{size}px</span>
          </div>
        ))}
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark context</div>
      <div
        data-theme="dark"
        className="flex flex-wrap items-center gap-4 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <Lockup size={48} href="/" />
        <Lockup size={32} href="/" name="OHHEYLYNAE" />
      </div>
    </div>
  ),
}

export const Actionable: Story = {
  args: { href: '/', size: 48 },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {([64, 48, 32] as const).map((size) => (
        <Lockup key={size} size={size} href="/" />
      ))}
    </div>
  ),
}
