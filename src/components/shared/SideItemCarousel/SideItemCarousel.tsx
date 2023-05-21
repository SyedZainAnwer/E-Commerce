import "./SideItemCarousel.css";
import Carousel from "react-material-ui-carousel";
import Bag from "../../../assets/image/bag.webp";
import Bed from "../../../assets/image/bed.webp";
import Train from '../../../assets/image/train.webp'

const sideItems = [
  {
    image: Bag,
    title: "Women Bags & Wallets",
    id: 5545,
  },
  {
    image: Bed,
    title: "Bed Sheets",
    id: 2234,
  },
  {
    image: Train,
    title: "Toys & Sports",
    id: 3124,
  },
];


const SideItemCarousel = () => {
  return (
    <div className="side_item_carousel_main">
      <div>
        <Carousel>
            {sideItems.map((sideItem)=> {
              return(
                <div className="items">
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
