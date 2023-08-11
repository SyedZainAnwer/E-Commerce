import CategoryTable from "../CategoryTable";
import SideItemCarousel from "../shared/SideItemCarousel";
import "./Sidebar.css";
import { categoryLists } from "../../utils/constants/appConstants";
import { kurtis } from "../../utils/constants/appConstants";

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
