import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import HeroTerminalOH from './HeroTerminalOH'

const meta = {
  title: 'Patterns/Hero',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TerminalOH: Story = {
  name: 'Hero — Terminal (oh-hey)',
  render: () => <HeroTerminalOH />,
}
