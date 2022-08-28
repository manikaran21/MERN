import React , {createContext,useState} from 'react' ;
import Container from './Container';

const DarkModeContext = createContext() ;

 export default function DarkModeProvider(){
     const [ darkMode , setDarkMode] = useState(false) ;
     const toggleDarkMode = () => {
        setDarkMode(!darkMode) ;
     }
     return(
     <div>
      <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        <Container/>
      </DarkModeContext.Provider>
     </div>
     ) ;
}

export { DarkModeContext };