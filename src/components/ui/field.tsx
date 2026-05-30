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
  'font-mono text-xs font-medium tracking-wide uppercase flex items-center gap-1.5',
  {
    variants: {
      state: {
        default:  'text-ink-soft',
        focus:    'text-ink-soft',
        error:    'text-red-600',
        success:  'text-ink-soft',
        disabled: 'text-ink-soft',
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
  'flex items-stretch border transition-colors duration-200',
  {
    variants: {
      state: {
        default:  'border-line-strong focus-within:border-ink',
        focus:    'border-ink',
        error:    'border-red-600 focus-within:border-red-600',
        success:  'border-[#059669] focus-within:border-[#059669]',
        disabled: 'border-line-strong bg-paper-2 opacity-60',
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
  'flex-1 min-w-0 font-mono text-ink bg-transparent border-0 outline-none placeholder:text-ink-mute',
  {
    variants: {
      size: {
        sm: 'px-2.5 py-1.5 text-xs',
        md: 'px-3.5 py-2.5 text-[13px]',
        lg: 'px-[18px] py-3.5 text-[15px]',
      },
      state: {
        default:  '',
        focus:    '',
        error:    '',
        success:  '',
        disabled: 'cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  }
)

const adornmentVariants = cva(
  'inline-flex items-center font-mono text-ink-soft bg-paper-2 shrink-0 whitespace-nowrap select-none',
  {
    variants: {
      size: {
        sm: 'px-2 text-[10px]',
        md: 'px-3 text-xs',
        lg: 'px-4 text-[13px]',
      },
      action: {
        true:  'cursor-pointer text-accent hover:bg-accent-soft transition-colors duration-100',
        false: '',
      },
    },
    defaultVariants: { size: 'md', action: false },
  }
)

const subLabelVariants = cva('font-mono text-xs', {
  variants: {
    type: {
      helper:  'text-ink-soft',
      error:   'text-red-600',
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
    className: cn(
      inputVariants({ size, state: resolvedState as FieldState }),
      isTextarea && 'resize-vertical min-h-[96px]',
      isSelect   && 'appearance-none cursor-pointer pr-9',
      children.props.className,
    ),
    style: isSelect ? {
      backgroundImage:    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b6b66' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
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
        {required && <span className="text-red-600" aria-hidden="true">*</span>}
      </label>

      <div className={controlVariants({ state: resolvedState as FieldState, layout })}>
        {prefix && (
          <span
            className={cn(adornmentVariants({ size, action: !!prefixAction }), 'border-r border-line-strong')}
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
            className={cn(adornmentVariants({ size, action: !!suffixAction }), 'border-l border-line-strong')}
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
export type { FieldProps, FieldSize, FieldState, FieldLayout }
