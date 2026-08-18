"use client";

import { CalendarPlus } from "lucide-react";
import type { KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

type ScheduleItem = {
  day: string;
  /** Empty/undefined → "no stream today" (non-interactive) */
  detail?: string | null;
  /** Mint left-border + tinted bg + TODAY tag + one-shot pulse */
  today?: boolean;
  /** Static 4% white highlight (e.g. current stream day) — no border */
  selected?: boolean;
  /** Row link / add-to-calendar target — enables hover + click */
  href?: string;
  onAddToCalendar?: () => void;
};

type SchedulePanelProps = {
  items: ScheduleItem[];
  title?: string;
  className?: string;
};

/**
 * SchedulePanel — weekly stream times.
 * Today: mint accent + one-shot pulse. Interactive rows reveal add-to-calendar on hover.
 * Empty rows are italic / muted and never clickable.
 */
function SchedulePanel({
  items,
  title = "SCHEDULE",
  className,
}: SchedulePanelProps) {
  return (
    <div
      data-theme="dark"
      className={cn(
        "flex w-[280px] flex-col gap-0.5 rounded-[14px] bg-card-2 px-5 py-[18px]",
        className,
      )}
    >
      <div className="mb-2 font-pixel text-sm text-link">{title}</div>

      {items.length === 0 ? (
        <div className="px-2.5 py-2 font-sans text-xs font-semibold italic text-[#5c5875]">
          no stream today
        </div>
      ) : (
        items.map((item) => <ScheduleRow key={item.day} item={item} />)
      )}
    </div>
  );
}

function ScheduleRow({ item }: { item: ScheduleItem }) {
  const { day, detail, today, selected, href, onAddToCalendar } = item;
  const empty = detail == null || detail === "";
  const interactive = !empty && Boolean(href || onAddToCalendar);

  const activate = () => {
    if (onAddToCalendar) onAddToCalendar();
    else if (href) window.open(href, "_blank", "noopener,noreferrer");
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  };

  const rowClass = cn(
    "group/row relative -mx-2.5 flex items-center justify-between gap-2 rounded-md px-2.5 py-2",
    "font-sans text-3nderline transition-colors duration-150 ease",
    today &&
      "animate-[today-pulse_1.2s_ease-out_1] border-l-[3px] border-primary bg-primary-soft font-bold text-white",
    !today && !empty && "font-semibold text-white",
    !today && selected && "bg-white/[0.04]",
    interactive && "cursor-pointer hover:bg-white/[0.04]",
    empty && "text-xs font-semibold italic text-[#5c5875]",
  );

  const content = (
    <>
      <span className="flex items-baseline gap-1.5">
        <span>{day}</span>
        {today && (
          <span className="font-sans text-[10px] font-bold uppercase tracking-wide text-primary">
            TODAY
          </span>
        )}
      </span>

      <span
        className={cn(
          "flex items-center gap-2",
          empty && "italic",
          today && !empty && "font-bold text-ink-2",
          !today && !empty && "font-semibold text-ink-soft",
        )}
      >
        <span>{empty ? "no stream today" : detail}</span>
        {interactive && (
          <button
            type="button"
            aria-label={`Add ${day} to calendar`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              activate();
            }}
            className={cn(
              "shrink-0 cursor-pointer border-0 bg-transparent p-0.5 text-primary",
              "opacity-0 transition-opacity duration-150 ease group-hover/row:opacity-100",
            )}
          >
            <CalendarPlus size={14} strokeWidth={2.5} aria-hidden />
          </button>
        )}
      </span>
    </>
  );

  if (interactive && href) {
    return (
      <a href={href} className={rowClass}>
        {content}
      </a>
    );
  }

  if (interactive) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={rowClass}
        onClick={activate}
        onKeyDown={onKeyDown}
      >
        {content}
      </div>
    );
  }

  return <div className={rowClass}>{content}</div>;
}

export { SchedulePanel };
export type { ScheduleItem, SchedulePanelProps };
