import './Btn.css'
import Button from '@mui/material/Button';

interface propType {
    text: string;
    style?: React.CSSProperties;
    icon?: JSX.Element;
    iconStyle?: React.CSSProperties;
}

const Btn = ({ text, style, icon, iconStyle }:propType) => {
  return (
    <div className='btn_main'>
            <Button variant="contained" style={style}>
              <span style={iconStyle}>
                { icon }
              </span>
              {text}
            </Button>
    </div>
  )
}

export default Btn
