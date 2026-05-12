export default function WorkWithMeCTA() {
  return (
    <section className="px-6 py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 mb-1">
            Want to work together?
          </h2>
          <p className="text-sm text-zinc-500">
            I'm available for consulting, collaborations, and projects.
          </p>
        </div>
        <a
          href="/work-with-me"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-colors shrink-0"
        >
          Get in touch →
        </a>
      </div>
    </section>
  )
}
