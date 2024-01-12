import type { Metadata } from 'next';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import './globals.css';

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
      <body id="body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
