import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostById, domainStyles } from '@/data/posts'

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const post = getPostById(Number(postId))
  if (!post) notFound()

  const styles = domainStyles[post.domain]
  const paragraphs = post.body.split('\n\n').filter(Boolean)

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors mb-12"
        >
          ← Back
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
            {post.domain}
          </span>
          <time className="text-xs text-zinc-400">{post.date}</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 leading-none mb-8">
          {post.title}
        </h1>

        <p className="text-base text-zinc-500 mb-12 leading-relaxed border-l-2 border-zinc-200 pl-4">
          {post.excerpt}
        </p>

        <div className="flex flex-col gap-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-zinc-700 leading-[1.8]">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-100 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            ← All posts
          </Link>
          <span className="text-xs text-zinc-300">oh-hey-lynae</span>
        </div>

      </div>
    </main>
  )
}
