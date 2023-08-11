import { useState } from "react";
import "./ItemCards.css";
import Btn from "../Button";

interface propsType {
  image: string;
  title: string;
  price: string;
}

const ItemCards = ({ image, title, price }: propsType) => {
  const [showButton, setShowButton] = useState(false);

  const showBuyButton = () => {
    setShowButton(true);
  };

  const showPrice = () => {
    setShowButton(false);
  };

  return (
    <div
      className={`item_cards_main ${showButton ? "" : "hovered"}`}
      onMouseOver={showBuyButton}
      onMouseOut={showPrice}
    >
      <div className="card">
        <img src={image} alt="" />
        <p>{title}</p>

        {showButton === true ? (
          <div className="buy_btn">
            <Btn
              variant="outlined"
              text="Buy Now"
              iconStyle={{ display: "none" }}
              style={{ fontSize: "10px" }}
            />
          </div>
        ) : (
          <p>{price}</p>
        )}
      </div>
    </div>
  );
};

export default ItemCards;
