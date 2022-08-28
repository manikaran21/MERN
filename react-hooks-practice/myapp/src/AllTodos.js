import axios from "axios";


export default function AllTodos({todos}){
  const url = "http://localhost:3000/Todos" ;
  function Remove(e){
    axios.delete(`${url}`+"/"+e.target.id).then(()=>{ })
    document.getElementById(e.target.id).parentElement.remove();
  }
  return(
    <div>
      {todos.map((item,index) => <li key={index} >{item.todo} <button id={item.id} onClick={Remove}>Remove</button></li>)}
    </div>
  );
}