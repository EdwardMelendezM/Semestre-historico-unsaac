import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import getCurrentUser from '../actions/getCurrentUser'
import ClientOnly from '../components/ClientOnly'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unsaac',
  description: 'Unsaac funcionalidad',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
          {children}
      </body>
    </html>
  )
}
