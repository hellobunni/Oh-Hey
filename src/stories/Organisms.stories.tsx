import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Organisms',
  parameters: { layout: 'padded', backgrounds: { default: 'deep' } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Shared sub-components ────────────────────────────────────────────────────

function Avatar({ size = 52, border = '#7ed6c0' }: { size?: number; border?: string }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'linear-gradient(135deg, #2b2a3d 0%, #3a3550 100%)',
      border: `${size > 40 ? 3 : 2}px solid ${border}`,
      flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-pixel)',
      fontSize: Math.max(8, Math.floor(size / 4.5)),
      color: '#7ed6c0',
    }}>
      OHL
    </div>
  )
}

function ThumbnailPlaceholder({ height = 158 }: { height?: number }) {
  return (
    <div style={{
      height,
      background: 'linear-gradient(135deg, #2b2a3d 0%, #1d1c29 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#444258', letterSpacing: '0.1em' }}>THUMBNAIL</div>
      <span style={{
        position: 'absolute', right: 8, bottom: 8,
        fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#fff',
        background: 'rgba(0,0,0,0.6)', padding: '2px 6px',
      }}>12:04</span>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10, marginTop: 36 }}>
      {children}
    </div>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const AllOrganisms: Story = {
  name: 'Organisms — all',
  render: () => (
    <div style={{ color: '#e8e6f0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a869e', marginBottom: 8 }}>
        OHL Design System · Organisms
      </div>
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 22, color: '#f2a7c3', marginBottom: 4 }}>ORGANISMS</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: '#8a869e', maxWidth: 700, lineHeight: 1.6 }}>
        Self-contained UI sections assembled from atoms and molecules.
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>

        {/* Video Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 280 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Video Card</div>
          <div style={{ background: '#1d1c29', borderRadius: 14, overflow: 'hidden' }}>
            <ThumbnailPlaceholder />
            <div style={{ padding: '12px 14px', display: 'flex', gap: 10 }}>
              <Avatar size={32} />
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: '#e8e6f0' }}>100 Days, One Farm — Ep. 12</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e', marginTop: 2 }}>OhHeyLynae · 4.2K views</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stream Header Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Stream Header</div>
          <div style={{ width: 360, background: '#1d1c29', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <Avatar size={52} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, color: '#7ed6c0' }}>OHHEYLYNAE</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e' }}>cozy games &amp; chaos</div>
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#1d1c29', background: '#f2a7c3', borderRadius: 9999, padding: '5px 12px' }}>● LIVE</span>
          </div>
          {/* Offline state */}
          <div style={{ width: 360, background: '#1d1c29', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, opacity: 0.7 }}>
            <Avatar size={52} border="#444258" />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, color: '#444258' }}>OHHEYLYNAE</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e' }}>cozy games &amp; chaos</div>
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', border: '1px solid #444258', borderRadius: 9999, padding: '4px 12px' }}>OFFLINE</span>
          </div>
        </div>

        {/* Schedule Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#8a869e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Schedule Panel</div>
          <div style={{ width: 280, background: '#1d1c29', borderRadius: 14, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: '#8fa8e8', marginBottom: 4 }}>SCHEDULE</div>
            {[['Tues', '7pm — Variety'], ['Thurs', '7pm — Art'], ['Sun', '3pm — Chill']].map(([day, time]) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: '#e8e6f0', paddingBottom: 8, borderBottom: '1px solid rgba(232,230,240,0.06)' }}>
                <span>{day}</span>
                <span style={{ color: '#8a869e' }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  ),
}

export const VideoCard: Story = {
  name: 'Organisms — video card',
  parameters: { backgrounds: { default: 'deep' } },
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {/* Standard */}
      <div style={{ width: 280, background: '#1d1c29', borderRadius: 14, overflow: 'hidden' }}>
        <ThumbnailPlaceholder height={158} />
        <div style={{ padding: '12px 14px', display: 'flex', gap: 10 }}>
          <Avatar size={32} />
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: '#e8e6f0' }}>100 Days, One Farm — Ep. 12</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e', marginTop: 2 }}>OhHeyLynae · 4.2K views · 3 days ago</div>
          </div>
        </div>
      </div>
      {/* Wide */}
      <div style={{ width: 360, background: '#1d1c29', borderRadius: 14, overflow: 'hidden' }}>
        <ThumbnailPlaceholder height={200} />
        <div style={{ padding: '14px 16px', display: 'flex', gap: 12 }}>
          <Avatar size={40} />
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15, color: '#e8e6f0' }}>I played Stardew Valley for 100 days straight</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e', marginTop: 4 }}>OhHeyLynae · 18K views · 1 week ago</div>
            <div style={{ marginTop: 8 }}>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#1d1c29', background: '#8fa8e8', padding: '3px 8px' }}>EP.07</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const StreamHeader: Story = {
  name: 'Organisms — stream header bar',
  parameters: { backgrounds: { default: 'deep' } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 440 }}>
      {/* Live */}
      <div style={{ background: '#1d1c29', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar size={52} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, color: '#7ed6c0' }}>OHHEYLYNAE</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e' }}>cozy games &amp; chaos</div>
        </div>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#1d1c29', background: '#f2a7c3', borderRadius: 9999, padding: '5px 12px' }}>● LIVE</span>
      </div>
      {/* Compact */}
      <div style={{ background: '#1d1c29', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar size={36} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: '#7ed6c0' }}>OHHEYLYNAE</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: '#8a869e' }}>cozy games &amp; chaos · 1,204 watching</div>
        </div>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 10, color: '#1d1c29', background: '#7ed6c0', borderRadius: 9999, padding: '4px 10px' }}>LIVE</span>
      </div>
    </div>
  ),
}

