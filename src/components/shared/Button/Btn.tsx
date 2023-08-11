import './Btn.css'
import Button from '@mui/material/Button';
import loader from '../../../assets/icons/loader.svg';

interface propType {
    text: string;
    style?: React.CSSProperties;
    icon?: JSX.Element;
    iconStyle?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant: "text" | "contained" | "outlined";
    isLoading?: boolean;
    textSize?: React.CSSProperties
}

const Btn = ({ 
              text, 
              style, 
              icon, iconStyle, 
              onClick, 
              variant="contained", 
              isLoading,
              textSize 
            }:propType) => {
  return (
    <div className='btn_main'>
            <Button variant={variant} style={style} onClick={onClick}>
              {icon &&  <span style={iconStyle}> { icon } </span>}
             
              {isLoading ? <img src={loader} alt='loading...'/> : text}
            </Button>
    </div>
  )
}

export default Btn
