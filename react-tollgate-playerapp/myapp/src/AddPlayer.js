import {useState} from 'react' ;
import axios from 'axios' ;
import { Formik, Form, Field ,useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { TextField ,Box } from '@mui/material';


const playersSchema = yup.object({
  name:yup.string("enter the name ")
  .required(" name is required") ,
  country:yup.string("enter the country ")
  .required(" country is required") ,
  matchesPlayed:yup.number("enter the matches played")
  .required("matches played is required")
  
    
   
}) ;

export default function AddPlayer(){


    
    const url = "http://localhost:3000/players" ;


    const details = useFormik({
      initialValues:{
          name:"",
          country:"" ,
          matchesPlayed:0
      } ,
      validationSchema:playersSchema ,
      onSubmit : (values, {resetForm}) => {
           axios.post(url,values).then(res => console.log(res.data)) ;
           resetForm({values:''})
        }
    }) ;

   
    return(
        <div>
            <h1>This is Add Player page</h1>
            <Box component="form" sx={{ p: 2, border: '1px solid grey' }} >
  <div>
<TextField id="outlined-basic" label="Name *" variant="outlined" 
placeholder='enter the name' name="name" value={details.values.name}
onChange={details.handleChange}
error={details.touched.name && Boolean(details.errors.name)}/>
<br></br>
<br></br>
<TextField id="outlined-basic" label="Country *" variant="outlined" 
placeholder='enter the country' name="country" value={details.values.country}
onChange={details.handleChange}
error={details.touched.country && Boolean(details.errors.country)}/>
<br></br>
<br></br>
<TextField id="outlined-basic" label="Matches Played *" variant="outlined" 
placeholder='enter the matches' name="matchesPlayed" value={details.values.matchesPlayed}
onChange={details.handleChange}
error={details.touched.matchesPlayed && Boolean(details.errors.matchesPlayed)}/>









</div>
<br></br>













<Button variant="contained" onClick={details.handleSubmit}>Next</Button>
</Box>
            
        </div>
    );

}







