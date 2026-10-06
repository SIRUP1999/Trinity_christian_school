'use client'

import { useState } from 'react'

export default function TestimonialForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('_subject', 'Website testimonial submission')

    try {
      const response = await fetch('https://formspree.io/f/xwlvpkpy', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form id='share-testimony' onSubmit={handleSubmit} className='glass-card scroll-mt-28 p-6 sm:p-8'>
      <p className='text-sm font-semibold uppercase tracking-[0.2em] text-plum-light'>Share your experience</p>
      <h2 className='mt-2 text-3xl font-semibold text-plum-dark'>Tell us about your family&apos;s experience</h2>
      <p className='mt-3 text-muted'>
        Submissions are reviewed by the school. Only selected testimonials are published, and only with your permission.
      </p>

      <div className='mt-6 grid gap-5 sm:grid-cols-2'>
        <div>
          <label htmlFor='testimonial-name' className='mb-2 block text-sm font-medium text-plum-dark'>
            Your name
          </label>
          <input
            id='testimonial-name'
            name='name'
            type='text'
            autoComplete='name'
            required
            maxLength={100}
            className='w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10'
            placeholder='Your name'
          />
        </div>
        <div>
          <label htmlFor='testimonial-relationship' className='mb-2 block text-sm font-medium text-plum-dark'>
            Relationship to the school
          </label>
          <select
            id='testimonial-relationship'
            name='relationship'
            required
            defaultValue=''
            className='w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10'
          >
            <option value='' disabled>Select one</option>
            <option>Parent or guardian</option>
            <option>Former parent or guardian</option>
            <option>Alumnus</option>
            <option>Other member of the school community</option>
          </select>
        </div>
      </div>

      <div className='mt-5'>
        <label htmlFor='testimonial-email' className='mb-2 block text-sm font-medium text-plum-dark'>
          Email address <span className='font-normal text-muted'>(optional, for follow-up)</span>
        </label>
        <input
          id='testimonial-email'
          name='email'
          type='email'
          autoComplete='email'
          className='w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10'
          placeholder='you@example.com'
        />
      </div>

      <div className='mt-5'>
        <label htmlFor='testimonial-message' className='mb-2 block text-sm font-medium text-plum-dark'>
          Your testimonial
        </label>
        <textarea
          id='testimonial-message'
          name='testimonial'
          rows={5}
          required
          minLength={20}
          maxLength={1200}
          className='w-full rounded-2xl border border-border bg-[#f5f7fb] px-4 py-3 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/10'
          placeholder='Share what you appreciate about your experience with Trinity.'
        />
      </div>

      <label className='mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted'>
        <input
          name='publication_consent'
          type='checkbox'
          value='I give Trinity Christian School permission to publish my testimonial.'
          required
          className='mt-1 h-4 w-4 flex-shrink-0 accent-[#17469b]'
        />
        <span>
          I give Trinity Christian School permission to consider and, if selected, publish my testimonial on its website. I understand the school will contact me before making substantial edits.
        </span>
      </label>

      <button
        type='submit'
        disabled={status === 'sending'}
        className='primary-btn mt-6 w-full justify-center disabled:opacity-60 sm:w-auto'
      >
        {status === 'sending' ? 'Sending…' : 'Submit testimonial'}
      </button>

      {status === 'success' && (
        <p role='status' className='mt-4 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800'>
          Thank you for sharing your experience. The school will review your submission before anything is published.
        </p>
      )}
      {status === 'error' && (
        <p role='alert' className='mt-4 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800'>
          We couldn&apos;t send your testimonial. Please try again or contact the school directly.
        </p>
      )}
    </form>
  )
}
