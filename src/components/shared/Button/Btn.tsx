import './Btn.css'
import Button from '@mui/material/Button';

interface propType {
    text: string;
    style: React.CSSProperties;
    icon: JSX.Element;
}

const Btn = ({ text, style, icon }:propType) => {
  return (
    <div className='btn_main'>
            <Button variant="contained" style={style}>
              <span>
                { icon }
              </span>
              {text}
            </Button>
    </div>
  )
}

export default Btn
