import "./SideItemCarousel.css";
import Carousel from "react-material-ui-carousel";
import { sideItems } from "../../../utils/constants/appConstants";

const SideItemCarousel = () => {
  return (
    <div className="side_item_carousel_main">
      <div>
        <Carousel>
          {sideItems.map((sideItem) => {
            return (
              <div className="items" key={sideItem.id}>
                <div className="item_image">
                  <img src={sideItem.image} alt="" />
                </div>
                <div className="item_title">
                  <h5>{sideItem.title}</h5>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SideItemCarousel;
