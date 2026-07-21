import { Nav } from '@/components/Nav'
import OhHeyFooter from '@/components/layout/OhHeyFooter'

export default function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans tracking-normal antialiased wrap-anywhere">
      <Nav />
      {children}
      <div className="grid-bg-transparent">
        <OhHeyFooter />
      </div>
    </div>
  )
}
