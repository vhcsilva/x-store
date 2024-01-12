import type { Metadata } from 'next';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import './globals.css';
import RootProvider from "@/components/RootProvider";

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
        <RootProvider>
          <Navbar />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}
