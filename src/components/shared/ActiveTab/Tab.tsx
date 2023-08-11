import loader from '../../../assets/icons/loader.svg';
import './Tab.css';

interface propTypes {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isLoading?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const Tab = ({ title, onClick, isLoading, style, className }: propTypes) => {
    return (
        <div className='tab_main'>
            <button onClick={onClick} className={`${className} tab_button`}>
                { isLoading ? <img src={loader} alt='loading...'/> : title}
            </button>
        </div>
    )
}

export default Tab;