import './globals.css'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://trinityschoolnsoatre.com'),
  title: {
    default: 'Trinity Christian School Nsoatre | Private Christian School in Ghana',
    template: '%s | Trinity Christian School Nsoatre',
  },
  description:
    'Trinity Christian School Nsoatre is a Christ-centred private Christian school in Ghana, offering nurturing learning for creche, nursery, KG, primary, and JHS students.',
  applicationName: 'Trinity Christian School Nsoatre',
  category: 'education',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Trinity Christian School Nsoatre',
    description:
      'A faith-based private Christian school in Nsoatre, Bono Region, Ghana, helping children thrive academically, spiritually, and socially.',
    type: 'website',
    locale: 'en_GH',
    siteName: 'Trinity Christian School Nsoatre',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${dmSans.variable} ${playfair.variable} bg-paper text-ink`}>
        <div className='min-h-screen bg-paper'>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
