"use client";

import { Dialog } from "@base-ui/react/dialog";
import type { ComponentProps, ReactNode } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModalProps = {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Click-outside / Esc dismiss. Default true. */
  dismissible?: boolean;
};

type ModalContentProps = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  /** primary (mint) or destructive (pink outline) */
  confirmVariant?: "primary" | "destructive";
  onConfirm?: () => void;
  onCancel?: () => void;
  /** Hide default footer actions */
  hideActions?: boolean;
  className?: string;
};

/**
 * Modal / Dialog — focus-trapped overlay.
 * Scrim rgba(0,0,0,.6); Silkscreen title; Quicksand body.
 * Cancel = ghost, confirm = primary or pink (destructive).
 */
function Modal({
  children,
  open,
  defaultOpen,
  onOpenChange,
  dismissible = true,
}: ModalProps) {
  return (
    <Dialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disablePointerDismissal={!dismissible}
    >
      {children}
    </Dialog.Root>
  );
}

function ModalTrigger({
  children,
  className,
  ...props
}: ComponentProps<typeof Dialog.Trigger>) {
  return (
    <Dialog.Trigger className={className} {...props}>
      {children}
    </Dialog.Trigger>
  );
}

function ModalContent({
  title,
  description,
  children,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  confirmVariant = "primary",
  onConfirm,
  onCancel,
  hideActions = false,
  className,
}: ModalContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/60",
          "transition-opacity duration-200 ease",
          "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
        )}
      />
      <Dialog.Popup
        data-theme="dark"
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2",
          "rounded-xl border border-line bg-card-2 p-5 shadow-[0_24px_64px_rgba(0,0,0,0.45)]",
          "outline-none",
          "transition-[opacity,transform] duration-[250ms] ease-out",
          "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
          "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
          className,
        )}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <Dialog.Title className="font-px text-[15px] uppercase tracking-wider text-ink">
            {title}
          </Dialog.Title>
          <Dialog.Close
            aria-label="Close"
            className="shrink-0 cursor-pointer border-0 bg-transparent p-0.5 text-ink-mute transition-colors hover:text-ink"
          >
            <X size={16} strokeWidth={2.5} aria-hidden />
          </Dialog.Close>
        </div>

        {description != null && (
          <Dialog.Description className="mb-4 font-sans text-sm leading-relaxed text-ink-soft">
            {description}
          </Dialog.Description>
        )}

        {children}

        {!hideActions && (
          <div className="mt-5 flex items-center justify-end gap-2.5">
            <Dialog.Close
              onClick={onCancel}
              render={<Button variant="ghost" size="sm" />}
            >
              {cancelLabel}
            </Dialog.Close>
            <Dialog.Close
              onClick={onConfirm}
              render={
                <Button
                  variant={
                    confirmVariant === "destructive" ? "accent" : "primary"
                  }
                  size="sm"
                />
              }
            >
              {confirmLabel}
            </Dialog.Close>
          </div>
        )}
      </Dialog.Popup>
    </Dialog.Portal>
  );
}

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

export { Modal };
export type { ModalProps, ModalContentProps };
