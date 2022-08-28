import { ListItem } from '@mui/material'
import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Headermini from "../../components/headermini/Headermini";
import { useContext } from 'react'
import Cards from '../../components/card/Cards'
import useFetch from '../../components/hooks/useFetch'
import { AuthContext } from '../../context/AuthContext'
import Footer from '../../components/footer/Footer';

function Manage() {
    const {user}=useContext(AuthContext)
    const {data,loading}=useFetch(`/users/${user._id}`)
    // console.log(user)
    console.log(data)
    // const cardsData=data.booking.map((ele)=>{
    //   return <Cards />
    //  })

  return (
  <div>
    <Navbar/>
    <Headermini/>
    <div style={{display:"flex",flexWrap:"wrap",margin:"0px auto",justifyContent:"center"}}>
        {data.booking &&  data.booking.map(e => e.map(f => <Cards item={f} owner={"62af45c8aeedd431d1b09c15"}/>))}
    </div>
    <Footer/>
  </div>
 
  )
}

export default Manage
