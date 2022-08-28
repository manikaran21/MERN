import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";

const Reserve = ({ hoteldata,setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedRoomsId, setSelectedRoomsId] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/rooms/${hotelId}`);
    const { date } = useContext(SearchContext);
    // {data &&  data.map(e => e.roomNumbers.map(f => console.log(f)))}
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        const date = new Date(start.getTime());
        
        const dates = [];
        // console.log(dates)
        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        
        return dates;
    };
    const navigate = useNavigate();

  const  alldates = getDatesInRange(date[0].startDate, date[0].endDate);
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };
  

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const idd=e.target.id;
    setSelectedRooms(
      checked
      ? [...selectedRooms, value]
      : selectedRooms.filter((item) => item !== value)
      );
      setSelectedRoomsId(
        checked
        ? [...selectedRoomsId, idd]
        : selectedRoomsId.filter((item) => item !== idd)
        );
    };
    // console.log("hello")
    // console.log(selectedRooms)
    console.log(selectedRoomsId)
    const {user}=useContext(AuthContext)
    // console.log(user._id)
    // console.log(data)
  
    var converted = alldates.map(t => new Date(t).toISOString()); 
    console.log(converted)
    var book=[{hotelId:hoteldata._id,hotelTitle:hoteldata.name,hotelDesc:hoteldata.desc,hotelImg:hoteldata.photos[0],rooms:selectedRooms,dates:converted,roomNum:selectedRoomsId}]
// console.log(hoteldata);
// console.log(book)
  const handleClick = async () => {
    try {
      await Promise.all(
          selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
            owner:user._id,
          });
          return res.data;
        })
        );
        if(selectedRooms.length!=0){
          const ress= await axios.put(`/users/${user._id}`,{booking:book});
        }
      setOpen(false);
      navigate("/manage");
    } catch (err) {
    console.log(err)
    }
  };
  // console.log(selectedRooms)
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    id={roomNumber.number}
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
            ))}
        <button onClick={handleClick} disabled={selectedRooms==0} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
