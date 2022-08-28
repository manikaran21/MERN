import axios from 'axios' ;
import { useState ,useEffect} from 'react' ;
export default function HomePage(){
    const [books,setBooks] = useState([]) ;
    const url = "http://localhost:3000/Books" ;
    useEffect(()=>{
        axios.get(url).then(res => setBooks(res.data)) ;
    },[])
    return(
        <div>
            <h1>This is home page</h1>
            {books.map((item, index) => <li key={index}>{item.title}</li>)}
        </div>
    );

}
