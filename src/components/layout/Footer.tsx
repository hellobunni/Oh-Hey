import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface KodaraFooterProps {
  copy?: string
  links?: { label: string; href: string }[]
  className?: string
}

const DEFAULT_LINKS = [
  { label: 'EMAIL', href: 'mailto:kodaraadvisory@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/bryannagardner/' },
  { label: 'GITHUB', href: 'https://github.com/hellobunni' },
  { label: 'CLIENT WORKSPACE ↗', href: '/consulting/clients' },
]

export default function KodaraFooter({
  copy = '© 2026 · KODARA · A PRACTICE BY Bryanna Lynae',
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
    const root = document.querySelector('.dc-root.kodara') ?? document.documentElement
    root.classList.toggle('theme-light', light)
    try { localStorage.setItem('kodara-theme', light ? 'light' : 'dark') } catch {}
  }, [light])

  return (
    <footer
      className={cn(
        'flex items-center justify-between px-20 py-3',
        'font-mono text-[9.25px] uppercase tracking-wider text-ink-soft',
        className,
      )}
    >
      <div>{copy}</div>

      <div className="flex items-center gap-4 ">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="transition-colors hover:text-accent">
            {l.label}
          </a>
        ))}

        <button
          type="button"
          onClick={() => setLight((v) => !v)}
          aria-label="Toggle theme"
          className="flex items-center gap-2 uppercase tracking-wider text-ink-soft transition-colors hover:text-accent]"
        >
          <span className="flex h-[18px] w-[18px] items-center justify-center border border-line-strong text-xs leading-none text-accent">
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