"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// ─── Line types ───────────────────────────────────────────────────────────────

/** `$ text` — accent prompt + command */
export type CommandLine = { type: "command"; text: string };

/** Dimmed comment text — `// …` style */
export type CommentLine = { type: "comment"; text: string };

/** Plain output line, optionally muted */
export type OutputLine = { type: "output"; text: string; muted?: boolean };

/** Columnar `label    value` rows, like `ls -l` output */
export type ListingLine = {
  type: "listing";
  items: Array<{ label: string; value: string }>;
  labelWidth?: number; // px, default 80
};

/** Emoji status rows — `emoji  label    value` */
export type StatusLine = {
  type: "status";
  items: Array<{ emoji: string; label: string; value?: string }>;
};

/** Empty spacer line */
export type GapLine = { type: "gap" };

/** Blinking `$ _` cursor — always last */
export type CursorLine = { type: "cursor" };

export type TerminalLine =
  | CommandLine
  | CommentLine
  | OutputLine
  | ListingLine
  | StatusLine
  | GapLine
  | CursorLine;

// ─── Component ────────────────────────────────────────────────────────────────

export interface TerminalCardProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
}

function BlinkCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return <span style={{ opacity: on ? 1 : 0 }}>_</span>;
}

function RenderLine({ line }: { line: TerminalLine }) {
  switch (line.type) {
    case "command":
      return (
        <div>
          <span className="text-pink select-none">$ </span>
          {line.text}
        </div>
      );

    case "comment":
      return <div className="text-ink-soft">{line.text}</div>;

    case "output":
      return (
        <div className={line.muted ? "text-ink-mute" : "text-ink"}>
          {line.text}
        </div>
      );

    case "listing": {
      const w = line.labelWidth ?? 80;
      return (
        <>
          {line.items.map((item, i) => (
            <div key={i}>
              <span className="inline-block text-ink" style={{ width: w }}>
                {item.label}
              </span>
              <span className="text-ink-soft">{item.value}</span>
            </div>
          ))}
        </>
      );
    }

    case "status":
      return (
        <>
          {line.items.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="shrink-0 w-5">{item.emoji}</span>
              <span className="inline-block text-ink" style={{ width: 88 }}>
                {item.label}
              </span>
              {item.value && (
                <span className="text-ink-soft">{item.value}</span>
              )}
            </div>
          ))}
        </>
      );

    case "gap":
      return <div className="h-2" />;

    case "cursor":
      return (
        <div>
          <span className="text-pink select-none">$ </span>
          <BlinkCursor />
        </div>
      );
  }
}

export default function TerminalCard({
  lines,
  title,
  className,
}: TerminalCardProps) {
  return (
    <div className={cn("border-2 border-card bg-card-2", className)}>
      {/* Header */}
      <div className="flex items-center gap-[7px] px-4 py-[11px] border-b-2 border-card">
        {(["bg-accent", "bg-gold", "bg-primary"] as const).map((c, i) => (
          <span
            key={i}
            className={`w-[11px] h-[11px] rounded-full shrink-0 ${c}`}
          />
        ))}
        {title && (
          <span className="ml-auto font-mono text-xxs text-ink-mute tracking-wide">
            {title}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-4 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <RenderLine key={i} line={line} />
        ))}
      </div>
    </div>
  );
}
