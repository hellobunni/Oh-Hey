import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoCard } from '@/components/organisms/VideoCard'
import { StreamHeaderBar } from '@/components/organisms/StreamHeaderBar'
import { SchedulePanel } from '@/components/organisms/SchedulePanel'
import { StatPair } from '@/components/molecules/StatPair'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tag } from '@/components/ui/tag'
import { Avatar } from '@/components/ui/avatar'

const THUMB = '/hero-bg.jpg'

const meta = {
  title: 'Templates',
  parameters: { layout: 'padded', backgrounds: { default: 'deep' } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ChannelHome: Story = {
  name: 'Templates — channel home (dark)',
  render: () => (
    <div className="flex max-w-[540px] flex-col gap-4 rounded-2xl bg-deep p-5">
      <StreamHeaderBar live href="#profile" className="w-full" />
      <div className="flex gap-3.5">
        <VideoCard
          thumbnail={THUMB}
          duration="12:04"
          title="100 Days, One Farm"
          channel="OhHeyLynae"
          views="4.2K views"
          href="#video"
          channelHref="#channel"
          className="w-auto flex-1"
        />
        <SchedulePanel
          items={[
            { day: 'Tues', detail: '7pm', today: true, href: '#' },
            { day: 'Thurs', detail: '7pm', href: '#' },
            { day: 'Sun', detail: '3pm' },
          ]}
          className="w-40"
        />
      </div>
      <div className="flex gap-2.5">
        <StatPair value="1,204" label="FOLLOWERS" tone="primary" className="w-auto flex-1 text-center" />
        <StatPair value="4.2K" label="VIEWS" tone="primary" className="w-auto flex-1 text-center" />
        <StatPair value="312" label="SUBS" tone="primary" className="w-auto flex-1 text-center" />
      </div>
    </div>
  ),
}

export const BlogPost: Story = {
  name: 'Templates — blog post (light)',
  parameters: { backgrounds: { default: 'paper' } },
  render: () => (
    <div className="flex max-w-md flex-col gap-3.5 rounded-2xl border border-line bg-paper p-6">
      <div className="flex items-center gap-2.5">
        <Avatar size={36} ring="none" className="border-2 border-navy" />
        <div className="font-pixel text-[13px] text-navy">DEV LOG #4</div>
        <div className="ml-auto font-sans text-[11px] font-semibold text-ink-mute">Jul 21</div>
      </div>
      <p className="font-sans text-sm font-medium leading-relaxed text-ink-2">
        Body copy runs in Quicksand — readable at length while the pixel headline stays reserved for
        moments that need punch. Use Silkscreen only for headings and wordmarks — never as running text.
      </p>
      <div className="flex gap-1.5">
        <Tag>TECH</Tag>
        <Badge tone="pink">NEW</Badge>
      </div>
      <div className="flex items-center justify-between border-t border-line pt-3.5">
        <Button variant="accent" size="sm">Read more</Button>
        <span className="font-mono text-[11px] text-ink-mute">5 min read</span>
      </div>
    </div>
  ),
}
