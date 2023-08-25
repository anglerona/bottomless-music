import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const font = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BottomlessMusic',
  description: 'Enjoy all music without any limits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
