import React, {  } from 'react';
import Button from '@mui/material/Button';
import { TextField ,Box } from '@mui/material';
import {useFormik} from 'formik' ;
import * as yup from 'yup' ;


const detailsSchema = yup.object({
    firstName:yup.string("enter the firstname ")
    .required("first name is required")
    .min(8 ,"minimum of 8 characters") ,
    lastName:yup.string("enter the lastname ")
    .required("last name is required")
    .min(8 ,"minimum of 8 characters") ,
    addressLine1:yup.string("enter the address line 1 ")
    .required("address line 1 is required")
    .min(32 ,"minimum of 32 characters") ,
    addressLine2:yup.string("enter the address line 2 ") ,
    city:yup.string("enter the lastname ")
    .required("city name is required") ,
    state:yup.string("enter the state ") ,
    pinCode:yup.number().
    test('len', 'Must be exactly 6 characters', (val) => { if(val) return val.toString().length === 6; }) ,
    country:yup.string("enter the lastname ")
    .required("city name is required") ,
      
     
}) ;


function UserForm () {

    const details = useFormik({
        initialValues:{
            firstName:""
        } ,
        validationSchema:detailsSchema ,
        onSubmit : (values) => { console.log(values)}
    }) ;
    return(
    <div className='user-details'>
       
    <Box component="form" sx={{ p: 2, border: '1px solid grey' }} >
        <div>
            <h1>Checkout</h1>
        </div>
        <div>
            <h4>shipping details</h4>
        </div>
    
    
        <div>
    <TextField id="outlined-basic" label="First Name *" variant="outlined" 
    placeholder='enter first name' name="firstName" value={details.values.firstName}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.firstName)}/>
   
   <TextField id="outlined-basic" label="Last Name *" variant="outlined" 
    placeholder='enter last name' name="lastName" value={details.values.lastName}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.lastName)}/>
    </div>
    <br></br>
<div>
<TextField id="outlined-basic" label=" Address Line 1 *" variant="outlined" 
    placeholder='enter address line 1 ' name="addressLine1" value={details.values.addressLine1}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.addressLine1)}/>
</div>
<br></br>
<div>
<TextField id="outlined-basic" label=" Address Line 2 " variant="outlined" 
    placeholder='enter address line 2 ' name="addressLine2" value={details.values.addressLine2}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.addressLine2)}/>
</div>
<br></br>
<div>
<TextField id="outlined-basic" label=" City * " variant="outlined" 
    placeholder='enter city ' name="city" value={details.values.city}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.city)}/> 

<TextField id="outlined-basic" label=" State " variant="outlined" 
    placeholder='enter state ' name="state" value={details.values.state}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.state)}/>
</div>
<br></br>
<div>
<TextField id="outlined-basic" label=" Pin Code " variant="outlined" 
    placeholder='enter pin code ' name="pinCode" value={details.values.pinCode}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.pinCode)}/>



<TextField id="outlined-basic" label=" Country * " variant="outlined" 
    placeholder='enter country ' name="country" value={details.values.country}
    onChange={details.handleChange}
    error={details.touched.firstName && Boolean(details.errors.country)}/>

    
</div>
<br></br>













    <Button variant="contained" onClick={details.handleSubmit}>Next</Button>
    </Box>
    
    </div>
    );

}

export default UserForm;