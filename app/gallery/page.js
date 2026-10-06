import Image from "next/image";
import PageHero from "../components/PageHero";
import galleryImages from "../data/galleryImages";

export default function GalleryPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        eyebrow="Gallery"
        title="Moments from our learning community."
        subtitle="Photos from our campus, classrooms, and school life in Nsoatre."
      />

      <section className="section-shell pt-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-plum-light">
            Our school in pictures
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark">
            Life at Trinity Christian School
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted">
            A glimpse into our campus, classrooms, and the vibrant community
            that makes Trinity special.
          </p>
        </div>

        <figure className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-[24px] border border-border bg-white shadow-school">
          <video
            className="aspect-video w-full bg-[#edf2f8] object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/images/School_premises.jpeg"
            aria-label="Video tour of Trinity Christian School"
          >
            <source
              src="/videos/WhatsApp%20Video%202026-10-04%20at%208.32.55%20PM.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
          <figcaption className="px-5 py-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-plum-light">
              School video
            </span>
            <p className="mt-1 text-base font-semibold text-plum-dark">
              Take a closer look at Trinity Christian School
            </p>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map(({ src, alt, category, objectPosition }) => (
            <figure
              key={src}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-white shadow-school transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#edf2f8]">
                <Image
                  src={src}
                  alt={alt}
                  width={900}
                  height={675}
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  style={objectPosition ? { objectPosition } : undefined}
                />
              </div>
              <figcaption className="flex flex-1 flex-col px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-plum-light">
                  {category}
                </span>
                <span className="mt-1 text-base font-semibold text-plum-dark">
                  {alt}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
