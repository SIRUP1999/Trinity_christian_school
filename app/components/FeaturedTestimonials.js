'use client'

import { useEffect, useRef } from 'react'

export default function FeaturedTestimonials({ testimonials }) {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (
      !grid ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return undefined
    }

    const cards = grid.querySelectorAll('.testimonial-card')
    if (!cards.length) return undefined

    grid.dataset.motionReady = 'true'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('testimonial-card-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 },
    )

    cards.forEach((card) => observer.observe(card))

    return () => {
      observer.disconnect()
      delete grid.dataset.motionReady
    }
  }, [])

  return (
    <div
      ref={gridRef}
      className='testimonial-grid mt-8 grid gap-4 sm:gap-5 md:grid-cols-3'
    >
      {testimonials.slice(0, 3).map(({ quote, name, relationship }) => (
        <figure
          key={`${name}-${quote}`}
          className='testimonial-card group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-border bg-gradient-to-br from-white via-white to-[#f5f7fb] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-school sm:p-7'
        >
          <span
            aria-hidden='true'
            className='mb-4 block h-8 font-serif text-5xl leading-none text-gold/70'
          >
            “
          </span>
          <blockquote className='flex-1 text-[15px] leading-7 text-muted'>
            {quote}
          </blockquote>
          <figcaption className='mt-6 border-t border-border pt-4'>
            <span className='block font-semibold text-plum-dark'>{name}</span>
            {relationship && (
              <span className='mt-1 block text-sm text-muted'>
                {relationship}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