export const ChannelHomeTemplate: Story = {
  name: 'Templates — channel home (dark)',
  parameters: { backgrounds: { default: 'deep' } },
  render: () => (
    <div style={{ background: '#100f1a', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540 }}>
      {/* Stream header */}
      <div style={{ background: '#1d1c29', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar size={52} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, color: '#7ed6c0' }}>OHHEYLYNAE</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#8a869e' }}>cozy games &amp; chaos</div>
        </div>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#1d1c29', background: '#f2a7c3', borderRadius: 9999, padding: '5px 12px' }}>● LIVE</span>
      </div>
      {/* Content row */}
      <div style={{ display: 'flex', gap: 14 }}>
        {/* Video card */}
        <div style={{ flex: 1, background: '#1d1c29', borderRadius: 14, overflow: 'hidden' }}>
          <ThumbnailPlaceholder height={100} />
          <div style={{ padding: '10px 12px', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: '#e8e6f0' }}>
            100 Days, One Farm
          </div>
        </div>
        {/* Schedule */}
        <div style={{ width: 160, background: '#1d1c29', borderRadius: 14, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: '#8fa8e8' }}>SCHEDULE</div>
          {[['Tues', '7pm'], ['Thurs', '7pm'], ['Sun', '3pm']].map(([d, t]) => (
            <div key={d} style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: '#e8e6f0' }}>
              {d} <span style={{ color: '#8a869e' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Stat row */}
      <div style={{ display: 'flex', gap: 10 }}>
        {[['1,204', 'FOLLOWERS'], ['4.2K', 'VIEWS'], ['312', 'SUBS']].map(([n, l]) => (
          <div key={l} style={{ flex: 1, background: '#1d1c29', borderRadius: 10, padding: '10px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 18, color: '#7ed6c0' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 9, color: '#8a869e', textTransform: 'uppercase', letterSpacing: 0.8, marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const BlogPostTemplate: Story = {
  name: 'Templates — blog post (light)',
  parameters: { backgrounds: { default: 'paper' } },
  render: () => (
    <div style={{ background: '#f6f3ec', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 440, border: '1px solid rgba(0,0,0,0.07)' }}>
      {/* Author + meta row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar size={36} border="#3a3550" />
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 13, color: '#3a3550' }}>DEV LOG #4</div>
        <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: '#9a96b0' }}>Jul 21</div>
      </div>
      {/* Body */}
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, color: '#4c4666', lineHeight: 1.7 }}>
        Body copy runs in Quicksand — readable at length while the pixel headline stays reserved for moments that need punch. Use Silkscreen only for headings and wordmarks — never as running text.
      </div>
      {/* Tags */}
      <div style={{ display: 'flex', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#1d1c29', background: '#8fa8e8', padding: '3px 8px' }}>TECH</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#e0559b', border: '2px solid #e0559b', borderRadius: 9999, padding: '3px 10px' }}>NEW</span>
      </div>
      {/* CTA */}
      <div style={{ borderTop: '1px solid rgba(43,40,56,0.08)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: '#f6f3ec', background: '#3a3550', border: 'none', padding: '10px 18px', cursor: 'pointer', borderRadius: 0 }}>
          READ MORE
        </button>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#9a96b0' }}>5 min read</span>
      </div>
    </div>
  ),
}
