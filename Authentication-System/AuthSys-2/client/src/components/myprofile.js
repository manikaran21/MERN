import React , {useContext,useState , useEffect } from 'react' ;
import { useNavigate } from 'react-router-dom' ;
import { store } from '../App';
import axios from 'axios';

const Myprofile = () => {
    const navigate = useNavigate() ;
    const [token,setToken] = useContext(store) ;
    const [data,setData] = useState(null) ;
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/myprofile',{
             headers:{
                'x-token':token
             }
        }).then(res => setData(res.data)).catch(err => console.log(err)) ;
    },[]) ;
    if(!token){
        navigate('/login') ;
    }
  return (
    <div>
        {
            data && <h1> Myprofile - { data.name }</h1>
        }
    </div>
  )
}

export default Myprofile ;