import type { Metadata } from 'next'
import ComingSoonClient from '@/components/ComingSoonClient'

export const metadata: Metadata = {
  title: 'oh-hey-lynae — coming soon',
  description:
    'A logbook of building, lifting, drawing, and obsessing — by Lynae Thomas. Launching soon.',
}

export default function ComingSoonPage() {
  return <ComingSoonClient />
}
