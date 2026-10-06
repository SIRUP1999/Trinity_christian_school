
import Image from 'next/image'
import Link from 'next/link'
import galleryImages from '../data/galleryImages'

export default function GalleryPreview() {
  return (
    <div className='section-shell'>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {galleryImages.slice(0, 6).map(({ src, alt, category, objectPosition }) => (
          <Link
            key={src}
            href='/gallery'
            className='group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-white shadow-school transition duration-300 hover:-translate-y-1 hover:shadow-xl'
          >
            <div className='relative aspect-[4/3] overflow-hidden bg-[#edf2f8]'>
              <Image
                src={src}
                alt={alt}
                width={900}
                height={675}
                sizes='(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                style={objectPosition ? { objectPosition } : undefined}
              />
            </div>
            <span className='flex flex-1 flex-col px-5 py-4'>
              <span className='text-[11px] font-bold uppercase tracking-[0.18em] text-plum-light'>
                {category}
              </span>
              <span className='mt-1 text-base font-semibold text-plum-dark'>
                {alt}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
