import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface KodaraFooterProps {
  copy?: string
  links?: { label: string; href: string }[]
  className?: string
}

const DEFAULT_LINKS = [
  { label: 'EMAIL', href: 'mailto:hi@kodara.co' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'GITHUB', href: '#' },
  { label: '← OH-HEY-LYNAE', href: '/' },
]

export default function KodaraFooter({
  copy = '© 2026 · KODARA · A PRACTICE BY LYNAE THOMAS',
  links = DEFAULT_LINKS,
  className,
}: KodaraFooterProps) {
  const [light, setLight] = useState(false)

  useEffect(() => {
    const stored = (() => {
      try { return localStorage.getItem('kodara-theme') === 'light' } catch { return false }
    })()
    setLight(stored)
  }, [])

  useEffect(() => {
    const root = document.querySelector('.dc-root.lv-a') ?? document.documentElement
    root.classList.toggle('theme-light', light)
    try { localStorage.setItem('kodara-theme', light ? 'light' : 'dark') } catch {}
  }, [light])

  return (
    <footer
      className={cn(
        'flex items-center justify-between px-[var(--pad-x)] py-[calc(40px*var(--sp))]',
        'font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)]',
        className,
      )}
    >
      <div>{copy}</div>

      <div className="flex items-center gap-8">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="transition-colors hover:text-[var(--accent)]">
            {l.label}
          </a>
        ))}

        <button
          type="button"
          onClick={() => setLight((v) => !v)}
          aria-label="Toggle theme"
          className="flex items-center gap-2 uppercase tracking-[0.12em] text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
        >
          <span className="flex h-[18px] w-[18px] items-center justify-center border border-[var(--line-strong)] text-[11px] leading-none text-[var(--accent)]">
            {light ? '☾' : '☀'}
          </span>
          {light ? 'Dark' : 'Light'}
        </button>
      </div>
    </footer>
  )
}

export { KodaraFooter }
export type { KodaraFooterProps }