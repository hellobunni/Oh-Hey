import { Link } from '@tanstack/react-router'

const links = [
  { label: 'Tech', href: '/tech' },
  { label: 'Fitness', href: '/fitness' },
  { label: 'Creative', href: '/creative' },
  { label: 'Nerd Stuff', href: '/nerd-stuff' },
]

const socials = [
  { label: 'X', href: 'https://x.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'GitHub', href: 'https://github.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <Link
            to="/"
            className="font-black text-sm tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            oh-hey-lynae
          </Link>
          <p className="text-xs text-zinc-400 mt-2">
            © {new Date().getFullYear()} Lynae. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              to={href as '/'}
              className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
