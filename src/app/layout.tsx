import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Market Calculator',
  description: 'All simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main 
          className='flex justify-center items-center w-full h-screen bg-bgColorLight
           dark:bg-bgColorDark text-textWhite dark:text-textDark'
        >
          {children}
        </main>
      </body>
    </html>
  )
}
