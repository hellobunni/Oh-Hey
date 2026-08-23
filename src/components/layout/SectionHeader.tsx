import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SectionHeaderProps {
  num: string;
  title: string;
  action?: { label: string; href: string };
  className?: string;
}

function SectionHeader({ num, title, action, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between px-[clamp(20px,5vw,80px)]",
        "pt-14 pb-6 max-w-[1600px] mx-auto w-full mb-6",
        className,
      )}
    >
      <div className="flex items-baseline gap-0">
        <span className="font-pixel text-xs bg-paper-2 text-primary px-2.5 py-2.5 mr-3">
          {num}
        </span>
        <span className="font-pixel text-sm text-ink">{title}</span>
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-1.5 font-sans font-bold text-sm text-ink-soft hover:text-ink transition-colors duration-100"
        >
          {action.label.replace(/\s*→\s*$/, "")}
          <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
        </Link>
      )}
    </div>
  );
}

export { SectionHeader };
