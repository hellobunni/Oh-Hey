import type { Project } from '@/data/work.data'

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen?: (p: Project) => void
}) {
  return (
    <a
      href={project.href ?? `/consulting/work/${project.slug}`}
      onClick={(e) => { if (onOpen) { e.preventDefault(); onOpen(project) } }}
      className="group flex flex-col border-b border-r border-line bg-paper transition-colors hover:bg-paper-2 max-md:border-r-0"
    >
      {/* cover — accent-tinted with tag, image/placeholder, index */}
      <div className="relative flex min-h-[180px] flex-col border-b border-line bg-kodara-accent-soft-solid p-6">
        <span className="font-mono text-xxs uppercase tracking-[0.12em] text-accent">
          ● {project.tag}
        </span>

        {/* Logo image or placeholder */}
        <div className="my-4 flex flex-1 items-center justify-center overflow-hidden border border-line">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.client} logo`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full min-h-[64px] items-center justify-center bg-ink/[0.06]">
              <div className="h-5 w-16 rounded-sm bg-ink/10" />
            </div>
          )}
        </div>

        <span className="font-mono text-xxs tracking-[0.12em] text-ink-mute">
          PROJECT {project.idx}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col px-7 pb-8 pt-7">
        <h3 className="font-sans text-[26px] font-bold leading-[1.05] tracking-tight text-ink">
          {project.title}
        </h3>
        <div className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          {project.client}
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-2">{project.desc}</p>

        {/* meta row */}
        <div className="mt-6 flex gap-6 border-t border-line pt-[18px] font-mono">
          {([['YEAR', project.year], ['ROLE', project.role], ['CLIENT', project.client]] as const).map(([k, v]) => (
            <div key={k}>
              <div className="text-xxs uppercase tracking-[0.12em] text-ink-mute">{k}</div>
              <div className="mt-[3px] text-xs text-ink">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-ink-mute transition-colors group-hover:text-accent">
          <span>View project</span>
          <span>→</span>
        </div>
      </div>
    </a>
  )
}
