import './Btn.css'
import Button from '@mui/material/Button';

interface propType {
    text: string;
}

const Btn = ({text}:propType) => {
  return (
    <div className='btn_main'>
      <Button variant="contained" style={{backgroundColor:"#10a37f", width:"100%"}}>
        { text }
      </Button>
    </div>
  )
}

export default Btn
