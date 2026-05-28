import React from 'react'
import { cn } from '@/lib/utils'

type FieldSize    = 'sm' | 'md' | 'lg'
type FieldState   = 'focus' | 'error' | 'success' | 'disabled'
type FieldLayout  = 'stacked' | 'inline'

interface FieldProps {
  label: string
  required?: boolean
  size?: FieldSize
  state?: FieldState
  layout?: FieldLayout
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  suffixAction?: boolean
  prefixAction?: boolean
  helper?: string
  error?: string
  success?: string
  maxLength?: number
  currentLength?: number
  children: React.ReactElement<React.ComponentProps<'input'> | React.ComponentProps<'textarea'> | React.ComponentProps<'select'>>
  className?: string
}

function Field({
  label,
  required,
  size,
  state,
  layout,
  prefix,
  suffix,
  suffixAction,
  prefixAction,
  helper,
  error,
  success,
  maxLength,
  currentLength,
  children,
  className,
}: FieldProps) {
  const id = React.useId()
  const inputId = `field-${id}`
  const resolvedState = error ? 'error' : state

  const child = React.cloneElement(children, {
    id: inputId,
    'aria-invalid': resolvedState === 'error' ? 'true' : undefined,
    'aria-describedby': [
      error   ? `${inputId}-err`  : '',
      success ? `${inputId}-ok`   : '',
      helper  ? `${inputId}-hint` : '',
    ].filter(Boolean).join(' ') || undefined,
    ...children.props,
  } as React.HTMLAttributes<HTMLElement>)

  return (
    <div className={cn(
      'tk-field',
      size    && size !== 'md' && `size-${size}`,
      resolvedState             && `state-${resolvedState}`,
      layout  && layout !== 'stacked' && `layout-${layout}`,
      className
    )}>
      <label className="tk-field-label" htmlFor={inputId}>
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
      </label>

      <div className="tk-field-control">
        {prefix && (
          <span className={cn('tk-field-prefix', prefixAction && 'action')}>
            {prefix}
          </span>
        )}
        {child}
        {suffix && (
          <span className={cn('tk-field-suffix', suffixAction && 'action')}>
            {suffix}
          </span>
        )}
      </div>

      {error   && <span id={`${inputId}-err`}  className="tk-field-error"   role="alert">{error}</span>}
      {success && <span id={`${inputId}-ok`}   className="tk-field-success">{success}</span>}
      {helper  && <span id={`${inputId}-hint`} className="tk-field-helper">{helper}</span>}
      {maxLength != null && currentLength != null && (
        <span className="tk-field-counter">{currentLength} / {maxLength}</span>
      )}
    </div>
  )
}

export { Field }
export type { FieldProps, FieldSize, FieldState, FieldLayout }
