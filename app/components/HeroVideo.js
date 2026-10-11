'use client'

const heroVideoStartSeconds = 20
const heroVideoEndSeconds = 65

export default function HeroVideo() {
  return (
    <video
      className='home-hero-video absolute inset-0 h-full w-full object-cover'
      autoPlay
      muted
      playsInline
      preload='metadata'
      poster='/images/School_premises.jpeg'
      aria-hidden='true'
      onLoadedMetadata={(event) => {
        event.currentTarget.currentTime = heroVideoStartSeconds
      }}
      onTimeUpdate={(event) => {
        if (event.currentTarget.currentTime >= heroVideoEndSeconds) {
          event.currentTarget.currentTime = heroVideoStartSeconds
        }
      }}
    >
      <source
        src='/videos/Srone_view_of_trinity_christian_school.mp4'
        type='video/mp4'
      />
    </video>
  )
}
