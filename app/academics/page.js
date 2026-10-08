import Link from 'next/link'
import Image from 'next/image'
import { FaBookOpen, FaFlask, FaPaintBrush, FaRunning, FaCode, FaShieldAlt, FaRobot, FaCalculator } from 'react-icons/fa'
import PageHero from '../components/PageHero'

const levels = [
  {
    name: 'Crèche',
    ages: 'About 6 months – 2 years',
    desc: 'Sensory play, early communication, and a safe loving environment for our tiniest learners.',
    colour: 'bg-pink-50 border-pink-100',
    dot: 'bg-pink-400',
  },
  {
    name: 'Nursery',
    ages: 'About 2 – 4 years',
    desc: 'Phonics, numbers, creative play, and social skills to prepare children for formal schooling.',
    colour: 'bg-orange-50 border-orange-100',
    dot: 'bg-orange-400',
  },
  {
    name: 'KG',
    ages: 'About 4 – 6 years',
    desc: 'Building early literacy and numeracy, confidence, and readiness for the transition to Primary.',
    colour: 'bg-yellow-50 border-yellow-100',
    dot: 'bg-yellow-400',
  },
  {
    name: 'Primary',
    ages: 'About 6 – 12 years',
    desc: 'English, Mathematics, Science, Social Studies, and Creative Arts across six structured years.',
    colour: 'bg-blue-50 border-blue-100',
    dot: 'bg-blue-400',
  },
  {
    name: 'JHS',
    ages: 'About 12 – 15 years',
    desc: 'BECE preparation with core subjects, electives, and strong academic and moral guidance.',
    colour: 'bg-plum/5 border-plum/10',
    dot: 'bg-plum',
  },
]

const programmes = [
  {
    title: 'Phonics & foundation learning',
    description: 'Phonics, early reading, numeracy, and personal development to build strong foundations for young learners.',
    icon: FaBookOpen,
  },
  {
    title: 'STEM and science',
    description: 'Practical exploration and problem-solving through science and mathematics.',
    icon: FaFlask,
  },
  {
    title: 'Creative arts',
    description: 'Encouraging imagination, expression, and confidence through the arts.',
    icon: FaPaintBrush,
  },
  {
    title: 'Sports and wellness',
    description: 'Helping students grow in discipline, teamwork, and healthy living.',
    icon: FaRunning,
  },
]

const special = [
  {
    title: 'UCMAS',
    tagline: 'Mental Arithmetic & Abacus',
    description: 'Using the ancient abacus method to build lightning-fast mental calculation skills and sharpen concentration.',
    icon: FaCalculator,
    colour: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Coding',
    tagline: 'Programming & Problem Solving',
    description: 'Teaching children to think logically, create solutions, and build real projects with code.',
    icon: FaCode,
    colour: 'from-emerald-600 to-emerald-800',
  },
  {
    title: 'Robotics',
    tagline: 'Engineering & Innovation',
    description: 'Designing and programming robots that solve real-world problems, building STEM skills hands-on.',
    icon: FaRobot,
    colour: 'from-violet-600 to-violet-800',
  },
  {
    title: 'Cyber Security',
    tagline: 'Digital Safety & Ethics',
    description: 'Understanding how to protect systems, data, and people in an increasingly digital world.',
    icon: FaShieldAlt,
    colour: 'from-amber-600 to-amber-800',
  },
]

