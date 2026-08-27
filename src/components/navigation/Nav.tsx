'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Lockup } from '../molecules/Lockup'
import { buttonVariants } from '../ui/button'

const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

const NAV_LINKS = COMING_SOON
  ? [
      { label: 'Videos', href: '/videos' },
      { label: "What's Coming", href: '#whats-coming' },
    ]
  : [
      { label: 'Videos', href: '/videos' },
      { label: 'Dev Log', href: '/dev-log' },
      { label: 'Domains', href: '/domains' },
      { label: 'About', href: '/about' },
    ]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint'

function ThemeToggle() {
  // Match FOUC script default (`light`) so SSR/hydration agree before sync
  const [isDark, setIsDark] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.dataset.theme !== 'light')
    setReady(true)
  }, [])

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev
      const theme = next ? 'dark' : 'light'
      document.documentElement.dataset.theme = theme
      document.documentElement.style.colorScheme = theme
      localStorage.setItem('ohl-theme', theme)
      return next
    })
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'inline-flex size-9 items-center justify-center border-2 border-paper-2 bg-paper text-ink',
        focusRing,
      )}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      {ready ? (
        isDark ? (
          <Sun size={16} className="fill-yellow-300 stroke-yellow-500" aria-hidden />
        ) : (
          <Moon size={16} className="fill-yellow-300 stroke-yellow-500" aria-hidden />
        )
      ) : null}
    </button>
  )
}

export function Nav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="sticky top-0 z-10 border-b border-paper-2">
      <div className="mx-auto flex max-w-8xl items-center gap-3.5 px-6 py-4">
        <Lockup variant="transparent" href="/" />

        <ul className="ml-auto list-none items-center gap-5 p-0 m-0 hidden md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`)

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-base font-semibold text-ink-soft no-underline hover:text-ink',
                    focusRing,
                    isActive && 'text-ink',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}

          <li>
            <Link
              href={COMING_SOON ? '#newsletter' : '#newsletter'}
              className={cn(
                buttonVariants({ variant: COMING_SOON ? 'primary' : 'display', size: 'sm' }),
                'py-3',
                focusRing,
              )}
            >
              {COMING_SOON ? 'Contribute' : 'Subscribe'}
            </Link>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
