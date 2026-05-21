import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'oh-hey-lynae',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 font-sans antialiased [overflow-wrap:anywhere]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
