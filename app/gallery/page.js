import Image from "next/image";
import PageHero from "../components/PageHero";
import galleryImages from "../data/galleryImages";
import galleryVideos from "../data/galleryVideos";

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
            Explore Trinity
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-plum-dark">
            School life, in pictures and motion
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted">
            Explore our campus, celebrate our learners, and enjoy special
            moments from the Trinity community.
          </p>
        </div>

        <section aria-labelledby="school-videos-heading" className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum-light">
              Press play and join us
            </p>
            <h3
              id="school-videos-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-plum-dark"
            >
              Trinity in motion
            </h3>
            <p className="mt-2 max-w-2xl text-muted">
              From learning and performances to life around our campus, enjoy
              these moments whenever you are ready.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {galleryVideos.map(
              ({ src, title, category, description, poster }) => (
                <figure
                  key={src}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-white shadow-school transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <video
                    className="aspect-video w-full bg-[#edf2f8] object-cover"
                    controls
                    playsInline
                    preload="none"
                    poster={poster}
                    aria-label={title}
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                  <figcaption className="flex flex-1 flex-col px-5 py-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-plum-light">
                      {category}
                    </span>
                    <span className="mt-1 text-lg font-semibold text-plum-dark">
                      {title}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {description}
                    </p>
                  </figcaption>
                </figure>
              ),
            )}
          </div>
        </section>

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
