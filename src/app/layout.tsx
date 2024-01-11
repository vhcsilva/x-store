import type { Metadata } from 'next';
import './globals.css';
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: 'LayerX - Store',
    icons: {
        icon: [{ url: '/favicon.ico' }, { url: '/icon.svg' }],
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
