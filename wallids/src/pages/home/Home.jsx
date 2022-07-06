import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"

const Home = () => {
  return (
    <div className="home">
        
        <div className="homeContainer">
            <Navbar/>
            <div className="charts">
              <Featured/>
              <Chart/>  
            </div>
          </div>    
    </div>
        
  )
}

export default Home