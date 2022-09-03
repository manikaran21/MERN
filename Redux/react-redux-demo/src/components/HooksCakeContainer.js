import React ,{ useState } from 'react' ;
import { useSelector , useDispatch } from 'react-redux' ;
import { buyCake } from '../redux/cake/cakeActions';
function HooksCakeContainer() {
    const [number ,setNumber] = useState(1) ;
    const numOfCakes = useSelector(state => state.numOfCakes) ;
    const dispatch = useDispatch() ;
  
    return (
    <div>
      <h1>Num of cakes - {numOfCakes}</h1>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
      <br/><br/><button onClick={()=> dispatch(buyCake(number))}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer ;