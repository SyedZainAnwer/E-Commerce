import Sidebar from "../../components/Sidebar";
import Label from "../../components/shared/CategoryLabel";
import DisplayCards from "../../components/shared/DisplayCards";
import ImageCarousel from "../../components/shared/ImageCarousel";
import ItemCards from "../../components/shared/ItemCards";
import { cardItems } from "../../utils/constants/appConstants";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_main">
      <div className="carousel">
        <ImageCarousel />
      </div>

      <div className="product_container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="right_container">
          <div className="prodct_display">
            <DisplayCards />
          </div>

          <div className="item_cards">
            <Label title="Top Products"/>
            {cardItems.map((cardItem) => (
              <ItemCards
                image={cardItem.image}
                price={cardItem.price}
                title={cardItem.title}
                key={cardItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
