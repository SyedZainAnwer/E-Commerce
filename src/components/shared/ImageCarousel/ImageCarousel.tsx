import Carousel from "react-material-ui-carousel";
import './ImageCarouusel.css';
import { carouselItems } from "../../../utils/constants/appConstants";

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
