import React, { useState } from 'react' ;
import ShowIndex from './ShowIndex';

const ButtonList = ({btns}) => {
     let value = 0 ;
      const showindex = (e) => {
      console.log(e.target.value);
      value = e.target.value ;
      document.getElementById('show').innerHTML = `Last Button Clicked - ${value}` ;
      }
      return(
          <div>
             {btns.map((btn,index) => 
             <button key={index}  onClick={showindex} value={index+1}> Button {index+1}</button>
             )}
          </div>
      );
}

export default ButtonList ;