import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom' ;
import {BrowserRouter  , Route , Routes , Outlet} from 'react-router-dom' ;
import Navbar from './Navbar';
import HomePage from './HomePage';
import AddBook from './AddBook';
import ManageBook from './ManageBook';
import BookId from './bookId';
import { useState } from 'react';
import { userContext } from './ManageBook';

function App() {
  
  return (
    <div className="App">
      
      <h1>hello world</h1>
     
     <BrowserRouter id="myroute">
     <Navbar/>
     <Routes>
       <Route path="/" element = { <HomePage/> } />
       <Route path="/addbook" element = { <AddBook/> } />
       <Route path="/manage" element = { <ManageBook/> }>  </Route>
       <Route path="/manage/:id" element ={<BookId/>}></Route>
     </Routes>
     </BrowserRouter>
     
    
     
    </div>
  );
}

export default App ;
