import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-plum-dark text-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8'>
        <div>
          <div className='flex items-center gap-4'>
            <Image
              src='/images/WhatsApp%20Image%202026-10-05%20at%205.19.53%20PM.jpeg2.jpeg'
              alt='Trinity Christian School logo'
              width={64}
              height={64}
              className='h-16 w-16 rounded-full border border-white/70 bg-white object-cover'
            />
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.25em] text-gold-light'>Trinity Christian</p>
              <h3 className='font-display text-2xl font-semibold'>School</h3>
            </div>
          </div>
          <p className='mt-4 max-w-sm text-white/75'>
            Nurturing children in faith, excellence, and service in Nsoatre, Bono, Ghana.
          </p>
        </div>

        <div>
          <h4 className='mb-4 text-lg font-semibold'>Explore</h4>
          <ul className='space-y-2 text-white/80'>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/academics'>Academics</Link></li>
            <li><Link href='/admissions'>Admissions</Link></li>
            <li><Link href='/gallery'>Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className='mb-4 text-lg font-semibold'>Contact</h4>
          <ul className='space-y-2 text-white/80'>
            <li>Nsoatre, behind Adwinsa Hotel, Bono Region, Ghana</li>
            <li><a href='tel:+233247995835'>+233 24 799 5835</a></li>
            <li><a href='tel:+233249298640'>+233 24 929 8640</a></li>
            <li><a href='mailto:nsoatretrinitychristian@gmail.com'>nsoatretrinitychristian@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <p>© {new Date().getFullYear()} Trinity Christian School</p>
          <p>Learning with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
