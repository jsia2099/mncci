import './globals.css'
import '../styles/hero.css'
import { Suspense } from 'react'

export const metadata = {
  title: 'Metro Naga Chamber of Commerce and Industry',
  description: 'Empowering businesses for a better tomorrow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}


