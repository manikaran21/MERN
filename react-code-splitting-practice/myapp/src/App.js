import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom' ;
import {BrowserRouter  , Route , Routes , Outlet} from 'react-router-dom' ;
import Navbar from './Navbar';

import HomePage from './HomePage';
import BookId from './bookId';
import React , { Suspense, useState } from 'react';

const AddBook = React.lazy(() => import ('./AddBook') ) ;
const ManageBook = React.lazy(() => import ('./ManageBook') ) ;

function App() {
  
  return (
    <div className="App">
      
      <h1>hello world</h1>
     
     <BrowserRouter id="myroute">
     <Suspense fallback={<div>Loading ...</div>}>
     <Navbar/>
     <Routes>
       <Route path="/" element = { <HomePage/> } />
       <Route path="/addbook" element = { <AddBook/> } />
       <Route path="/manage" element = { <ManageBook/> }>  </Route>
       <Route path="/manage/:id" element ={<BookId/>}></Route>
     </Routes>
     </Suspense>
     </BrowserRouter>
     
     
     
    </div>
  );
}

export default App ;
