import {
  faFaceSmile,
  faHouse,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItems">
          <span className="navWrap">
            <Link to="/"  className="navButton"><FontAwesomeIcon className="navicon" icon={faHouse} />Home</Link>
          </span>
          <span className="navWrap">
          
          <Link to="/Analyze" className="navButton"><FontAwesomeIcon className="navicon" icon={faFaceSmile} />Analyze</Link>
          </span> 
          <span className="navWrap">
          
          <Link to="/About" className="navButton"><FontAwesomeIcon className="navicon" icon={faAddressCard} />About</Link>
          </span> 
            
            
        </div>
        <div>
        <button className="btn">Sign In</button>
        <button className="btn">Rating</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
