import BeautyImage from "../../../assets/image/beautyandcare.webp";
import LifeStyleImage from "../../../assets/image/lifestyle.jpg";
import KidsFashion from "../../../assets/image/kidsfashion.webp";
import "./DisplayCards.css";

const displayImages = [
  {
    image: BeautyImage,
  },
  {
    image: LifeStyleImage,
  },
  {
    image: KidsFashion,
  },
];

const DisplayCards = () => {
  return (
    <div className="display_cards_main">
      {displayImages.map((displayImage) => {
        return (
          <div className="test_image">
            <img src={displayImage.image} alt="" />
        <div className="overlay">
        <span className="text"></span>
        </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCards;
