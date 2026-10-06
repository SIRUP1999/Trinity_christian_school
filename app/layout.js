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
  title: 'Trinity Christian School | Nsoatre, Ghana',
  description:
    'A Christ-centred learning community in Nsoatre, Ghana, helping children grow in faith, academics, and character.',
  openGraph: {
    title: 'Trinity Christian School',
    description:
      'Christ-centred, child-focused education in Nsoatre, Bono, Ghana.',
    type: 'website',
    locale: 'en_GH',
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
