import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sparkles } from 'lucide-react'
import { Lockup } from '@/components/molecules/Lockup'
import { StatPair } from '@/components/molecules/StatPair'
import { AlertToast } from '@/components/molecules/AlertToast'
import { NavItemGroup } from '@/components/molecules/NavItemGroup'

const AVATAR = '/avatar-face.png'

const meta = {
  title: 'Design System/Molecules',
  parameters: { layout: 'padded', backgrounds: { default: 'ink' } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2.5 mt-9">
      {children}
    </div>
  )
}

export const AllMolecules: Story = {
  name: 'Molecules — all',
  render: () => (
    <div className="text-ink-2">
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">
        OHL Design System · Molecules
      </div>
      <div className="font-pixel text-[22px] text-primary mb-1">MOLECULES</div>
      <p className="font-sans text-sm font-semibold text-ink-soft max-w-xl leading-relaxed mb-2">
        Combinations of atoms. Each molecule has a single, focused function.
      </p>

      <div className="flex gap-6 flex-wrap mt-2">
        <div className="flex flex-col gap-2">
          <div className="font-sans font-bold text-[11px] text-ink-soft tracking-wide uppercase">
            Lockup — avatar + wordmark
          </div>
          <Lockup src={AVATAR} size={48} />
          <Lockup src={AVATAR} size={32} name="OHHEYLYNAE" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-sans font-bold text-[11px] text-ink-soft tracking-wide uppercase">
            Stat / label pair
          </div>
          <StatPair value="1,204" label="FOLLOWERS" />
          <div className="flex gap-2.5">
            <StatPair value="4.2K" label="VIEWS" tone="primary" className="w-auto flex-1 text-center" />
            <StatPair value="312" label="SUBS" tone="accent" className="w-auto flex-1 text-center" />
            <StatPair value="47" label="CLIPS" tone="primary" className="w-auto flex-1 text-center" />
          </div>
        </div>
      </div>

      <SectionLabel>Alert Toast</SectionLabel>
      <div className="flex gap-4 flex-wrap">
        <AlertToast
          src={AVATAR}
          headline="NEW SUB!"
          subtext="welcome, mochi"
        />
        <AlertToast
          tone="primary"
          headline="INCOMING RAID"
          icon={<Sparkles size={16} className="text-primary" strokeWidth={2} aria-hidden />}
          subtext="pixelwitch — 84 raiders"
        />
      </div>

      <SectionLabel>Nav Item Group</SectionLabel>
      <NavItemGroup items={['Home', 'Videos', 'Schedule', 'About']} activeIndex={0} />
    </div>
  ),
}

export const LockupStory: Story = {
  name: 'Molecules — lockup',
  render: () => (
    <div className="flex flex-col gap-4">
      {([64, 48, 32] as const).map((size) => (
        <Lockup key={size} src={AVATAR} size={size} />
      ))}
    </div>
  ),
}

export const StatLabel: Story = {
  name: 'Molecules — stat / label pair',
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <StatPair value="1,204" label="FOLLOWERS" tone="link" />
      <StatPair value="4.2K" label="VIEWS" tone="primary" />
      <StatPair value="312" label="SUBS" tone="accent" />
      <StatPair value="89%" label="UPTIME" tone="gold" />
    </div>
  ),
}

export const AlertToastStory: Story = {
  name: 'Molecules — alert toast',
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <AlertToast src={AVATAR} headline="NEW SUB!" subtext="welcome, mochi" />
      <AlertToast
        tone="primary"
        headline="INCOMING RAID"
        icon={<Sparkles size={16} className="text-primary" strokeWidth={2} aria-hidden />}
        subtext="pixelwitch — 84 raiders"
      />
    </div>
  ),
}

export const NavItemGroupStory: Story = {
  name: 'Molecules — nav item group',
  render: () => (
    <NavItemGroup items={['Home', 'Videos', 'Schedule', 'About']} activeIndex={0} />
  ),
}
