import './globals.css'
import { Roboto } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlassian Mega Menu Clone',
  description: 'A clone of the atlassian websites Mega Menu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel='icon' href='/favicon.ico'/></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
