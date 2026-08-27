import { Play } from 'lucide-react'
import { SectionHeader } from '@/components/layout/SectionHeader'
import type { YoutubeVideo } from '@/lib/youtube'

interface UpNowProps {
  videos: YoutubeVideo[]
}

export default function UpNow({ videos }: UpNowProps) {
  const shown = videos.slice(0, 2)

  return (
    <section>
      <SectionHeader num="01" title="UP NOW" />

      <div className="px-[clamp(20px,5vw,80px)] pb-12 site-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {shown.map((v, i) => (
            <a
              key={i}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden border-2 border-paper-2 aspect-video no-underline"
              style={{ boxShadow: '5px 5px 0 rgba(0,0,0,0.35)' }}
            >
              {v.thumbnailUrl ? (
                <img
                  src={v.thumbnailUrl}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-card-2" />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play badge */}
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-black/60 px-2.5 py-1.5 font-mono text-[10px] text-white">
                <Play size={9} fill="currentColor" strokeWidth={0} aria-hidden />
                {v.length > 0 ? `${v.length}m` : '—'}
              </span>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <p className="font-px text-sm text-white leading-snug line-clamp-2">{v.title}</p>
                <p className="mt-1 font-mono text-[10px] text-white/50">{v.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
