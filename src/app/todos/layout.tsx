import Header from '@/components/ui/Header/Header'

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <>
      <Header />
      {children}
    </>
  )
}
