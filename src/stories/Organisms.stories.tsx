import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoCard } from '@/components/organisms/VideoCard'
import { StreamHeaderBar } from '@/components/organisms/StreamHeaderBar'
import { SchedulePanel } from '@/components/organisms/SchedulePanel'
import { StatPair } from '@/components/molecules/StatPair'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'

const AVATAR = '/avatar-face.png'
const THUMB = '/hero-bg.jpg'

const SCHEDULE = [
  { day: 'Tues', detail: '7pm — Variety' },
  { day: 'Thurs', detail: '7pm — Art' },
  { day: 'Sun', detail: '3pm — Chill' },
]

const meta = {
  title: 'Design System/Organisms',
  parameters: { layout: 'padded', backgrounds: { default: 'deep' } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllOrganisms: Story = {
  name: 'Organisms — all',
  render: () => (
    <div className="text-ink-2">
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">
        OHL Design System · Organisms
      </div>
      <div className="font-pixel text-[22px] text-accent mb-1">ORGANISMS</div>
      <p className="font-sans text-sm font-semibold text-ink-soft max-w-xl leading-relaxed">
        Self-contained UI sections assembled from atoms and molecules.
      </p>

      <div className="flex gap-6 flex-wrap mt-6">
        <div className="flex flex-col gap-2">
          <div className="font-sans font-bold text-[11px] text-ink-soft tracking-wide uppercase">
            Video Card
          </div>
          <VideoCard
            thumbnail={THUMB}
            duration="12:04"
            title="100 Days, One Farm — Ep. 12"
            channel="OhHeyLynae"
            views="4.2K views"
            avatarSrc={AVATAR}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-sans font-bold text-[11px] text-ink-soft tracking-wide uppercase">
            Stream Header
          </div>
          <StreamHeaderBar avatarSrc={AVATAR} live />
          <StreamHeaderBar avatarSrc={AVATAR} live={false} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-sans font-bold text-[11px] text-ink-soft tracking-wide uppercase">
            Schedule Panel
          </div>
          <SchedulePanel items={SCHEDULE} />
        </div>
      </div>
    </div>
  ),
}

export const VideoCardStory: Story = {
  name: 'Organisms — video card',
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <VideoCard
        thumbnail={THUMB}
        duration="12:04"
        title="100 Days, One Farm — Ep. 12"
        channel="OhHeyLynae"
        views="4.2K views · 3 days ago"
        avatarSrc={AVATAR}
      />
      <VideoCard
        thumbnail={THUMB}
        duration="48:22"
        title="I played Stardew Valley for 100 days straight"
        channel="OhHeyLynae"
        views="18K views · 1 week ago"
        avatarSrc={AVATAR}
        className="w-[360px]"
      />
    </div>
  ),
}

export const StreamHeader: Story = {
  name: 'Organisms — stream header bar',
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <StreamHeaderBar avatarSrc={AVATAR} live />
      <StreamHeaderBar
        avatarSrc={AVATAR}
        live
        tagline="cozy games & chaos · 1,204 watching"
        className="rounded-xl py-3 px-4"
      />
      <StreamHeaderBar avatarSrc={AVATAR} live={false} />
    </div>
  ),
}

export const SchedulePanelStory: Story = {
  name: 'Organisms — schedule panel',
  render: () => <SchedulePanel items={SCHEDULE} />,
}

export const ChannelHomeTemplate: Story = {
  name: 'Templates — channel home (dark)',
  render: () => (
    <div className="bg-deep rounded-2xl p-5 flex flex-col gap-4 max-w-[540px]">
      <StreamHeaderBar avatarSrc={AVATAR} live className="w-full" />
      <div className="flex gap-3.5">
        <VideoCard
          thumbnail={THUMB}
          duration="12:04"
          title="100 Days, One Farm"
          channel="OhHeyLynae"
          views="4.2K views"
          avatarSrc={AVATAR}
          className="flex-1 w-auto"
        />
        <SchedulePanel
          items={[
            { day: 'Tues', detail: '7pm' },
            { day: 'Thurs', detail: '7pm' },
            { day: 'Sun', detail: '3pm' },
          ]}
          className="w-40"
        />
      </div>
      <div className="flex gap-2.5">
        <StatPair value="1,204" label="FOLLOWERS" tone="primary" className="flex-1 w-auto text-center" />
        <StatPair value="4.2K" label="VIEWS" tone="primary" className="flex-1 w-auto text-center" />
        <StatPair value="312" label="SUBS" tone="primary" className="flex-1 w-auto text-center" />
      </div>
    </div>
  ),
}

export const BlogPostTemplate: Story = {
  name: 'Templates — blog post (light)',
  parameters: { backgrounds: { default: 'paper' } },
  render: () => (
    <div className="bg-paper rounded-2xl p-6 flex flex-col gap-3.5 max-w-md border border-line">
      <div className="flex items-center gap-2.5">
        <Avatar src={AVATAR} size={36} ring="none" className="border-2 border-navy" />
        <div className="font-pixel text-[13px] text-navy">DEV LOG #4</div>
        <div className="ml-auto font-sans font-semibold text-[11px] text-ink-mute">Jul 21</div>
      </div>
      <p className="font-sans font-medium text-sm text-ink-2 leading-relaxed">
        Body copy runs in Quicksand — readable at length while the pixel headline stays reserved for
        moments that need punch. Use Silkscreen only for headings and wordmarks — never as running text.
      </p>
      <div className="flex gap-1.5">
        <Badge variant="episode">TECH</Badge>
        <Badge variant="pink-outline">NEW</Badge>
      </div>
      <div className="border-t border-line pt-3.5 flex justify-between items-center">
        <Button variant="accent" size="sm">Read more</Button>
        <span className="font-mono text-[11px] text-ink-mute">5 min read</span>
      </div>
    </div>
  ),
}
