import { HeadContent, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'oh-hey-lynae' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isConsulting = pathname === '/consulting' || pathname === '/questionnaire'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-zinc-900 font-sans antialiased [overflow-wrap:anywhere]">
        {!isConsulting && <Nav />}
        {children}
        {!isConsulting && <Footer />}
        <Scripts />
      </body>
    </html>
  )
}
