import React from 'react'
import { cn, cva } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export type FieldSize   = 'sm' | 'md' | 'lg'
export type FieldState  = 'focus' | 'error' | 'success' | 'disabled'
export type FieldLayout = 'stacked' | 'inline'

export interface FieldProps {
  label:          string
  required?:      boolean
  size?:          FieldSize
  state?:         FieldState
  layout?:        FieldLayout
  prefix?:        React.ReactNode
  suffix?:        React.ReactNode
  suffixAction?:  boolean
  prefixAction?:  boolean
  onSuffixClick?: () => void
  onPrefixClick?: () => void
  helper?:        string
  error?:         string
  success?:       string
  maxLength?:     number
  currentLength?: number
  children:       React.ReactElement<React.ComponentProps<'input'> | React.ComponentProps<'textarea'> | React.ComponentProps<'select'>>
  className?:     string
}

// ─── Variants ─────────────────────────────────────────────────────────────────
// Quicksand throughout — form UI is never pixel type.
// Focus holds mint; error is red in light / pink in dark; borders flip via tokens.

const wrapperVariants = cva('flex gap-1', {
  variants: {
    layout: {
      stacked: 'flex-col',
      inline:  'flex-row items-center gap-4',
    },
  },
  defaultVariants: { layout: 'stacked' },
})

const labelVariants = cva(
  'font-sans font-bold text-[11px] tracking-[0.06em] uppercase flex items-center gap-1.5',
  {
    variants: {
      state: {
        default:  'text-ink-soft',
        focus:    'text-ink',
        error:    'text-red-600 dark:text-accent',
        success:  'text-ink-soft',
        disabled: 'text-ink-mute',
      },
      layout: {
        stacked: 'mb-0.5',
        inline:  'shrink-0 min-w-[96px]',
      },
    },
    defaultVariants: { state: 'default', layout: 'stacked' },
  }
)

const controlVariants = cva(
  [
    'flex items-stretch rounded-lg border-2 bg-transparent dark:bg-deep',
    'transition-colors duration-[var(--dur-2)] ease-[var(--ease-out)]',
  ].join(' '),
  {
    variants: {
      state: {
        default:  'border-line-strong dark:border-ink-mute focus-within:border-primary',
        focus:    'border-primary',
        error:    'border-red-600 dark:border-alert focus-within:border-red-600 dark:focus-within:border-alert',
        success:  'border-[#059669] focus-within:border-[#059669]',
        disabled: 'border-line-strong/60 dark:border-transparent bg-paper-2 dark:bg-card opacity-100',
      },
      layout: {
        stacked: '',
        inline:  'flex-1',
      },
    },
    defaultVariants: { state: 'default', layout: 'stacked' },
  }
)

const inputVariants = cva(
  'flex-1 min-w-0 font-sans font-semibold text-ink bg-transparent border-0 outline-none placeholder:text-ink-mute',
  {
    variants: {
      size: {
        sm: 'px-2.5 py-1.5 text-[11px]',   // 6×10
        md: 'px-3.5 py-2.5 text-[13px]',   // 10×14
        lg: 'px-[18px] py-3.5 text-[15px]', // 14×18
      },
      state: {
        default:  '',
        focus:    '',
        error:    '',
        success:  '',
        disabled: 'text-ink-mute dark:text-ink-soft cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  }
)

const adornmentVariants = cva(
  'inline-flex items-center font-sans font-semibold text-ink-soft bg-paper-2 dark:bg-card shrink-0 whitespace-nowrap select-none',
  {
    variants: {
      size: {
        sm: 'px-2 text-[10px]',
        md: 'px-3 text-[11px]',
        lg: 'px-4 text-[13px]',
      },
      action: {
        true:  'cursor-pointer text-primary hover:bg-primary-soft transition-colors duration-[var(--dur-1)]',
        false: '',
      },
    },
    defaultVariants: { size: 'md', action: false },
  }
)

const subLabelVariants = cva('font-sans font-semibold text-[11px]', {
  variants: {
    type: {
      helper:  'text-ink-soft',
      error:   'text-red-600 dark:text-alert',
      success: 'text-[#059669]',
      counter: 'text-ink-mute text-right tabular-nums',
    },
  },
})

// ─── Component ────────────────────────────────────────────────────────────────

function Field({
  label,
  required,
  size = 'md',
  state,
  layout = 'stacked',
  prefix,
  suffix,
  suffixAction,
  prefixAction,
  onSuffixClick,
  onPrefixClick,
  helper,
  error,
  success,
  maxLength,
  currentLength,
  children,
  className,
}: FieldProps) {
  const id           = React.useId()
  const inputId      = `field-${id}`
  const resolvedState: FieldState | 'default' = error ? 'error' : (state ?? 'default')

  const isSelect   = (children as React.ReactElement).type === 'select'
  const isTextarea = (children as React.ReactElement).type === 'textarea'

  const child = React.cloneElement(children, {
    id:        inputId,
    disabled:  resolvedState === 'disabled' ? true : children.props.disabled,
    className: cn(
      inputVariants({ size, state: resolvedState as FieldState }),
      isTextarea && 'resize-vertical min-h-[70px]',
      isSelect   && 'appearance-none cursor-pointer pr-9',
      children.props.className,
    ),
    style: isSelect ? {
      backgroundImage:    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236d6880' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
      backgroundRepeat:   'no-repeat',
      backgroundPosition: 'right 14px center',
      ...children.props.style,
    } : children.props.style,
    'aria-invalid':     resolvedState === 'error' ? ('true' as const) : undefined,
    'aria-describedby': [
      error   ? `${inputId}-err`  : '',
      success ? `${inputId}-ok`   : '',
      helper  ? `${inputId}-hint` : '',
    ].filter(Boolean).join(' ') || undefined,
  } as React.HTMLAttributes<HTMLElement>)

  return (
    <div className={cn(wrapperVariants({ layout }), className)}>
      <label
        className={labelVariants({ state: resolvedState as FieldState, layout })}
        htmlFor={inputId}
      >
        {label}
        {required && <span className="text-red-600 dark:text-alert" aria-hidden="true">*</span>}
      </label>

      <div className={controlVariants({ state: resolvedState as FieldState, layout })}>
        {prefix && (
          <span
            className={cn(adornmentVariants({ size, action: !!prefixAction }), 'rounded-l-[6px] border-r-2 border-line-strong dark:border-ink-mute')}
            onClick={onPrefixClick}
            role={onPrefixClick ? 'button' : undefined}
            tabIndex={onPrefixClick ? 0 : undefined}
          >
            {prefix}
          </span>
        )}

        {child}

        {suffix && (
          <span
            className={cn(adornmentVariants({ size, action: !!suffixAction }), 'rounded-r-[6px] border-l-2 border-line-strong dark:border-ink-mute')}
            onClick={onSuffixClick}
            role={onSuffixClick ? 'button' : undefined}
            tabIndex={onSuffixClick ? 0 : undefined}
          >
            {suffix}
          </span>
        )}
      </div>

      {error   && <span id={`${inputId}-err`}  className={subLabelVariants({ type: 'error' })}   role="alert">{error}</span>}
      {success && <span id={`${inputId}-ok`}   className={subLabelVariants({ type: 'success' })}>{success}</span>}
      {helper  && <span id={`${inputId}-hint`} className={subLabelVariants({ type: 'helper' })}>{helper}</span>}
      {maxLength != null && currentLength != null && (
        <span className={subLabelVariants({ type: 'counter' })}>{currentLength} / {maxLength}</span>
      )}
    </div>
  )
}

export { Field }
