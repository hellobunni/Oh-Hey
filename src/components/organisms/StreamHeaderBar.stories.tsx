import type { Meta, StoryObj } from '@storybook/react-vite'
import { StreamHeaderBar } from '@/components/organisms/StreamHeaderBar'

const meta = {
  title: 'Organisms/StreamHeaderBar',
  component: StreamHeaderBar,
  parameters: { layout: 'padded', backgrounds: { default: 'deep' } },
  tags: ['autodocs'],
  argTypes: {
    live: { control: 'boolean' },
    showOfflineBadge: { control: 'boolean' },
  },
  args: {
    live: true,
    href: '#profile',
    tagline: 'cozy games & chaos',
  },
} satisfies Meta<typeof StreamHeaderBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'StreamHeaderBar — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Organisms · Stream Header Bar
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">STREAM HEADER</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Live shows a mint <code className="font-mono text-xs text-pink">● LIVE</code> badge with a
        continuous glow-pulse (1.8s). Offline mutes the bar and shows a neutral badge (or hides it).
        When <code className="font-mono text-xs text-pink">href</code> is set, hover lightens the
        bar and the whole unit routes to profile.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Live</div>
      <div className="mb-8 flex max-w-md flex-col gap-3">
        <StreamHeaderBar live href="#profile" />
        <StreamHeaderBar
          live
          href="#profile"
          tagline="cozy games & chaos · 1,204 watching"
        />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Offline</div>
      <div className="mb-8 flex max-w-md flex-col gap-3">
        <StreamHeaderBar live={false} href="#profile" />
        <StreamHeaderBar live={false} showOfflineBadge={false} href="#profile" />
      </div>
    </div>
  ),
}

export const Live: Story = {
  args: { live: true },
}

export const Offline: Story = {
  args: { live: false },
}

export const OfflineHiddenBadge: Story = {
  args: { live: false, showOfflineBadge: false },
}
