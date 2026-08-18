"use client";
import { useEffect, useState } from "react";
import { Lockup } from "../molecules/Lockup";
import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Videos", href: "/videos" },
  { label: "Dev Log", href: "/dev-log" },
  { label: "Domains", href: "/domains" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <nav
      className={cn(
        "sticky top-0 z-10 border-b transition-[background-color,backdrop-filter,border-color] duration-200",
        scrolled
          ? "border-ink bg-paper/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="max-w-8xl mx-auto py-4 px-6 flex items-center gap-3">
        <Lockup variant="transparent" />
        <div className="ml-auto flex gap-5 items-center text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft text-base font-semibold hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="display" className="py-2">
            <Link href="#newsletter">SUBSCRIBE</Link>
          </Button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="border-2 py-2 px-2.5 bg-paper-2/40 border-accent-soft cursor-pointer"
          >
            {isDark ? (
              <Sun
                stroke="2"
                size={16}
                className="fill-amber-500 border-none"
              />
            ) : (
              <Moon
                stroke="2"
                size={16}
                className="fill-amber-500 border-none"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
