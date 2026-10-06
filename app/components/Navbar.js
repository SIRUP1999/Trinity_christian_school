'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-plum/80 backdrop-blur-md'>
      <nav className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-3 text-white'>
            <span className='school-logo-flipper' aria-hidden='true'>
              <span className='school-logo-rotator'>
                <span className='school-logo-face school-logo-face-front'>
                  <Image
                    src='/images/WhatsApp%20Image%202026-10-05%20at%205.19.53%20PM.jpeg2.jpeg'
                    alt=''
                    fill
                    sizes='44px'
                    priority
                    className='rounded-full border border-white/70 bg-white object-cover'
                  />
                </span>
                <span className='school-logo-face school-logo-face-back'>
                  <Image
                    src='/images/WhatsApp%20Image%202026-10-05%20at%205.19.53%20PM.jpeg'
                    alt=''
                    fill
                    sizes='44px'
                    className='rounded-full border border-white/70 bg-white object-cover'
                  />
                </span>
              </span>
            </span>
            <span className='leading-none'>
              <span className='block text-sm font-semibold tracking-wide'>Trinity Christian School</span>
              <span className='block text-[10px] uppercase tracking-[0.2em] text-white/75'>Nsoatre · Bono Region</span>
            </span>
          </Link>

          <div className='hidden items-center gap-1 md:flex'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-gold-light'
              >
                {item.label}
              </Link>
            ))}
            <Link
              href='/contact'
              className='ml-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-plum-dark transition hover:bg-gold-light'
            >
              Enquire now
            </Link>
          </div>

          <button
            type='button'
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white md:hidden'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className='mt-4 space-y-2 border-t border-white/10 pt-4 md:hidden'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='block rounded-2xl px-3 py-2 text-base font-medium text-white/90 transition hover:bg-white/10 hover:text-gold-light'
              >
                {item.label}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setIsOpen(false)}
              className='mt-2 block rounded-2xl bg-gold px-4 py-3 text-center text-sm font-semibold text-plum-dark'
            >
              Enquire now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
