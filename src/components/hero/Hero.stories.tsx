import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Hero from '../Hero'

const meta = {
  title: 'Patterns/Hero',
  component: Hero,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Hero />,
}