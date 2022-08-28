import { Link } from 'react-router-dom' ;

export default function Navbar (){
   return(
       <div>      
               <Link to="/">Home</Link> &nbsp;&nbsp;
               <Link to="/addbook">Add Book</Link> &nbsp;&nbsp;
               <Link to="/manage">Manage</Link>
       </div>
   );
}