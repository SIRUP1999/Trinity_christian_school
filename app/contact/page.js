import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import TestimonialForm from '../components/TestimonialForm'
import { schoolDirectionsUrl, schoolMapEmbedUrl } from '../data/schoolLocation'

const contactCards = [
  {
    icon: FaMapMarkerAlt,
    title: 'Visit us',
    lines: ['Behind Adwinsa Hotel', 'Nsoatre, Bono Region, Ghana'],
  },
  {
    icon: FaPhoneAlt,
    title: 'Call us',
    lines: ['+233 24 799 5835', '+233 24 929 8640'],
    links: ['tel:+233247995835', 'tel:+233249298640'],
  },
  {
    icon: FaEnvelope,
    title: 'Email us',
    lines: ['nsoatretrinitychristian@gmail.com'],
    links: ['mailto:nsoatretrinitychristian@gmail.com'],
  },
  {
    icon: FaClock,
    title: 'School hours',
    lines: ['Mon – Fri: 7:00 am – 3:00 pm', 'Office: 7:00 am – 4:00 pm'],
  },
]

export default function ContactPage() {
  return (
    <div className='site-shell pb-20'>
      <PageHero
        eyebrow='Contact'
        title='We would love to hear from you.'
        subtitle='Reach out to us by phone, email, or visit us in Nsoatre.'
        image='/images/Conducive_environment.jpeg'
      />

      {/* Contact cards */}
      <section className='section-shell pt-16'>
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {contactCards.map(({ icon: Icon, title, lines, links }) => (
            <article key={title} className='glass-card p-6'>
              <span className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold-light'>
                <Icon />
              </span>
              <h3 className='text-xl text-plum'>{title}</h3>
              <div className='mt-3 space-y-1'>
                {lines.map((line, i) => (
                  links?.[i] ? (
                    <a key={i} href={links[i]} className='block text-muted transition hover:text-plum'>
                      {line}
                    </a>
                  ) : (
                    <p key={i} className='text-muted'>{line}</p>
                  )
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className='section-shell pt-16'>
        <div className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='glass-card p-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Get in touch</p>
            <h2 className='mt-3 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>Send an enquiry</h2>
            <p className='mt-2 text-muted'>Fill in the form and we will get back to you as soon as possible.</p>
            <ContactForm />
          </div>

          <div className='space-y-6'>
            <div className='rounded-[28px] border border-border bg-white p-6 shadow-school'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Find us</p>
              <h3 className='mt-3 text-2xl text-plum'>We are in Nsoatre</h3>
              <p className='mt-2 text-muted'>Behind Adwinsa Hotel, Nsoatre, Bono Region, Ghana.</p>
              <div className='mt-5 overflow-hidden rounded-[18px] border border-border'>
                <iframe
                  src={schoolMapEmbedUrl}
                  title='Map showing the Trinity Christian School location in Nsoatre'
                  className='h-[280px] w-full border-0'
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
              <a
                href={schoolDirectionsUrl}
                target='_blank'
                rel='noreferrer'
                className='mt-4 inline-flex items-center gap-2 text-sm font-semibold text-plum hover:underline'
              >
                Get directions to Trinity Christian School →
              </a>
            </div>

            <div className='rounded-[28px] bg-gradient-to-br from-plum-dark to-plum p-6 text-white'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-gold-light'>Prefer to call?</p>
              <h3 className='mt-3 text-2xl font-semibold'>Speak to us directly</h3>
              <p className='mt-2 text-white/75 text-sm'>Our team is available Monday to Friday, 7:00 am – 4:00 pm.</p>
              <div className='mt-5 space-y-3'>
                <a href='tel:+233247995835' className='flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20'>
                  <FaPhoneAlt className='text-gold-light' /> +233 24 799 5835
                </a>
                <a href='tel:+233249298640' className='flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20'>
                  <FaPhoneAlt className='text-gold-light' /> +233 24 929 8640
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-shell pt-16'>
        <TestimonialForm />
      </section>
    </div>
  )
}
