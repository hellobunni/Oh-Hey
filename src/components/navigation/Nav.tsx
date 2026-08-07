'use client'
import { useEffect, useState } from "react";
import { Lockup } from "../molecules/Lockup";
import Link from "next/link";
import { Button } from "../ui/button";


const NAV_LINKS = [
  { label: 'Videos', href: '/videos' },
  { label: 'Dev Log', href: '/dev-log' },
  { label: 'Domains', href: '/domains' },
  { label: 'About', href: '/about' },
]

export function Nav() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync with whatever data-theme the FOUC script already set
    setIsDark(document.documentElement.dataset.theme !== 'light');
  }, []);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      const theme = next ? 'dark' : 'light';
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
      localStorage.setItem('ohl-theme', theme);
      return next;
    });
  }
  return (
<nav className="sticky top-0 z-10">
  <div className="max-w-8xl mx-auto py-4 px-6 flex items-center gap-3.5">
    <Lockup variant="transparent" />
    <div className="border border-blue-500 ml-auto flex gap-5 items-center text-sm">
      {NAV_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="text-ink-soft text-base font-semibold hover:text-ink">{link.label}</Link>
      ))}
      <Button variant="display">
        <Link href="#newsletter">SUBSCRIBE</Link>
      </Button>
      <a className="sub-btn" href="ohheylynae Home.html#newsletter">SUBSCRIBE</a>
      <button onClick={toggleTheme} aria-label="Toggle theme">{isDark ? '☀' : '🌙'}</button>
    </div>
  </div>
</nav>
  )
}