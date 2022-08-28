import axios from 'axios' ;
import { useState , useEffect } from 'react' ;
import { useNavigate ,Routes,Route,Link,BrowserRouter,Outlet} from 'react-router-dom' ;
import BookId from './bookId';
import React from 'react';
import App from './App';




export default function ManageBook(){
    
    
    const [books,setBooks] = useState([]) ;
    const url = "http://localhost:3000/Books" ;
    
    useEffect(()=>{
        axios.get(url).then(res => setBooks(res.data)) ;
    },[])
    const bookid = (e) => {
       

    }
    return(
        <div>
            <h1>This is ManageBook page</h1>
            {books.map((item, index) => <li key={index}>{item.title}<Link to={`/manage/${item.id}`}><button id={item.id} onClick={bookid}>Manage</button></Link></li>)}
        <Outlet/>  
        </div>
    );

}