export default function AcademicsPage() {
  return (
    <div className='site-shell pb-20'>
      <PageHero
        eyebrow='Academics'
        title='Learning that nurtures bright futures.'
        subtitle='A balanced, Christ-centred curriculum designed to help every child grow.'
        image='/images/Modern_ICT_Lab.jpeg'
      />

      {/* School levels */}
      <section className='section-shell pt-16'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>School levels</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>From Crèche to JHS</h2>
          <p className='mt-4 text-muted'>We walk with every child from their very first steps in learning all the way to Junior High School.</p>
        </div>
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-5'>
          {levels.map(({ name, ages, desc, colour, dot }) => (
            <article key={name} className={`rounded-3xl border p-6 ${colour}`}>
              <span className={`inline-block h-3 w-3 rounded-full ${dot} mb-4`} />
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-muted'>{ages}</p>
              <h3 className='mt-2 font-display text-2xl font-semibold text-plum-dark'>{name}</h3>
              <p className='mt-3 text-sm text-muted'>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Core curriculum */}
      <section className='section-shell pt-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Our approach</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>A balanced curriculum for active minds</h2>
          <p className='mt-5 text-lg text-muted'>Our classroom experience blends strong academic preparation with values-based mentoring, creativity, and personal development.</p>
        </div>
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {programmes.map(({ title, description, icon: Icon }) => (
            <article key={title} className='grid-card'>
              <span className='mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold-light'>
                <Icon />
              </span>
              <h3 className='text-2xl text-plum'>{title}</h3>
              <p className='mt-3 text-muted'>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Special programmes */}
      <section className='section-shell pt-20'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Beyond the classroom</p>
          <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark'>Special programmes</h2>
          <p className='mt-4 text-muted'>Giving every child the chance to discover a passion, develop a skill, and build a future.</p>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          {special.map(({ title, tagline, description, icon: Icon, colour }) => (
            <article key={title} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${colour} p-8 text-white`}>
              <div className='absolute right-6 top-6 opacity-10'>
                <Icon size={80} />
              </div>
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white'>
                <Icon />
              </span>
              <p className='mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70'>{tagline}</p>
              <h3 className='mt-1 font-display text-3xl font-semibold'>{title}</h3>
              <p className='mt-3 text-white/80'>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Teaching approach images */}
      <section className='section-shell pt-20'>
        <div className='grid gap-8 lg:grid-cols-2'>
          <div className='glass-card overflow-hidden'>
            <div className='relative h-72 w-full overflow-hidden'>
              <Image
                src='/images/Modern_ICT_Lab.jpeg'
                alt='Students learning in the school computer laboratory'
                fill
                sizes='(min-width: 1024px) 50vw, 100vw'
                className='object-cover transition duration-700 hover:scale-105'
              />
            </div>
            <div className='p-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Why it works</p>
              <h3 className='mt-3 text-3xl text-plum'>Teaching that meets each learner where they are</h3>
              <ul className='mt-5 space-y-3 text-muted'>
                <li className='flex gap-2'><span className='text-gold'>✓</span> Small-group attention for stronger understanding</li>
                <li className='flex gap-2'><span className='text-gold'>✓</span> A structured curriculum with practical learning activities</li>
                <li className='flex gap-2'><span className='text-gold'>✓</span> Teacher support that builds confidence and responsibility</li>
                <li className='flex gap-2'><span className='text-gold'>✓</span> Encouragement for curiosity, creativity, and critical thinking</li>
              </ul>
            </div>
          </div>

          <div className='glass-card overflow-hidden'>
            <div className='relative h-72 w-full overflow-hidden'>
              <Image
                src='/images/Science_labolatory.jpeg'
                alt='Learners taking part in a practical science lesson'
                fill
                sizes='(min-width: 1024px) 50vw, 100vw'
                className='object-cover transition duration-700 hover:scale-105'
              />
            </div>
            <div className='p-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-plum-light'>Student focus</p>
              <h3 className='mt-3 text-3xl text-plum'>Growing in knowledge and character</h3>
              <p className='mt-5 text-muted'>Our academic model helps children develop strong fundamentals, healthy self-esteem, and a sense of purpose beyond the classroom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='section-shell pt-16'>
        <div className='rounded-[32px] bg-gradient-to-br from-plum-dark to-plum p-8 text-white shadow-school sm:p-12'>
          <div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-gold-light'>Enrol today</p>
              <h2 className='mt-3 text-balance text-4xl font-semibold tracking-tight'>Ready to start the journey?</h2>
              <p className='mt-4 max-w-xl text-white/80'>Spaces are limited. Get in touch with us today to learn more about enrolment and how we can support your child.</p>
            </div>
            <div className='flex flex-wrap gap-4'>
              <Link href='/admissions' className='primary-btn'>Apply now</Link>
              <Link href='/contact' className='secondary-btn'>Ask a question</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
