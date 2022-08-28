import {useState} from 'react' ;
import axios from 'axios' ;

export default function AddBook(){


    const [title,setTitle] = useState("") ;
    const url = "http://localhost:3000/Books" ;
    function handle(e){
      setTitle(e.target.value) ;
    }
    function addBook(e){
       e.preventDefault() ;
       axios.post(url,{
           title:title
       }).then(res => {}) ;
       setTitle("");
    }
    return(
        <div>
            <h1>This is AddBook page</h1>
            <form onSubmit={addBook}>
                <input required type ="text" placeholder="title of the book" value={title} onChange={handle}/>
                <button>ADD</button>
            </form>
        </div>
    );

}