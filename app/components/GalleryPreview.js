'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import galleryImages from '../data/galleryImages'

const VISIBLE_IMAGE_COUNT = 6
const POSITION_ROTATION_INTERVAL = 6_000
const IMAGE_REFRESH_INTERVAL = 120_000

function PhotoCard({ image, className = '', style, tabIndex, dataGalleryCard }) {
  const { src, alt, category, objectPosition } = image

  return (
    <Link
      href='/gallery'
      className={`group relative block aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[24px] border border-border bg-[#edf2f8] shadow-school ${className}`}
      style={style}
      tabIndex={tabIndex}
      data-gallery-card={dataGalleryCard}
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
  const gridRef = useRef(null)
  const previousPositions = useRef(null)
  const [desktopImages, setDesktopImages] = useState(() => getNextBatch(0))

  useEffect(() => {
    if (galleryImages.length <= VISIBLE_IMAGE_COUNT) return undefined

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    let nextStartIndex = VISIBLE_IMAGE_COUNT
    let rotationIntervalId
    let imageRefreshIntervalId

    const capturePositions = () => {
      const cards = gridRef.current?.querySelectorAll('[data-gallery-card]')
      if (!cards?.length) return

      previousPositions.current = new Map(
        Array.from(cards, (card) => [
          card.dataset.galleryCard,
          card.getBoundingClientRect(),
        ]),
      )
    }

    const stopAnimation = () => {
      window.clearInterval(rotationIntervalId)
      window.clearInterval(imageRefreshIntervalId)
      rotationIntervalId = undefined
      imageRefreshIntervalId = undefined
    }

    const startAnimation = () => {
      if (motionPreference.matches) return

      rotationIntervalId = window.setInterval(() => {
        capturePositions()
        setDesktopImages((currentImages) => [
          ...currentImages.slice(1),
          currentImages[0],
        ])
      }, POSITION_ROTATION_INTERVAL)

      imageRefreshIntervalId = window.setInterval(() => {
        capturePositions()
        setDesktopImages(getNextBatch(nextStartIndex))
        nextStartIndex =
          (nextStartIndex + VISIBLE_IMAGE_COUNT) % galleryImages.length
      }, IMAGE_REFRESH_INTERVAL)
    }

    const handleMotionPreferenceChange = () => {
      previousPositions.current = null
      stopAnimation()

      if (motionPreference.matches) {
        gridRef.current
          ?.querySelectorAll('[data-gallery-card]')
          .forEach((card) => {
            card.style.transition = 'none'
            card.style.transform = ''
          })
        return
      }

      startAnimation()
    }

    startAnimation()
    motionPreference.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      stopAnimation()
      motionPreference.removeEventListener(
        'change',
        handleMotionPreferenceChange,
      )
    }
  }, [])

  useLayoutEffect(() => {
    const oldPositions = previousPositions.current
    const grid = gridRef.current
    if (!oldPositions || !grid) return

    previousPositions.current = null
    const cards = grid.querySelectorAll('[data-gallery-card]')

    cards.forEach((card) => {
      const previous = oldPositions.get(card.dataset.galleryCard)
      if (!previous) return

      const current = card.getBoundingClientRect()
      const x = previous.left - current.left
      const y = previous.top - current.top
      if (x === 0 && y === 0) return

      card.style.transition = 'none'
      card.style.transform = `translate(${x}px, ${y}px)`
    })

    grid.offsetHeight
    window.requestAnimationFrame(() => {
      cards.forEach((card) => {
        card.style.transition =
          'transform 850ms cubic-bezier(0.2, 0.75, 0.25, 1)'
        card.style.transform = ''
      })
    })
  }, [desktopImages])

  return (
    <div>
      <div className='section-shell hidden md:block'>
        <div
          ref={gridRef}
          className='grid grid-cols-2 gap-5 xl:grid-cols-3'
        >
          {desktopImages.map((image, index) => (
            <PhotoCard
              key={image.src}
              image={image}
              className='gallery-preview-card'
              style={{ animationDelay: `${index * 70}ms` }}
              dataGalleryCard={image.src}
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
