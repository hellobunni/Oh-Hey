import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Circle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Components/Badges & Tags',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const OHLBrandBadges: Story = {
  name: 'Badges — OHL brand variants',
  render: () => (
    <div>
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-2">OHL · Brand badge variants</div>
      <h2 className="font-pixel text-2xl text-primary mb-1">BRAND BADGES</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Three OHL-specific badge types for streaming / content contexts. Use <code className="font-mono text-xs text-accent">mint</code> for status (LIVE), <code className="font-mono text-xs text-accent">pink-outline</code> for soft alerts (NEW), and <code className="font-mono text-xs text-accent">episode</code> for labeling content (EP.12).
      </p>

      <div className="flex flex-col gap-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Mint filled — status / live</div>
          <div className="flex gap-3 items-center p-5 bg-paper-2 border border-line" style={{ borderRadius: 10 }}>
            <Badge variant="mint" className="inline-flex items-center gap-1.5">
              <Circle size={7} className="fill-current" strokeWidth={0} aria-hidden />
              LIVE
            </Badge>
            <Badge variant="mint">ONLINE</Badge>
            <Badge variant="mint">ACTIVE</Badge>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Pink outline — alert / new</div>
          <div className="flex gap-3 items-center p-5 bg-paper-2 border border-line" style={{ borderRadius: 10 }}>
            <Badge variant="pink-outline">NEW</Badge>
            <Badge variant="pink-outline">UPDATED</Badge>
            <Badge variant="pink-outline">ALERT</Badge>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Episode chip — pixel / sharp</div>
          <div className="flex gap-3 items-center p-5 bg-paper-2 border border-line" style={{ borderRadius: 10 }}>
            <Badge variant="episode">EP.01</Badge>
            <Badge variant="episode">EP.12</Badge>
            <Badge variant="episode">S2 · E4</Badge>
            <Badge variant="episode">CLIP</Badge>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">In dark context</div>
          <div className="flex gap-3 items-center p-5 border border-line" style={{ background: '#1d1c29', borderRadius: 10 }}>
            <Badge variant="mint" className="inline-flex items-center gap-1.5">
              <Circle size={7} className="fill-current" strokeWidth={0} aria-hidden />
              LIVE
            </Badge>
            <Badge variant="pink-outline">NEW</Badge>
            <Badge variant="episode">EP.07</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
}
