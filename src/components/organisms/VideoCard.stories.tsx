import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoCard } from '@/components/organisms/VideoCard'

const THUMB = '/hero-bg.jpg'

const meta = {
  title: 'Organisms/VideoCard',
  component: VideoCard,
  parameters: { layout: 'padded', backgrounds: { default: 'deep' } },
  tags: ['autodocs'],
  args: {
    thumbnail: THUMB,
    duration: '12:04',
    title: '100 Days, One Farm — Ep. 12',
    channel: 'OhHeyLynae',
    views: '4.2K views · 3 days ago',
    href: '#video',
    channelHref: '#channel',
  },
} satisfies Meta<typeof VideoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'VideoCard — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Organisms · Video Card
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">VIDEO CARD</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Hover lifts the card −6px with shadow and zooms the thumb 1.05 (.3s); duration badge stays
        fixed. Press settles to −2px / .98. Loading shows a shimmer skeleton; watched mutes the title
        and draws a progress sliver. Avatar is a separate channel hit target.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Default · hover / press
      </div>
      <div className="mb-8 flex flex-wrap gap-4">
        <VideoCard
          thumbnail={THUMB}
          duration="12:04"
          title="100 Days, One Farm — Ep. 12"
          channel="OhHeyLynae"
          views="4.2K views"
          href="#video"
          channelHref="#channel"
        />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Loading</div>
      <div className="mb-8 flex flex-wrap gap-4">
        <VideoCard
          thumbnail={THUMB}
          loading
          duration="08:11"
          title="Loading thumbnail…"
          channel="OhHeyLynae"
          views="—"
        />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Watched</div>
      <div className="flex flex-wrap gap-4">
        <VideoCard
          thumbnail={THUMB}
          duration="48:22"
          title="I played Stardew Valley for 100 days straight"
          channel="OhHeyLynae"
          views="18K views · 1 week ago"
          href="#video"
          channelHref="#channel"
          progress={0.72}
        />
      </div>
    </div>
  ),
}

export const Loading: Story = {
  args: { loading: true, title: 'Loading thumbnail…' },
}

export const Watched: Story = {
  args: { progress: 0.65 },
}
