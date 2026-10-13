'use client'

import { useEffect, useState } from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import ghanaPublicHolidays from '../data/ghanaPublicHolidays'

const openingHours = [
  { day: 'Monday', hours: '7:00 am – 3:00 pm' },
  { day: 'Tuesday', hours: '7:00 am – 3:00 pm' },
  { day: 'Wednesday', hours: '7:00 am – 3:00 pm' },
  { day: 'Thursday', hours: '7:00 am – 3:00 pm' },
  { day: 'Friday', hours: '7:00 am – 3:00 pm' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
]

export default function SchoolHours() {
  const [today, setToday] = useState(null)

  useEffect(() => {
    const updateToday = () => {
      const now = new Date()
      const dateParts = new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Africa/Accra',
      }).formatToParts(now)
      const date = dateParts
        .filter(({ type }) => type !== 'literal')
        .map(({ value }) => value)
        .join('-')

      setToday({
        date,
        day: new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          timeZone: 'Africa/Accra',
        }).format(now),
      })
    }

    updateToday()
    const interval = window.setInterval(updateToday, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  const holidayToday = ghanaPublicHolidays.find(({ date }) => date === today?.date)

  return (
    <section
      aria-labelledby='school-hours-heading'
      className='rounded-[28px] border border-border bg-white p-6 shadow-school sm:p-8'
    >
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex items-center gap-4'>
          <span className='inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-plum text-gold-light'>
            <FaClock aria-hidden='true' />
          </span>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-plum-light'>
              Plan your visit
            </p>
            <h3 id='school-hours-heading' className='mt-1 text-2xl text-plum'>
              School opening hours
            </h3>
          </div>
        </div>
        <p className='text-sm text-muted'>Times shown in Ghana time (GMT)</p>
      </div>

      {holidayToday && (
        <div
          role='status'
          className='mt-6 flex gap-4 rounded-2xl border border-gold bg-[#fff9e9] p-4 text-plum-dark sm:p-5'
        >
          <span className='mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-plum shadow-sm'>
            <FaCalendarAlt aria-hidden='true' />
          </span>
          <div>
            <p className='font-semibold'>Ghana public holiday: {holidayToday.name}</p>
            <p className='mt-1 text-sm leading-relaxed text-muted'>
              Please contact the school to confirm whether it is open today.
            </p>
          </div>
        </div>
      )}

      <ul className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7'>
        {openingHours.map(({ day, hours }) => {
          const isToday = today?.day === day

          return (
            <li
              key={day}
              aria-current={isToday ? 'date' : undefined}
              className={`flex min-h-[88px] flex-col justify-between rounded-2xl border px-4 py-3 ${
                isToday
                  ? 'border-plum bg-plum text-white shadow-school'
                  : 'border-border bg-[#f7f8fc] text-muted'
              }`}
            >
              <span className='flex items-center justify-between gap-2 text-sm font-semibold'>
                {day}
                {isToday && (
                  <span className='rounded-full bg-gold-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-plum-dark'>
                    Today
                  </span>
                )}
              </span>
              <span className={`mt-3 text-sm ${isToday ? 'font-semibold text-white' : 'text-plum-dark'}`}>
                {hours}
              </span>
            </li>
          )
        })}
      </ul>

      <div className='mt-5 border-t border-border pt-4 text-sm text-muted'>
        <p>
          <span className='font-semibold text-plum-dark'>Office hours:</span>{' '}
          Monday–Friday, 7:00 am – 4:00 pm
        </p>
      </div>
    </section>
  )
}
