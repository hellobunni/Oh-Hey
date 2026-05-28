import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DSCard, OfferingCard, NewsletterCard, FeaturedCard } from '@/components/ui/ds-cards'

const meta = {
  title: 'Design System/Cards',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Helpers ──────────────────────────────────────────────────────────────────

const mono11: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
}

function Grid({ cols, children }: { cols: 1 | 2 | 3; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '16px' }}>
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ ...mono11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft)', margin: '40px 0 12px' }}>
      {children}
    </div>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const ThreePatterns: Story = {
  name: 'Cards — three patterns',
  render: () => (
    <div>
      <div style={{ ...mono11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft)', marginBottom: '8px' }}>
        12 · Components — Cards
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: '32px', fontWeight: 700, margin: '0 0 32px' }}>
        Three card patterns.
      </h2>
      <Grid cols={3}>
        <DSCard
          variant="offering"
          index={1}
          title="The Blueprint"
          subtitle="Audit & Strategy"
          description="Diagnostic for companies that are building, rebuilding, or stuck."
          rateValue="Hourly"
        />
        <DSCard
          variant="newsletter"
          headline={<>One letter,<br />every other Sunday.</>}
          tagline="Tracking-free. Easy unsubscribe."
        />
        <DSCard
          variant="featured"
          prefix="NEXT →"
          domain="fitness"
          title="12-week strength block: week 4 check-in"
          date="APR 5, 2026"
          readTime="5 MIN"
        />
      </Grid>
    </div>
  ),
}

export const OfferingVariants: Story = {
  name: 'Cards — offerings',
  render: () => (
    <div>
      <SectionLabel>All three offerings</SectionLabel>
      <Grid cols={3}>
        <OfferingCard
          index={1}
          title="The Blueprint"
          subtitle="Audit & Strategy"
          description="Diagnostic for companies that are building, rebuilding, or stuck."
          rateValue="Hourly"
        />
        <OfferingCard
          index={2}
          title="The Build"
          subtitle="Design + Development"
          description="End-to-end execution from wireframe to deployed product."
          rateValue="Project"
        />
        <OfferingCard
          index={3}
          title="The Partner"
          subtitle="Ongoing Retainer"
          description="A dedicated design partner for teams that ship continuously."
          rateValue="Monthly"
        />
      </Grid>

      <SectionLabel>Conditional portions</SectionLabel>
      <Grid cols={3}>
        <OfferingCard
          index={1}
          title="Index only"
        />
        <OfferingCard
          index={2}
          title="+ Subtitle"
          subtitle="Audit & Strategy"
        />
        <OfferingCard
          index={3}
          title="+ Description, no footer"
          subtitle="Audit & Strategy"
          description="Description is present but rateValue is omitted so the footer is hidden."
        />
      </Grid>
    </div>
  ),
}

export const NewsletterVariants: Story = {
  name: 'Cards — newsletter',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <SectionLabel>With tagline</SectionLabel>
      <NewsletterCard
        headline={<>One letter,<br />every other Sunday.</>}
        tagline="Tracking-free. Easy unsubscribe."
      />

      <SectionLabel>With CTA</SectionLabel>
      <NewsletterCard
        headline="The weekly digest for people who ship."
        tagline="Design, code, and fitness — no filler."
        cta="SUBSCRIBE →"
      />

      <SectionLabel>Headline only</SectionLabel>
      <NewsletterCard
        headline="One letter, every other Sunday."
      />

      <SectionLabel>Custom icon + label</SectionLabel>
      <NewsletterCard
        icon="✦"
        label="WEEKLY DIGEST"
        headline={<>Design that ships.<br />Every Sunday.</>}
        tagline="No tracking. Unsubscribe any time."
        cta="JOIN →"
      />
    </div>
  ),
}

export const FeaturedVariants: Story = {
  name: 'Cards — featured posts',
  render: () => (
    <div>
      <SectionLabel>All domains</SectionLabel>
      <Grid cols={2}>
        <FeaturedCard prefix="NEXT →"      domain="tech"     title="Building a personal site with TanStack Start"   date="APR 7, 2026" readTime="8 MIN" />
        <FeaturedCard prefix="LATEST"      domain="fitness"  title="12-week strength block: week 4 check-in"         date="APR 5, 2026" readTime="5 MIN" />
        <FeaturedCard prefix="FEATURED"    domain="creative" title="New prints & the process behind them"            date="APR 3, 2026" readTime="4 MIN" />
        <FeaturedCard prefix="RECOMMENDED" domain="nerd"     title="My top 10 Lego sets right now"                  date="APR 1, 2026" readTime="6 MIN" />
      </Grid>

      <SectionLabel>Without prefix / read time</SectionLabel>
      <Grid cols={2}>
        <FeaturedCard domain="tech"    title="Building a personal site with TanStack Start" date="APR 7, 2026" />
        <FeaturedCard domain="fitness" title="12-week strength block: week 4 check-in"      date="APR 5, 2026" />
      </Grid>
    </div>
  ),
}

export const AsLinks: Story = {
  name: 'Cards — as links',
  render: () => (
    <Grid cols={3}>
      <OfferingCard   index={1} title="The Blueprint"  subtitle="Audit & Strategy"   description="Diagnostic for teams that are building or stuck." rateValue="Hourly"  href="/work/blueprint" />
      <NewsletterCard headline={<>One letter,<br />every other Sunday.</>} tagline="Tracking-free. Easy unsubscribe." href="/newsletter" />
      <FeaturedCard   prefix="NEXT →" domain="tech" title="Building a personal site with TanStack Start" date="APR 7, 2026" readTime="8 MIN" href="/posts/tanstack-start" />
    </Grid>
  ),
}
