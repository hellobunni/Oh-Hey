"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Check, Info, TriangleAlert, X } from "lucide-react";

import { cn } from "@/lib/utils";

type ToastTone = "success" | "error" | "info";

type ToastProps = {
  message: ReactNode;
  tone?: ToastTone;
  /** Auto-dismiss ms. 0 = persist. Defaults: success/info 4000, error 0. */
  duration?: number;
  dismissible?: boolean;
  /** Skip enter animation (static demos). */
  instant?: boolean;
  onDismiss?: () => void;
  className?: string;
};

type Phase = "enter" | "idle" | "exit";

const ENTER_MS = 300;
const EXIT_MS = 300;

const TONE = {
  success: {
    border: "border-l-primary",
    icon: Check,
    iconClass: "text-primary",
  },
  error: {
    border: "border-l-accent",
    icon: TriangleAlert,
    iconClass: "text-alert dark:text-accent",
  },
  info: {
    border: "border-l-link",
    icon: Info,
    iconClass: "text-link",
  },
} as const;

/**
 * Toast / Notification — system feedback (save / error / network).
 * Left-border accent only. Distinct from AlertToast (social/stream events).
 */
function Toast({
  message,
  tone = "success",
  duration,
  dismissible = true,
  instant = false,
  onDismiss,
  className,
}: ToastProps) {
  const resolvedDuration = duration ?? (tone === "error" ? 0 : 4000);
  const [phase, setPhase] = useState<Phase>(instant ? "idle" : "enter");
  const pausedRef = useRef(false);
  const remainingRef = useRef(resolvedDuration);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerStartedRef = useRef<number | null>(null);
  const exitingRef = useRef(false);

  const { border, icon: Icon, iconClass } = TONE[tone];

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    timerStartedRef.current = null;
  }, []);

  const beginExit = useCallback(() => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    clearTimer();
    setPhase("exit");
    window.setTimeout(() => onDismiss?.(), EXIT_MS);
  }, [clearTimer, onDismiss]);

  const startTimer = useCallback(
    (ms: number) => {
      if (ms <= 0 || exitingRef.current) return;
      clearTimer();
      remainingRef.current = ms;
      timerStartedRef.current = performance.now();
      timerRef.current = setTimeout(() => beginExit(), ms);
    },
    [beginExit, clearTimer],
  );

  useEffect(() => {
    if (instant) return;
    const id = window.setTimeout(() => setPhase("idle"), ENTER_MS);
    return () => window.clearTimeout(id);
  }, [instant]);

  useEffect(() => {
    if (phase !== "idle" || resolvedDuration <= 0 || pausedRef.current) return;
    startTimer(
      remainingRef.current > 0 ? remainingRef.current : resolvedDuration,
    );
    return clearTimer;
  }, [phase, resolvedDuration, startTimer, clearTimer]);

  const onPointerEnter = () => {
    if (phase === "exit") return;
    pausedRef.current = true;
    if (timerStartedRef.current != null && timerRef.current) {
      const elapsed = performance.now() - timerStartedRef.current;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
      clearTimer();
    }
  };

  const onPointerLeave = () => {
    if (phase === "exit") return;
    pausedRef.current = false;
    if (phase === "idle" && resolvedDuration > 0)
      startTimer(remainingRef.current);
  };

  const motionClass =
    phase === "enter"
      ? "animate-[toast-enter-right_300ms_ease_forwards]"
      : phase === "exit"
        ? "animate-[toast-exit-right_300ms_ease_forwards]"
        : "";

  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      aria-live={tone === "error" ? "assertive" : "polite"}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      data-theme="dark"
      className={cn(
        "flex w-fit max-w-sm items-start gap-2.5 border-l-[3px] bg-card-2 px-3.5 py-3",
        "font-sans text-sm font-semibold text-ink-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
        border,
        motionClass,
        className,
      )}
    >
      <Icon
        size={16}
        strokeWidth={2.5}
        className={cn("mt-0.5 shrink-0", iconClass)}
        aria-hidden
      />
      <div className="min-w-0 flex-1 leading-snug">{message}</div>
      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={beginExit}
          className="shrink-0 cursor-pointer border-0 bg-transparent p-0.5 text-ink-mute transition-opacity hover:text-ink hover:opacity-100"
        >
          <X size={14} strokeWidth={2.5} aria-hidden />
        </button>
      )}
    </div>
  );
}

/** Fixed top-right stack — newest first */
function ToastStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed right-4 top-4 z-50 flex flex-col-reverse items-end gap-2",
        "[&>*]:pointer-events-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { Toast, ToastStack };
export type { ToastProps, ToastTone };
