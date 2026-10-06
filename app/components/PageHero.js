import Image from 'next/image'

const DEFAULT_IMAGE = '/images/School_premises.jpeg'

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className='page-hero relative min-h-[500px]'>
      <Image
        src={image || DEFAULT_IMAGE}
        alt=''
        fill
        sizes='100vw'
        priority
        className='object-cover object-top'
      />
      <div className='page-hero-overlay absolute inset-0' />
      <div className='absolute inset-0 bg-gradient-to-r from-[#ee4b2b]/15 via-transparent to-[#17469b]/20' />
      <div className='section-shell relative z-10 flex min-h-[500px] items-center py-20'>
        <div className='max-w-3xl'>
          <p className='mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-light sm:text-sm'>
            <span className='h-1 w-6 rounded-full bg-gold' />
            {eyebrow}
          </p>
          <h1 className='text-balance text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl'>
            {title}
          </h1>
          {subtitle && (
            <p className='mt-5 max-w-xl text-lg text-white/80'>{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
