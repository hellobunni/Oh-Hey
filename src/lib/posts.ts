import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export type Domain = 'Tech' | 'Fitness' | 'Creative' | 'Nerd Stuff'

export type Post = {
  slug: string
  title: string
  excerpt: string
  domain: Domain
  date: string
  content: string
}

export const domainStyles: Record<Domain, { badge: string; dot: string }> = {
  Tech: { badge: 'bg-blue-50 text-blue-600', dot: 'bg-blue-500' },
  Fitness: { badge: 'bg-emerald-50 text-emerald-600', dot: 'bg-emerald-500' },
  Creative: { badge: 'bg-orange-50 text-orange-600', dot: 'bg-orange-500' },
  'Nerd Stuff': { badge: 'bg-violet-50 text-violet-600', dot: 'bg-violet-500' },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title as string,
        excerpt: data.excerpt as string,
        domain: data.domain as Domain,
        date: formatDate(data.date as string),
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      domain: data.domain as Domain,
      date: formatDate(data.date as string),
      content,
    }
  } catch {
    return undefined
  }
}
