import image1 from '../assets/main.jpg'
import image2 from '../assets/IMG-20230811-WA0006.jpg'
import image3 from '../assets/IMG-20230811-WA0008.jpg'
import image4 from '../assets/IMG-20230811-WA0011.jpg'
import image5 from '../assets/IMG-20230811-WA0014.jpg'

const images = [image1, image2, image3, image4, image5]

function Background() {
  return (
    <div className='hero-background' aria-hidden='true'>
      {images.map((image, index) => (
        <div
          className='hero-background-image'
          key={image}
          style={{ backgroundImage: `url(${image})`, animationDelay: `${index * 9}s` }}
        />
      ))}
    </div>
  )
}

export default Background
