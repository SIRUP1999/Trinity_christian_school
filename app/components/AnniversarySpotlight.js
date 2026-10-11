import Link from 'next/link'
import { FaArrowRight, FaStar } from 'react-icons/fa'

export default function AnniversarySpotlight() {
  return (
    <section className='section-shell anniversary-section' aria-labelledby='anniversary-title'>
      <div className='anniversary-card'>
        <div className='anniversary-copy'>
          <p className='anniversary-eyebrow'>
            <span className='anniversary-eyebrow-line' />
            A milestone worth celebrating
          </p>
          <h2 id='anniversary-title' className='anniversary-title'>
            10 years of growing brighter.
          </h2>
          <p className='anniversary-description'>
            This coming term, Trinity Christian School celebrates a decade of
            learning, faith, and community in Nsoatre. We look forward to
            celebrating the journey with everyone who has been part of it.
          </p>
          <div className='anniversary-links'>
            <Link href='/about' className='anniversary-primary-link'>
              Discover our story <FaArrowRight aria-hidden='true' />
            </Link>
            <Link href='/gallery' className='anniversary-secondary-link'>
              Explore school life
            </Link>
          </div>
        </div>

        <div className='anniversary-seal' aria-label='Celebrating 10 years'>
          <span className='anniversary-seal-orbit' aria-hidden='true' />
          <FaStar className='anniversary-star anniversary-star-top' aria-hidden='true' />
          <FaStar className='anniversary-star anniversary-star-bottom' aria-hidden='true' />
          <span className='anniversary-seal-number'>10</span>
          <span className='anniversary-seal-label'>Years</span>
          <span className='anniversary-seal-school'>Trinity Christian School</span>
        </div>
      </div>
    </section>
  )
}
