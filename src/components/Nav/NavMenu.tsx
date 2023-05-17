import './NavMenu.css'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const NavMenu = () => {
  return (
    <div className='nav_menu_main'>
        <ul>
            <li>Home</li>
            <li>Women<KeyboardArrowDownRoundedIcon fontSize='small' className='down_arrow'/></li>
            <li>Men<KeyboardArrowDownRoundedIcon fontSize='small' className='down_arrow'/></li>
            <li>Kids<KeyboardArrowDownRoundedIcon fontSize='small' className='down_arrow'/></li>
            <li>Footwear<KeyboardArrowDownRoundedIcon fontSize='small' className='down_arrow'/></li>
            <li>Home & Lifestyle<KeyboardArrowDownRoundedIcon fontSize='small' className='down_arrow'/></li>
            <li>Beauty & Personal Care<KeyboardArrowDownRoundedIcon fontSize='small' className='down_arrow'/></li>
            <li>Package & Bundles</li>
            <li>Offer Of The Week</li>
        </ul>
    </div>
  )
}

export default NavMenu
