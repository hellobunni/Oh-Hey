import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PostRow, PostList } from '@/components/ui/post-row'
import type { PostRowData } from '@/components/ui/post-row'

const meta = {
  title: 'Components/Post Rows',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Sample data ──────────────────────────────────────────────────────────────

const POSTS: PostRowData[] = [
  { index: 1, title: 'Building a personal site with TanStack Start', domain: 'tech',     date: 'Apr 7, 2026' },
  { index: 2, title: '12-week strength block: week 4 check-in',      domain: 'fitness',  date: 'Apr 5, 2026' },
  { index: 3, title: 'New prints & the process behind them',          domain: 'creative', date: 'Apr 3, 2026' },
  { index: 4, title: 'My top 10 Lego sets right now',                 domain: 'nerd',     date: 'Apr 1, 2026' },
]

const POSTS_WITH_EXCERPTS: PostRowData[] = [
  {
    index: 1, title: 'Building a personal site with TanStack Start', domain: 'tech', date: 'Apr 7, 2026',
    excerpt: 'Why I ditched Next.js for TanStack Start and what I learned along the way.',
  },
  {
    index: 2, title: '12-week strength block: week 4 check-in', domain: 'fitness', date: 'Apr 5, 2026',
    excerpt: "Squat numbers are moving. Bench is being stubborn. Here's where I'm at.",
  },
  {
    index: 3, title: 'New prints & the process behind them', domain: 'creative', date: 'Apr 3, 2026',
    excerpt: 'Three new pieces in the shop — and a look at the sketchbook pages behind them.',
  },
  {
    index: 4, title: 'My top 10 Lego sets right now', domain: 'nerd', date: 'Apr 1, 2026',
    excerpt: "Botanic Garden is still number one. Here's everything else on the shelf.",
  },
]

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: 'Post Rows — default',
  render: () => (
    <div>
      <div style={{ fontFamily: 'font-mono', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft)', marginBottom: '8px' }}>
        11 · Components — Post rows
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: '32px', fontWeight: 700, margin: '0 0 12px' }}>
        The blog's primary unit.
      </h2>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'var(--color-ink-2, #2a2a28)', margin: '0 0 32px', lineHeight: 1.6, maxWidth: '560px' }}>
        Used on home, archive, category, and tag pages. Numbered index on the left, title + excerpt, domain badge, monospace date on the right.
      </p>

      <PostList>
        {POSTS.map(p => <PostRow key={p.index} {...p} />)}
      </PostList>
    </div>
  ),
}

export const WithExcerpt: Story = {
  name: 'Post Rows — with excerpt',
  render: () => (
    <PostList>
      {POSTS_WITH_EXCERPTS.map(p => <PostRow key={p.index} {...p} />)}
    </PostList>
  ),
}

export const AllDomains: Story = {
  name: 'Post Rows — all domains',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['tech', 'fitness', 'creative', 'nerd'] as const).map((domain, i) => (
        <PostList key={domain}>
          <PostRow
            index={i + 1}
            title={POSTS[i].title}
            domain={domain}
            date={POSTS[i].date}
          />
        </PostList>
      ))}
    </div>
  ),
}

export const AsLinks: Story = {
  name: 'Post Rows — as links',
  render: () => (
    <PostList>
      {POSTS.map(p => (
        <PostRow key={p.index} {...p} href={`/posts/${p.title.toLowerCase().replace(/\s+/g, '-')}`} />
      ))}
    </PostList>
  ),
}

export const LongTitles: Story = {
  name: 'Post Rows — long titles (overflow)',
  render: () => (
    <PostList>
      <PostRow index={1} title="A very long post title that tests how the layout handles overflow when the text runs quite long and wants to wrap" domain="tech"     date="Apr 7, 2026" />
      <PostRow index={2} title="Another extremely verbose headline that pushes the boundaries of reasonable title length in a post list view" domain="fitness"  date="Apr 5, 2026" />
      <PostRow index={3} title="Short title"                                                                                                   domain="creative" date="Apr 3, 2026" />
    </PostList>
  ),
}
