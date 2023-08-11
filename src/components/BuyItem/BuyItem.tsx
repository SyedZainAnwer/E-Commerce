import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tab from '../shared/ActiveTab';
import './BuyItem.css';

interface propTypes {
    src: string;
    title: string;
    description: string;
    price: string;
    availability?: "In Stock" | "Out of Stock";
    // quantity: number;
    // onDecrementQuantity?: React.MouseEventHandler<SVGSVGElement>;
    // onIncrementQuantity?: React.MouseEventHandler<SVGSVGElement>;
    onAddToCart?: React.MouseEventHandler<HTMLButtonElement>;
}

const BuyItem = ({
    src,
    title,
    description,
    price,
    availability = "In Stock",
    // quantity = 1,
    // onDecrementQuantity,
    // onIncrementQuantity,
    onAddToCart
}: propTypes) => {

    const [quantity, setQuantity] = useState(1);

    const onIncrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const onDecrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='buy_item_main'>
            <div className='item_image'>
                <img src={src} alt="" />
            </div>
            <div className='item_description'>

                <h2 className='desc'>{title}</h2>

                <p className='desc with_bar_code'>{description}</p>

                <p className='desc'>Rs.{price} PKR</p>

                <p className='desc'>
                    <b>Availability: </b> 
                        <span className='with_bar_code'>{availability}</span>
                </p>

                <p className='icons'>
                    <b>Quantity: </b>
                    <span> 
                        <RemoveIcon 
                            fontSize='small' 
                            onClick={onDecrementQuantity} 
                            className='with_bar_code' 
                        /> 
                    </span>

                    {quantity}

                    <span> 
                        <AddIcon 
                            fontSize='small' 
                            onClick={onIncrementQuantity} 
                            className='with_bar_code' 
                        /> 
                    </span>
                </p>

                <Tab 
                    title='ADD TO CART' 
                    className='add_to_cart_button' 
                    onClick={onAddToCart} 
                />
            </div>
        </div>
    )
}

export default BuyItem;