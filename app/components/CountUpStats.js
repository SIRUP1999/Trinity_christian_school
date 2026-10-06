'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'trinity-about-stats-counted'
const ANIMATION_DURATION = 1200

export default function CountUpStats({ stats }) {
  const [values, setValues] = useState(() => stats.map(({ target }) => target))

  useEffect(() => {
    const container = document.getElementById('about-stats')
    if (!container) return undefined

    let frameId
    let hasStarted = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return
        hasStarted = true
        observer.disconnect()

        try {
          if (window.localStorage.getItem(STORAGE_KEY) === 'true') return
          window.localStorage.setItem(STORAGE_KEY, 'true')
        } catch (error) {
          console.error('Could not save the About stats animation preference:', error)
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        setValues(stats.map(() => 0))
        const startTime = performance.now()

        function animate(now) {
          const progress = Math.min((now - startTime) / ANIMATION_DURATION, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 4)

          setValues(stats.map(({ target }) => Math.round(target * easedProgress)))

          if (progress < 1) {
            frameId = window.requestAnimationFrame(animate)
          }
        }

        frameId = window.requestAnimationFrame(animate)
      },
      { threshold: 0.35 },
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [stats])

  return (
    <div id='about-stats' className='grid grid-cols-2 gap-4 rounded-3xl border border-border bg-white p-6 shadow-school md:grid-cols-4'>
      {stats.map(({ target, suffix, label }, index) => (
        <div
          key={label}
          className='text-center'
          aria-label={`${target}${suffix} ${label}`}
        >
          <p aria-hidden='true' className='font-display text-4xl font-semibold text-plum'>
            {values[index]}{suffix}
          </p>
          <p className='mt-1 text-sm text-muted'>{label}</p>
        </div>
      ))}
    </div>
  )
}
