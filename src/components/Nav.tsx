import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'Tech', href: '/tech' },
  { label: 'Fitness', href: '/fitness' },
  { label: 'Creative', href: '/creative' },
  { label: 'Nerd Stuff', href: '/nerd-stuff' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className={`font-black text-lg tracking-tight transition-colors ${
            scrolled ? 'text-zinc-900 hover:text-zinc-600' : 'text-white hover:text-zinc-200'
          }`}
        >
          oh-hey-lynae
        </Link>
        <a
          href="/work-with-me"
          className={`text-sm font-semibold transition-colors ${
            scrolled ? 'text-zinc-900 hover:text-zinc-500' : 'text-white hover:text-zinc-200'
          }`}
        >
          Work with me
        </a>
      </nav>
    </header>
  )
}
