import React ,{useState } from 'react' ;
import AddButton from './AddButton';
import ButtonList from './ButtonList';
import ButtonCount from './ButtonCount';
import ShowIndex from './ShowIndex';


export default function EventHandler() {

   const [count,setCount] = useState(0);
   const [btn , setbtn] = useState([]);

   const addbutton = (e) => {
       console.log("button is added") ;
       e.preventDefault();
       const newbtn = [...btn,count] ;
       setbtn(newbtn) ;
       setCount(0);
   }
    
        return(
        <div>
          <h1>Hello Event Handler </h1>
          <div style={{display:"flex"}}>
          <ButtonCount btns={btn}/>
          <ShowIndex/>
          </div>
          <div style={{display:"flex"}}>
          <button onClick={addbutton}>ADD A BUTTON</button>
          <ButtonList btns={btn}/>
          </div>
        </div>);
   
    
}