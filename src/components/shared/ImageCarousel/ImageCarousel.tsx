import Carousel from "react-material-ui-carousel"
import Fabric from '../../../assets/image/image1.webp'
import Kids from '../../../assets/image/image2.webp'
import Menshirts from '../../../assets/image/menshirts.webp'
import './ImageCarouusel.css'

const carouselItems = [
  {
    image: Fabric,
    id:1,
  },
  {
    image: Kids,
    id:2,
  },
  {
    image: Menshirts,
    id:3
  },
]

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        {carouselItems.map((carouselItem, index) => (
          <img src={carouselItem.image} alt="" style={{minHeight:"60vh", width:"100%"}} key={carouselItem.id}/>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
