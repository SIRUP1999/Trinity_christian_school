import Link from 'next/link'
import Image from 'next/image'
import {
  FaArrowDown,
  FaBookOpen,
  FaCalendarAlt,
  FaHeart,
  FaMapMarkerAlt,
  FaUsers,
} from 'react-icons/fa'
import GalleryPreview from './components/GalleryPreview'
import SpecialProgrammes from './components/SpecialProgrammes'
import { schoolDirectionsUrl, schoolMapEmbedUrl } from './data/schoolLocation'
import featuredTestimonials from './data/featuredTestimonials'

const campusImage = '/images/School_premises.jpeg'
const schoolVideo = '/videos/school-video.mp4'

const highlights = [
  {
    title: 'Learning with purpose',
    description: 'Building knowledge, curiosity, and confidence every day.',
    icon: FaBookOpen,
  },
  {
    title: 'Character and care',
    description: 'Nurturing kindness, strong values, and a sense of belonging.',
    icon: FaHeart,
  },
  {
    title: 'Growing together',
    description: 'Working with families and community to help children thrive.',
    icon: FaUsers,
  },
]

export default function HomePage() {
  return (
    <div className='site-shell'>
      <section className='page-hero min-h-[500px] md:min-h-[min(850px,calc(100svh-76px))]'>
        <Image
          src={campusImage}
          alt=''
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
        <video
          className='home-hero-video absolute inset-0 h-full w-full object-cover'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          poster={campusImage}
          aria-hidden='true'
        >
          <source src={schoolVideo} type='video/mp4' />
        </video>
        <div className='home-hero-overlay absolute inset-0' />
        <div className='section-shell relative z-10 flex min-h-[500px] md:min-h-[min(850px,calc(100svh-76px))] items-center py-24'>
          <div className='max-w-3xl py-12'>
            <p className='mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white sm:text-sm'>
              <span className='h-1 w-9 rounded-full bg-gold' />
              Trinity Christian School · Nsoatre
            </p>
            <h1 className='max-w-3xl text-balance text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl'>
              A bright future starts with a strong foundation.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl'>
              Christ-centred learning, excellent facilities, and a caring community helping every child discover their potential.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-4'>
              <Link href='/admissions' className='primary-btn'>Explore admissions</Link>
              <Link href='/about' className='secondary-btn'>Discover Trinity</Link>
            </div>
            <Link href='#school-intro' className='mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white/90'>
              Explore our school <FaArrowDown className='text-gold' />
            </Link>
          </div>
        </div>
        <div className='absolute bottom-0 right-0 z-0 hidden max-w-xs rounded-tl-2xl border-l border-t border-white/20 bg-[#09245e]/55 px-5 pb-20 pt-5 text-white shadow-school backdrop-blur-md lg:block'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-light'>Our school</p>
          <p className='mt-2 text-lg font-semibold'>Creche · Nursery · Primary · JHS</p>
          <p className='mt-1 text-sm text-white/75'>Nsoatre, Bono Region, Ghana</p>
        </div>
      </section>

      <section id='school-intro' className='section-shell relative z-10 -mt-14 pb-20'>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='glass-card flex items-center gap-4 p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf3fc] text-plum'>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h2 className='text-xl text-plum'>Rooted in Nsoatre</h2>
              <p className='mt-1 text-muted'>Behind Adwinsa Hotel · Bono, Ghana</p>
              <Link href='/contact' className='mt-2 inline-block text-sm font-semibold text-plum'>View location</Link>
            </div>
          </div>

          <div className='glass-card flex items-center gap-4 p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf3fc] text-plum'>
              <FaCalendarAlt />
            </div>
            <div>
              <h2 className='text-xl text-plum'>Growing together</h2>
              <p className='mt-1 text-muted'>
                Academic year {new Date().getFullYear()} / {new Date().getFullYear() + 1}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section-shell pb-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>A school community that cares</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark sm:text-5xl'>Growing brighter, together</h2>
          <p className='mt-4 text-lg text-muted'>A welcoming place where learning, faith, and each child’s potential matter.</p>
        </div>

        <div className='mt-10 grid gap-6 lg:grid-cols-3'>
          {highlights.map(({ title, description, icon: Icon }) => (
            <Link key={title} href='/about' className='grid-card group'>
              <span className='mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold-light'>
                <Icon />
              </span>
              <h3 className='text-2xl text-plum'>{title}</h3>
              <p className='mt-3 text-base text-muted'>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <SpecialProgrammes />

      <section className='bg-white/60 py-20'>
        <div className='mb-10 text-center section-shell'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Life at Trinity</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>Our school community</h2>
          <p className='mt-3 text-muted'>A glimpse into campus life, classrooms, and the people that make Trinity special.</p>
        </div>
        <GalleryPreview />
        <div className='mt-8 text-center'>
          <Link href='/gallery' className='gold-outline-btn'>Explore photos &amp; videos</Link>
        </div>
      </section>

      <section className='section-shell py-20'>
        <div className='mx-auto max-w-5xl rounded-[32px] border border-border bg-white p-8 shadow-school sm:p-12'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Our families</p>
            <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark sm:text-5xl'>
              What families say about Trinity
            </h2>
          </div>

          {featuredTestimonials.length > 0 && (
            <div className='mt-8 grid gap-5 md:grid-cols-3'>
              {featuredTestimonials.slice(0, 3).map(({ quote, name, relationship }) => (
                <figure key={`${name}-${quote}`} className='rounded-3xl bg-[#f5f7fb] p-6'>
                  <blockquote className='text-muted'>&ldquo;{quote}&rdquo;</blockquote>
                  <figcaption className='mt-5 border-t border-border pt-4'>
                    <span className='block font-semibold text-plum-dark'>{name}</span>
                    {relationship && <span className='mt-1 block text-sm text-muted'>{relationship}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className='mt-8 text-center'>
            <Link href='/contact#share-testimony' className='primary-btn'>
              Share your experience
            </Link>
          </div>
        </div>
      </section>

      <section className='section-shell py-20'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Learning with purpose</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark sm:text-5xl'>Impacting spirit, soul &amp; body</h2>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          <article className='grid-card md:col-span-2 bg-gradient-to-br from-white to-[#f1f5fb]'>
            <h3 className='text-3xl text-plum'>About Trinity Christian School</h3>
            <p className='mt-4 text-lg text-muted'>At Trinity Christian School, we believe in fostering a nurturing and inclusive learning environment where every child’s potential is recognized and celebrated.</p>
          </article>

          <article className='grid-card'>
            <h3 className='text-2xl text-plum'>Our vision</h3>
            <p className='mt-3 text-muted'>To make Christ known through high educational standards.</p>
          </article>

          <article className='grid-card'>
            <h3 className='text-2xl text-plum'>Our mission</h3>
            <p className='mt-3 text-muted'>Providing a Christ-centred curriculum that nurtures excellence through a holistic approach.</p>
          </article>

          <article className='grid-card md:col-span-2'>
            <h3 className='text-2xl text-plum'>Why choose Trinity?</h3>
            <ul className='mt-4 list-disc space-y-2 pl-5 text-muted'>
              <li>Experienced and passionate educators dedicated to each child’s success.</li>
              <li>A balanced curriculum that nurtures individual talents.</li>
              <li>A safe and secure environment for growth and development.</li>
              <li>Supportive family and community involvement in school life.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className='section-shell pb-20'>
        <div className='rounded-[32px] border border-border bg-white p-6 shadow-school sm:p-10'>
          <div className='mb-8 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Come and see</p>
            <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>Find us in Nsoatre</h2>
          </div>
          <div className='overflow-hidden rounded-[22px] border border-border'>
            <iframe
              src={schoolMapEmbedUrl}
              title='Map showing Trinity Christian School in Nsoatre'
              className='h-[360px] w-full border-0'
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
      </section>
    </div>
  )
}
