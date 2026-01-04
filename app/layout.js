import { Inter } from 'next/font/google'
import './globals.css'
import { icons } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NECOTION - AI-Powered Content Automation',
  description: 'Transform your content creation with AI-driven automation, expert freelance teams, and full transparency.',
  icons: {
    icon: "/icon.png",
    apple: "apple-icon.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}