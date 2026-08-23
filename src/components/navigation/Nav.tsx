"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Lockup } from "../molecules/Lockup";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Videos", href: "/videos" },
  { label: "Dev Log", href: "/dev-log" },
  { label: "Domains", href: "/domains" },
  { label: "About", href: "/about" },
];

const MENU_ID = "primary-nav-menu";

const iconButton =
  "border-2 py-2 px-2.5 bg-paper-2/40 border-accent-soft cursor-pointer";

export function Nav() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // usePathname() is null outside a router (Storybook, tests) — never let isActive throw.
  const pathname = usePathname() ?? "";

  useEffect(() => {
    // Sync with whatever data-theme the FOUC script already set
    setIsDark(document.documentElement.dataset.theme !== "light");
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navigating away should never leave the drawer hanging open.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      const theme = next ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
      localStorage.setItem("ohl-theme", theme);
      return next;
    });
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav
      aria-label="Main"
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,backdrop-filter,border-color] duration-200",
        // An open drawer needs an opaque bar even at the top of the page.
        scrolled || menuOpen
          ? "border-ink bg-paper/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="site-inner py-4 px-6 flex items-center gap-3">
        <Lockup variant="transparent" />

        {/* Desktop */}
        <div className="ml-auto hidden md:flex gap-5 items-center text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-base font-semibold hover:text-ink",
                isActive(link.href) ? "text-ink" : "text-ink-soft",
              )}
            >
              {link.label}
            </Link>
          ))}
          {/* `render` makes the Button *be* the anchor — no <a> inside a <button>. */}
          <Button
            render={<Link href="#newsletter" />}
            variant="display"
            className="py-2"
          >
            SUBSCRIBE
          </Button>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        {/* Mobile */}
        <div className="ml-auto flex md:hidden items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            className={iconButton}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id={MENU_ID}
        hidden={!menuOpen}
        className="md:hidden border-t border-ink bg-paper/95 backdrop-blur-md"
      >
        <div className="site-inner flex flex-col px-6 py-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "py-3 text-base font-semibold hover:text-ink",
                isActive(link.href) ? "text-ink" : "text-ink-soft",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            render={<Link href="#newsletter" />}
            variant="display"
            className="my-3 self-start py-2"
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </nav>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  const Icon = isDark ? Sun : Moon;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={iconButton}
    >
      <Icon strokeWidth={2} size={16} className="fill-amber-500" />
    </button>
  );
}
