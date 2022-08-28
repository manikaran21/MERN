import {
    faBed,
    faCalendarDays,
    // faCar,
    faPerson,
    // faPlane,
    // faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
  const Headermini = () => {
    const navigate = useNavigate();
  
  function navv(){
    navigate('/')
  }
  function handleOut(){
     ldispatch({type:"LOGOUT"})
     navigate("/login")
  }
  const { user,ldispatch } = useContext(AuthContext);
    return (
      <div className="header">
        <div className= "headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span onClick={navv}>Home</span>
            </div>
           </div>
              <h1 className="headerTitle">
                Not Just Fast Travel , Fast Booking As Well :)
              </h1>
              <p className="headerDesc">
              when you get into a hotel room , you lock the door , and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort . There is reassurance
              </p>
              {/* {!user && 
            <Link to={"/login"}>
            <button className="headerBtn">Sign in / Register</button>
            </Link>} */}
            {/* {user && 
            <button className="headerBtn" onClick={handleOut}>Log out</button>} */}
          </div>
        </div>
    );
  };

  export default Headermini;