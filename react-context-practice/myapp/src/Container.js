import React  , {useContext} from "react";
import { DarkModeContext } from "./DarkModeProvider";
import Lightswitch from "./Lightswitch";


function Container(){
    const {darkMode} = useContext(DarkModeContext) ;
    return(
    <div className={darkMode ? `container container-dark`:`container container-light`}>
      <Lightswitch/>
    </div>
    ) ;
}

export default Container ;