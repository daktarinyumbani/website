import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daktari Nyumbani - Healthcare at Your Doorstep',
  description: 'Professional healthcare services delivered to your home. Connect with medical professionals, book appointments, and access quality healthcare services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
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
