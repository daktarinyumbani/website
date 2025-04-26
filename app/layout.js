import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daktari Nyumbani - Healthcare at Your Doorstep',
  description: 'Professional healthcare services delivered to your home. Connect with medical professionals, book appointments, and access quality healthcare services.',
}

export default function RootLayout({ children }) {
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
