import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';
export default function Cards(props) {
  var example = props.item.hotelDesc;
  var result;
  const roomsId=props.item.rooms;
  console.log(roomsId[0])
  const [data, setData] = React.useState([])
  const [dat, setDat] = React.useState([])
  // const [omega, setOmega] = React.useState([])
  const getData = async () => {
    const { data } = await axios.get(`/rooms/${roomsId[0]}`);
    setData(data);
  };
  useEffect(() => {
    getData();
    
  // data.map(e=>{
  //   e.roomNumbers.map(f=>
  //     {if(props.item.roomNum.includes(f.number)){
  //   setOmega([...omega,f])
  //   console.log("hhh",omega)
  // }})})
  }, [dat])
  
  let omega=[]
//   const { data, loading, error } = useFetch(`/rooms/${roomsId[0]}`);
// data.map(e=>{e.roomNumbers.map(ele=>{console.log(ele)})})
// data.map(e=>{omega=(e.roomNumbers[0])})  
// data.map(e=>{
//   e.roomNumbers.map(f => console.log("hello",f) ) 
// })



if(Number(props.item.roomNum[0])%2==0){
  data.map(e=>{omega=(e.roomNumbers[1])})  
}else{
  data.map(e=>{omega=(e.roomNumbers[0])})  

}
// data.map(e=>{console.log("filr",e.roomNumbers)})


console.log("omg",omega)
console.log("ss",props.item.roomNum)
// console.log("saif",omega.owners)

// const cars = new Array(omega)
// console.log(cars.includes("hello world"))
console.log(data)
//   // omega[0].owners.map(e=>{console.log(e)})
  const {user}=React.useContext(AuthContext)
 const dd= props.item.dates.map(e=>(new Date(e)))
 console.log(dd[1].getUTCDate())
  const handleClick=async()=>{
    console.log("iam the click nice to meet you ")
    console.log(props.item.rooms)
    setDat(props.item.rooms)
      try {
        await Promise.all(
            props.item.rooms.map((roomId) => {
              props.item.dates.map((date)=>{
                var res = axios.put(`/rooms/davailability/${roomId}`, {
                  dates: date,
                  owner:user._id,
              })
            });
            return ;
          })
          )}catch(err){
            console.log(err)
          };
      
    }  
    // console.log(props.item.owners==user._id)
    // console.log(props.item.owners)
    console.log(user._id )
  result = example.slice(0, 100)+'...'; 
  return (
    <Card sx={{ maxWidth: 250,margin:"8px",boxShadow:"0px 0px 7px gray" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.item.hotelImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.hotelTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {result}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Room Numbers:  { props.item.roomNum.join("  ") }
         {/* https://stackoverflow.com/questions/65822434/how-to-remove-a-field-having-a-specified-value-from-a-mongodb-document */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Dates:  { dd[0].toLocaleDateString('en-US')  }-{dd[dd.length-1].toLocaleDateString('en-US')}
         </Typography>
      </CardContent>
      <CardActions>
        {omega.owners && console.log("ahmad",props.item.dates.every(date=>omega.unavailableDates.includes(date)))}
        {omega.owners && omega.owners.includes(user._id) &&  props.item.dates.every(date=>omega.unavailableDates.includes(date)) && <Button onClick={handleClick} size="small">Delete</Button> }
      </CardActions>
    </Card>
  );
}
