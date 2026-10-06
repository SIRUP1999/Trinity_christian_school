import Link from 'next/link'
import Image from 'next/image'
import { FaAward, FaCross, FaLeaf, FaSchool, FaUsers } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import CountUpStats from '../components/CountUpStats'

const stats = [
  { target: 200, suffix: '+', label: 'Students enrolled' },
  { target: 15, suffix: '+', label: 'Dedicated teachers' },
  { target: 4, suffix: '', label: 'School levels' },
  { target: 4, suffix: '', label: 'Special programmes' },
]

const values = [
  {
    title: 'Christ-centred learning',
    description: 'Every child is encouraged to grow in faith, wisdom, and character.',
    icon: FaCross,
  },
  {
    title: 'Academic excellence',
    description: 'We develop strong foundations and a love for lifelong learning.',
    icon: FaAward,
  },
  {
    title: 'Holistic growth',
    description: 'We support emotional, social, and spiritual development in every learner.',
    icon: FaLeaf,
  },
  {
    title: 'Community partnership',
    description: 'Families, teachers, and the wider community work together for progress.',
    icon: FaUsers,
  },
]

const levels = [
  { name: 'Crèche', ages: 'Ages 1 – 2', desc: 'A safe, nurturing space for our youngest learners to explore and grow.' },
  { name: 'Nursery', ages: 'Ages 3 – 4', desc: 'Building early language, social, and motor skills through play-based learning.' },
  { name: 'Primary', ages: 'Ages 5 – 11', desc: 'Core academics, creativity, and character development across six years.' },
  { name: 'JHS', ages: 'Ages 12 – 15', desc: 'Preparing students for the BECE with strong academics and leadership skills.' },
]

export default function AboutPage() {
  return (
    <div className='site-shell pb-20'>
      <PageHero
        eyebrow='About us'
        title='A school built on faith, care, and excellence.'
        subtitle='Discover the story, values, and people behind Trinity Christian School.'
        image='/images/School_proprietor_and_students.jpeg'
      />

      {/* Stats bar */}
      <section className='section-shell -mt-10 relative z-10 pb-0'>
        <CountUpStats stats={stats} />
      </section>

      {/* Our story */}
      <section className='section-shell pt-16'>
        <div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr]'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Our story</p>
            <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>A nurturing place for every child</h2>
            <p className='mt-5 text-lg text-muted'>
              Trinity Christian School was founded with a simple but powerful vision — to provide quality, Christ-centred education to the children of Nsoatre and the surrounding Bono Region.
            </p>
            <p className='mt-4 text-muted'>
              From humble beginnings, the school has grown into a thriving community of learners, educators, and families united by a shared belief that every child deserves the best possible start in life. We combine strong academics with faith, discipline, and warmth to help children become responsible, confident, and compassionate citizens.
            </p>
            <p className='mt-4 text-muted'>
              Today, Trinity Christian School serves students from Crèche through to Junior High School, offering not just core academics but also special programmes in UCMAS, Coding, Robotics, and Cyber Security — preparing children for the world of tomorrow.
            </p>
          </div>
          <div className='glass-card overflow-hidden'>
            <div className='relative h-56 w-full'>
              <Image
                src='/images/School_premises.jpeg'
                alt='Trinity Christian School campus'
                fill
                sizes='(min-width: 1024px) 40vw, 100vw'
                className='object-cover'
              />
            </div>
            <div className='p-6'>
              <span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold-light'><FaSchool /></span>
              <h3 className='mt-4 text-2xl text-plum'>Our purpose</h3>
              <p className='mt-3 text-muted'>To help each learner discover their potential and become a leader shaped by faith, purpose, and excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School levels */}
      <section className='section-shell pt-20'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Who we serve</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>School levels & age groups</h2>
          <p className='mt-4 text-muted'>From our youngest learners to Junior High, we walk with every child at every stage.</p>
        </div>
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {levels.map(({ name, ages, desc }, i) => (
            <article key={name} className='relative grid-card overflow-hidden'>
              <div className='absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-plum/8 text-lg font-bold text-plum/30'>
                {i + 1}
              </div>
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-gold'>{ages}</p>
              <h3 className='mt-2 text-2xl text-plum'>{name}</h3>
              <p className='mt-3 text-sm text-muted'>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className='section-shell pt-20'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>What we value</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>The values behind our learning</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {values.map(({ title, description, icon: Icon }) => (
            <article key={title} className='grid-card'>
              <span className='mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf3fc] text-plum'>
                <Icon />
              </span>
              <h3 className='text-2xl text-plum'>{title}</h3>
              <p className='mt-3 text-muted'>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='section-shell pt-20'>
        <div className='rounded-[32px] bg-gradient-to-br from-plum-dark to-plum p-8 text-white shadow-school sm:p-12'>
          <div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-gold-light'>Ready to join us?</p>
              <h2 className='mt-3 text-balance text-4xl font-semibold tracking-tight'>Give your child the best start.</h2>
              <p className='mt-4 max-w-xl text-white/80'>
                We welcome families from Nsoatre and beyond. Come visit us, meet the team, and see why Trinity Christian School is the right choice for your child.
              </p>
            </div>
            <div className='flex flex-wrap gap-4'>
              <Link href='/admissions' className='primary-btn'>Apply now</Link>
              <Link href='/contact' className='secondary-btn'>Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
