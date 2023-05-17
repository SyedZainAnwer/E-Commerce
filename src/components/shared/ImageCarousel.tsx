import Carousel from "react-material-ui-carousel"
import Fabric from '../../assets/image/image1.webp'
import Kids from '../../assets/image/image2.webp'
import Menshirts from '../../assets/image/menshirts.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const carouselItems = [
  {
    image: Fabric
  },
  {
    image: Kids
  },
  {
    image: Menshirts
  },
]

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        {carouselItems.map((carouselItem, index) => (
          <img src={carouselItem.image} alt="" style={{minHeight:"60vh", width:"100%"}}/>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
