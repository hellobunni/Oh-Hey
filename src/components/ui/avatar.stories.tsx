import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AVATARS, PRESETS } from '@/components/ui/avatar'

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['face', 'bust', 'round'] },
    ring: { control: 'select', options: ['primary', 'accent', 'none'] },
    presence: { control: 'select', options: ['none', 'online', 'offline'] },
    size: { control: { type: 'range', min: 24, max: 128, step: 4 } },
    inactive: { control: 'boolean' },
    interactive: { control: 'boolean' },
  },
  args: { size: 64, ring: 'primary', variant: 'face', presence: 'none' },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'Avatar — showcase',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">
        Atoms · Avatar
      </div>
      <h2 className="font-pixel text-2xl text-primary mb-1">AVATAR</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Presets 24–256. Ring mint / pink / none. Presence online/offline. Inactive desaturates +
        mutes. Interactive hover scale 1.06 + −2deg.
      </p>

      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Variants</div>
      <div
        className="mb-6 flex flex-wrap items-end gap-5 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        {(['face', 'bust', 'round'] as const).map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-2">
            <Avatar variant={variant} size={72} ring="primary" />
            <span className="font-mono text-[10px] text-ink-soft">{variant}</span>
            <span className="font-mono text-[10px] text-ink-mute">{AVATARS[variant]}</span>
          </div>
        ))}
      </div>

      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Sizes</div>
      <div
        className="mb-6 flex items-end gap-5 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        {PRESETS.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <Avatar size={size > 128 ? 96 : size} ring="primary" />
            <span className="font-mono text-[10px] text-ink-soft">{size}px</span>
          </div>
        ))}
      </div>

      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">
        Presence · inactive · interactive
      </div>
      <div
        className="mb-6 flex flex-wrap items-end gap-6 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <div className="flex flex-col items-center gap-2">
          <Avatar size={64} presence="online" />
          <span className="font-mono text-[10px] text-ink-soft">online</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar size={64} presence="offline" inactive />
          <span className="font-mono text-[10px] text-ink-soft">offline</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar size={64} inactive />
          <span className="font-mono text-[10px] text-ink-soft">inactive</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar size={64} interactive />
          <span className="font-mono text-[10px] text-ink-soft">hover me</span>
        </div>
      </div>

      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Dark</div>
      <div
        data-theme="dark"
        className="flex flex-wrap items-end gap-5 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <Avatar variant="face" size={64} ring="primary" presence="online" />
        <Avatar variant="bust" size={64} ring="accent" />
        <Avatar variant="round" size={64} ring="none" inactive />
      </div>
    </div>
  ),
}

export const Presence: Story = {
  name: 'Avatar — presence',
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar size={64} presence="online" />
      <Avatar size={64} presence="offline" inactive />
    </div>
  ),
}
