import CategoryTable from "../CategoryTable";
import SideItemCarousel from "../shared/SideItemCarousel";
import Kurti1 from "../../assets/image/kurti1.webp";
import Kurti2 from "../../assets/image/kurti2.webp";
import Kurti3 from "../../assets/image/kurti3.webp";
import Kurti4 from "../../assets/image/kurti4.webp";
import "./Sidebar.css";

const categoryLists = [
  {
    list_title: "Eminent Body Sprays",
    id: 1212,
  },
  {
    list_title: "Newborn Baby",
    id: 6521,
  },
  {
    list_title: "Boys Apparel",
    id: 7155,
  },
  {
    list_title: "Girls Apparel",
    id: 6591,
  },
  {
    list_title: "View All",
    id: 5627,
  },
];

const kurtis = [
  {
    item: "Women's Digital Printed Kurti - Dark Grey",
    price: "Rs. 1,799",
    image: Kurti1,
    id: 0,
  },
  {
    item: "Women's Digital Printed Kurti - White",
    price: "Rs. 1,799",
    image: Kurti2,
    id: 1,
  },
  {
    item: "Women's Digital Printed Kurti - Purple",
    price: "Rs. 1,799",
    image: Kurti3,
    id: 2,
  },
  {
    item: "Women's Digital Printed Kurti - Blue",
    price: "Rs. 1,699",
    image: Kurti4,
    id: 3,
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <div className="trening_categories">
        <h4 style={{padding:"15px"}}>Trending Categories</h4>
        {categoryLists.map((categoryList) => (
          <CategoryTable
            list_title={categoryList.list_title}
            key={categoryList.id}
          />
        ))}
      </div>

      <div className="side_carousel">
          <SideItemCarousel/>
      </div>

      <div className="kurti_category">
        <h4 style={{padding:"15px"}}>Women's Ready to Wear Kurtis</h4>
        {kurtis.map((kurti) => (
          <CategoryTable
            list_title={kurti.price}
            list_image={kurti.image}
            list_desc={kurti.item}
            key={kurti.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
