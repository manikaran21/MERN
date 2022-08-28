import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import FormPropsTextFields from './components/test';
import { Box } from '@mui/material';

function App() {
  return (
    <Box style={{maxWidth:"30rem",margin:"100px auto",border:"1px solid black",borderRadius:"20px",boxShadow:"0px 0px 7px grey"}}>
      <Typography variant='h4' align='center' sx={{margin:"20px"}} >Check Out</Typography>
      <Typography variant='h5' align='left' sx={{marginLeft:"30px"}}>Shipping Details</Typography>
      {/* <Grid container spacing={2}>
          <Grid item md={5} sx={{flexGrow:1}}>
          <TextField id="filled-basic" label="Filled" variant="filled" size='small' />
          </Grid>
          <Grid item md={5}>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          </Grid>

      </Grid> */}

      <FormPropsTextFields/>
     
    </Box>
  );
}

export default App;
