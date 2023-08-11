import "./DisplayCards.css";
import { displayImages } from "../../../utils/constants/appConstants"; 

const DisplayCards = () => {
  return (
    <div className="display_cards_main">
      {displayImages.map((displayImage) => {
        return (
          <div className="test_image" key={displayImage.id}>
            <img src={displayImage.image} alt="image" />
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
