import "./SideItemCarousel.css";
import Carousel from "react-material-ui-carousel";

interface propType {
  image?: string;
  title: string;
}

const SideItemCarousel = ({ image, title }: propType) => {
  return (
    <div className="side_item_carousel_main">
      <div>
        <Carousel>
          {/* <div className="items"> */}
            <div className="item_image">
              <img src={image} alt="" />
            </div>
            <div className="item_title">
              <h5>{title}</h5>
            </div>
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default SideItemCarousel;
