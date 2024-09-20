import RouteGuard from '@/components/RouteGuard/RouteGuard'
import Header from '@/components/ui/Header/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RouteGuard>
          <Header />
          <main>{children}</main>
        </RouteGuard>
      </body>
    </html>
  )
}
