import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export type Domain = 'Tech' | 'Fitness' | 'Creative' | 'Nerd Stuff'

export type Post = {
  slug: string
  title: string
  excerpt: string
  domain: Domain
  /** ISO calendar date (YYYY-MM-DD), exactly as authored. Format at render. */
  date: string
  content: string
}

/**
 * YAML parses an unquoted `2026-04-07` into a Date at UTC midnight, so read the
 * UTC parts back out rather than trusting the local calendar. A quoted string
 * is already ISO and passes straight through.
 */
function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value ?? '').slice(0, 10)
}

/**
 * Render-side formatter. Pinned to UTC: without it the *server's* timezone
 * decides the calendar day, so every post reads a day early anywhere west of
 * Greenwich (2026-04-07 renders "Apr 6, 2026" in America/Los_Angeles).
 */
export function formatPostDate(iso: string): string {
  const parsed = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(parsed.getTime())) return iso
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** Four-digit year, for archive grouping. Straight off the ISO string. */
export function postYear(iso: string): string {
  return iso.slice(0, 4)
}

function parsePost(filename: string, raw: string): Post {
  const { data, content } = matter(raw)
  return {
    slug: filename.replace(/\.mdx$/, ''),
    title: data.title as string,
    excerpt: data.excerpt as string,
    domain: data.domain as Domain,
    date: toIsoDate(data.date),
    content,
  }
}

/**
 * cache() dedupes the disk read + parse across a single render pass — the home
 * page, archive, every domain page and both generateStaticParams call this.
 */
export const getAllPosts = cache((): Post[] => {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) =>
      parsePost(filename, fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8')),
    )
    // ISO dates sort correctly as plain strings — no re-parsing a display string.
    .sort((a, b) => b.date.localeCompare(a.date))
})

/** Reads through getAllPosts so a single cached parse serves every lookup. */
export const getPostBySlug = cache((slug: string): Post | undefined =>
  getAllPosts().find((post) => post.slug === slug),
)
