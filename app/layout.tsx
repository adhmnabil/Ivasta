'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackgroundEffects from '@/components/ui/BackgroundEffects'
import LoadingScreen from '@/components/ui/LoadingScreen'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen on every visit
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
            <BackgroundEffects />
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  )
}
