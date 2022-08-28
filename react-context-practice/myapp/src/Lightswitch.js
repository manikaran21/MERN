import React  , {useContext} from "react";
import { DarkModeContext } from "./DarkModeProvider";


function Lightswitch () {
   const {darkMode , toggleDarkMode} = useContext(DarkModeContext) ;
   const handle = () => {
    toggleDarkMode() ;
   }
   return(
   <div>
      <button onClick={handle}>Click Me</button>
   </div>
   ) ;
}



export default Lightswitch ;