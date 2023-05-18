import Sidebar from "../../components/Sidebar";
import DisplayCards from "../../components/shared/DisplayCards";
import ImageCarousel from "../../components/shared/ImageCarousel";
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
        <div className="prodct_display">
          <DisplayCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
