import {useParams,useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react' ;
import axios from 'axios';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
     fontSize: 14,
   },
 }));
 
 const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
     backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   '&:last-child td, &:last-child th': {
     border: 0,
   },
 }));

function ShowPlayer(props) {
   const [players , setPlayers] = useState([]) ;
   const url = "http://localhost:3000/players" ;
   
   useEffect(()=> {
      axios.get(url).then(res => {
         console.log(res.data) ;
         setPlayers(res.data) ;
      })
   } , [])
   return(
    <div>
    <h1>This is Players Page </h1>
    <br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>Matches Played</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {players.map((item,index)=> <StyledTableRow key={index}>
          <StyledTableCell>{item.id}</StyledTableCell>
          <StyledTableCell>{item.name}</StyledTableCell>
          <StyledTableCell>{item.country}</StyledTableCell>
          <StyledTableCell>{item.matchesPlayed}</StyledTableCell>
          </StyledTableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
   );
}


export default ShowPlayer ; 



/*players.map((item,index) => <li key = {index}>{Object.keys(item).map((key, index) => {
    return (
      <div key={index} style={{display:"inline"}}>

          {key}: {item[key]} &nbsp;&nbsp;&nbsp;
        

        
      </div>
    );
  })} <br/></li>)*/




