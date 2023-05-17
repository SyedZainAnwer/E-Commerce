import DisplayCards from "../../components/shared/DisplayCards";
import ImageCarousel from "../../components/shared/ImageCarousel";
import './Home.css'

const Home = () => {
  return (
    <div className="home_main">
      <div className="carousel">
      <ImageCarousel />
      </div>
      <div className="display_image">
        <DisplayCards />
      </div>
    </div>
  )
}

export default Home
