'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import galleryImages from '../data/galleryImages'

const VISIBLE_IMAGE_COUNT = 6
const IMAGE_REFRESH_INTERVAL = 120_000

function PhotoCard({ image, className = '', style, tabIndex }) {
  const { src, alt, category, objectPosition } = image

  return (
    <Link
      href='/gallery'
      className={`group relative block aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[24px] border border-border bg-[#edf2f8] shadow-school ${className}`}
      style={style}
      tabIndex={tabIndex}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 82vw'
        className='object-cover transition duration-700 group-hover:scale-105'
        style={objectPosition ? { objectPosition } : undefined}
      />
      <span className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09245e]/90 via-[#09245e]/35 to-transparent p-4 pt-16 sm:p-5 sm:pt-20'>
        <span className='mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/80'>
          {category}
        </span>
        <span className='inline-block max-w-full rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-plum-dark shadow-sm sm:text-sm'>
          {alt}
        </span>
      </span>
    </Link>
  )
}

function getNextBatch(startIndex) {
  return Array.from(
    { length: Math.min(VISIBLE_IMAGE_COUNT, galleryImages.length) },
    (_, index) => galleryImages[(startIndex + index) % galleryImages.length],
  )
}

export default function GalleryPreview() {
  const [desktopImages, setDesktopImages] = useState(() =>
    getNextBatch(0),
  )

  useEffect(() => {
    if (
      galleryImages.length <= VISIBLE_IMAGE_COUNT ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    let nextStartIndex = VISIBLE_IMAGE_COUNT
    const intervalId = window.setInterval(() => {
      setDesktopImages(getNextBatch(nextStartIndex))
      nextStartIndex = (nextStartIndex + VISIBLE_IMAGE_COUNT) % galleryImages.length
    }, IMAGE_REFRESH_INTERVAL)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div>
      <div className='section-shell hidden md:block'>
        <div className='grid grid-cols-2 gap-5 xl:grid-cols-3'>
          {desktopImages.map((image, index) => (
            <PhotoCard
              key={image.src}
              image={image}
              className='gallery-preview-card'
              style={{ animationDelay: `${index * 70}ms` }}
            />
          ))}
        </div>
      </div>

      <div className='gallery-preview-marquee overflow-hidden md:hidden'>
        <div className='gallery-preview-track flex w-max'>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className='gallery-preview-marquee-group flex flex-shrink-0 gap-4'
            >
              {galleryImages.map((image) => (
                <PhotoCard
                  key={`${copy}-${image.src}`}
                  image={image}
                  className='w-[min(82vw,340px)]'
                  tabIndex={copy === 1 ? -1 : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
