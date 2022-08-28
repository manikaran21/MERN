import {useParams,useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react' ;
import axios from 'axios';

function BookId (props) {
   const navigate = useNavigate() ;
   const [details , setDetails] = useState({}) ;
   const url = "http://localhost:3000/Books" ;
   const { id } = useParams();
   useEffect(() => {
     axios.get(url).then(res => {
      res.data.forEach(item => {
         
         if(item.id == id){
            console.log(item) ;
            setDetails(item) ;
         }
      })
     })
   },[])
   const deletepost =(e) => {
      const delurl = url+`/${id}`;
      axios.delete(delurl).then(res => {});
      navigate("/manage") ;
      
   }

   return(
    <div>
    <h1>This is My Book </h1>
    {Object.keys(details).map((key, index) => {
        return (
          <div key={index}>
            <h2>
              {key}: {details[key]}
            </h2>

            
          </div>
        );
      })}
      <button id={id} onClick={deletepost}>Delete</button>
        
    </div>
   );
}


export default BookId ; 

