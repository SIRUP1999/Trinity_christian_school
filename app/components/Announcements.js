'use client'

import { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaBullhorn, FaCalendarAlt } from 'react-icons/fa'
import announcements from '../data/announcements'

function AnnouncementCard({ announcement, featured = false, index = 0 }) {
  const { date, category, title, summary, href, linkLabel } = announcement
  const formattedDate = new Intl.DateTimeFormat('en-GH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Accra',
  }).format(new Date(`${date}T12:00:00+00:00`))
  const content = (
    <>
      <div className='flex flex-wrap items-center gap-3'>
        <span className='rounded-full bg-plum/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-plum'>
          {category}
        </span>
        <time dateTime={date} className='inline-flex items-center gap-2 text-sm text-muted'>
          <FaCalendarAlt aria-hidden='true' className='text-plum-light' />
          {formattedDate}
        </time>
      </div>
      <h3 className={`${featured ? 'mt-5 text-3xl sm:text-4xl' : 'mt-4 text-2xl'} text-balance font-semibold tracking-tight text-plum-dark`}>
        {title}
      </h3>
      <p className='mt-3 leading-relaxed text-muted'>{summary}</p>
      {href && linkLabel && (
        <span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-plum'>
          {linkLabel}
          <FaArrowRight aria-hidden='true' />
        </span>
      )}
    </>
  )

  return href ? (
    <a
      href={href}
      className={`announcement-card ${featured ? 'announcement-card-featured' : ''}`}
      style={{ '--announcement-index': index }}
    >
      {content}
    </a>
  ) : (
    <article
      className={`announcement-card ${featured ? 'announcement-card-featured' : ''}`}
      style={{ '--announcement-index': index }}
    >
      {content}
    </article>
  )
}

export default function Announcements() {
  const sectionRef = useRef(null)
  const [motionReady, setMotionReady] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const cards = section.querySelectorAll('.announcement-card, .announcement-empty')
    if (!('IntersectionObserver' in window)) return undefined

    let observer
    const startObserving = () => {
      if (document.hidden || observer) return

      setMotionReady(true)
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('announcement-card-visible')
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
      )

      cards.forEach((card) => observer.observe(card))
    }

    startObserving()
    document.addEventListener('visibilitychange', startObserving)
    return () => {
      document.removeEventListener('visibilitychange', startObserving)
      observer?.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-motion-ready={motionReady}
      className='announcements-section section-shell py-16 sm:py-20'
      aria-labelledby='announcements-heading'
    >
      <div className='mx-auto max-w-3xl text-center'>
        <p className='inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-plum-light'>
          <FaBullhorn aria-hidden='true' />
          From the school
        </p>
        <h2 id='announcements-heading' className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark sm:text-5xl'>
          News &amp; announcements
        </h2>
        <p className='mt-4 text-lg text-muted'>
          The latest updates, important dates, and special moments from Trinity.
        </p>
      </div>

      {announcements.length === 0 ? (
        <div className='announcement-empty mt-10'>
          <span className='inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-plum shadow-sm'>
            <FaBullhorn aria-hidden='true' size={22} />
          </span>
          <div>
            <h3 className='text-xl font-semibold text-plum-dark'>No new announcements just yet</h3>
            <p className='mt-2 text-muted'>Please check back soon for news and updates from our school community.</p>
          </div>
        </div>
      ) : announcements.length === 1 ? (
        <div className='mt-10'>
          <AnnouncementCard announcement={announcements[0]} featured />
        </div>
      ) : (
        <div className='mt-10 grid gap-5 lg:grid-cols-2'>
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={`${announcement.date}-${announcement.title}`}
              announcement={announcement}
              featured={index === 0}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  )
}
