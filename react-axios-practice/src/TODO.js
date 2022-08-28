import React , {  useState , useEffect } from 'react' ;
import axios from 'axios' ;
import AllTodos from './AllTodos';

export default function TODO (){
    const[data ,setData] = useState("");
    const[todos,setTodos] = useState([]);
    const url = "http://localhost:3000/Todos" ;
    
    


    const handle = (e) => {
        setData(e.target.value);
    }
    function AddTodo (e) {
        e.preventDefault();
        
        axios.post(url,{
            todo:data

        }).then(res => {
            const newtodo = [...todos ,res.data];
            setTodos(newtodo) ;
        })
        setData("");
        
    }
    useEffect(() => {
        window.onload = () => {
        console.log("hello world") ;
        axios.get(url).then(res => {
        setTodos(res.data) ;
       })
       }
    });
   
    return(
        <div >
            <h1>Hello Todo !</h1>
            <form onSubmit={AddTodo}>
                <input type="text" value={data} onChange={handle} required/>
                <button>ADD TODO</button>
            </form>
            <AllTodos todos={todos}/>
            
        </div>
    );
}