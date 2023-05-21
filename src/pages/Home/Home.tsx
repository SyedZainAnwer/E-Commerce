import Sidebar from "../../components/Sidebar";
import DisplayCards from "../../components/shared/DisplayCards";
import ImageCarousel from "../../components/shared/ImageCarousel";
import ItemCards from "../../components/shared/ItemCards";
import menshirt from "../../assets/image/menShirt1.webp";
import menshirt1 from '../../assets/image/menShirt2.webp';
import menshirt2 from '../../assets/image/menShirt3.webp';
import menshirt3 from '../../assets/image/menShirt4.webp';
import menpant from '../../assets/image/menPant1.webp';
import menpant1 from '../../assets/image/menPant2.webp';
import kidsuit from '../../assets/image/kidSuit.webp';
import kidsuit1 from '../../assets/image/kidSuit1.webp';
import "./Home.css";

const cardItems = [
  {
    image: menshirt,
    title: "Men's Buisness Casual Shirt - Multi",
    price: "Rs. 995",
    id: 2323,
  },
  {
    image: menshirt1,
    title: "Men's Buisness Casual Shirt - Multi",
    price: "Rs. 995",
    id: 2333,
  },
  {
    image: menpant,
    title: "Men's Cotton Dress Pant - Beige",
    price: "Rs. 899",
    id: 2353,
  },
  {
    image: kidsuit,
    title: "Newborn Boys Half Sleeves Suit - Fawn",
    price: "Rs. 199",
    id: 2373,
  },
  {
    image: menshirt2,
    title: "Men's Buisness Casual Shirt - Check",
    price: "Rs. 995",
    id: 2383,
  },
  {
    image: menshirt3,
    title: "Men's Buisness Casual Shirt - White",
    price: "Rs. 995",
    id: 2363,
  },
  {
    image: menpant1,
    title: "Men's Cotton Dress Pant - Black",
    price: "Rs. 899",
    id: 2388,
  },
  {
    image: kidsuit1,
    title: "Newborn Boys Half Sleeves Suit - Pnk",
    price: "Rs. 199",
    id: 2389,
  },
];

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
