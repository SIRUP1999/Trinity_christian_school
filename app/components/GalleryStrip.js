'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import galleryImages from '../data/galleryImages'

export default function GalleryStrip() {
  const track = useRef(null)
  const [paused, setPaused] = useState(false)

  // Duplicate images so the loop is seamless
  const items = [...galleryImages, ...galleryImages]

  return (
    <div
      className='relative overflow-hidden'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* fade edges */}
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#f7f9fc] to-transparent sm:block' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-[#f7f9fc] to-transparent sm:block' />

      <div
        ref={track}
        className='gallery-strip flex gap-5 py-2'
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {items.map(({ src, alt }, i) => (
          <Link
            key={i}
            href='/gallery'
            className='group relative h-[min(56vw,200px)] w-[min(78vw,280px)] flex-shrink-0 overflow-hidden rounded-[20px] border border-border bg-white shadow-school sm:h-[200px] sm:w-[280px]'
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes='280px'
              className='object-cover transition duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-plum-dark/0 transition duration-300 group-hover:bg-plum-dark/30' />
            <span className='absolute inset-0 flex items-end p-4 opacity-0 transition duration-300 group-hover:opacity-100'>
              <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-plum-dark'>
                {alt}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
