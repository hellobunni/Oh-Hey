import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import HeroBroadsheet from './HeroBroadsheet'

const meta = {
  title: 'Patterns/Hero',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BroadsheetOH: Story = {
  name: 'Hero — Broadsheet (oh-hey)',
  render: () => (
    <HeroBroadsheet brand="oh-hey">
      <div className="grid grid-cols-4 gap-3">
        {['Tech', 'Fitness', 'Creative', 'Nerd'].map(cat => (
          <div
            key={cat}
            className="border border-line p-4 font-mono text-xs text-ink-mute uppercase tracking-[0.1em]"
          >
            {cat}
          </div>
        ))}
      </div>
    </HeroBroadsheet>
  ),
}

