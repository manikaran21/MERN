import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom' ;
import {BrowserRouter  , Route , Routes , Outlet} from 'react-router-dom' ;
import Navbar from './HeaderComponent';
import AddPlayer from './AddPlayer';
import ShowPlayer from './ShowPlayer';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      
      
     
     <BrowserRouter id="myroute">
     <Navbar/>
     <Routes>
       
       <Route path="/addplayer" element = { <AddPlayer/> } />
       <Route path="/showplayer" element = { <ShowPlayer/> }>  </Route>
       
     </Routes>
     </BrowserRouter>
     
    
     
    </div>
  );
}

export default App ;
