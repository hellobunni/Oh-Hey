import { cn, cva } from '@/lib/utils'
import React from 'react'
export type StepStatus = 'done' | 'active' | 'pending'

export interface StepItem {
  label:  string
  status: StepStatus
}

export interface StepNavProps {
  steps:      StepItem[]
  className?: string
}

const stepVariants = cva(
  'relative flex flex-col gap-1.5 pt-4 font-mono text-sm font-medium',
  {
    variants: {
      status: {
        done:    'text-ink-soft',
        active:  'text-accent',
        pending: 'text-ink-mute',
      },
    },
  }
)

const stepBarVariants = cva(
  'absolute top-0 left-0 h-0.5',
  {
    variants: {
      status: {
        done:    'right-0 bg-ink',
        active:  'w-1/2 bg-accent',
        pending: 'right-0 bg-transparent',
      },
    },
  }
)
const StepNav = ({ steps, className }: StepNavProps) => {
    return (
        <div className={cn('grid grid-flow-col auto-cols-fr relative', className)}>
          {/* background track */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-line-strong" />
          {steps.map((step, i) => (
            <div key={step.label} className={stepVariants({ status: step.status })}>
              <div className={stepBarVariants({ status: step.status })} />
              <span className="text-[10px] tracking-[0.1em] uppercase text-current">
                {`STEP ${String(i + 1).padStart(2, '0')}`}
              </span>
              {step.label}
            </div>
          ))}
        </div>
      )
}

export default StepNav