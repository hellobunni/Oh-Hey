'use client'

import { usePathname } from 'next/navigation'
import KodaraFooter from './Footer'
import OhHeyFooter from './OhHeyFooter'

const CONSULTING_ROUTES = ['/consulting']

export default function FooterSwitch() {
  const pathname = usePathname()
  if (CONSULTING_ROUTES.includes(pathname)) return <KodaraFooter />
  return <OhHeyFooter />
}
