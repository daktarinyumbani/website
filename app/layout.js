"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daktari Nyumbani - Healthcare at Your Doorstep',
  description: 'Professional healthcare services delivered to your home. Connect with medical professionals, book appointments, and access quality healthcare services.',
}

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-2">
                <Image src="/images/daktari-logo.jpeg" alt="Daktari Nyumbani Logo" width={100} height={100} className="rounded-full" />
                <Link href="/" className="text-2xl font-bold text-orange-500">
                  Daktari Nyumbani App
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-blue-600 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:space-x-8 ml-auto">
                <Link href="/" className="inline-flex items-center px-1 pt-1 text-orange-500 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/about" className="inline-flex items-center px-1 pt-1 text-orange-500 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link href="/mission-vision" className="inline-flex items-center px-1 pt-1 text-orange-500 hover:text-blue-600 font-medium">
                  Mission & Vision
                </Link>
                <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-orange-500 hover:text-blue-600 font-medium">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-orange-500 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 text-orange-500 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link href="/mission-vision" className="block px-3 py-2 text-orange-500 hover:text-blue-600 font-medium">
                  Mission & Vision
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-orange-500 hover:text-blue-600 font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center flex flex-col items-center gap-2">
              <p>&copy; {new Date().getFullYear()} Daktari Nyumbani. All rights reserved.</p>
              <a href="/privacy-policy" className="text-blue-400 hover:underline hover:text-blue-200 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
