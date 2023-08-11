import './Label.css';
import forwardIcon from '../../../assets/image/forwardIcon.png';
import backIcon from '../../../assets/image/backIcon.png';
import Btn from '../Button';
import Tab from '../ActiveTab';

interface propTypes {
    title: string;
}

const Label = ({ title }: propTypes) => {
    return(
        <div className='label_main'>
            <p>{title}</p>

            <div className='tabs'>
                <Tab 
                    title='New Products'
                    className='product_tab'
                />
                <Tab 
                    title='Featured Products'
                    className='product_tab'
                />
                <Tab 
                    title='Best Sellers'
                    className='product_tab'
                />
            </div>
            <div className='forward_icon'>
                <img src={backIcon} alt="icon" />
                <img src={forwardIcon} alt="icon" />
            </div>
        </div>
    )
}

export default Label;