import { useEffect, useState } from 'react'

function Slideshow({ slides, interval = 4000 }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || slides.length < 2) return undefined
    const timer = setInterval(() => {
      setCurrentSlide((index) => (index + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [interval, isPaused, slides.length])

  return (
    <div
      className='slideshow'
      role='region'
      aria-label='Life at Trinity Christian Mission School'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false)
        }
      }}
    >
      {slides.map((slide, index) => (
        <article
          className={`slideshow-slide${index === currentSlide ? ' is-active' : ''}`}
          key={slide.title}
          aria-hidden={index !== currentSlide}
        >
          <img src={slide.image} alt={slide.alt} />
          <div className='slideshow-caption'>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </article>
      ))}
      <div className='slideshow-dots' aria-label='Choose a school photo'>
        {slides.map((slide, index) => (
          <button
            type='button'
            className={`slideshow-dot${index === currentSlide ? ' is-active' : ''}`}
            key={`${slide.title}-${index}`}
            aria-label={`Show photo ${index + 1}: ${slide.title}`}
            aria-current={index === currentSlide ? 'true' : undefined}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
