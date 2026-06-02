import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'


export interface TabItem {
    label:  string
    count?: number
  }
  
  export interface TabsProps {
    items:      TabItem[]
    active?:    number
    variant?:   'default' | 'underline'
    onChange?:  (index: number) => void
    className?: string
  }
  
  const tabsContainerVariants = cva(
    'inline-flex',
    {
      variants: {
        variant: {
          default:   'border border-line-strong',
          underline: 'border-b border-line',
        },
      },
      defaultVariants: { variant: 'default' },
    }
  )


const tabItemVariants = cva(
    'inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs bg-transparent border-none cursor-pointer whitespace-nowrap transition-colors duration-100',
    {
      variants: {
        variant: {
          default:   'border-r border-line-strong last:border-r-0',
          underline: 'border-b-2 border-transparent -mb-px pb-[6px]',
        },
        active: {
          true:  '',
          false: '',
        },
      },
      compoundVariants: [
        { variant: 'default',   active: false, class: 'text-ink-soft hover:bg-paper-2 hover:text-ink'   },
        { variant: 'default',   active: true,  class: 'bg-ink text-white'                               },
        { variant: 'underline', active: false, class: 'text-ink-soft hover:text-ink'                    },
        { variant: 'underline', active: true,  class: 'text-ink border-b-accent'                        },
      ],
      defaultVariants: { variant: 'default', active: false },
    }
  )
  
const Tabs = ({ items, active = 0, variant = 'default', onChange, className }: TabsProps) => {
  const [current, setCurrent] = React.useState(active)

  const handleClick = (i: number) => {
    setCurrent(i)
    onChange?.(i)
  }

  return (
    <div className={cn(tabsContainerVariants({ variant }), className)}>
      {items.map((item, i) => (
        <button
          key={item.label}
          className={tabItemVariants({ variant, active: current === i })}
          onClick={() => handleClick(i)}
        >
          {item.label}
          {item.count != null && (
            <span className="text-xxs opacity-60">{item.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}

export default Tabs