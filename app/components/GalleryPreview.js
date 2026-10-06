
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import galleryImages from '../data/galleryImages'

const PREVIEW_IMAGES = galleryImages.slice(0, 6)

export default function GalleryPreview() {
  const gridRef = useRef(null)
  const previousPositions = useRef(null)
  const [items, setItems] = useState(PREVIEW_IMAGES)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      const cards = gridRef.current?.querySelectorAll('[data-gallery-card]')
      if (!cards?.length) return

      previousPositions.current = new Map(
        Array.from(cards, (card) => [
          card.dataset.galleryCard,
          card.getBoundingClientRect(),
        ]),
      )
      setItems((currentItems) => [...currentItems.slice(1), currentItems[0]])
    }, 6000)

    return () => window.clearInterval(intervalId)
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
        card.style.transition = 'transform 850ms cubic-bezier(0.2, 0.75, 0.25, 1)'
        card.style.transform = ''
      })
    })
  }, [items])

  return (
    <div className='section-shell'>
      <div ref={gridRef} className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {items.map(({ src, alt, category, objectPosition }) => (
          <Link
            key={src}
            data-gallery-card={src}
            href='/gallery'
            className='group relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border bg-[#edf2f8] shadow-school will-change-transform'
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes='(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw'
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
        ))}
      </div>
    </div>
  )
}
