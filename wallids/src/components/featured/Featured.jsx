import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { color } from '@mui/system';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Remaining Credit</h1>
      </div>
      <div className='bottom'>
       <div className="left">
        <CircularProgressbar value={53} text={"53.00%"}
        strokeWidth={6} />
       </div>
      <div className="right">
        <p className="amount"> <b>262.000</b>/500.000</p>
        <p className="package">UPGRADE PACKAGE</p>
      </div>
      </div>
    </div>
  )
}

export default Featured