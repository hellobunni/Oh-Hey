import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Kodara · Design + Engineering',
    template: '%s · Kodara',
  },
  description: 'Frontend consulting by Bryanna Lynae — design systems, component architecture, and engineering leadership for product teams.',
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return children
}
