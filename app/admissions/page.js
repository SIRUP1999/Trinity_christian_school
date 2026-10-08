import Link from 'next/link'
import { FaCheckCircle, FaClipboardList, FaEnvelope, FaUserFriends, FaFileAlt, FaCalendarCheck } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import { createSchoolWhatsAppUrl } from '../data/contactLinks'

const steps = [
  {
    number: '01',
    title: 'Book a visit',
    description: 'Contact us to arrange a school tour. Meet the team, see the classrooms, and ask any questions you have.',
    icon: FaCalendarCheck,
  },
  {
    number: '02',
    title: 'Submit your form',
    description: 'Complete the admission enquiry form with your child\'s details and the level you are applying for.',
    icon: FaEnvelope,
  },
  {
    number: '03',
    title: 'Bring your documents',
    description: 'Submit the required documents listed below. Our team will guide you through every step.',
    icon: FaFileAlt,
  },
  {
    number: '04',
    title: 'Meet the school',
    description: 'Have a final conversation with our team to confirm placement and get your child ready to start.',
    icon: FaUserFriends,
  },
]

const documents = [
  'Child\'s full name',
  'Child\'s date of birth',
  'Child\'s immunization records',
  'Passport-sized picture of the child',
  'Parent or guardian\'s name',
  'Parent or guardian\'s contact number',
  'Residential location or address',
]

const levels = [
  { name: 'Crèche', ages: 'About 6 months – 2 years' },
  { name: 'Nursery', ages: 'About 2 – 4 years' },
  { name: 'KG', ages: 'About 4 – 6 years' },
  { name: 'Primary', ages: 'About 6 – 12 years' },
  { name: 'JHS', ages: 'About 12 – 15 years' },
]

export default function AdmissionsPage() {
  return (
    <div className='site-shell pb-20'>
      <PageHero
        eyebrow='Admissions'
        title='Join a caring school family.'
        subtitle='We make the admission process simple, warm, and welcoming for every family.'
        image='/images/School_premises.jpeg'
      />

      {/* Intro */}
      <section className='section-shell pt-16'>
        <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>How to apply</p>
            <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>A simple admission journey</h2>
            <p className='mt-5 text-lg text-muted'>
              We offer admission for Crèche, Nursery, KG, Primary, and JHS. Our admissions process is designed to be straightforward and stress-free for every family.
            </p>
            <div className='mt-8 space-y-4'>
              {steps.map(({ number, title, description, icon: Icon }) => (
                <div key={title} className='flex gap-5 rounded-3xl border border-border bg-white p-5 shadow-sm'>
                  <div className='flex flex-col items-center gap-2'>
                    <span className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-plum text-gold-light'>
                      <Icon />
                    </span>
                    <span className='text-xs font-bold text-plum/30'>{number}</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-plum'>{title}</h3>
                    <p className='mt-1 text-muted'>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-5'>
            {/* Who can apply */}
            <div className='glass-card p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Classes and typical ages</p>
              <h3 className='mt-3 text-2xl text-plum'>Who can apply</h3>
              <ul className='mt-4 space-y-3'>
                {levels.map(({ name, ages }) => (
                  <li key={name} className='flex items-center justify-between gap-4 rounded-2xl bg-[#f5f7fb] px-4 py-3'>
                    <span className='font-medium text-plum-dark'>{name}</span>
                    <span className='text-right text-sm text-muted'>{ages}</span>
                  </li>
                ))}
              </ul>
              <p className='mt-4 text-sm text-muted'>Age ranges are a general guide; the school will confirm the right class for each child.</p>
            </div>

            {/* Documents */}
            <div className='glass-card p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Admissions checklist</p>
              <h3 className='mt-3 text-2xl text-plum'>Particulars required</h3>
              <ul className='mt-4 space-y-3'>
                {documents.map((doc) => (
                  <li key={doc} className='flex gap-3 text-muted'>
                    <FaCheckCircle className='mt-1 flex-shrink-0 text-gold' />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fees note */}
            <div className='rounded-3xl border border-border bg-amber-50 p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-amber-700'>School fees</p>
              <p className='mt-3 text-muted'>
                For information about school fees and payment plans, please contact the school directly. Our team will be happy to walk you through all the details.
              </p>
              <Link href='/contact' className='mt-4 inline-flex items-center gap-2 text-sm font-semibold text-plum hover:underline'>
                Ask about fees →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className='section-shell pt-16'>
        <div className='rounded-[32px] border border-border bg-white p-8 shadow-school sm:p-10'>
          <div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>What to expect</p>
              <h2 className='mt-3 text-balance text-3xl font-semibold tracking-tight text-plum-dark'>A warm and welcoming process</h2>
              <ul className='mt-5 space-y-4 text-muted'>
                <li className='flex gap-3'><FaCheckCircle className='mt-1 flex-shrink-0 text-gold' /> Friendly guidance from our admissions team every step of the way.</li>
                <li className='flex gap-3'><FaCheckCircle className='mt-1 flex-shrink-0 text-gold' /> Clear communication about school expectations and routines.</li>
                <li className='flex gap-3'><FaCheckCircle className='mt-1 flex-shrink-0 text-gold' /> A child-first approach focused on confidence and belonging.</li>
                <li className='flex gap-3'><FaCheckCircle className='mt-1 flex-shrink-0 text-gold' /> Support for families new to the Nsoatre area.</li>
              </ul>
            </div>
            <div className='flex flex-wrap gap-4'>
              <a
                href={createSchoolWhatsAppUrl('Hello Trinity Christian School, I would like to book a school visit.')}
                target='_blank'
                rel='noopener noreferrer'
                className='primary-btn'
              >
                Book a school visit
              </a>
              <Link href='/contact' className='primary-btn'>Speak to the school</Link>
              <Link href='/about' className='gold-outline-btn'>Learn about us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className='section-shell pt-12'>
        <div className='rounded-[32px] bg-gradient-to-br from-plum-dark to-plum p-8 text-center text-white shadow-school sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-gold-light'>Don&apos;t wait</p>
          <h2 className='mt-3 text-balance text-4xl font-semibold tracking-tight'>Spaces fill up quickly.</h2>
          <p className='mx-auto mt-4 max-w-xl text-white/80'>
            Secure your child&apos;s place at Trinity Christian School today. Contact us now and we will guide you through the next steps.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link href='/contact' className='primary-btn'>Get in touch</Link>
            <a href='tel:+233247995835' className='secondary-btn'>Call us now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
