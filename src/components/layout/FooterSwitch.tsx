'use client'

import { usePathname } from 'next/navigation'
import KodaraFooter from './Footer'
import OhHeyFooter from './OhHeyFooter'

export default function FooterSwitch() {
  const pathname = usePathname()
  if (pathname.startsWith('/consulting')) return <KodaraFooter />
  return <OhHeyFooter />
}
