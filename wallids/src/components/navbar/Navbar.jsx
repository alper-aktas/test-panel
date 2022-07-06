import "./navbar.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="logo">
            <img src="images/wall-logo.jpg" width={60} height={60} alt="logo" />
          </div>
            
            <div className="name">wallids</div>
            
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="All Apps Search" />
                
            </div>
            <div className="items">
                
                <div className="item">
                <div className="item1">ENTERPRISE</div> 
                </div>
                
                <div className="item">
                <MailOutlineIcon className="item2"/>
                </div>
                
                <div className="item">
                  <div className="item3">İÖ</div>
                  <div className="item4"> <b>İhsan Alptuğ ÖZBEK</b> <br />Siber Güvenlik Uzmanı </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar