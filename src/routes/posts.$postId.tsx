import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPostById, domainStyles } from '../data/posts'

export const Route = createFileRoute('/posts/$postId')({
  component: PostPage,
  notFoundComponent: () => (
    <main className="min-h-screen pt-32 pb-24 px-6 text-center">
      <p className="text-zinc-400 text-sm">Post not found.</p>
      <Link to="/" className="text-sm text-zinc-900 underline mt-4 inline-block">← Back home</Link>
    </main>
  ),
  loader: ({ params }) => {
    const post = getPostById(Number(params.postId))
    if (!post) throw notFound()
    return post
  },
})

function PostPage() {
  const post = Route.useLoaderData()
  const styles = domainStyles[post.domain]
  const paragraphs = post.body.split('\n\n').filter(Boolean)

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors mb-12"
        >
          ← Back
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
            {post.domain}
          </span>
          <time className="text-xs text-zinc-400">{post.date}</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 leading-none mb-8">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base text-zinc-500 mb-12 leading-relaxed border-l-2 border-zinc-200 pl-4">
          {post.excerpt}
        </p>

        {/* Body */}
        <div className="flex flex-col gap-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-zinc-700 leading-[1.8]">
              {p}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex items-center justify-between">
          <Link
            to="/"
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
