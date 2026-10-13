'use client'

import { useEffect, useRef, useState } from 'react'
import {
  FaArrowLeft,
  FaArrowRight,
  FaBullhorn,
  FaCalendarAlt,
  FaPause,
  FaPlay,
} from 'react-icons/fa'
import announcements from '../data/announcements'

const ROTATION_INTERVAL = 8_000

function AnnouncementCard({ announcement }) {
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
        <span className='max-w-full truncate rounded-full bg-plum/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-plum'>
          {category}
        </span>
        <time dateTime={date} className='inline-flex items-center gap-2 text-sm text-muted'>
          <FaCalendarAlt aria-hidden='true' className='text-plum-light' />
          {formattedDate}
        </time>
      </div>
      <h3 className='announcement-title mt-5 text-balance text-3xl font-semibold tracking-tight text-plum-dark sm:text-4xl'>
        {title}
      </h3>
      <p className='announcement-summary mt-3 leading-relaxed text-muted'>{summary}</p>
      {href && linkLabel && (
        <span className='mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-plum'>
          {linkLabel}
          <FaArrowRight aria-hidden='true' />
        </span>
      )}
    </>
  )

  return href ? (
    <a
      href={href}
      className='announcement-card announcement-card-featured justify-center'
    >
      {content}
    </a>
  ) : (
    <article className='announcement-card announcement-card-featured justify-center'>
      {content}
    </article>
  )
}

export default function Announcements() {
  const sectionRef = useRef(null)
  const [motionReady, setMotionReady] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)

  const showAnnouncement = (index) => {
    setCurrentIndex((index + announcements.length) % announcements.length)
  }

  const showNext = () => showAnnouncement(currentIndex + 1)
  const showPrevious = () => showAnnouncement(currentIndex - 1)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!motionPreference.matches) setIsAutoPlaying(true)

    const handleMotionPreferenceChange = () => {
      setIsAutoPlaying(!motionPreference.matches)
    }

    motionPreference.addEventListener('change', handleMotionPreferenceChange)
    return () => {
      motionPreference.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || isInteracting || announcements.length < 2) return undefined

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setCurrentIndex((index) => (index + 1) % announcements.length)
      }
    }, ROTATION_INTERVAL)

    return () => window.clearInterval(interval)
  }, [currentIndex, isAutoPlaying, isInteracting])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const cards = section.querySelectorAll(
      '.announcement-carousel, .announcement-card, .announcement-empty',
    )
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
          <AnnouncementCard announcement={announcements[0]} />
        </div>
      ) : (
        <div
          className='announcement-carousel mt-10'
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocus={() => setIsInteracting(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsInteracting(false)
            }
          }}
          role='region'
          aria-roledescription='carousel'
          aria-label='School announcements'
        >
          <div className='announcement-carousel-viewport'>
            <div key={`${currentIndex}-${announcements[currentIndex].title}`} className='announcement-slide'>
              <AnnouncementCard announcement={announcements[currentIndex]} />
            </div>
          </div>
          <div className='mt-4 flex flex-col items-center gap-3'>
            <p className='text-center text-sm font-medium text-muted' aria-live='polite'>
              Announcement {currentIndex + 1} of {announcements.length}
            </p>
            <div className='flex items-center justify-center gap-2'>
              <button
                type='button'
                onClick={showPrevious}
                className='announcement-control'
                aria-label='Show previous announcement'
              >
                <FaArrowLeft aria-hidden='true' />
              </button>
              <button
                type='button'
                onClick={() => setIsAutoPlaying((playing) => !playing)}
                className='announcement-control announcement-play-control'
                aria-label={isAutoPlaying ? 'Pause automatic announcements' : 'Play automatic announcements'}
              >
                {isAutoPlaying ? <FaPause aria-hidden='true' /> : <FaPlay aria-hidden='true' />}
                <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                type='button'
                onClick={showNext}
                className='announcement-control'
                aria-label='Show next announcement'
              >
                <FaArrowRight aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
