import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"


const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel Booking</span>
       {user && (<div className="navItems">
          <>{user.username}</>
          <Link to="/manage">
          <button className="navButton">manage</button>
          </Link>
        </div>) }
       
      </div>
    </div>
  )
} 

export default Navbar