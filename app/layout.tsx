import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display, Noto_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-serif',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yala Safari - Experience the Wild Heart of Sri Lanka',
  description: 'Discover the untamed beauty of Yala National Park with expert-guided safari tours. Witness leopards, elephants, and exotic wildlife in their natural habitat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${notoSans.variable} font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  )
}
