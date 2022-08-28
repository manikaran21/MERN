import Header from "./components/Header";
import React, { useEffect } from "react";
import {Routes,Route} from 'react-router-dom' ;
import Auth from './components/Auth' ;
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs' ;
import BlogDetail from './components/BlogDetail' ;
import AddBlog from './components/AddBlog' ;
import { useSelector , useDispatch} from 'react-redux' ;
import { authActions } from "./store";
function App() {
  const dispatch = useDispatch() ;
  const isLoggedIn = useSelector(state => state.isLoggedIn) ; ;
  console.log(isLoggedIn) ;
  useEffect(() => {
    if(localStorage.getItem("userId")){
       dispatch(authActions.login()) ;
    }
  } ,[dispatch]) ; // while re rendering the body 
  return (
    <React.Fragment>{/* Parent element of all of the elements inside that*/}
    <header>{/* React.Fragment consists header tags */}
      <Header/>
    </header>
    <main>{/* Inside main we can add routing functionality */}
     <Routes>
      { !isLoggedIn ?  <Route path='/auth' element={<Auth/>} /> :
      <>
     <Route path='/blogs' element={<Blogs/>} />
     <Route path='/blogs/add' element={<AddBlog/>} />
     <Route path='/myBlogs' element={<UserBlogs/>} />
     <Route path='/myBlogs/:id' element={<BlogDetail/>} />
     </>
    
     }
     </Routes> 
    </main>
    </React.Fragment>
  );
}

export default App;
